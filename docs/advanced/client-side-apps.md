---
id: client-side-apps
title: Client-side applications
image: /img/client-scheme.png
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Since 2.1.0, the read endpoints of the API answer cross-origin requests, so a browser **can** call them directly. What follows is about which credential you should send.

The access token you get from [your account page](https://trefle.io/profile) needs to be kept secret: anything shipped in client-side code is readable by anyone who opens the developer tools, and a leaked token is used against your quota. For a throwaway prototype or a public demo that trade-off may be acceptable; for anything you maintain, request a **JWT bound to your origin** instead. It is scoped to your website and can be rotated without touching your account token.

![client workflow](/img/client-scheme.png)

The claim call takes your secret access token and the origin the client-side requests will come from (scheme, host and port, such as `https://YOUR-WEBSITE.example`), and returns the JWT to use in the browser.

:::caution Claim the JWT from your backend, not from the browser
`POST /api/auth/claim` does accept cross-origin requests, but calling it from the browser would ship your secret access token to the client — which is exactly what the JWT exists to avoid. Make this call server-side.
:::

:::note What CORS covers
Read requests (`GET`, `HEAD`) anywhere under `/api`, plus the `POST /api/auth/claim` call above. Write endpoints — submitting corrections or reports — are deliberately left out and still need to go through your own backend. Responses also expose the `RateLimit-Limit`, `RateLimit-Remaining` and `RateLimit-Reset` headers, so client-side code can read its remaining quota. From 2.9.8, `Retry-After` on a `429` is exposed too, so a browser client can read how long to wait.
:::


Send your account token as a `Bearer` token and the origin in a JSON body. The `ip` field is optional (see below).

<Tabs
  groupId="supports"
  defaultValue="curl"
  values={[
    {label: 'CURL', value: 'curl'},
    {label: 'NodeJS', value: 'node'},
    {label: 'Python', value: 'python'},
  ]}
>

<TabItem value="curl">

In your terminal:

```bash
curl -X POST 'https://trefle.io/api/auth/claim' \
  -H 'Authorization: Bearer YOUR_TREFLE_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"origin": "https://YOUR-WEBSITE.example", "ip": "12.34.56.78"}'
```

</TabItem>
<TabItem value="node">

Node 18 and later ship `fetch`, so no library is needed.

```js
// Run this on your server, never in the browser.
const params = {
  origin: 'https://YOUR-WEBSITE.example',
  ip: 'THE-WEBSITE-USER-IP', // optional
};

(async () => {
  const response = await fetch('https://trefle.io/api/auth/claim', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.TREFLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const json = await response.json();
  console.log(json);
})();
```

</TabItem>
<TabItem value="python">

```python
import os
import requests

r = requests.post(
    'https://trefle.io/api/auth/claim',
    headers={'Authorization': f"Bearer {os.environ['TREFLE_TOKEN']}"},
    json={'origin': 'https://YOUR-WEBSITE.example', 'ip': 'THE-WEBSITE-USER-IP'},
)
print(r.json())
```

</TabItem>
</Tabs>

And we get:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMDYsIm9yaWdpbiI6Imh0dHBzOi8vWU9VUi1XRUJTSVRFLmV4YW1wbGUiLCJleHAiOjE3OTE5OTQ0MDB9.signature",
  "expires_at": "2026-10-14T20:00:00Z",
  "expiration": "10-14-2026 20:00"
}
```

Read `expires_at`: an ISO 8601 timestamp in UTC. `expiration` holds the same instant in an older `MM-DD-YYYY HH:MM` format with no time zone. It is deprecated and kept only for existing clients.

In the browser, send the JWT the way you would send the account token, as the `token` parameter or in an `Authorization: Bearer` header. The `origin` you claimed must match the page's origin exactly, or the API answers `401`.

:::note Before 2.9.8
`Authorization: Bearer` on this endpoint and the `expires_at` field arrive with API 2.9.8. Earlier versions answer `422` to the Bearer form and read the account token from a `token` parameter instead (`POST /api/auth/claim?token=YOUR_TREFLE_TOKEN&origin=…`), which 2.9.8 still accepts.
:::

A JWT cannot claim another JWT: send your account token, or the call answers `401`.

## What the JWT protects, and what it does not

A JWT is a bearer token valid for **24 hours**. Whoever holds it can use it until it expires.

- **The origin check only applies when the browser sends an `Origin` header.** Browsers add it to cross-origin requests, so a JWT copied into another website is refused. A script, a mobile app or `curl` sends no `Origin`, and the API accepts the JWT from them. Binding an `ip` at claim time narrows that down: the JWT is then refused from any other address. This is deliberate and will stay so: refusing every request without an `Origin` would also refuse server-side rendering and the clients that already rely on it, while the JWT expires within 24 hours and spends its owner's quota.
- **Never embed your account token** in a web page, a browser extension or a mobile app. Unlike a JWT it does not expire, and anyone who extracts it can claim JWTs of their own.
- **Mobile apps** send no `Origin`, so an origin-bound JWT protects nothing there. Have the app call your own backend, and let the backend call Trefle with the account token.
- **Rate limit.** Since 2.9.8, requests made with a JWT count against the account that claimed it: the account token and every JWT it claimed share one bucket per IP address. Claiming more JWTs does not raise your quota. See [Rate limiting](/docs/guides/getting-started#rate-limiting).

Renew the JWT from your backend before `expires_at`, and hand the new one to the page.

:::tip About the user IP
Putting the user remote IP in the claim API call is optional, but it provides an additional security layer. We don't keep or store this information.
:::

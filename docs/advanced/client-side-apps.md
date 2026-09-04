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

The claim call takes your secret access token and the URL of the website the client-side requests will come from, and returns the JWT to use in the browser.

:::caution Claim the JWT from your backend, not from the browser
`POST /api/auth/claim` does accept cross-origin requests, but calling it from the browser would ship your secret access token to the client — which is exactly what the JWT exists to avoid. Make this call server-side.
:::

:::note What CORS covers
Read requests (`GET`, `HEAD`) anywhere under `/api`, plus the `POST /api/auth/claim` call above. Write endpoints — submitting corrections or reports — are deliberately left out and still need to go through your own backend. Responses also expose the `RateLimit-Limit`, `RateLimit-Remaining` and `RateLimit-Reset` headers, so client-side code can read its remaining quota.
:::


<Tabs
  groupId="supports"
  defaultValue="curl"
  values={[
    {label: 'CURL', value: 'curl'},
    {label: 'NodeJS', value: 'node'},
  ]}
>

<TabItem value="curl">

In your terminal:

```bash
curl -X POST 'https://trefle.io/api/auth/claim?token=YOUR_TREFLE_TOKEN&origin=YOUR-WEBSITE-URL&ip=12.34.56.78"'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require('node-fetch');

// The parameters for our POST request
const params = {
  origin: 'YOUR-WEBSITE-URL',
  ip: 'THE-WEBSITE-USER-IP',
  token: 'YOUR_TREFLE_TOKEN'
}

(async () => {
  const response = await fetch(
    'https://trefle.io/api/auth/claim', {
      method: 'post',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' }
    });
  const json = await response.json();
  console.log(json);
})();
```

</TabItem>
</Tabs>


And we get:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMDYsIm9yaWdpbiI6IllPVVItV0VCU0lURS1VUkwiLCJpcCI6IlRIRS1XRUJTSVRFLVVTRVItSVAiLCJleHAiOjE1OTQ2NDIxNDh9.Vd2d3UK7zdNWZLBOn8y50NcUKuF8xFZgh6p7EB4fhVw",
  "expiration": "07-13-2020 14:09"
}
```

You can then use this token directly from the browser. It can't be used from another origin, will expire and only works for your website.

:::tip About the user IP
Putting the user remote IP in the claim API call is optional, but it provides an additional security layer. We don't keep or store this information.
:::

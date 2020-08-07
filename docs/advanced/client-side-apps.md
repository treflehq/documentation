---
id: client-side-apps
title: Client-side applications
image: /img/client-scheme.png
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The access token you get from [your account page](https://trefle.io/profile) allow you to makes queries on the Trefle API, but you token needs to be kept secret, so **you can't make queries from the browser as the user on your website will see the access token**, and could use it for his personal uses.

![client workflow](/img/client-scheme.png)

If you need to perform client-side requests, you will have to request a client-side token from you backend, and get a JWT token in return. This token will be usable on the client side. This call need you secret access token, and the url of the website the client side requests will come from.

:::info
As this is a **POST** request, it can't be done directly from the browser.
:::


<Tabs
  groupId="supports"
  defaultValue="browser"
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


And we got:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMDYsIm9yaWdpbiI6IllPVVItV0VCU0lURS1VUkwiLCJpcCI6IlRIRS1XRUJTSVRFLVVTRVItSVAiLCJleHAiOjE1OTQ2NDIxNDh9.Vd2d3UK7zdNWZLBOn8y50NcUKuF8xFZgh6p7EB4fhVw",
  "expiration": "07-13-2020 14:09"
}
```

You can then use this token directly from the browser. It can't be used from another origin, will expire and only works for your website.

:::tip About the user IP
Putting the user remote IP in the claim API call is optionnal, but it provides an additional security layer. We don't keep or store this information.
:::

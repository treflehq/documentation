---
id: getting-started
title: Getting started
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


### Introduction

This is the Trefle API documentation. The Trefle API aims to deliver all plants informations under an accessible interface.

All API access is over HTTPS, and accessed from [https://trefle.io](https://trefle.io). All data is sent and received as JSON.

### What You Need

In order to make queries, you'll need to create an account and get your personal access token first.

:::note
Your access token will allow you to makes queries on the Trefle API. Keep it private.
:::

1. Create an account on [trefle.io](https://trefle.io/users/sign_up)
2. Confirm your email address
3. Login on your account
4. Grab your **Trefle access token**

### Make your first query

For the first examples, we will give you the choice between:
- **Using your web browser**, which is the simplest, but will be limited when we'll need to code a bit.
- **Using your terminal**, with `curl`
- **Using javascipt**, with NodeJS and the [`node-fetch`](https://github.com/node-fetch/node-fetch) library (install it with `yarn add node-fetch`).

We will first try to list all the plants.

<Tabs
  groupId="supports"
  defaultValue="browser"
  values={[
    {label: 'Browser', value: 'browser'},
    {label: 'CURL', value: 'curl'},
    {label: 'NodeJS', value: 'node'},
  ]}
>
<TabItem value="browser">

Open your browser and navigate to

[`https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN`](https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN)

</TabItem>
<TabItem value="curl">

In your terminal:

```bash
curl 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN'
```

</TabItem>
<TabItem value="node">

With the [node-fetch](https://github.com/node-fetch/node-fetch) library, that will be used in the next examples.

```js
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN');
  const json = await response.json();
  console.log(json);
})();
```

<details>
<summary>Or with the native https node library</summary>

```js
const https = require('https');

https.get('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN', (resp)
  => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
```

</details>

</TabItem>
</Tabs>


It return a big JSON response like this:

```json
{
    "data": [
        {
            "author": "Schltr.",
            "bibliography": "Repert. Spec. Nov. Regni Veg. 16: 358 (1920)",
            "common_name": null,
            "family": "Orchidaceae",
            "family_common_name": null,
            "genus": "Aa",
            "genus_id": 14887,
            "id": 834556,
            "links": {
                "genus": "/api/v1/genus/aa",
                "plant": "/api/v1/plants/aa-achalensis",
                "self": "/api/v1/species/aa-achalensis"
            },
            "plant_id": 423071,
            "rank": "species",
            "scientific_name": "Aa achalensis",
            "slug": "aa-achalensis",
            "status": "accepted",
            "synonyms": [],
            "year": 1920
        },
        {
            "author": "Rchb.f.",
            "bibliography": "Xenia Orchid. 1: 18 (1854)",
            "common_name": null,
            "family": "Orchidaceae",
            "family_common_name": null,
            "genus": "Aa",
            "genus_id": 14887,
            "id": 834557,
            "links": {
                "genus": "/api/v1/genus/aa",
                "plant": "/api/v1/plants/aa-argyrolepis",
                "self": "/api/v1/species/aa-argyrolepis"
            },
            "plant_id": 423072,
            "rank": "species",
            "scientific_name": "Aa argyrolepis",
            "slug": "aa-argyrolepis",
            "status": "accepted",
            "synonyms": [
                "Altensteinia argyrolepis"
            ],
            "year": 1854
        },  // ... 28 more items
    ],
    "links": {
        "first": "/api/v1/species?page=1",
        "last": "/api/v1/species?page=20865",
        "next": "/api/v1/species?page=2",
        "self": "/api/v1/species"
    },
    "meta": {
        "total": 417293
    }
}
```

### Rate limiting

In order to allow all users to use the API in good conditions, **a limit of 60 requests per minute is applied** (sponsors get a higher limit). If this limit is a limiting factor for your application (and you have valid reasons), feel free to contact us.

Every `/api` response carries three headers so you can self-regulate before hitting the limit:

| Header | Meaning |
| --- | --- |
| `RateLimit-Limit` | The number of requests allowed in the current window. |
| `RateLimit-Remaining` | The number of requests you have left in the current window. |
| `RateLimit-Reset` | A unix timestamp for when the current window resets. |

Once you run out, further requests get a `429 Too Many Requests` response (with the same three headers, `RateLimit-Remaining` at `0`) until the window resets.

### The Trefle structure

Before going further, we need to know a bit how data is organized in the trefle API.

The whole API structure is defined by the following classification:

```text
Kingdom
  -> Subkingdom
    -> Division
      -> Division class
        -> Division order
          -> Family
            -> Genus
              -> Plant
                -> Species
```

For example, the [balsam fir](https://en.wikipedia.org/wiki/Abies_balsamea) hierarchy is:

```text
Kingdom -> Plantae – (Plants)
Subkingdom -> Tracheobionta – (Vascular plants)
Division -> Coniferophyta – (Conifers)
Class -> Pinopsida
Order -> Pinales
Family -> Pinaceae – (Pine family)
Genus -> Abies
Plant -> Abies balsamea
Species -> Abies balsamea
```

### Plant and Species

For commodity reasons, we added a `Plant` level between Genus and Species. A plant groups a species together with all of its infraspecific taxa — the subspecies, varieties, forms and hybrids that botanists distinguish below the species level.

Each plant has one **main species** (the species itself) and, when they exist, several other records below it. Their `rank` field tells you which is which: `species`, `ssp`, `var`, `subvar`, `form` or `hybrid`.

For example, our [balsam fir](https://en.wikipedia.org/wiki/Abies_balsamea) has:

- One main species (which is our "plant"): `Abies balsamea`
- Two varieties: `Abies balsamea var. balsamea` and `Abies balsamea var. phanerolepis`

:::note A note on the vocabulary
`Plant` is a convenience layer, not a botanical rank. What we call a *plant* is what a botanist calls a **species**, and what we call a *species* is really a **taxon** whose rank is given by the `rank` field — a species or something below it.

Two consequences worth knowing:

- A `plant` and its main `species` describe the same organism under two different endpoints. Use `/plants` when you want one entry per plant, `/species` when you need every taxon.
- Closely named taxa are not necessarily related in our tree. `Abies lasiocarpa` is an accepted species of its own, not a subspecies of `Abies balsamea`, even though older literature combined them. Follow `links` rather than the name to navigate the hierarchy.
:::


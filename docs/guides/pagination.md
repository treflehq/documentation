---
id: pagination
title: Pagination
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


When you query a collection (ex: `/api/v1/plants`), you'll notice that you have only 20 items returned.

That's because results are paginated. You have links for the next page in the `links` attribute of the JSON response.

You can specify the page you want with the `page` parameter. To query the second page, we have add the `page` parameter as follows: `page=2`.

Let's query the second page of the plants.

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

[`https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2`](https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2)

</TabItem>
<TabItem value="curl">

In your terminal:

```bash
curl 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2');
  const json = await response.json();
  console.log(json);
})();
```

</TabItem>
</Tabs>

You now got the second page of the plants.


```json
{
    "data": [
        {
            "author": "Schltr.",
            "bibliography": "Repert. Spec. Nov. Regni Veg. Beih. 8: 38 (1921)",
            "common_name": null,
            "family": "Orchidaceae",
            "family_common_name": null,
            "genus": "Aa",
            "genus_id": 14887,
            "id": 834623,
            "links": {
                "genus": "/api/v1/genus/aa",
                "plant": "/api/v1/plants/aa-riobambae",
                "self": "/api/v1/species/aa-riobambae"
            },
            "plant_id": 423099,
            "rank": "species",
            "scientific_name": "Aa riobambae",
            "slug": "aa-riobambae",
            "status": "accepted",
            "synonyms": [
                "Altensteinia riobambae"
            ],
            "year": 1921
        },
        {
            "author": "Ames",
            "bibliography": "Proc. Biol. Soc. Washington 35: 81 (1922)",
            "common_name": null,
            "family": "Orchidaceae",
            "family_common_name": null,
            "genus": "Aa",
            "genus_id": 14887,
            "id": 834625,
            "links": {
                "genus": "/api/v1/genus/aa",
                "plant": "/api/v1/plants/aa-rosei",
                "self": "/api/v1/species/aa-rosei"
            },
            "plant_id": 423100,
            "rank": "species",
            "scientific_name": "Aa rosei",
            "slug": "aa-rosei",
            "status": "accepted",
            "synonyms": [
                "Altensteinia rosei"
            ],
            "year": 1922
        },  // ... 18 more items
    ],
    "links": {
        "first": "/api/v1/species?page=1",
        "last": "/api/v1/species?page=20865",
        "next": "/api/v1/species?page=3",
        "prev": "/api/v1/species?page=1",
        "self": "/api/v1/species?page=2"
    },
    "meta": {
        "total": 417293
    }}
```

## Changing the page size

Collection endpoints such as `/api/v1/plants` and `/api/v1/species` always return
20 items per page. The page size is fixed and there is no parameter to change it.

The search endpoints are the exception: `/api/v1/plants/search` and
`/api/v1/species/search` accept a `limit` parameter, which also defaults to 20.

```bash
curl -g 'https://trefle.io/api/v1/plants/search?token=YOUR_TREFLE_TOKEN&q=coconut&limit=5'
```

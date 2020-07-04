---
id: filtering
title: Filtering
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


As you may have seen, there is a lot of plants here. In order to find what you're looking for, you can add filters to your query. The full list of available filters are in the reference.

Let's query only plants with the "Beach Strawberry" common name:.

https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&common_name=beach%20strawberry


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

[`https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&common_name=beach%20strawberry`](https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&common_name=beach%20strawberry)

</TabItem>
<TabItem value="curl">

In your terminal:

```bash
curl 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&common_name=beach%20strawberry'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&common_name=beach%20strawberry');
  const json = await response.json();
  console.log(json);
})();
```

</TabItem>
</Tabs>


And we got:


```json
{
    "data": [
        {
            "author": "(L.) Mill.",
            "bibliography": "Gard. Dict. ed. 8 : n.° 4 (1768)",
            "common_name": "beach strawberry",
            "complete_data": true,
            "family_common_name": "Rose family",
            "genus_id": 2585,
            "id": 131974,
            "links": {
                "genus": "/api/v1/genus/fragaria",
                "self": "/api/v1/plants/fragaria-chiloensis",
                "species": "/api/v1/plants/fragaria-chiloensis/species"
            },
            "main_species_id": 137607,
            "observations": "Bolivia, C. & S. Chile to S. Argentina",
            "scientific_name": "Fragaria chiloensis",
            "slug": "fragaria-chiloensis",
            "vegetable": false,
            "vegetable_category": null,
            "year": 1768
        }
    ],
    "links": {
        "first": "/api/v1/plants?common_name=beach+strawberry&page=1",
        "last": "/api/v1/plants?common_name=beach+strawberry&page=1",
        "self": "/api/v1/plants?common_name=beach+strawberry"
    },
    "meta": {
        "total": 1
    }
}
```

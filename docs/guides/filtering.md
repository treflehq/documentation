---
id: filtering
title: Filtering
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


As you may have seen, there is a lot of plants here. In order to find what you're looking for, you can add filters to your query. The full list of available filters are in the reference.

:::tip In short
We can filter on one or several values, with the `filter[FIELD]=value1,value2,value3...` parameter, or on a range of values, with the `range[FIELD]=min,max` parameter.
:::

### Filter on a single value

Let's query only plants with the "Beach Strawberry" common name:.

https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[common_name]=beach%20strawberry


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

[`https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[common_name]=beach%20strawberry`](https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[common_name]=beach%20strawberry)

</TabItem>
<TabItem value="curl">

In your terminal:

```bash
curl 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[common_name]=beach%20strawberry'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[common_name]=beach%20strawberry');
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
            "image_url": null,
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
            "year": 1768
        }
    ],
    "links": {
        "first": "/api/v1/plants?filter%5Bcommon_name%5D=beach+strawberry&page=1",
        "last": "/api/v1/plants?filter%5Bcommon_name%5D=beach+strawberry&page=1",
        "self": "/api/v1/plants?filter%5Bcommon_name%5D=beach+strawberry"
    },
    "meta": {
        "total": 1
    }
}
```












### Filter on several values

Now, we can add more criterias by separating our values with a comma (`,`).

Let's query only species with edible roots **OR** leaves:

https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&filter[edible_part]=roots,leaves


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

[`https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&filter[edible_part]=roots,leaves`](https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&filter[edible_part]=roots,leaves)

</TabItem>
<TabItem value="curl">

In your terminal:

```bash
curl 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&filter[edible_part]=roots,leaves'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&filter[edible_part]=roots,leaves');
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
            "author": "L.",
            "bibliography": "Sp. pl. 1:219.  1753",
            "common_name": "lambsquarters",
            "family": "Amaranthaceae",
            "family_common_name": "Goosefoot family",
            "genus": "Chenopodium",
            "genus_id": 1690,
            "id": 119861,
            "image_url": "https://bs.floristic.org/image/o/7210dfc0c2a48bdde194bef37c7b7956974bc1b7",
            "links": {
                "genus": "/api/v1/genus/chenopodium",
                "plant": "/api/v1/plants/chenopodium-album",
                "self": "/api/v1/species/chenopodium-album"
            },
            "plant_id": 114228,
            "rank": "species",
            "scientific_name": "Chenopodium album",
            "slug": "chenopodium-album",
            "status": "accepted",
            "synonyms": [
                "Chenopodium album var. viride",
                "Chenopodium album var. candicans",
                "Chenopodium album var. album",
                "Chenopodium paucidentatum",
                "Chenopodium pedunculare",
                "Chenopodium album var. polymorphum"
            ],
            "year": 1753
        },
        {
            "author": "L.",
            "bibliography": "Sp. Pl.: 813 (1753)",
            "common_name": "chicory",
            "family": "Asteraceae",
            "family_common_name": "Aster family",
            "genus": "Cichorium",
            "genus_id": 1778,
            "id": 120546,
            "image_url": "https://bs.floristic.org/image/o/eb049be6b9186aed76ada3c8d3cd54d762842aa8",
            "links": {
                "genus": "/api/v1/genus/cichorium",
                "plant": "/api/v1/plants/cichorium-intybus",
                "self": "/api/v1/species/cichorium-intybus"
            },
            "plant_id": 114913,
            "rank": "species",
            "scientific_name": "Cichorium intybus",
            "slug": "cichorium-intybus",
            "status": "accepted",
            "synonyms": [
                "Cichorium divaricatum",
                "Cichorium cicorea",
                "Cichorium byzantinum",
                "Huernia verekeri var. stenensonii"
            ],
            "year": 1753
        },
        // ... 28 more items...
    ],
    "links": {
        "first": "/api/v1/species?filter%5Bedible_part%5D=roots%2Cleaves&page=1",
        "last": "/api/v1/species?filter%5Bedible_part%5D=roots%2Cleaves&page=4",
        "next": "/api/v1/species?filter%5Bedible_part%5D=roots%2Cleaves&page=2",
        "self": "/api/v1/species?filter%5Bedible_part%5D=roots%2Cleaves"
    },
    "meta": {
        "total": 80
    }
}
```











### Filter on ranges

Now we want to filter on a range of values.

Let's query only species with a minimum height **between** 5 **and** 20 centimeters:

https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&range[maximum_height_cm]=5,20

:::tip Minimum and maximum values

Filtering on ranges also allow to set only minimum or maximum values. For example:

- `/api/v1/species?range[maximum_height_cm]=5` only return species higher than 5 cm
- `/api/v1/species?range[maximum_height_cm]=,5` only return species lower than 5 cm
:::

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

[`https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&range[maximum_height_cm]=5,20`](https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&range[maximum_height_cm]=5,20)

</TabItem>
<TabItem value="curl">

In your terminal:

```bash
curl 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&range[maximum_height_cm]=5,20'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&range[maximum_height_cm]=5,20');
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
            "author": "L.",
            "bibliography": "Sp. Pl.: 767 (1753)",
            "common_name": "white clover",
            "family": "Fabaceae",
            "family_common_name": "Pea family",
            "genus": "Trifolium",
            "genus_id": 5044,
            "id": 189539,
            "image_url": "https://bs.floristic.org/image/o/c766ed84c547abac6021244bc0014d665ba7726f",
            "links": {
                "genus": "/api/v1/genus/trifolium",
                "plant": "/api/v1/plants/trifolium-repens",
                "self": "/api/v1/species/trifolium-repens"
            },
            "plant_id": 183906,
            "rank": "species",
            "scientific_name": "Trifolium repens",
            "slug": "trifolium-repens",
            "status": "accepted",
            "synonyms": [
                "Trifolium repens var. atropurpureum",
                "Amoria repens"
            ],
            "year": 1753
        },
        {
            "author": "L.",
            "bibliography": "Sp. Pl.: 112 (1753)",
            "common_name": "common plantain",
            "family": "Plantaginaceae",
            "family_common_name": "Plantain family",
            "genus": "Plantago",
            "genus_id": 5418,
            "id": 167892,
            "image_url": "https://bs.floristic.org/image/o/36c2225c7d24a897eaf055e99eac26b3f5ceffa3",
            "links": {
                "genus": "/api/v1/genus/plantago",
                "plant": "/api/v1/plants/plantago-major",
                "self": "/api/v1/species/plantago-major"
            },å
            "plant_id": 162259,
            "rank": "species",
            "scientific_name": "Plantago major",
            "slug": "plantago-major",
            "status": "accepted",
            "synonyms": [
                "Plantago major var. pilgeri",
                "Plantago major var. pachyphylla",
                "Plantago minima",
                "Plantago major var. scopulorum"
            ],
            "year": 1753
        },
        // ... 28 more items...
    ],
    "links": {
        "first": "/api/v1/species?page=1&range%5Bmaximum_height_cm%5D=5%2C20",
        "last": "/api/v1/species?page=11&range%5Bmaximum_height_cm%5D=5%2C20",
        "next": "/api/v1/species?page=2&range%5Bmaximum_height_cm%5D=5%2C20",
        "self": "/api/v1/species?range%5Bmaximum_height_cm%5D=5%2C20"
    },
    "meta": {
        "total": 218
    }
}
```









### Exclude null values

Sometimes we need to exclude results with null or empty values. For that, we can use the `filter_not[ATTRIBUTE]=null` parameter, which will exclude from the response all entries where `ATTRIBUTE` is `null`.

For example, if we want all edible plants, we can either:

- **Query all plants with edible roots, stem, leaves, flowers, fruits and seeds:**

```http
https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[edible_part]=roots,stem,leaves,flowers,fruits,seeds
```

- **Exclude all plants without edible parts:**

```http
https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter_not[edible_part]=null
```

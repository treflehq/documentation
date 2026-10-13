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

:::caution Using curl? Add the `-g` flag
`curl` treats `[` and `]` as globbing characters and fails with
`curl: (3) bad range in URL position` on any `filter[…]`, `range[…]` or
`order[…]` parameter. Quoting the URL does not help: pass `-g` (or
`--globoff`) to turn globbing off, as in the examples below.
:::

:::note The field you filter on may not be in the response
Lists return a light version of each record, so `filter[edible]=true` works on `/species` even
though `edible` is not part of the list payload. See
[List responses only carry a subset of the fields](/docs/advanced/plants-fields#list-responses-only-carry-a-subset-of-the-fields).
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
curl -g 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[common_name]=beach%20strawberry'
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
curl -g 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&filter[edible_part]=roots,leaves'
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

Let's query only species whose maximum height is **between** 5 **and** 20 centimeters:

https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&range[maximum_height_cm]=5,20

:::tip Open-ended ranges

Either bound can be left out:

- `/api/v1/species?range[maximum_height_cm]=5` returns species whose maximum height is at least 5 cm
- `/api/v1/species?range[maximum_height_cm]=,5` returns species whose maximum height is under 5 cm
:::

:::caution How the bounds are read today
The two kinds of endpoint do not treat the bounds the same way.

- On the database collections (`/api/v1/species`, `/api/v1/plants` and the nested lists such as `/api/v1/distributions/:zone/species`), the lower bound is **included** and the upper bound is **excluded**: `range[maximum_height_cm]=5,20` means *5 ≤ height &lt; 20*. Both bounds are read as integers, so `2.5` is read as `2`.
- On the search endpoints (`/api/v1/species/search`, `/api/v1/plants/search`), both bounds are **included**: `5,20` means *5 ≤ height ≤ 20*.

To include the upper value on a database collection, add one to it (`5,21`), or leave the bound open when the value you want is the top of the scale. A change making both bounds inclusive and accepting decimals on every endpoint is being worked on; this page will say so when it is live.
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
curl -g 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&range[maximum_height_cm]=5,20'
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
            },
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









### Combining filters: full-sun species under one metre, found in my country

Filters, ranges and the distribution lists combine freely, so one request can answer a practical question. Say you want the species recorded in France that grow in full sun and stay under one metre tall.

- The zone comes from the path. Distribution zones use the [WGSRPD](/docs/advanced/distributions) codes as slugs, lowercased: `fra` is France, `grb` Great Britain, `spa` Spain, `ger` Germany. `/api/v1/distributions/fra/species` lists every species recorded there.
- Full sun is `light` class 7 to 9 ([an Ellenberg class](/docs/advanced/plants-fields#ecological-indicator-values-light-humidity-soil), not a measurement). Since 9 is the top of the scale, `range[light]=7` says "7 or more" and avoids the excluded upper bound described above.
- Under one metre is `range[maximum_height_cm]=,100`.
- Add `filter[establishment]=native` to keep only species native to the zone, and drop it to include introduced ones.

```bash
curl -g 'https://trefle.io/api/v1/distributions/fra/species?token=YOUR_TREFLE_TOKEN&range[light]=7&range[maximum_height_cm]=,100&filter[establishment]=native'
```

```js
const fetch = require('node-fetch');

(async () => {
  const url = new URL('https://trefle.io/api/v1/distributions/fra/species');
  url.searchParams.set('token', 'YOUR_TREFLE_TOKEN');
  url.searchParams.set('range[light]', '7');
  url.searchParams.set('range[maximum_height_cm]', ',100');
  url.searchParams.set('filter[establishment]', 'native');
  const response = await fetch(url);
  const json = await response.json();
  console.log(json.meta.total, json.data.map((s) => s.scientific_name));
})();
```

```python
import requests

r = requests.get(
    'https://trefle.io/api/v1/distributions/fra/species',
    params={
        'token': 'YOUR_TREFLE_TOKEN',
        'range[light]': '7',
        'range[maximum_height_cm]': ',100',
        'filter[establishment]': 'native',
    },
)
print(r.json()['meta']['total'])
```

A range only matches species that have a value for the field, so species with no light class or no recorded height are left out. That is a sizeable share of the database: the ecological indicators were calibrated on the European flora, which is also why this example works best for a European zone. Switch `/species` for `/plants` to get one entry per plant instead of every subspecies and variety.

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

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
            "id": 263319,
            "common_name": "Beach strawberry",
            "slug": "fragaria-chiloensis",
            "scientific_name": "Fragaria chiloensis",
            "year": 1768,
            "bibliography": "Gard. Dict. ed. 8 : n.° 4 (1768)",
            "author": "(L.) Mill.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Rose family",
            "genus_id": 12147,
            "synonyms_count": 2,
            "completion_ratio": 39,
            "complete_data": false,
            "image_url": "https://bs.plantnet.org/image/o/8ee87e6f94833055db1c7df5fc07761852b7b1eb",
            "genus": "Fragaria",
            "family": "Rosaceae",
            "links": {
                "self": "/api/v1/species/fragaria-chiloensis",
                "plant": "/api/v1/plants/fragaria-chiloensis",
                "genus": "/api/v1/genus/fragaria",
                "synonyms": "/api/v1/species/fragaria-chiloensis/synonyms"
            }
        }
    ],
    "links": {
        "self": "/api/v1/plants?filter%5Bcommon_name%5D=beach+strawberry",
        "first": "/api/v1/plants?filter%5Bcommon_name%5D=beach+strawberry&page=1",
        "last": "/api/v1/plants?filter%5Bcommon_name%5D=beach+strawberry&page=1"
    },
    "meta": {
        "total": 1,
        "page": 1,
        "per_page": 20
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
                "self": "/api/v1/species/chenopodium-album",
                "synonyms": "/api/v1/species/chenopodium-album/synonyms"
            },
            "rank": "species",
            "scientific_name": "Chenopodium album",
            "slug": "chenopodium-album",
            "status": "accepted",
            "synonyms_count": 6,
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
                "self": "/api/v1/species/cichorium-intybus",
                "synonyms": "/api/v1/species/cichorium-intybus/synonyms"
            },
            "rank": "species",
            "scientific_name": "Cichorium intybus",
            "slug": "cichorium-intybus",
            "status": "accepted",
            "synonyms_count": 4,
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
- `/api/v1/species?range[maximum_height_cm]=,5` returns species whose maximum height is 5 cm or less
:::

:::note How the bounds are read
Since 2.9.7, every endpoint that takes `range[…]` (the collections, the nested lists such as `/api/v1/distributions/:zone/species`, and the search endpoints) reads the bounds the same way:

- **Both bounds are included**: `range[maximum_height_cm]=5,20` means *5 ≤ height ≤ 20*.
- **Decimals and negatives are accepted**: `range[ph_minimum]=5.5,6.5`, `range[minimum_temperature_deg_c]=,-15`.
- **Either side can be left open**, as shown above.
- On a field that holds whole numbers (`light`, `maximum_height_cm`…), a decimal bound is rounded towards the inside of the range: `range[light]=6.5,` keeps classes 7 and up.
- A bound that is not a number answers `400`. From 2.9.8, so does a range whose lower bound is greater than its upper bound (`range[ph_minimum]=7,5`); before, it returned an empty page.
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
                "self": "/api/v1/species/trifolium-repens",
                "synonyms": "/api/v1/species/trifolium-repens/synonyms"
            },
            "rank": "species",
            "scientific_name": "Trifolium repens",
            "slug": "trifolium-repens",
            "status": "accepted",
            "synonyms_count": 2,
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
                "self": "/api/v1/species/plantago-major",
                "synonyms": "/api/v1/species/plantago-major/synonyms"
            },
            "rank": "species",
            "scientific_name": "Plantago major",
            "slug": "plantago-major",
            "status": "accepted",
            "synonyms_count": 4,
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
- Full sun is `light` class 7 to 9 ([an Ellenberg class](/docs/advanced/plants-fields#ecological-indicator-values-light-humidity-soil), not a measurement). `range[light]=7` leaves the upper side open and means "7 or more", the same as `range[light]=7,9`.
- Under one metre is `range[maximum_height_cm]=,100`.
- Add `filter[establishment]=native` to keep only species native to the zone, and drop it to include introduced ones.

```bash
curl -g 'https://trefle.io/api/v1/distributions/fra/species?token=YOUR_TREFLE_TOKEN&range[light]=7&range[maximum_height_cm]=,100&filter[establishment]=native'
```

```js
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

### Accepted values and errors

The [reference](/reference) lists every filter key with the values it accepts. In short:

| Filter keys | Accepted values |
| --- | --- |
| `status` | `accepted`, `unknown`, `rejected`, `doubtful` |
| `rank` | `species`, `ssp`, `var`, `form`, `hybrid`, `subvar` |
| `establishment` (distribution lists) | `native`, `introduced`, `doubtful`, `absent`, `extinct` |
| `duration` | `annual`, `biennial`, `perennial` |
| `edible_part` | `roots`, `stem`, `leaves`, `flowers`, `fruits`, `seeds`, `tubers` |
| `flower_color`, `foliage_color`, `fruit_color` | `white`, `red`, `brown`, `orange`, `yellow`, `lime`, `green`, `cyan`, `blue`, `purple`, `magenta`, `grey`, `black` |
| `bloom_months`, `growth_months`, `fruit_months` | `jan`, `feb`, `mar`, `apr`, `may`, `jun`, `jul`, `aug`, `sep`, `oct`, `nov`, `dec` |
| `nitrogen_fixation` | `None`, `Low`, `Medium`, `High` (the data only holds `None` and `High`) |
| `ligneous_type` | `liana`, `subshrub`, `shrub`, `tree`, `parasite` |
| `foliage_texture` | `fine`, `medium`, `coarse` |
| `edible`, `vegetable`, `complete_data`, `leaf_retention`… (booleans) | `true` or `false` (also `yes`/`no`, `1`/`0`) |

`biological_type`, `sexuality`, `fruit_shape`, `inflorescence_type` and `toxicity` also have closed lists, given in the reference. Names (`common_name`, `scientific_name`, `genus_name`, `family_name`…) take free text.

From 2.9.8, a value outside the list answers `400` and names the accepted values. Before 2.9.8 it answered `200` with wrong or empty results: `filter[status]=foobar` returned the species with no status, and `filter[flower_color]=pink` returned nothing.

```bash
curl -g 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&filter[rank]=cultivar'
```

```json
{
  "error": true,
  "code": "bad_request",
  "message": "Invalid value for rank: \"cultivar\". Accepted values are: species, ssp, var, form, hybrid, subvar.",
  "messages": "Invalid value for rank: \"cultivar\". Accepted values are: species, ssp, var, form, hybrid, subvar."
}
```

With several comma-separated values, one unknown value is enough for the `400`. The same check applies to `filter_not[…]` and to the search endpoints. Names are matched without regard to case from 2.9.8, so `filter[status]=Accepted` works.

An unknown filter **key** answers `400` too, with the list of valid keys.

#### `filter` or `range`: numeric fields

Numeric fields (heights, temperatures, pH, the [ecological indicators](/docs/advanced/plants-fields#ecological-indicator-values-light-humidity-soil)…) are filtered with `range[…]`, not `filter[…]`. `filter[light]=9` answers `400`; from 2.9.8 the message points to the range. For an exact value, give the same bound twice:

```bash
curl -g 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&range[light]=9,9'
```

The range keys are listed in the reference. A few use the database column name, which differs from the field in the response:

| Response field | Range key |
| --- | --- |
| `growth.soil_humidity` | `ground_humidity` |
| `specifications.maximum_height.cm` | `maximum_height_cm` |
| `specifications.average_height.cm` | `average_height_cm` |
| `growth.minimum_root_depth.cm` | `minimum_root_depth_cm` |
| `growth.minimum_temperature.deg_c` | `minimum_temperature_deg_c` |
| `growth.minimum_precipitation.mm` | `minimum_precipitation_mm` |
| `growth.spread.cm`, `growth.row_spacing.cm` | `planting_spread_cm`, `planting_row_spacing_cm` |
| `growth.days_to_harvest` | `planting_days_to_harvest` |

So wet-ground species are `range[ground_humidity]=9,`, even though the value comes back as `soil_humidity`.

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

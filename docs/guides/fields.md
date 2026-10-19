---
id: fields
title: Choosing the fields
sidebar_label: Choosing the fields
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

List rows are light: a page of `/api/v1/species` gives names, rank and family, not the traits. Detail records are heavy: `/api/v1/species/:id` brings images, sources, synonyms and every distribution zone. From 2.9.8, the `fields` parameter lets you ask for exactly the keys you need, on both.

:::tip In short
`fields=scientific_name,common_name,growth` returns only those keys, plus `id` and `slug`, which always come.
:::

### The traits of a whole page in one call

On a list, any key of the species detail can be asked for, groups included. This returns the growth requirements of a page of edible species, without one detail call per row:

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

```bash
curl -g 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&filter[edible]=true&fields=scientific_name,common_name,growth'
```

</TabItem>
<TabItem value="node">

```js
(async () => {
  const params = new URLSearchParams({
    token: 'YOUR_TREFLE_TOKEN',
    'filter[edible]': 'true',
    fields: 'scientific_name,common_name,growth',
  });
  const response = await fetch(`https://trefle.io/api/v1/species?${params}`);
  const json = await response.json();
  console.log(json.data);
})();
```

</TabItem>
<TabItem value="python">

```python
import requests

response = requests.get(
    "https://trefle.io/api/v1/species",
    params={
        "token": "YOUR_TREFLE_TOKEN",
        "filter[edible]": "true",
        "fields": "scientific_name,common_name,growth",
    },
)
print(response.json()["data"])
```

</TabItem>
</Tabs>

Each row then holds only the keys you asked for, in the shape of the [species detail](/docs/advanced/plants-fields#species):

```json
{
  "id": 77116,
  "slug": "quercus-rotundifolia",
  "scientific_name": "Quercus rotundifolia",
  "common_name": "Evergreen oak",
  "growth": {
    "light": null,
    "bloom_months": ["mar", "apr", "may"],
    "fruit_months": ["oct", "nov"],
    "minimum_temperature": { "deg_f": 5, "deg_c": -15 },
    "...": "the other growth values, null when unknown"
  }
}
```

The keys are the **top-level** keys of the payload. A group comes whole: `fields=growth` brings its twenty values. A dotted key such as `growth.light` is not supported and answers `400`.

### Trimming a detail

On `/api/v1/species/:id` and `/api/v1/plants/:id`, `fields` leaves out what you did not ask for, and the server does not even load it. `fields=growth` skips the images, sources, synonyms and distributions:

```bash
curl 'https://trefle.io/api/v1/species/quercus-robur?token=YOUR_TREFLE_TOKEN&fields=growth,specifications'
```

The plant detail has its own keys, its associations included: `fields=common_name,main_species`.

### Where it works

`fields` is accepted on `/api/v1/species`, `/api/v1/plants`, both `/search` endpoints, the species and plant details, and the nested lists (`/api/v1/genus/:id/species`, `/api/v1/plants/:id/species`, `/api/v1/distributions/:id/plants`…). Without it, nothing changes: lists keep their light rows and details their full payload.

### Valid keys and errors

The [reference](/reference) lists the valid keys of each endpoint. A key that does not exist answers `400` with the list of valid ones, in the message and in `details.accepted_values`:

```bash
curl 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&fields=growth.light'
```

```json
{
  "error": true,
  "code": "bad_request",
  "message": "Unknown field: growth.light. Valid fields are: author, bibliography, common_name, ...",
  "details": {
    "accepted_values": ["author", "bibliography", "common_name", "..."]
  }
}
```

A few rules:

- **`synonyms` stays on the detail.** A species can carry more than a thousand synonyms, so a list answers `400` to `fields=synonyms`: use `synonyms_count` and follow `links.synonyms`.
- **Collections cap the page size at 20.** With `images`, `common_names`, `distribution`, `distributions` or `sources`, each row embeds a list (a widespread species has hundreds of zones), so `per_page` above 20 answers `400`:
  `per_page must be an integer between 1 and 20 with fields=distributions`. Other fields keep the usual limit of 100.
- **An empty `fields` is ignored.**
- `fields` combines with [`lang`](/docs/guides/languages): `lang=fr&fields=common_name,common_name_lang,growth`. With `fields`, `common_name_lang` has to be asked for like any other key.

:::note Caching
A response with `fields` is cached and given an ETag of its own. `fields=growth,flower` and `fields=flower,growth` share the same entry, and a trimmed detail never answers `304` to the ETag of the full one.
:::

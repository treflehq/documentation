---
id: snippets
title: Snippets
---

import MultiLanguageSnippet from '@theme/MultiLanguageSnippet';

Here is some request samples

:::tip Third party libraries
The `node`, `ruby` and `python` snippets require third-party libraries:

- **node**: [node-fetch](https://github.com/node-fetch/node-fetch) library.
- **python**: [request](https://requests.readthedocs.io/en/master/) library.
- **ruby**: [HTTParty](https://github.com/jnunemaker/httparty) library.

:::

<br />

<br />

## Genus


### Get all genus

<MultiLanguageSnippet endpoint="/api/v1/genus" />

<br />

<br />

---------

<br/>

## Plants & Species

:::tip Reminder
**In all the following samples, `/plants` can be switched to `/species` and `/species` can be switched to `/plants`.**
The only difference is that `/species` API calls will return matching species, subspecies, varieties etc..., and `/plants` API calls will only return main species (without all the children species).
:::


### Get all plants

<MultiLanguageSnippet endpoint="/api/v1/plants" />


<br />

### Get all species

<MultiLanguageSnippet endpoint="/api/v1/species" />

<br />

### Get only edible plants

<MultiLanguageSnippet endpoint="/api/v1/plants" query={{filter_not: {edible_part: "null"}}}/>

<br />


### Get tallest trees

:::tip Explanation
- Get all plants
- With **tree** ligneous type `filter[ligneous_type]=tree`
- Without plants with no maximum height `filter_not[maximum_height_cm]=null`
- Ordered by maximum height descending (highest first) `order[maximum_height_cm]=desc`
:::

<MultiLanguageSnippet
  endpoint="/api/v1/plants"
  query={{
    filter_not: {maximum_height_cm: "null"},
    filter: {ligneous_type: "tree"},
    order: {maximum_height_cm: "desc"},
  }}
/>

<br />

### Get plants in Antartica

> See [Distributions](/docs/advanced/distributions) to learn more about distributions zones.


<MultiLanguageSnippet
  endpoint="/api/v1/distributions/antarctica/plants"
  query={{}}
/>

<br />

### Get plants introduced in Marion-Prince Edward

<MultiLanguageSnippet
  endpoint="/api/v1/distributions/marion-prince-edward/plants"
  query={{
    filter: {establishment: 'introduced'}
  }}
/>

<br />

### Get plants native from Tibet

<MultiLanguageSnippet
  endpoint="/api/v1/distributions/tibet/plants"
  query={{
    filter: {establishment: 'native'}
  }}
/>

<br />

### Get species with height between 5cm and 20cm

<MultiLanguageSnippet endpoint="/api/v1/species" query={{range: {maximum_height_cm: "5,20"}}}/>


<br />

### Get species with red flowers

<MultiLanguageSnippet endpoint="/api/v1/species" query={{filter: {flower_color: "red"}}}/>


<br />

### Get search for coconut species

<MultiLanguageSnippet endpoint="/api/v1/species/search" query={{q: "coconut"}}/>


<br />

### Get species with oldest discoveries first

<MultiLanguageSnippet endpoint="/api/v1/species" query={{order: {year: "asc"}}}/>


<br />

---------

<br/>


## Zones & Distributions

> See [Distributions](/docs/advanced/distributions) to learn more about distributions zones.

### Get all countries / zones

<MultiLanguageSnippet endpoint="/api/v1/distributions" />

<br />

### Get countries / zones with less than 10 species

<MultiLanguageSnippet
  endpoint="/api/v1/distributions"
  query={{ range: {species_count: ',10'} }}
/>

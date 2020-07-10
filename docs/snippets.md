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

### All genus

<MultiLanguageSnippet endpoint="/api/v1/genus" />

<br />

### All plants

<MultiLanguageSnippet endpoint="/api/v1/plants" />


<br />

### All species

<MultiLanguageSnippet endpoint="/api/v1/species" />


<br />

### Species with height between 5cm and 20cm

<MultiLanguageSnippet endpoint="/api/v1/species" query={{range: {maximum_height_cm: "5,20"}}}/>


<br />

### Species with red flowers

<MultiLanguageSnippet endpoint="/api/v1/species" query={{filter: {flower_color: "red"}}}/>


<br />

### Search for coconut species

<MultiLanguageSnippet endpoint="/api/v1/species" query={{q: "coconut"}}/>


<br />

### Species with oldest discoveries first

<MultiLanguageSnippet endpoint="/api/v1/species" query={{order: {year: "asc"}}}/>


<br />

### Only edible plants

<MultiLanguageSnippet endpoint="/api/v1/plants" query={{filter_not: {edible_part: "null"}}}/>


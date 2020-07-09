---
id: snippets
title: Snippets
---

import MultiLanguageSnippet from '@theme/MultiLanguageSnippet';

Here is some little examples


### List all plants

<MultiLanguageSnippet endpoint="/api/v1/plants" />


### List all species

<MultiLanguageSnippet endpoint="/api/v1/species" />


### List all species with height between 5cm and 20cm

<MultiLanguageSnippet endpoint="/api/v1/species" query={{range: {maximum_height_cm: "5,20"}}}/>


### List all species with red flowers

<MultiLanguageSnippet endpoint="/api/v1/species" />


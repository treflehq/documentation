---
id: languages
title: Common names in other languages
sidebar_label: Other languages
---

`common_name` is the English name of a species. Its names in other languages are in `common_names`, on the detail only. From 2.9.8, the `lang` parameter puts the name of one language in `common_name`, on lists as well as details, and lets you filter on it.

:::tip In short
`lang=fr` gives French names in `common_name`, and `filter[common_name]=tomate&lang=fr` finds the tomato.
:::

### Names in a language

```bash
curl 'https://trefle.io/api/v1/species/quercus-robur?token=YOUR_TREFLE_TOKEN&lang=fr'
```

```json
{
  "data": {
    "id": 77107,
    "slug": "quercus-robur",
    "common_name": "chêne pédonculé",
    "common_name_lang": "fr",
    "...": "the rest of the record"
  }
}
```

`common_name_lang` appears with `lang` and says which language `common_name` is actually in:

| `common_name_lang` | Meaning |
| --- | --- |
| the language asked for (`fr`) | the species has a name in that language |
| `en` | it has none, and keeps its English name |
| `null` | it has no common name at all |

`common_names` is not changed: it still lists every name, per language.

A species often has several names in one language, and the sources do not rank them. Trefle picks the one most sources agree on, ignoring case and accents, and the first one recorded on a tie. The choice is deterministic, but it can be surprising: a name recorded on the wrong species by two imports wins like any other. If you see one, [report it](/docs/guides/reporting-errors).

### Filtering on names in a language

With `lang`, `filter[common_name]` and `filter_not[common_name]` match the names of that language, ignoring case and accents. `filter[common_name]=mais&lang=fr` finds *Zea mays*, whose French name is « maïs ».

```bash
# the species named "tomate" in French
curl -g 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&lang=fr&filter[common_name]=tomate'

# native to France, and with a French name
curl -g 'https://trefle.io/api/v1/distributions/fra/species?token=YOUR_TREFLE_TOKEN&lang=fr&filter[establishment]=native&filter_not[common_name]=null'
```

`filter[common_name]=null` keeps the species without a name in the language, `filter_not[common_name]=null` those with one. `order[common_name]` still sorts on the English name.

### Where it works

`lang` is accepted on `/api/v1/species`, `/api/v1/plants`, both `/search` endpoints, the species and plant details, and the nested lists (`/api/v1/genus/:id/species`, `/api/v1/plants/:id/species`, `/api/v1/distributions/:id/species`…). Without `lang`, nothing changes. Zone names (`/api/v1/distributions?q=`) are in English only.

### Language codes

`lang` takes an [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) code, two letters, in any case: `fr`, `de`, `es`, `pt`, `zh`. Names recorded under a three-letter tag (`fra`, `deu`) are read too. A code no name is recorded in, or a three-letter one, answers `400` with the accepted codes:

```json
{
  "error": true,
  "code": "bad_request",
  "message": "Unknown lang: \"fra\". Use an ISO 639-1 code among the languages the common names exist in: aa, ab, af, ...",
  "details": {
    "accepted_values": ["aa", "ab", "af", "..."]
  }
}
```

`lang` combines with [`fields`](/docs/guides/fields).

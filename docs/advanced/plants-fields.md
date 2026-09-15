---
id: plants-fields
title: Plants fields
---

When you query a species (or a plant), you will have a lot of fields to dig into. This is a simplified version of the [reference](/reference) that tries to explain a bit what each fields represents.

:::tip In doubt, refer to the reference
This documentation is way lighter than the reference, and do not show all the fields. If you have any doubt, please check the [reference](/reference).
:::

## List responses only carry a subset of the fields

Collection endpoints (`/api/v1/plants`, `/api/v1/species`, their `/search`
variants, and nested lists such as `/api/v1/genus/:id/plants`) return a **light**
version of each record, so a page of results stays small. The two lists don't
carry exactly the same subset:

- **Species lists**: `id`, `common_name`, `slug`, `scientific_name`, `year`,
  `bibliography`, `author`, `status`, `rank`, `family`, `family_common_name`,
  `genus`, `genus_id`, `image_url`, `synonyms`, `links`
- **Plants lists**: `id`, `common_name`, `slug`, `scientific_name`, `year`,
  `bibliography`, `author`, `family_common_name`, `genus_id`,
  `main_species_id`, `vegetable`, `observations`, `image_url`, `links`

Every other field (`edible`, `edible_part`, `duration`, `common_names`,
`distribution`, `growth`, `specifications`, `images`, `sources`…) is only
present on the detail endpoints, one record at a time:

```bash
# a list: light payload, no `edible` field
curl -g 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&filter[edible]=true'

# one record: full payload, `edible` included
curl 'https://trefle.io/api/v1/species/fragaria-chiloensis?token=YOUR_TREFLE_TOKEN'
```

:::note You can still filter and sort on the missing fields
Filtering, ordering and ranges are applied in the database, not on the
serialized response. `filter[edible]=true` works on a species list even though
`edible` is not part of that list's payload. Follow the record's `links.self`
to read the value back. Each endpoint validates its own filter keys (an unknown
key returns a `400` listing the valid ones), so a filter accepted by `/species`
is not necessarily accepted by `/plants`.
:::

## Species

| field                              | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **id** (integer)                   | An unique identifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **common_name** (string)           | The usual common name, in english, of the species (if any).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **slug** (string)                  | An unique human-readable identifier (if you can, prefer to use this over id)                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **scientific_name** (string)       | The scientific name follows the [Binomial nomenclature](https://en.wikipedia.org/wiki/Binomial_nomenclature), and represents its genus and its species within the genus, resulting in a single worldwide name for each organism. The scientific name of an infraspecific taxons (ranks below species, such as subspecies, forms, varieties...) is a combination of the name of a species and an infraspecific epithet. A connecting term is used to denote the rank. [See IAPT recommendation](https://www.iapt-taxon.org/nomen/pages/main/art_24.html) |
| **year** (integer)                 | The first publication year of a valid name of this species. [See author citation](https://en.wikipedia.org/wiki/Author_citation_(botany))                                                                                                                                                                                                                                                                                                                                                                                                               |
| **bibliography** (string)          | The first publication of a valid name of this species. [See author citation](https://en.wikipedia.org/wiki/Author_citation_(botany))                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **author** (string)                | The author(s) of the first publication of a valid name of this species. [See author citation](https://en.wikipedia.org/wiki/Author_citation_(botany))                                                                                                                                                                                                                                                                                                                                                                                                   |
| **status** (string)                | The acceptance status of this species by IPNI<br />Can be: `accepted` and `unknown`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **rank** (string)                  | The [taxonomic rank](https://en.wikipedia.org/wiki/Taxonomic_rank) of the species<br />Can be: `species`, `ssp`, `var`, `form`, `hybrid`, and `subvar`.                                                                                                                                                                                                                                                                                                                                                                                                 |
| **family_common_name** (string)    | The common name (in english) of the species family                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **family** (string)                | The scientific name of the species family                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **genus_id** (integer)             | The id of the species genus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **genus** (string)                 | The scientific name of the species genus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **image_url** (string)             | A main image url of the species                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **duration** (array of strings)    | The plant duration(s), which can be:<br />- Annual: plants that live, reproduce, and die in one growing season.<br />- Biennial: plants that need two growing seasons to complete their life cycle, normally completing vegetative growth the first year and flowering the second year.<br />- Perennial: plants that live for more than two years, with the shoot system dying back to soil level each year.<br />                                                                                                                                     |
| **edible_part** (array of strings) | The plant edible part(s), if any.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **edible** (boolean)               | Is the species edible?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **vegetable** (boolean)            | Is the species a vegetable?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **observations** (string)          | Some habit observations on the species                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **common_names** (object)          | Common names of the species per language                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **distribution** (object)          | (Deprecated) Distribution of the species per establishment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **synonyms** (array of objects)    | The symonyms scientific names and authors                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **sources** (array of objects)     | The symonyms scientific names and authors                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **extras** ()                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### links


API endpoints to related resources

| field              | description                        |
|--------------------|------------------------------------|
| **self** (string)  | API endpoint to the species itself |
| **genus** (string) | API endpoint to the species genus  |
| **plant** (string) | API endpoint to the species plant  |

### images

| field                         | description                    |
|-------------------------------|--------------------------------|
| **flower** (array of objects) | Image(s) of the species flower |
| **leaf** (array of objects)   | Image(s) of the species leaf   |
| **habit** (array of objects)  | Image(s) of the species habit  |
| **fruit** (array of objects)  | Image(s) of the species fruit  |
| **bark** (array of objects)   | Image(s) of the species bark   |
| **other** (array of objects)  | Image(s) of the species other  |

### distributions


Distribution of the species per establishment

| field                             | description                                               |
|-----------------------------------|-----------------------------------------------------------|
| **native** (array of objects)     | Zones the species is native from                          |
| **introduced** (array of objects) | Zones the species has been introduced                     |
| **doubtful** (array of objects)   | Zones the species presence is doubtful                    |
| **absent** (array of objects)     | Zones the species is absent and has been wrongly recorded |
| **extinct** (array of objects)    | Zones the species is extinct                              |

### flower


Flower related fields (the reproductive structure found in flowering plants)

| field                        | description            |
|------------------------------|------------------------|
| **color** (array of strings) | The flower color(s)    |
| **conspicuous** (boolean)    | Is the flower visible? |

### foliage


Foliage (or leaves) related fields

| field                        | description                                                                             |
|------------------------------|-----------------------------------------------------------------------------------------|
| **texture** (string)         | The general texture of the plant’s foliage<br />Can be: `fine`, `medium`, and `coarse`. |
| **color** (array of strings) | The leaves color(s)                                                                     |
| **leaf_retention** (boolean) | Does the leaves stay all year long?                                                     |

### fruit_or_seed


Fruit or seed related fields

| field                          | description                                                                  |
|--------------------------------|------------------------------------------------------------------------------|
| **conspicuous** (boolean)      | Is the fruit visible?                                                        |
| **color** (array of strings)   | The fruit color(s)                                                           |
| **shape** (string)             | Fruit shape                                                                  |
| **seed_persistence** (boolean) | Are the fruit or seed generally recognized as being persistent on the plant? |

### specifications


Species's main characteristics

| field                              | description                                                                                                                                                                                                  |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ligneous_type** (string)         | The ligneous type of the woody plant<br />Can be: `liana`, `subshrub`, `shrub`, `tree`, and `parasite`.                                                                                                      |
| **growth_form** (string)           | The primary growth form on the landscape in relation to soil stabilization on slopes and streamsides? Each plant species is assigned the single growth form that most enhances its ability to stabilize soil |
| **growth_habit** (string)          | The general appearance, growth form, or architecture of the plant                                                                                                                                            |
| **growth_rate** (string)           | The relative growth speed of the plant                                                                                                                                                                       |
| **average_height** (object)        | The average height of the species, in centimeters                                                                                                                                                            |
| **maximum_height** (object)        | The maximum height of the species, in centimeters                                                                                                                                                            |
| **nitrogen_fixation** (string)     | Capability to fix nitrogen in monoculture                                                                                                                                                                    |
| **shape_and_orientation** (string) | The predominant shape of the species                                                                                                                                                                         |
| **toxicity** (string)              | Relative toxicity of the species for humans or animals<br />Can be: `none`, `low`, `medium`, and `high`.                                                                                                     |

### growth


Growing of farming related fields

| field                                | description                                                                                                                          |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| **days_to_harvest** (number)         | The average numbers of days required to from planting to harvest                                                                     |
| **description** (string)             | A description on how the plant usually grows                                                                                         |
| **sowing** (string)                  | A description on how to sow the plant                                                                                                |
| **ph_maximum** (number)              | The maximum acceptable soil pH (of the top 30 centimeters of soil) for the plant                                                     |
| **ph_minimum** (number)              | The minimum acceptable soil pH (of the top 30 centimeters of soil) for the plant                                                     |
| **light** (integer)                  | How much light the species' habitats receive, from 1 (deep shade) to 9 (full sun). [Ecological indicator](#ecological-indicator-values-light-humidity-soil) — an Ellenberg class, not a measurement |
| **atmospheric_humidity** (integer)   | How humid the air is in the species' habitats, from 1 (very dry) to 9 (saturated). [Ecological indicator](#ecological-indicator-values-light-humidity-soil)                      |
| **growth_months** (array of strings) | The most active growth months of the species (usually all year round for perennial plants)                                           |
| **bloom_months** (array of strings)  | The months the species usually blooms                                                                                                |
| **fruit_months** (array of strings)  | The months the species usually produces fruits                                                                                       |
| **row_spacing** (object)             | The minimum spacing between each rows of plants, in centimeters                                                                      |
| **spread** (object)                  | The average spreading of the plant, in centimeters                                                                                   |
| **minimum_precipitation** (object)   | Minimum precipitation per year, in milimeters per year                                                                               |
| **maximum_precipitation** (object)   | Maximum precipitation per year, in milimeters per year                                                                               |
| **minimum_root_depth** (object)      | Minimum depth of soil required for the species, in centimeters. Plants that do not have roots such as rootless aquatic plants have 0 |
| **minimum_temperature** (object)     | The minimum tolerable temperature for the species. In celsius or fahrenheit degrees                                                  |
| **maximum_temperature** (object)     | The maximum tolerable temperature for the species. In celsius or fahrenheit degrees                                                  |
| **soil_nutriments** (integer)        | Nutrient level of the soil in the species' habitats, from 1 (hyperoligotrophic) to 9 (hypereutrophic). [Ecological indicator](#ecological-indicator-values-light-humidity-soil) |
| **soil_salinity** (integer)          | Salinity of the soil in the species' habitats, from 0 (absent from saline soils — a real value, not "unknown") to 9 (hyperhaline). [Ecological indicator](#ecological-indicator-values-light-humidity-soil) |
| **soil_texture** (integer)           | Texture of the soil in the species' habitats, on a scale from 0 (clay) to 10 (rock)                                                  |
| **soil_humidity** (integer)          | Humidity of the soil in the species' habitats, from 1 (xerophile) to 12 (submerged) — the one indicator with twelve classes. [Ecological indicator](#ecological-indicator-values-light-humidity-soil) |

#### Ecological indicator values (light, humidity, soil)

The `light`, `atmospheric_humidity`, `soil_humidity`, `soil_nutriments` and `soil_salinity` fields are **ecological indicator values**, not measurements of what an individual plant tolerates. They come from the French [Baseflor / Catminat](https://www.tela-botanica.org/projets/phytosociologie/) database (Philippe Julve) and follow the Ellenberg convention: the number describes **where the species is typically found in the wild** along an environmental gradient, inferred from the habitats it occupies.

##### The number you receive is the class, unchanged

Each field carries the source's own class number, with no rescaling. Check the range before you plot anything:

| Field | Indicator | Range | 1 (or 0) means | Top of the scale means |
|---|---|---|---|---|
| `light` | Ellenberg **L** | 1–9 | deep shade | full sun |
| `soil_humidity` | Ellenberg **F** | **1–12** | very dry | submerged |
| `soil_nutriments` | Ellenberg **N** | 1–9 | hyperoligotrophic | hypereutrophic |
| `soil_salinity` | Ellenberg **S** | **0–9** | absent from saline soils | hyperhaline |
| `atmospheric_humidity` | Julve **HA** | 1–9 | very dry air | saturated air |

Two ranges catch people out. **Soil humidity runs to 12**, not 9: Ellenberg extended that one scale to cover the aquatic domain, so 10 to 12 describe standing water rather than merely wetter ground. And **salinity starts at 0**, where 0 is a real reading meaning the species is absent from saline soils. Missing is always `null`.

Julve's classes are Ellenberg's. His documentation states that the values are based on those published in Ellenberg et al. (1992) for Germany, progressively adapted to the French flora, and that the valence classes run from 1 to 9 "except for soil moisture, where twelve classes have been retained, following Ellenberg". Same factors, same direction, same widths. No conversion is applied, which is why a value from another Ellenberg-family database compares with ours directly.

> Ellenberg, H., Weber, H.E., Düll, R., Wirth, V., Werner, W. & Paulissen, D. (1992) *Zeigerwerte von Pflanzen in Mitteleuropa*. Scripta Geobotanica 18, 2nd ed. Goltze, Göttingen.
>
> Julve, Ph. (1998 ff.) *baseflor. Index botanique, écologique et chorologique de la flore de France*. Programme Catminat.

##### What is deliberately not here

Ellenberg defines two further indicators that Trefle does **not** expose, and their absence is a decision rather than a gap:

- **R, soil reaction.** It ranks acidity on a 1–9 ordinal scale. `ph_minimum` and `ph_maximum` hold pH readings, and mixing a rank into them would leave those fields unable to say which of their numbers were measured. A published table converting R to a pH interval exists; we do not apply it, for the same reason.
- **T, temperature.** A thermal-climate indicator. `minimum_temperature` and `maximum_temperature` are degrees a plant survives, which is a different question, and no other field means it.

Both are recorded internally as evidence with their sources, and promoted to no field. If a dedicated indicator field is ever added, the values are already there.

This matters when you compare Trefle to other sources:

- The USDA PLANTS database rates *tolerance* in agronomic classes (None / Low / Medium / High) defined by measurable thresholds — for salinity, the electrical conductivity of the soil solution. That is a different question, so the two can legitimately disagree. A coastal species such as *Armeria maritima* scores high as a habitat indicator while USDA rates its cultivated salt tolerance low.
- These indicators are calibrated for the **temperate European flora**. For species outside that range they are often absent, and when present should be treated with caution.
- A value of `0` is meaningful (it places the species at the bottom of the gradient), it does not mean "unknown". Missing data is `null`.

If you need to know where a specific value came from, the [provenance endpoint](/docs/advanced/data-provenance) tells you which source supplied it, and the [sources register](/docs/advanced/data-sources) says what that source is and how to credit it.

### synonyms[]

| field               | description                        |
|---------------------|------------------------------------|
| **id** (integer)    | An unique identifier               |
| **name** (string)   | The scientific name of the symonym |
| **author** (string) | The author of the symonym          |

### sources[]

| field                    | description                                                  |
|--------------------------|--------------------------------------------------------------|
| **id** (string)          | An unique identifier from the source                         |
| **name** (string)        | The name of the source                                       |
| **citation** (string)    | How to cite the source                                       |
| **url** (string)         | The link on the source website, or the publication reference |
| **last_update** (string) | The last time the source was checked                         |
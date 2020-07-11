---
id: plants-fields
title: Plants fields
---

When you query a species (or a plant), you will have a lot of fields to dig into. This is a simplified version of the [reference](/reference) that tries to explain a bit what each fields represents.

:::tip In doubt, refer to the reference
This documentation is way lighter than the reference, and do not show all the fields. If you have any doubt, please check the [reference](/reference).
:::


## Species

| name               | type             | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                 | integer          | An unique identifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| common_name        | string           | The usual common name, in english, of the species (if any).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| slug               | string           | An unique human-readable identifier (if you can, prefer to use this over id)                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| scientific_name    | string           | The scientific name follows the [Binomial nomenclature](https://en.wikipedia.org/wiki/Binomial_nomenclature), and represents its genus and its species within the genus, resulting in a single worldwide name for each organism. The scientific name of an infraspecific taxons (ranks below species, such as subspecies, forms, varieties...) is a combination of the name of a species and an infraspecific epithet. A connecting term is used to denote the rank. [See IAPT recommendation](https://www.iapt-taxon.org/nomen/pages/main/art_24.html) |
| year               | integer          | The first publication year of a valid name of this species. [See author citation](https://en.wikipedia.org/wiki/Author_citation_(botany))                                                                                                                                                                                                                                                                                                                                                                                                               |
| bibliography       | string           | The first publication of a valid name of this species. [See author citation](https://en.wikipedia.org/wiki/Author_citation_(botany))                                                                                                                                                                                                                                                                                                                                                                                                                    |
| author             | string           | The author(s) of the first publication of a valid name of this species. [See author citation](https://en.wikipedia.org/wiki/Author_citation_(botany))                                                                                                                                                                                                                                                                                                                                                                                                   |
| status             | string           | The acceptance status of this species by IPNI                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                    |                  | Can be: `accepted` and `unknown`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| rank               | string           | The [taxonomic rank](https://en.wikipedia.org/wiki/Taxonomic_rank) of the species                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                    |                  | Can be: `species`, `ssp`, `var`, `form`, `hybrid`, and `subvar`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| family_common_name | string           | The common name (in english) of the species family                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| family             | string           | The scientific name of the species family                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| genus_id           | integer          | The id of the species genus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| genus              | string           | The scientific name of the species genus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| common_names       | object           | Common names of the species per language                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| distribution       | object           | Distribution of the species per establishment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| synonyms           | array of objects | The symonyms scientific names and authors                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### links


API endpoints to related resources

| name        | type   | description                        |
|-------------|--------|------------------------------------|
| links.self  | string | API endpoint to the species itself |
| links.genus | string | API endpoint to the species genus  |
| links.plant | string | API endpoint to the species plant  |

### images

| name          | type             | description                    |
|---------------|------------------|--------------------------------|
| images.flower | array of objects | Image(s) of the species flower |
| images.leaf   | array of objects | Image(s) of the species leaf   |
| images.habit  | array of objects | Image(s) of the species habit  |
| images.fruit  | array of objects | Image(s) of the species fruit  |
| images.bark   | array of objects | Image(s) of the species bark   |
| images.other  | array of objects | Image(s) of the species other  |

### flower

| name               | type             | description |
|--------------------|------------------|-------------|
| flower.color       | array of strings |             |
| flower.conspicuous | boolean          |             |

### foliage

| name                   | type             | description                             |
|------------------------|------------------|-----------------------------------------|
| foliage.texture        | string           | Can be: `fine`, `medium`, and `coarse`. |
| foliage.color          | array of strings |                                         |
| foliage.leaf_retention | boolean          |                                         |

### fruit_or_seed

| name                           | type             | description                                                                  |
|--------------------------------|------------------|------------------------------------------------------------------------------|
| fruit_or_seed.conspicuous      | boolean          | Is the fruit visible ?                                                       |
| fruit_or_seed.color            | array of strings |                                                                              |
| fruit_or_seed.shape            | string           |                                                                              |
| fruit_or_seed.seed_persistence | boolean          | Are the fruit or seed generally recognized as being persistent on the plant? |

### specifications

| name                                 | type   | description                                                   |
|--------------------------------------|--------|---------------------------------------------------------------|
| specifications.ligneous_type         | string | Can be: `liana`, `subshrub`, `shrub`, `tree`, and `parasite`. |
| specifications.growth_form           | string |                                                               |
| specifications.growth_habit          | string |                                                               |
| specifications.growth_rate           | string |                                                               |
| specifications.average_height        | object |                                                               |
| specifications.maximum_height        | object |                                                               |
| specifications.nitrogen_fixation     | string |                                                               |
| specifications.shape_and_orientation | string |                                                               |
| specifications.toxicity              | string |                                                               |

### growth

| name                         | type             | description                                                                                                         |
|------------------------------|------------------|---------------------------------------------------------------------------------------------------------------------|
| growth.ph_maximum            | number           |                                                                                                                     |
| growth.ph_minimum            | number           |                                                                                                                     |
| growth.light                 | integer          | Required amount of light, on a scale from 0 (no light, <= 10 lux) to 10 (very intensive insolation, >= 100 000 lux) |
| growth.atmospheric_humidity  | integer          | Required relative humidity in the air, on a scale from 0 (<=10%) to 10 (>= 90%)                                     |
| growth.growth_months         | array of strings |                                                                                                                     |
| growth.bloom_months          | array of strings |                                                                                                                     |
| growth.fruit_months          | array of strings |                                                                                                                     |
| growth.minimum_precipitation | object           |                                                                                                                     |
| growth.maximum_precipitation | object           |                                                                                                                     |
| growth.minimum_root_depth    | object           |                                                                                                                     |
| growth.minimum_temperature   | object           |                                                                                                                     |
| growth.maximum_temperature   | object           |                                                                                                                     |
| growth.soil_nutriments       | integer          | Required quantity of nutriments in the soil, on a scale from 0 (oligotrophic) to 10 (hypereutrophic)                |
| growth.soil_salinity         | integer          | Tolerance to salinity, on a scale from 0 (untolerant) to 10 (hyperhaline)                                           |
| growth.soil_texture          | integer          | Required texture of the soil, on a scale from 0 (clay) to 10 (rock)                                                 |
| growth.soil_humidity         | integer          | Required humidity of the soil, on a scale from 0 (xerophile) to 10 (subaquatic)                                     |

### synonyms[]

| name              | type    | description |
|-------------------|---------|-------------|
| synonyms[].id     | integer |             |
| synonyms[].name   | string  |             |
| synonyms[].author | string  |             |

## Genus

| name   | type    | description |
|--------|---------|-------------|
| id     | integer |             |
| name   | string  |             |
| slug   | string  |             |
| family |         |             |

### links

| name         | type   | description |
|--------------|--------|-------------|
| links.self   | string |             |
| links.family | string |             |
---
id: plants-fields
title: Plants fields
---

When you query a species (or a plant), you will have a lot of fields to dig into. This is a simplified version of the [reference](/reference) that tries to explain a bit what each fields represents.

:::tip In doubt, refer to the reference
This documentation is way lighter than the reference, and do not show all the fields. If you have any doubt, please check the [reference](/reference).
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
| **edible** (boolean)               | Is the species edible ?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **vegetable** (boolean)            | Is the species a vegetable ?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
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

| field                        | description             |
|------------------------------|-------------------------|
| **color** (array of strings) | The flower color(s)     |
| **conspicuous** (boolean)    | Is the flower visible ? |

### foliage


Foliage (or leaves) related fields

| field                        | description                                                                             |
|------------------------------|-----------------------------------------------------------------------------------------|
| **texture** (string)         | The general texture of the plant’s foliage<br />Can be: `fine`, `medium`, and `coarse`. |
| **color** (array of strings) | The leaves color(s)                                                                     |
| **leaf_retention** (boolean) | Does the leaves stay all year long ?                                                    |

### fruit_or_seed


Fruit or seed related fields

| field                          | description                                                                  |
|--------------------------------|------------------------------------------------------------------------------|
| **conspicuous** (boolean)      | Is the fruit visible ?                                                       |
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
| **light** (integer)                  | Required amount of light, on a scale from 0 (no light, <= 10 lux) to 10 (very intensive insolation, >= 100 000 lux)                  |
| **atmospheric_humidity** (integer)   | Required relative humidity in the air, on a scale from 0 (<=10%) to 10 (>= 90%)                                                      |
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
| **soil_nutriments** (integer)        | Required quantity of nutriments in the soil, on a scale from 0 (oligotrophic) to 10 (hypereutrophic)                                 |
| **soil_salinity** (integer)          | Tolerance to salinity, on a scale from 0 (untolerant) to 10 (hyperhaline)                                                            |
| **soil_texture** (integer)           | Required texture of the soil, on a scale from 0 (clay) to 10 (rock)                                                                  |
| **soil_humidity** (integer)          | Required humidity of the soil, on a scale from 0 (xerophile) to 10 (subaquatic)                                                      |

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
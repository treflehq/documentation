---
id: complete-data
title: Complete our data
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**If you notice missing informations on a species, you can help us by sending a correction.**

In the correction, you'll send:

- The record to correct (ex: Species `abies-alba`)
- The field(s) to change, with their new values (ex: `minimum_ph`, `edible_part`, `author` etc...). Most of the fields can be corrected.
- A trustable source for the changes (a field observation, a wikipedia page, a publication etc...)

Once your correction is submitted, it will be validated by a peer, and then applied to the database.

### Things to know

- Almost all the fields can be corrected, but relations such as `distributions` or `synonyms` can't be corrected yet.
- The full list of available fields are [in the reference](/reference/#operation/createCorrection).
- Several values can be separated with `|`. Ex: `{"bloom_months": "jan|feb|mar|apr"}`


### Submitting a correction

Sumbitting a correction is done by doing a `POST` request on the `/api/v1/corrections/species/{species_id}` endpoint. [See in the reference](/reference/#operation/createCorrection).

Let's say we want to correct the maximum height of the `Abies Alba` species, because we found out that the largest measured tree was 68 m tall.

The payload we will send will be like:

```json
{
  "notes": "This tree can grows up to 68 meters",
  "source_type": "external",
  "source_reference": "https://conifersociety.org/conifers/abies-alba/",
  "correction": {
    "maximum_height_value": 6800,
    "maximum_height_unit": "cm"
  }
}
```



<Tabs
  groupId="supports"
  defaultValue="browser"
  values={[
    {label: 'CURL', value: 'curl'},
    {label: 'NodeJS', value: 'node'},
  ]}
>

<TabItem value="curl">

In your terminal:

```bash
curl -XPOST -H "Content-type: application/json" \
            -d '{"notes":"This tree can grows up to 68 meters","source_type":"external","source_reference":"https://conifersociety.org/conifers/abies-alba/","correction":{"maximum_height_value":6800,"maximum_height_unit":"cm"}}' \
            'https://trefle.io/api/v1/corrections/species/abies-alba?token=YOUR_TREFLE_TOKEN'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require('node-fetch');

// The parameters for our POST request
const params = {
  notes: 'This tree can grows up to 68 meters',
  source_type: "external",
  source_reference: 'https://conifersociety.org/conifers/abies-alba/',
  correction: {
    maximum_height_value: 6800,
    maximum_height_unit: 'cm'
  }
}

(async () => {
  const response = await fetch(
    'https://trefle.io/api/v1/corrections/species/abies-alba?token=YOUR_TREFLE_TOKEN', {
      method: 'post',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' }
    });
  const json = await response.json();
  console.log(json);
})();
```

</TabItem>
</Tabs>


And we got:

```json
{
  "data": {
    "id": 8,
    "record_type": "Species",
    "record_id": 1164724,
    "user_id": 106,
    "warning_type": null,
    "change_status": "pending",
    "change_type": "update",
    "accepted_by": null,
    "notes": "This tree can grows up to 68 meters",
    "created_at": "2020-07-13T12:56:09.156Z",
    "updated_at": "2020-07-13T12:56:09.156Z",
    "correction": {
      "maximum_height_value": 6800,
      "maximum_height_unit": "cm",
      "scientific_name": "Abies alba"
    },
    "changes": {
      "maximum_height_cm": [
        5000,
        6800
      ]
    }
  },
  "meta": {
    "last_modified": "2020-07-13T12:56:09.156Z"
  }
}
```

This means that your submission has been created, and is pending validation.

### Testing

If you want to test a correction on a species, set the `notes` field to `TEST`. They will be not reviewed, and automatically rejected after some time.

For example:


```bash
# This correction will not be reviewed, and rejected after some time
curl -XPOST -H "Content-type: application/json" \
            -d '{"notes":"TEST","source_type":"external","source_reference":"https://conifersociety.org/conifers/abies-alba/","correction":{"maximum_height_value":6800,"maximum_height_unit":"cm"}}' \
            'https://trefle.io/api/v1/corrections/species/abies-alba?token=YOUR_TREFLE_TOKEN'
```

### Available fields


| field                                         | description                                                                                                                                                                                                        |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **scientific_name** (string)                  |                                                                                                                                                                                                                    |
| **rank** (string)                             | Can be: `species`, `ssp`, `var`, `form`, `hybrid`, and `subvar`.                                                                                                                                                   |
| **genus** (string)                            |                                                                                                                                                                                                                    |
| **year** (integer)                            |                                                                                                                                                                                                                    |
| **author** (string)                           |                                                                                                                                                                                                                    |
| **bibliography** (string)                     |                                                                                                                                                                                                                    |
| **common_name** (string)                      | The species common name(s) in english. Several values can be separated with "\|"                                                                                                                                   |
| **observations** (string)                     |                                                                                                                                                                                                                    |
| **planting_description** (string)             | A description on how the plant usually grows                                                                                                                                                                       |
| **planting_sowing_description** (string)      |                                                                                                                                                                                                                    |
| **duration** (string)                         | The duration(s) of the species. Several values can be separated with "\|"  <br />Can be: `annual`, `biennial`, and `perennial`.                                                                                    |
| **flower_color** (string)                     | The species flower color(s). Several values can be separated with "\|"  <br />Can be: `white`, `red`, `brown`, `orange`, `yellow`, `lime`, `green`, `cyan`, `blue`, `purple`, `magenta`, `grey`, and `black`.      |
| **flower_conspicuous** (boolean)              |                                                                                                                                                                                                                    |
| **foliage_color** (string)                    | The species foliage color(s). Several values can be separated with "\|"  <br />Can be: `white`, `red`, `brown`, `orange`, `yellow`, `lime`, `green`, `cyan`, `blue`, `purple`, `magenta`, `grey`, and `black`.     |
| **foliage_texture** (string)                  | Can be: `fine`, `medium`, and `coarse`.                                                                                                                                                                            |
| **leaf_retention** (boolean)                  |                                                                                                                                                                                                                    |
| **fruit_color** (string)                      | The species fruit color(s). Several values can be separated with "\|"  <br />Can be: `white`, `red`, `brown`, `orange`, `yellow`, `lime`, `green`, `cyan`, `blue`, `purple`, `magenta`, `grey`, and `black`.       |
| **fruit_conspicuous** (boolean)               |                                                                                                                                                                                                                    |
| **fruit_seed_persistence** (boolean)          |                                                                                                                                                                                                                    |
| **fruit_months** (string)                     | The months when his species have fruits. Several values can be separated by "\|"  <br />Can be: `jan`, `feb`, `mar`, `apr`, `may`, `jun`, `jul`, `aug`, `sep`, `oct`, `nov`, and `dec`.                            |
| **bloom_months** (string)                     | The months when this species blooms. Several values can be separated by "\|"  <br />Can be: `jan`, `feb`, `mar`, `apr`, `may`, `jun`, `jul`, `aug`, `sep`, `oct`, `nov`, and `dec`.                                |
| **ground_humidity** (integer)                 | Required humidity of the soil, on a scale from 0 (xerophile) to 10 (subaquatic)                                                                                                                                    |
| **growth_form** (string)                      |                                                                                                                                                                                                                    |
| **growth_habit** (string)                     |                                                                                                                                                                                                                    |
| **growth_months** (string)                    | The months when this species grows. Several values can be separated by "\|"  <br />Can be: `jan`, `feb`, `mar`, `apr`, `may`, `jun`, `jul`, `aug`, `sep`, `oct`, `nov`, and `dec`.                                 |
| **growth_rate** (string)                      |                                                                                                                                                                                                                    |
| **edible_part** (string)                      | The edible part of the species (if any). Several values can be separated by "\|"  <br />Can be: `roots`, `stem`, `leaves`, `flowers`, `fruits`, and `seeds`.                                                       |
| **vegetable** (boolean)                       |                                                                                                                                                                                                                    |
| **light** (integer)                           | Required amount of light, on a scale from 0 (no light, <= 10 lux) to 10 (very intensive insolation, >= 100 000 lux)                                                                                                |
| **atmospheric_humidity** (integer)            | Required relative humidity in the air, on a scale from 0 (<=10%) to 10 (>= 90%)                                                                                                                                    |
| **adapted_to_coarse_textured_soils** (string) |                                                                                                                                                                                                                    |
| **adapted_to_fine_textured_soils** (string)   |                                                                                                                                                                                                                    |
| **adapted_to_medium_textured_soils** (string) |                                                                                                                                                                                                                    |
| **anaerobic_tolerance** (string)              |                                                                                                                                                                                                                    |
| **average_height_unit** (string)              | Can be: `in`, `ft`, `cm`, and `m`.                                                                                                                                                                                 |
| **average_height_value** (number)             |                                                                                                                                                                                                                    |
| **maximum_height_unit** (string)              | Can be: `in`, `ft`, `cm`, and `m`.                                                                                                                                                                                 |
| **maximum_height_value** (number)             |                                                                                                                                                                                                                    |
| **planting_row_spacing_unit** (string)        | Can be: `in`, `ft`, `cm`, and `m`.                                                                                                                                                                                 |
| **planting_row_spacing_value** (number)       | The minimum spacing between each rows of plants                                                                                                                                                                    |
| **planting_spread_unit** (string)             | Can be: `in`, `ft`, `cm`, and `m`.                                                                                                                                                                                 |
| **planting_spread_value** (number)            | The average spreading of the plant                                                                                                                                                                                 |
| **planting_days_to_harvest** (integer)        |                                                                                                                                                                                                                    |
| **maximum_precipitation_unit** (string)       | Can be: `in`, `ft`, `mm`, `cm`, and `m`.                                                                                                                                                                           |
| **maximum_precipitation_value** (number)      |                                                                                                                                                                                                                    |
| **minimum_precipitation_unit** (string)       | Can be: `in`, `ft`, `mm`, `cm`, and `m`.                                                                                                                                                                           |
| **minimum_precipitation_value** (number)      |                                                                                                                                                                                                                    |
| **minimum_root_depth_unit** (string)          | Can be: `in`, `ft`, `cm`, and `m`.                                                                                                                                                                                 |
| **minimum_root_depth_value** (number)         |                                                                                                                                                                                                                    |
| **ph_maximum** (number)                       |                                                                                                                                                                                                                    |
| **ph_minimum** (number)                       |                                                                                                                                                                                                                    |
| **soil_nutriments** (integer)                 | Required quantity of nutriments in the soil, on a scale from 0 (oligotrophic) to 10 (hypereutrophic)                                                                                                               |
| **soil_salinity** (integer)                   | Tolerance to salinity, on a scale from 0 (untolerant) to 10 (hyperhaline)                                                                                                                                          |
| **minimum_temperature_deg_c** (number)        | The minimum required temperature in celcius degrees                                                                                                                                                                |
| **maximum_temperature_deg_c** (number)        | The maximum required temperature in celcius degrees                                                                                                                                                                |
| **soil_texture** (string)                     | Required texture of the soil, on a scale from 0 (clay) to 10 (rock) <br />Can be: `argile`, `intermediaire`, `limon`, `sable_fin`, `sable_grossier`, `graviers`, `galets`, `blocs_fentes_des_parois`, and `dalle`. |
| **ligneous_type** (string)                    | Can be: `liana`, `subshrub`, `shrub`, `tree`, and `parasite`.                                                                                                                                                      |
| **toxicity** (string)                         | Can be: `none`, `low`, `medium`, and `high`.                                                                                                                                                                       |
---
id: understanding-the-data
title: Understanding the data
---

Trefle does not observe plants. It gathers what botanical institutions, herbaria and research databases have already published, reconciles it under one set of names, and serves it through one API.

That shapes what you can expect from it. This page explains where each kind of value comes from, how we settle disagreements between sources, what the trickier fields actually mean, and — plainly — how complete the dataset is today.

## Where the data comes from

Different sources answer different questions. None of them answers all of them.

| Source | What it contributes | Coverage in Trefle |
|---|---|---|
| **[POWO](https://powo.science.kew.org/)** (Kew) | Accepted names, authorship, synonyms, native range | The backbone: most of our records |
| **[WCVP](https://powo.science.kew.org/)** (Kew) | The same checklist as a bulk dataset — names, families, status | ~1.4 million names |
| **[World Flora Online](https://www.worldfloraonline.org/)** | Accepted names, including groups Kew does not cover | ~360 000 records |
| **[GBIF](https://www.gbif.org/)** | Occurrence records, common names, an indication of how often a species is observed | ~360 000 records |
| **[IPNI](https://www.ipni.org/)** | Where and when a name was first published | ~316 000 records |
| **[Pl@ntNet](https://plantnet.org/)** | Photographs, common names | ~31 000 records |
| **Baseflor / Catminat** (Philippe Julve) | Ecological indicators — light, humidity, soil | ~6 400 species, western Europe |
| **USDA PLANTS** | Agronomic ratings for North American species | Historical; largely retired from the API |
| **Regional floras** | Measured descriptions, peer-reviewed | Added by curation, species by species |
| **Wikipedia** | Descriptions and common names — **never numbers** | Text only |

:::note Why Wikipedia is never used for a measurement
A Wikipedia article that gives a plant's height is quoting a source. We would rather cite that source. So Wikipedia contributes descriptions and vernacular names, and nothing that ends up in a numeric field.
:::

## When sources disagree

They do, often. Two herbaria can publish different heights for the same species, both correctly — one measured in a lowland population, the other in the mountains.

Historically, whichever import ran last overwrote the others. That is no longer the case. Each source is **ranked**, and the value you see comes from the highest-ranked source that has an opinion. The others are not discarded: they stay attached to the species as competing claims, and you can read them through the [facts endpoint](/docs/advanced/data-provenance).

The ranking follows four principles:

1. **A human review beats an automated import.** A correction submitted with a reference and accepted by a maintainer outranks everything.
2. **A measurement beats an assertion.** A database that records how many individuals were measured, and by whom, outranks one that simply states a figure.
3. **A regional flora beats a global aggregator, within its region.** A flora of the Iberian Peninsula is written and reviewed by specialists of that flora; a global database mostly relays.
4. **A nomenclatural authority beats a computed consensus.** For deciding whether a name is accepted or a synonym, Kew and IPNI outrank aggregators whose taxonomy is assembled automatically.

:::caution This ranking is an editorial judgement
It is a decision, not a fact of nature, and it is applied globally rather than field by field. Baseflor is arguably a better authority on European soil preferences than a worldwide checklist would be — that particular case does not arise today because they describe different fields, but the limitation is real. If you find a value where the ranking produces an obviously wrong answer, [tell us](/docs/guides/reporting-errors): that is exactly the feedback that improves it.
:::

## What the numbers actually mean

Some fields are less self-explanatory than their names suggest.

### Ecological indicators are about habitat, not tolerance

`light`, `atmospheric_humidity`, `soil_humidity`, `soil_nutriments` and `soil_salinity` are scored from 0 to 10. They come from the Baseflor database and follow the Ellenberg tradition: the number says **where the species is normally found growing in the wild**, along an environmental gradient.

They do **not** say what an individual plant will survive in a garden or a field. That is a different question, and other databases — the USDA in particular — answer it with their own rating scales. The two disagree routinely and both can be right. A salt-marsh plant scores high as a habitat indicator while its cultivated salt tolerance may be rated low.

Two consequences worth remembering:

- These indicators were calibrated for the **temperate European flora**. Outside that range they are usually absent, and should be treated with caution when present.
- **`0` is a real value** on these scales — it places the species at the bottom of the gradient. Missing data is `null`, never `0`.

### Heights

`maximum_height` is the tallest the species is recorded to reach. `average_height` is a typical mature height.

Where a source gives only a range — *"8 to 12 m, occasionally 15"* — we record the maximum and leave the average empty rather than compute a midpoint. A midpoint would be our arithmetic, not anyone's observation.

### Months

`bloom_months`, `fruit_months` and `growth_months` are lists of months. They reflect the source's observations, which are usually northern-hemisphere. For a species that also grows south of the equator, expect the calendar to be shifted.

### Fields inherited from the USDA

A number of columns came from the USDA PLANTS database — fibre and forage ratings, tolerance classes, seedling vigour. They only ever applied to the North American flora, and most are no longer exposed by the API. If you meet one, treat it as historical.

## How complete is it, honestly

Nomenclature is in good shape: names, authorship, families and synonymy cover the large majority of records. Distribution is available for around three quarters of species, and roughly a third carry at least one photograph.

**Botanical traits are another matter.** Height, life form, phenology, pollination and dispersal are present for a small fraction of species — in some cases a few thousand out of nearly half a million. The database is not *wrong* on these fields; it is *empty*, which is a different problem and, in our view, a more honest one.

This is deliberate. Filling those gaps with plausible-looking estimates would make the API look better and be worth less. The current work is to fill them from sources that can be cited — bulk taxonomic datasets, trait databases built on published measurements, and species-by-species review against regional floras.

:::note What a low completeness figure means
Some endpoints expose a completeness indicator. It measures **how much of what we could know about a species we actually know**, counting only fields that make sense for it — a wild oak is not marked incomplete for lacking a sowing guide. A low figure means the botanical literature has not been digitised into our sources yet, not that the record is unreliable.
:::

## Helping

Two things make a real difference:

- **Report a value that looks wrong.** See [reporting errors](/docs/guides/reporting-errors). A report backed by a reference — a flora, a paper, a DOI — is the strongest source we have, and outranks every automated import.
- **Tell us which fields matter to you.** Priorities are currently set by how often a species is looked up. If a field is critical to your work and consistently empty, that is worth knowing.

Every value ingested from now on records where it came from. You can always ask the API [what its sources are](/docs/advanced/data-provenance), and decide for yourself whether to trust it.

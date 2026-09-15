---
id: data-sources
title: Sources
---

Every value in Trefle comes from somewhere else. This page is the register: what each source is, what it contributes, how much of the database it accounts for, and how to credit it.

If you want to know where one *particular* value came from, ask the API directly: see [data provenance](/docs/advanced/data-provenance). This page tells you what the answer means once you have it.

## How to read the table

**Feeding the database** means records are linked to that source today, with the count measured against the production database. **Ranked but not yet connected** means the source has a place in the arbitration order and nothing is importing from it yet. The rank is reserved, not active.

The rank decides who wins when two sources claim the same field. It runs strongest first, and the reasoning behind the order is in [understanding the data](/docs/advanced/understanding-the-data#when-sources-disagree).

## Feeding the database

| Rank | Source | What it contributes | Records linked |
|---:|---|---|---:|
| 1 | **Community corrections** | Values reviewed and accepted by a maintainer, submitted with a reference | — |
| 3 | **[TRY](https://www.try-db.org)** | Plant traits from published measurements: life form, lifespan, flower and fruit characters, leaf texture, root depth, leaf C/N, Ellenberg indicators | Import built, not yet run against production |
| 8 | **[POWO](https://powo.science.kew.org/)** (Kew) | Accepted names, authorship, synonymy, native range. The nomenclatural backbone | 1 242 348 |
| 9 | **[World Flora Online](https://www.worldfloraonline.org/)** | Accepted names, including groups Kew does not cover | 360 940 |
| 10 | **[IPNI](https://www.ipni.org/)** | Where and when a name was first published | 316 686 |
| 12 | **[GBIF](https://www.gbif.org/)** | Occurrence records, common names, how often a species is observed | 360 318 |
| 13 | **USDA PLANTS** | Agronomic ratings for the North American flora | Historical — see below |
| 16 | **Baseflor / Catminat** (Philippe Julve) | Ecological indicator values, flowering period, flower colour, fruit type | ~3 500 species per indicator |
| 19 | **[Pl@ntNet](https://plantnet.org/)** | Photographs, common names | 31 547 |
| 22 | **Wikipedia** | Descriptions and common names — never numbers | Text only |

**WCVP** (Kew's World Checklist of Vascular Plants) is used as a bulk dataset rather than a ranked source: it supplies the genus-to-family table and the synonymy that names are reconciled against, upstream of arbitration.

:::note Why Wikipedia never contributes a measurement
A Wikipedia article giving a plant's height is quoting a source. We would rather cite that source. So Wikipedia contributes prose and vernacular names, and nothing that lands in a numeric field.
:::

## Ranked but not yet connected

These hold a place in the arbitration order so that connecting them later does not require re-arguing precedence. Nothing imports from them today, and a species will not show them as a source.

| Rank | Source | Intended contribution |
|---:|---|---|
| 2 | IUCN | Conservation status |
| 4–7 | Flora Iberica, Flora of North America, Flora of China, Flora Europaea | Measured, peer-reviewed descriptions, authoritative for the flora they cover |
| 14 | Tropicos | Nomenclature |
| 15 | Tela Botanica | French flora |
| 17 | Trees and Shrubs Online | Dendrological descriptions |
| 18 | EOL | Aggregated descriptions |
| 20 | Plants For A Future | Edibility and uses |
| 21 | OpenFarm | Cultivation guidance |

The four regional floras sit above every global aggregator on purpose: within the flora they cover, a specialist description outranks a database that mostly relays.

## The USDA inheritance

A large part of the trait data predates the provenance system. It came from the USDA PLANTS database, it only ever applied to the North American flora, and most of those columns are no longer exposed by the API. Where one survives, treat it as historical.

This matters for arbitration. A value written before provenance recording existed carries no fact, so nothing defends it on the record. Rather than let the weakest source overwrite good legacy data simply because no competitor was on file, an unbacked column value is treated as though claimed by a source at rank 7, the level of a regional flora. Only the six ranks above it may replace such a value; anything weaker can still fill a gap, and its claim is recorded as a competing fact either way.

## Crediting a source

Several sources are published under licences that require attribution. If you redistribute Trefle data, the obligation travels with it.

| Source | How to credit |
|---|---|
| **TRY** | Kattge, J. et al. (2020) TRY plant trait database — enhanced coverage and open access. *Global Change Biology* 26, 119–188. CC BY: credit the TRY initiative **and its contributing datasets** |
| **Baseflor / Catminat** | Julve, Ph., 1998 ff. — *baseflor. Index botanique, écologique et chorologique de la flore de France*. Programme Catminat |
| **POWO / IPNI** | IPNI, published on the Internet at ipni.org; and the World Checklist of Selected Plant Families, Royal Botanic Gardens, Kew |
| **Wikipedia** | Wikipedia, CC BY-SA |

:::caution The register is incomplete
Trefle stores a citation template per source, and several are still empty: GBIF, USDA, Tropicos, IPNI, World Flora Online, Tela Botanica, Pl@ntNet and OpenFarm currently have none recorded. Their own sites state their terms, and you should follow those rather than assume our silence means no obligation. Filling these in is open work.
:::

## Where a field's shape is decided

A source hands us a value in its own units and on its own scale. What Trefle stores is a separate decision, and it is written down in two places:

- **`config/traits.yml`** in the API repository is the contract: for every field, its unit, the range a value must fall in to be accepted, and any closed vocabulary. It is the file the ingester, the plausibility checks and the completeness ratio all read, so it cannot drift from behaviour.
- **The mapping tables** used by the import pipeline record, per source and per field, the conversion applied and the published reference for it.

Where a conversion would misrepresent a value, we decline it and say so. Take the Ellenberg reaction indicator: it ranks soil acidity on an ordinal scale, our `ph_minimum` and `ph_maximum` hold pH readings, and a published table converting one to the other exists. We do not apply it, because it would double the pH columns' population with derived values in a field that could no longer tell you which of its numbers were measured. The indicator is kept as evidence and promoted to nothing.

See [the ecological indicators](/docs/advanced/plants-fields#ecological-indicator-values-light-humidity-soil) for what that looks like on the fields you actually receive.

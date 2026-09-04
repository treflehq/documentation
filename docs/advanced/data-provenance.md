---
id: data-provenance
title: Data provenance
---

Trefle aggregates botanical data from many sources — [GBIF](https://www.gbif.org/), [POWO](https://powo.science.kew.org/), the USDA PLANTS database, Baseflor, Wikipedia and others. They do not always agree, and for a while the last source crawled silently won.

Since 2.1.0, values are recorded as **facts**: what the value is, which source claims it, and how it was established. This page explains how to read that trail, and how conflicting sources are arbitrated.

## The facts endpoint

```bash
curl 'https://trefle.io/api/v1/species/SPECIES_SLUG/facts?token=YOUR_TREFLE_TOKEN'
```

```json
{
  "data": [
    {
      "id": 1042,
      "attribute_name": "average_height_cm",
      "source": "powo",
      "value": "2400",
      "unit": "cm",
      "evidence_type": "reported",
      "status": "active",
      "source_record_id": "320035-2",
      "source_url": null,
      "n_observations": null,
      "observed_at": null,
      "notes": null,
      "updated_at": "2026-09-04T14:22:10.000Z"
    }
  ],
  "meta": { "total": 1 }
}
```

One row per (field, source) claim.

:::note The trail is being backfilled
Provenance recording shipped in 2.1.0, so it only covers values written since then. Accepted community corrections and the automated data checks already go through it; the bulk import pipelines are being migrated onto the same path, source by source. Until that is finished, **most species return an empty list**, and an absent fact means "not recorded yet", not "no source".
:::

### evidence_type

How strongly the value is backed:

| value | meaning |
|---|---|
| `reported` | asserted by an external database, not independently verified |
| `measured` | backed by referenced measurements, usually with a sample size in `n_observations` |
| `derived` | computed by us from primary data (for example a climate envelope calculated from verified occurrence records), with a documented method |
| `inferred` | imputed rather than observed, for example from closely related species. Treat as an estimate |

### status

| value | meaning |
|---|---|
| `active` | the current claim from that source |
| `superseded` | replaced by a newer claim from the same source, kept for history |
| `rejected` | failed validation (an implausible value) and never used |

## Reading a disagreement

Sources are ranked. When several of them claim a value for the same field, the strongest one wins the value you see in the species payload — but the others are **not** discarded. They stay `active` under their own source, which is exactly what a disagreement looks like:

```bash
curl 'https://trefle.io/api/v1/species/SPECIES_SLUG/facts?token=YOUR_TREFLE_TOKEN' \
  | jq '[.data[] | select(.attribute_name == "average_height_cm" and .status == "active")]'
```

Two active rows with different values means the sources disagree, and the species payload shows the one from the higher-ranked source. Human-reviewed corrections (source `community`) always win.

## Validation at ingestion

Two guards run before a value is stored:

- **Plausible ranges.** Each field has a range it must fall within — a height of 10 km or a pH of 47 is refused and recorded as `rejected` rather than published.
- **Consistency between fields.** Pairs that must be ordered (`ph_minimum` / `ph_maximum`, the temperature and precipitation bounds, `average_height` / `maximum_height`) are checked continuously, and inconsistencies are queued for review.

If you spot a value that looks wrong anyway, please [report it](/docs/guides/reporting-errors) — corrections backed by a reference are the strongest source we have.

## Completeness

The `completion_ratio` you may see on a record is the share of **botanical fields that are filled in and relevant to that species**. Fields that do not apply are not counted against it: a wild oak is not penalized for lacking a sowing guide.

Most species in the database have well-documented names and sparse traits, so a low ratio is common and expected. It is a measure of what is known, not of data quality.

---
id: reporting-errors
title: Reporting an error
sidebar_label: Reporting errors
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The team behind Trefle is working hard to complete, correct and check the data, but **there is a lot**.

In order to help us, you can report an error when you see one. That's really helpful for us.

Reporting an error is done by doing a `POST` request on the `/api/v1/species/{species_id}/report` endpoint, with an optional `notes` parameter. [See in the reference](/reference/#operation/reportSpecies).

### Sending the report

Let's say we want to report an error on the `Abies Alba` species, because we found out that the maximum height is wrong.

The payload we will send will be like:

```json
{
  "notes": "The height is wrong",
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
            -d '{"notes":"The height is wrong"}' \
            'https://trefle.io/api/v1/species/abies-alba/report?token=YOUR_TREFLE_TOKEN'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require('node-fetch');

// The parameters for our POST request
const params = {
  notes: 'The height is wrong'
}

(async () => {
  const response = await fetch(
    'https://trefle.io/api/v1/species/abies-alba/report?token=YOUR_TREFLE_TOKEN', {
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
    "id": 9,
    "record_type": "Species",
    "record_id": 1164724,
    "user_id": 106,
    "warning_type": "report",
    "change_status": "pending",
    "change_type": "update",
    "accepted_by": null,
    "notes": "The height is wrong",
    "created_at": "2020-07-13T17:53:51.537Z",
    "updated_at": "2020-07-13T17:53:51.542Z",
    "correction": null,
    "changes": null
  },
  "meta": {
    "last_modified": "2020-07-13T17:53:51.542Z"
  }
}
```

This means that your report has been created, and is pending validation.

:::tip Please send a note
The `notes` parameter is optional, meaning that you could just do a POST request on `https://trefle.io/api/v1/species/abies-alba/report` to send us a report. Unless the errors is obvious, please don't do that, as we won't really know where to start.
:::

### Fixing the data yourself

If you're not intimidated by big API calls, you can help us more by **correcting the data yourself**. You can see how to do it in the ["How to complete data" section of the guide](/docs/advanced/complete-data).


### Testing

If you want to test a report of a species, set the `notes` field to `TEST`. They will be not reviewed, and automatically rejected after some time.

For example:

```bash
# This correction will not be reviewed, and rejected after some time
curl -XPOST -H "Content-type: application/json" \
            -d '{"notes":"TEST"}' \
            'https://trefle.io/api/v1/species/abies-alba/report?token=YOUR_TREFLE_TOKEN'
```

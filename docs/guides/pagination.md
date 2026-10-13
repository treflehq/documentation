---
id: pagination
title: Pagination
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


When you query a collection (ex: `/api/v1/plants`), you'll notice that you have only 20 items returned by default.

That's because results are paginated. You have links for the next page in the `links` attribute of the JSON response.

You can specify the page you want with the `page` parameter. To query the second page, we have add the `page` parameter as follows: `page=2`.

Let's query the second page of the plants.

<Tabs
  groupId="supports"
  defaultValue="browser"
  values={[
    {label: 'Browser', value: 'browser'},
    {label: 'CURL', value: 'curl'},
    {label: 'NodeJS', value: 'node'},
  ]}
>
<TabItem value="browser">

Open your browser and navigate to

[`https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2`](https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2)

</TabItem>
<TabItem value="curl">

In your terminal:

```bash
curl 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2'
```

</TabItem>
<TabItem value="node">

```js
(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2');
  const json = await response.json();
  console.log(json);
})();
```

</TabItem>
</Tabs>

You now got the second page of the plants.


```json
{
    "data": [
        {
            "author": "Schltr.",
            "bibliography": "Repert. Spec. Nov. Regni Veg. Beih. 8: 38 (1921)",
            "common_name": null,
            "family": "Orchidaceae",
            "family_common_name": null,
            "genus": "Aa",
            "genus_id": 14887,
            "id": 834623,
            "links": {
                "genus": "/api/v1/genus/aa",
                "plant": "/api/v1/plants/aa-riobambae",
                "self": "/api/v1/species/aa-riobambae",
                "synonyms": "/api/v1/species/aa-riobambae/synonyms"
            },
            "rank": "species",
            "scientific_name": "Aa riobambae",
            "slug": "aa-riobambae",
            "status": "accepted",
            "synonyms_count": 1,
            "year": 1921
        },
        {
            "author": "Ames",
            "bibliography": "Proc. Biol. Soc. Washington 35: 81 (1922)",
            "common_name": null,
            "family": "Orchidaceae",
            "family_common_name": null,
            "genus": "Aa",
            "genus_id": 14887,
            "id": 834625,
            "links": {
                "genus": "/api/v1/genus/aa",
                "plant": "/api/v1/plants/aa-rosei",
                "self": "/api/v1/species/aa-rosei",
                "synonyms": "/api/v1/species/aa-rosei/synonyms"
            },
            "rank": "species",
            "scientific_name": "Aa rosei",
            "slug": "aa-rosei",
            "status": "accepted",
            "synonyms_count": 1,
            "year": 1922
        },  // ... 18 more items
    ],
    "links": {
        "self": "/api/v1/plants?page=2",
        "first": "/api/v1/plants?page=1",
        "prev": "/api/v1/plants?page=1",
        "next": "/api/v1/plants?page=3",
        "last": "/api/v1/plants?page=2500"
    },
    "meta": {
        "total": 438676,
        "page": 2,
        "per_page": 20
    }
}
```

## Changing the page size

Since 2.9.7, every `/api/v1` collection reads a `per_page` parameter, from 1 to
100. The default is 20. `limit` is accepted as an alias, which the search
endpoints already read before.

```bash
curl -g 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&per_page=100'
```

`meta.per_page` echoes the page size, and the `links` carry it, so following
`links.next` keeps it. A value outside 1 to 100, or one that is not a whole
number, answers `400`:

```json
{
  "error": true,
  "code": "bad_request",
  "message": "per_page must be an integer between 1 and 100; got \"500\". The default is 20.",
  "messages": "per_page must be an integer between 1 and 100; got \"500\". The default is 20."
}
```

## How deep you can page

On `/api/v1/plants`, `/api/v1/species` and their nested lists, paging stops at
the **50,000th row**: page 2,500 at 20 items per page, page 500 at 100 per page.
A request past it returns a `400`:

```bash
curl -g 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&page=3000'
```

```json
{
  "error": true,
  "code": "bad_request",
  "message": "page must be 2500 or lower. Narrow the results with a filter or range instead of paging deep into the full collection. See https://docs.trefle.io",
  "messages": "page must be 2500 or lower. Narrow the results with a filter or range instead of paging deep into the full collection. See https://docs.trefle.io"
}
```

A bigger page does not reach deeper: `per_page=100&page=501` is refused with a
message giving the deepest page for that size.

The database has to walk and discard every row before the offset, so requests
get slower the further you go, and there is no depth at which the answer
becomes useful again. The limit fails fast instead of degrading quietly.

From 2.9.8, `links.last` and `links.next` stop at the deepest reachable page, as
in the example above. Before 2.9.8, `links.last` on a large collection pointed
past the limit (it was computed from `meta.total`), and following it returned
the `400`. `meta.total` still gives the full count.

If you are paging that deep to walk the whole database, narrow the collection
instead. [Filters](/docs/guides/filtering), ranges and
[search](/docs/guides/searching) all reduce the result set to something you can
page through:

```bash
# instead of walking /api/v1/species page by page
curl -g 'https://trefle.io/api/v1/species?token=YOUR_TREFLE_TOKEN&filter[genus_name]=Abies'
```

:::note There is no current bulk export
The [treflehq/dump](https://github.com/treflehq/dump) repository holds a
`species.csv` snapshot from **October 2020** (ODbL). It predates the WCVP
alignment and the TRY traits and carries no provenance. Use it, if at all, as a
historical copy, not as an export of today's data.
:::

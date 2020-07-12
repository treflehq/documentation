---
id: searching
title: Searching
sidebar_label: Searching
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


You can use the `q` parameter to search trough species, plants, genus and families.

Let's search for cocounut plants:

```
https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&q=coconut
```

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

[`https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&q=coconut`](https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&q=coconut)

</TabItem>
<TabItem value="curl">

In your terminal:

```bash
curl 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&q=coconut'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&q=coconut');
  const json = await response.json();
  console.log(json);
})();
```

</TabItem>
</Tabs>


And we got:

```json
{
    "data": [
        {
            "author": "L.",
            "bibliography": "Sp. pl. 2:1188.  1753",
            "common_name": "coconut palm",
            "family": "Arecaceae",
            "family_common_name": "Palm family",
            "genus": "Cocos",
            "genus_id": 1916,
            "id": 122263,
            "image_url": "https://bs.floristic.org/image/o/3d907876dd89dcf4880c50fb0786191a1cb95589",
            "links": {
                "genus": "/api/v1/genus/cocos",
                "plant": "/api/v1/plants/cocos-nucifera",
                "self": "/api/v1/species/cocos-nucifera"
            },
            "rank": "species",
            "scientific_name": "Cocos nucifera",
            "slug": "cocos-nucifera",
            "status": "accepted",
            "synonyms": [
                "Calappa nucifera",
                "Cocos nana",
                "Cocos indica",
                "Palma cocos",
                "Cocos mamillaris",
                "Cocos nucifera var. synphyllica",
                "Diplothemium henryanum",
                "Cocos nucifera var. spicata"
            ],
            "year": 1753
        },
        {
            "author": "Lodd. ex R.Keith (Jacq.)",
            "bibliography": "Miller's Dict. Gard.: 63 (1834)",
            "common_name": "Coyol palm",
            "family": "Arecaceae",
            "family_common_name": "Palm family",
            "genus": "Acrocomia",
            "genus_id": 83,
            "id": 228773,
            "image_url": "https://bs.floristic.org/image/o/a9c613b38da1de08ba3627a2e4a622c3c969c369",
            "links": {
                "genus": "/api/v1/genus/acrocomia",
                "plant": "/api/v1/plants/acrocomia-aculeata",
                "self": "/api/v1/species/acrocomia-aculeata"
            },
            "rank": "species",
            "scientific_name": "Acrocomia aculeata",
            "slug": "acrocomia-aculeata",
            "status": "accepted",
            "synonyms": [
                "Acrocomia vinifera",
                "Bactris minor",
                "Acrocomia tenuifrons",
                "Cocos aculeata",
                "Acrocomia sclerocarpa var. wallaceana",
                "Acrocomia spinosa",
                "Acrocomia zapotecis",
                "Acrocomia mokayayba",
                "Acrocomia globosa",
                "Acrocomia antioquiensis",
                "Palma mocaia",
                "Acrocomia guianensis"
            ],
            "year": 1834
        },
        {
            "author": "Pers. (J.F.Gmel.)",
            "bibliography": "Syn. pl. 2(2):630.  1807",
            "common_name": "double coconut",
            "family": "Arecaceae",
            "family_common_name": "Palm family",
            "genus": "Lodoicea",
            "genus_id": 4249,
            "id": 151095,
            "image_url": "https://bs.floristic.org/image/o/1ad4853b6c359bac439ef21a714a9b5568c91b63",
            "links": {
                "genus": "/api/v1/genus/lodoicea",
                "plant": "/api/v1/plants/lodoicea-maldivica",
                "self": "/api/v1/species/lodoicea-maldivica"
            },
            "rank": "species",
            "scientific_name": "Lodoicea maldivica",
            "slug": "lodoicea-maldivica",
            "status": "accepted",
            "synonyms": [
                "Cocos maldivica",
                "Borassus sonneratii",
                "Lodoicea callypige",
                "Cocos maritima",
                "Lodoicea sonneratii",
                "Lodoicea sechellarum"
            ],
            "year": 1807
        },
        {
            "author": "Burret",
            "bibliography": "Burret M (1930) Eine neue Palmengattung aus Südamerika. Notizblatt Des Königl. Botanischen Gartens Und Museums Zu Berlin 11(35): 48-51. doi: 10.2307/3994696.",
            "common_name": "Bolivian mountain coconut",
            "family": "Arecaceae",
            "family_common_name": "Palm family",
            "genus": "Parajubaea",
            "genus_id": 8244,
            "id": 228441,
            "image_url": "https://bs.floristic.org/image/o/35ef2aea9119a8f9192d22431ccb7c8c9b212c7d",
            "links": {
                "genus": "/api/v1/genus/parajubaea",
                "plant": "/api/v1/plants/parajubaea-torallyi",
                "self": "/api/v1/species/parajubaea-torallyi"
            },
            "rank": "species",
            "scientific_name": "Parajubaea torallyi",
            "slug": "parajubaea-torallyi",
            "status": "accepted",
            "synonyms": [
                "Jubaea torallyi",
                "Allagoptera torallyi",
                "Polyandrococos torallyi",
                "Diplothemium torallyi"
            ],
            "year": 1930
        },
        {
            "author": "Lindl.",
            "bibliography": "Edwards's Bot. Reg. 23: t. 1986 (1837)",
            "common_name": "Coconut pie orchid",
            "family": "Orchidaceae",
            "family_common_name": null,
            "genus": "Maxillaria",
            "genus_id": 4497,
            "id": 896835,
            "image_url": "https://bs.floristic.org/image/o/327f7d62562099979106620f74003bff7fdc283e",
            "links": {
                "genus": "/api/v1/genus/maxillaria",
                "plant": "/api/v1/plants/maxillaria-tenuifolia",
                "self": "/api/v1/species/maxillaria-tenuifolia"
            },
            "rank": "species",
            "scientific_name": "Maxillaria tenuifolia",
            "slug": "maxillaria-tenuifolia",
            "status": "accepted",
            "synonyms": [
                "Maxillaria gracilifolia",
                "Maxillariella tenuifolia"
            ],
            "year": 1837
        }
    ],
    "links": {
        "first": "/api/v1/plants?page=1&q=coconut",
        "last": "/api/v1/plants?page=1&q=coconut",
        "self": "/api/v1/plants?q=coconut"
    },
    "meta": {
        "total": 5
    }
}
```


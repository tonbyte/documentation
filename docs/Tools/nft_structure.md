---
sidebar_position: 2
---

# NFT Data Structure

One of the options for NFT in TON is editable off-chain collections with immutable NFTs. TON Byte provides tools to create such collections. Here, we will try to skip all unnecessary technical details and provide a general understanding of collections in TON.

## There are 2 types of contracts for storing and interacting with a collection ([TEP-62](https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md)):
1. Collection contract ([github](https://github.com/ton-blockchain/token-contract/blob/991bdb4925653c51b0b53ab212c53143f71f5476/nft/nft-collection-editable.fc)) stores:
    - *number of NFT items in the collection* — also serves as the index of the next NFT
    - *content URI* — path to the collection's metadata .json file
    - *common content URI* — path to the folder with metadata of NFT items
    - *royalty parameters* — percentage and wallet address for author royalties when reselling NFTs

2. NFT item contract ([github](https://github.com/ton-blockchain/token-contract/blob/991bdb4925653c51b0b53ab212c53143f71f5476/nft/nft-item.fc)) stores:
    - *item index in the collection*
    - *collection address*
    - *NFT item metadata* — relative path to the json file with metadata


## Let's take a closer look at some fields:

- *content URI*  — path to the collection.json file with the collection description.
    
    Example content:

    ```json
    {
      "image": "tonstorage://<bag_id>/image.png",
      "cover_image": "tonstorage://<bag_id>/cover.png",
      "name": "Anna draws cats",
      "description": "Hi! I'm Anna, a digital artist. I'm currently on my way to fame. This is a collection of 100% unique 666 digital, handmade cats.",
      "social_links": [
            "https://t.me/anna_draws_cats",
            "https://x.com/anna_draws_cats"
        ]
    }
    ```

	:::note
    The `cover_image` field is optional. You can leave it blank or not add it.
	:::
	
	:::note
    `<bag_id>` will be known after uploading the folder to the storage.
	:::
	
- *NFT item metadata* — relative path to the meta.json file with the description of a specific NFT item.
    
    Example content:
    ```json
    {
      "name": "Juseppo",
      "description": "It's the first time I saw an odd-eyed cat!",
      "image": "tonstorage://<bag_id>/0/image.png",
      "content_url": "tonstorage://<bag_id>/0/anim.webm",
      "attributes": [
            {
                "trait_type": "Location",
                "value": "Tuscany, Italy"
            },
            {
                "trait_type": "Eyes",
                "value": "Heterochromia"
            },
      ]
    }
    ```

	:::note
    The `content_url` field is optional; you can leave it blank or not add it.
	:::

	:::note
    `<bag_id>` will be known after uploading the folder to the storage. We will replace it later.
	:::

- *common content URI* — path to the folder containing all json files with metadata of the NFT items:

    Example folder structure with metadata:
    ```
    |— nft_items_meta
        |— 0.json
        |— 1.json
        ...
    ```


Now you are ready for [Create a Collection and Minting NFTs](/docs/Tools/create_collection) tutorial!

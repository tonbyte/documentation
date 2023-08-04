---
sidebar_position: 3
---

# Creating a Collection and Minting NFTs


Read the [NFT Data Structure](docs/Tools/nft_structure) article to learn more about the structure of the folders.

## Data Structure

:::note
When naming files and folders, use only Latin letters, numbers, and underscores. This will make your collection data look clean.
:::

:::note
The structure provided below serves as an example of good style. The folder structure may differ.
:::

1. Folder with collection avatar and cover:
```
|— collection_data
    |— image.png
    |— cover.png
```
2. File with collection metadata:
```
collection.json
```
3. Folder with images of all items:
```
|— items_data
    |— 0
        |— image.png
        |— anim.webm
    |— 1
        |— image.png
        |— anim.webm 
    ...
```
4. Folder with metadata of all items:
```
|— items_metadata
    |— 0.json
    |— 1.json
    ...
```

## Prepare and upload to TON Storage

1. Archive the *collection_data* folder into a .zip file and upload it to the website with the "is folder" flag. A new Bag ID will appear in your list of files.

    For example: `FF2DE322888AECB93BBC526ABFA62133AE2D3AAB20A53D7358A15F3AAF69CFBC`

2. In the *collection.json* file, fill in the `image` and `cover_image` fields using the following template: `tonstorage://<bag_id>/<file_path>`, where `<bag_id>` is the Bag ID obtained in the previous step, and `<file_path>` is the path to the image file relative to the collection_data folder.
    
    For example:
    ```json
    {
        "image": "tonstorage://FF2DE322888AECB93BBC526ABFA62133AE2D3AAB20A53D7358A15F3AAF69CFBC/image.png",
        "cover_image": "tonstorage://FF2DE322888AECB93BBC526ABFA62133AE2D3AAB20A53D7358A15F3AAF69CFBC/image.png",
        ...
    }
    ```

3. Then upload the *collection.json* file to the website. Get the Bag ID of the file: `7D02920CCF8D9877A7DA1214CEA328FF9982883434C012ED7505050B6B638818`

4. Next, archive the folder with images and animations (items_data folder) into a .zip file and upload it to the website with the "is folder" flag, just like in step 1.

    Get the Bag ID: `DC00886CE3126724DA3C8EB578BFED3EE6DA5A9C934B0C1BE60B902F5D65F5A3`

5. Knowing the Bag ID of the folder with images, you need to edit the json file of each NFT item in the items_metadata folder. Do it similarly to step 2. Fill in the image and content_url fields using the following template: tonstorage://<bag_id>/<file_path>, where <bag_id> is the Bag ID obtained in the previous step, and <file_path> is the path to the image/animation file relative to the items_data folder.

	For example:

	```json

    |— items_metadata
        |— 0.json		
            // Edit the image and content_url fields:
            "image": "tonstorage://DC00886CE3126724DA3C8EB578BFED4EE6DA5A9C934B0C1BE60B902F5D65F5A3/0/image.png",
            "content_utl": "tonstorage://DC00886CE3126724DA3C8EB578BFED4EE6DA5A9C934B0C1BE60B902F5D65F5A3/0/anim.webm",
            
        |— 1.json
            // Edit the image and content_url fields:
            "image": "tonstorage://DC00886CE3126724DA3C8EB578BFED4EE6DA5A9C934B0C1BE60B902F5D65F5A3/1/image.png",
            "content_utl": "tonstorage://DC00886CE3126724DA3C8EB578BFED4EE6DA5A9C934B0C1BE60B902F5D65F5A3/1/anim.webm",
        
         // and so on...
	```

    Archive the items_metadata folder and upload it to the website with the "is folder" flag, just like in step 1.

## Creating a Collection

Go to the tools tab, and select the 🌟 🏰 Create Collection tool.
:::warning warning
For test collections and before releasing real ones, it is strongly recommended to use the testnet for each new collection. To switch to the testnet, you will also need to log in with a testnet wallet.
:::

:::note
It's better to open a private browser window or use another browser to have quick access to your main account.
:::

:::note
You can get test coins in the bot: https://t.me/testgiver_ton_bot
:::

![](https://tonbyte.com/gateway/C8D41A4195B3D02AD0503C0746DCBF7F898DA99C25D7FE5E571511F40EA054E5)

Fill in the fields:

1. Сollection content. 

	Replace <bag_id> with the Bag ID of the collection.json file: `tonstorage://<bag_id>/collection.json`
2. Сollection сommon content. 

	Replace <bag_id> with the Bag ID of the folder containing the metadata (json files) of the items: `tonstorage://<bag_id>/`
3. Collection owner's address
4. Address for receiving royalties
5. Royalty amount

Done! After sending the transaction and confirming it in your wallet, you will receive the address of the new, empty collection.

## Minting NFT items

To mint NFTs, go to the **🧙‍♂️ 💎Mint NFT Items tool**.

After entering the collection address, you will have access to information about the collection, as shown in the screenshot below:


![](https://tonbyte.com/gateway/2214ABAB51A72B294E63F7C175200499D898EA8EC5CFBE94128D96B26FCA8BD4)

### Items Content

1. Generating links to content using a template.

    In this option, you need to specify the relative path to the file with the item's metadata, replacing the number (index) with $id. $id will be automatically replaced with the NFT item's index when creating the transaction.

	For the folder items_metadata with the following structure:
	```
	|— items_metadata
		|— item_0
			|— meta.json
		|— item_1
			|— meta.json
		...
	```

	The item content template will be `item_$id/meta.json`.
	:::info
	You can view the structure of your folder by clicking on "Common content URI" under the collection address.
	:::

2. Links to content from a CSV file.

	If your folder:
	- contains files that cannot be covered by a simple template
	- starts indexing files not from 0 and/or contains gaps

	You need to create a text file with the NFT item index and the relative path to its file.
	
	For the folder items_metadata with the following structure:

	```
	|— items_metadata
		|— content
			|— lacroa_meta.json
			|— legandary_pisha_meta.json
		...
	```

	You should create a file with the following content:

	```
		0,content/lacroa_meta.json
		1,content/legandary_pisha_meta.json
		...
	```

### Number of NFTs to Mint

:::warning
Be careful when reaching the last NFT in the collection. We do not check the "Common Collection Content" for the presence of meta files, and we do not have information about how many NFTs you want to create in total.
:::

## What's Next?

You can check if all the NFTs are displayed correctly on getgems.io or tonviewer.com.

You can also view the data stored in the collection using the **ℹ️ NFT collection/item info by address**.

Be sure to share the link to your final collection in our chat to notify the community! https://t.me/tonbytesupport
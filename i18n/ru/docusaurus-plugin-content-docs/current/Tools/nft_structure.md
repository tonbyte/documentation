---
sidebar_position: 2
---

# Структура данных NFT в TON


:::note 
Если вы уже сформировали данные для коллекции, вы можете пропустить этот раздел.
:::


Один из вариантов NFT в TON — это редактируемые офчейн коллекции с не изменяемыми NFT. TON Byte предоставляет инструменты для создания именно таких коллекций. Тут мы постараемся опустить все не нужные технические детали и дать общее представление о коллекциях в TON.

## Для хранения коллекции и взаимодействия с ней существует 2 типа контрактов ([TEP-62](https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md)):
1. Контракт коллекции([github](https://github.com/ton-blockchain/token-contract/blob/991bdb4925653c51b0b53ab212c53143f71f5476/nft/nft-collection-editable.fc)) хранит:
	- *кол-во NFT айтемов в коллекции* — он же индекс следующего NFT
	- *базовый контент коллекции* — ссылка на мета данные коллекции
	- *общий контент коллекции* — ссылка на папку с мета данными NFT айтемов
	- *параметры роялти* — процент и адрес кошелька для авторских отчислений при перепродаже NFT

2. Контракт NFT айтема([github](https://github.com/ton-blockchain/token-contract/blob/991bdb4925653c51b0b53ab212c53143f71f5476/nft/nft-item.fc)) хранит:
	- *индекс айтема в коллекции*
	 - *адрес коллекции*
	 - *мета данные NFT айтема* — относительный путь до json файла с мета данными


## Остановимся по подробнее на некоторых полях:

- *базовый контент коллекции*  — путь к collection.json файлу с описанием коллекции.
	
	Пример содержимого:
	```json
	{
	  "image": "tonstorage://<bag_id>/image.png",
	  "cover_image": "tonstorage://<bag_id>/cover.png"
	  "name": "Anna draws cats",
	  "description": "Hi! I'm Anna, digital artist. I'm currently on my way to fame. This is collection of 100% unique 666 digital, handmade cats.",
	  "social_links": [
			"https://t.me/anna_draws_cats",
			"https://x.com/anna_draws_cats"
		]
	}
	```
	:::note 
	Поле `cover_image` не обязательно, его можно оставить пустым или не добавлять.
	::: 

	:::note
	`<bag_id>`  будет известно после загрузки папки в сторадж.
	:::

- *мета данные NFT айтема* — относительный путь к meta.json файлу с описанием конкретного NFT айтема.
	
	Пример содержимого:
	```json
	{
	  "name": "Juseppo",
	  "description": "It's first time I saw odd-eyed cat!",
	  "image": "tonstorage://<bag_id>/0/image.png",
	  "content_url": "tonstorage://<bag_id>/0/anim.webm",
	  "attributes": [
			{
				"trait_type": "Location",
				"value": "Tuscany, Italy"
			},
			{
				"trait_type": "Eyes",
				"value": "Cheterochromia"
			},
	  ]
	}
	```
	:::note
	Поле `content_url` не обязательно, его можно оставить пустым или не добавлять.
	:::

	:::note
	`<bag_id>`  будет известно после загрузки папки в сторадж. Мы заменим это позже.
	:::

- *общий контент коллекции* — путь к папке содержащей все json файлы с мета данными айтемов:

	Пример структуры папки с метаданными:
	```
	|— nft_items_meta
	    |— 0.json
	    |— 1.json
	    ...
	```

Теперь вы готовы к [Созданию коллекции и минту NFT](/docs/tools/create_collection)!

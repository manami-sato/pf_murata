<?php

  // クロスオリジンを許可する
  header( "Access-Control-Allow-Origin:*" );
  // ヘッダーにコンテンツの種類を設定する
  header( "Content-Type:application/json" );

$products = [
	"university" => [
		[
			"thumbnail" => "hogehoge.jpg",
			"title" => "Akita Pride March(APM)共同代表",
			"caption" => "秋田の地でも<br>「ここにいるよ」を伝えたい",
			"date" => "いついつ",
			"txt" => "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
			"img" => [
				"hogehoge.jpg",
				"hogehoge.jpg"
			]
		],
		[
			"thumbnail" => "hogehoge.jpg",
			"title" => "『【YouTube広告】YouTubeでよく見る体毛や体形などに関する卑下の広告、やめませんか？』発起",
			"caption" => "賛同の署名は4万越え。<br>「商品を売るために誰かを傷つけないで」",
			"date" => "いついつ",
			"txt" => "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
			"img" => [
				"hogehoge.jpg",
				"hogehoge.jpg"
			]
		]
	],
	"personal" => [
		[
			"thumbnail" => "hogehoge.jpg",
			"title" => "Akita Pride March(APM)共同代表",
			"caption" => "秋田の地でも<br>「ここにいるよ」を伝えたい",
			"date" => "いついつ",
			"txt" => "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
			"img" => [
				"hogehoge.jpg",
				"hogehoge.jpg"
			]
		],
		[
			"thumbnail" => "hogehoge.jpg",
			"title" => "『【YouTube広告】YouTubeでよく見る体毛や体形などに関する卑下の広告、やめませんか？』発起",
			"caption" => "賛同の署名は4万越え。<br>「商品を売るために誰かを傷つけないで」",
			"date" => "いついつ",
			"txt" => "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
			"img" => [
				"hogehoge.jpg",
				"hogehoge.jpg"
			]
		]
	]
];

print json_encode($products);
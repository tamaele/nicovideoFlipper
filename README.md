# nicovideoFlipper
ニコニコ動画を左右反転させるブックマークレット  

```js
javascript:(function(videos){videos.forEach(video => video.style.transform=(video.style.transform.toLowerCase()==='scalex(-1)')?'':'scaleX(-1)');})(function(){const videos = document.querySelectorAll('video');return videos;}());
```

~~現在ニコニコ動画のみで動作します。  
ニコ生は未対応です。~~  
対応しました。  
要素を特定する材料を 'video' のみにしたのでニコニコ、ニコ生以外も対応していると思います。  
ニコニコ、ニコ生以外は動作未確認です。  

このブックマークレットによる問題が起きても責任は負いません。  

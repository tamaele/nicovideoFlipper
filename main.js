javascript:(
    function(videos){
        videos.forEach(video => video.style.transform=(video.style.transform.toLowerCase()==='scalex(-1)')?'':'scaleX(-1)');
    }
)
(
    function(){
        const videos = document.querySelectorAll('video');
        return videos;
    }()
);

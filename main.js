javascript:(
    function(n){
        if (!n) {
            return;
        }
        n.style.transform=(n.style.transform.toLowerCase()==='scalex(-1)')?'':'scaleX(-1)';
    }
)
(
    function(){
        const nico = document.querySelector('video');
        if (nico) {
            return nico;
        }
        return null;
    }()
);

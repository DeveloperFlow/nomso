(function(){
    load()
    function writeIntro(){
        var introEl = document.getElementById("intro-section")
        var intro = introEl.children[0]
        remove(intro)
        write(intro,introEl,null,30)
    }
    function load(){
        writeIntro()
    }
}())
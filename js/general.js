responsive()

function responsive(){
    var menu = document.getElementById("site-menu")
    var mainContent = document.getElementById("content")
    if(menu && mainContent){
        var smallScreen = 700
        function adjust(){
            var winDim = windowDim()
            if(winDim.w > smallScreen){
                //big screen
                changeClass(document.body,"ss","")
            }
            else{
                //small screen
                changeClass(document.body,"","ss")
            }
        }
        adjust()
        addEvent(window,"resize",adjust)
    }
}
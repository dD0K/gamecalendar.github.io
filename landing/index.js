$(document).ready(function(){
    function scrolldown(){
        window.scrollBy(0, 1300);
        console.log('test');
    }
    document.getElementById('skills').onclick = function() {scrolldown()};
    getpagetype();
})


function getpagetype(){
    var page = "";
    var path = window. location. pathname;
    var pagename = path. split("/"). pop();

    switch(pagename){
        case "index.html":
            page = "Home";
            break;
        default:
            page = "def"
            break;
    }
    console.log(pagename);
    console.log(page);
}

// To do
// make it so that the js detects the current page and sets that one to be a different color on the header
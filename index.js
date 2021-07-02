$(document).ready(function(){
    function scrolldown(){
        window.scrollBy(0, 120);
        console.log('test');
    }
    document.getElementById('skills').onclick = function() {scrolldown()};

})

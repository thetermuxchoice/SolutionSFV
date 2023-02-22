$(document).ready(function () {

    //El cursor entra en el menú
    $('#p1').mouseenter(function(){
        welcome-heading.setAttribute("style", `filter:brightness(0.5)`); merged-subtitle.setAttribute("style", `filter:brightness(0.4)`);
        
    });

    // El cursor sale del menú
    $('#p1').mouseleave(function(){
        welcome-heading.setAttribute("style", `filter:brightness(1)`); merged-subtitle.setAttribute("style", `filter:brightness(1)`);
    });

});

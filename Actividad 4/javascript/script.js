

    $("li").click(function(){
        $(this).addClass("resaltar")
    })
    
    $("li").dblclick(function(){
        $(this).addClass("resaltar2")
    })

$(".parrafouno") .mouseover(function(){
    $(this) .css("background", "orange") .css("color", "black")
})

$(".parrafouno") .mouseout(function(){
    $(this) .css("background", "coral") .css("color", "blueviolet")
})

$(".parrafodos") .mouseover(function(){
    $(this) .css("background", "yellow") .css("color", "blue")
})

$(".parrafodos") .mouseout(function(){
    $(this) .css("background", "rgb(43, 145, 43)") .css("color", "rgb(194, 192, 56)")
})

$(".parrafotres") .mouseover(function(){
    $(this) .css("background", "violet") .css("color", "green")
})

$(".parrafotres") .mouseout(function(){
    $(this) .css("background", "rgb(48, 4, 28)") .css("color", "rgb(20, 228, 200)")
})
$("#themClassCacThe").click(function(){
    $("h1, h2, p").addClass("red");
    $("div").addClass("important");
});
$("#themClassesCacThe").click(function(){
    $("#div1").addClass("important red");
});
$("#xoaClassCacThe").click(function(){
    $("*").removeClass("red");
});
$("#toggleClass").click(function(){
    $("h1, h2, p").toggleClass("red");
});
$("#layBackground").click(function(){
    var p1 = $("#p1").css("background-color");
    var p2 = $("#p2").css("background-color");
    var p3 = $("#p3").css("background-color");
    alert("Giá trị màu của 3 thẻ p " + "p1: " + p1 + " p2: " + p2 + " p3: " + p3);
});
$("#ganBackground").click(function(){
    $("#p1, #p2, #p3").css("background-color", "yellow");
});
$("#ganNhieuGiaTri").click(function(){
    $("#p1, #p2, #p3").css({"background-color": "YELLOW", "font-size": "50px"});
});
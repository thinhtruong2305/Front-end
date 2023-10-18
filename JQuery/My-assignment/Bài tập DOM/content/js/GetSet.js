$("#takeText").click(function(){
    alert("Giá trị text của thẻ p lấy được là " + $("#test1").text());
});
$("#takeHtml").click(function(){
    alert("Giá trị html của thẻ p lấy được là " + $("#test1").html());
});
$("#takeValue").click(function(){
    alert("Giá trị value của thẻ input lấy được là " + $("#test2").val());
});
$("#takeAttr").click(function(){
    alert("Giá trị attribut của thẻ a lấy được là " + $("#test3").attr("href"));
});
$("#putText").click(function(){
    $("#test1").text("Ông nội đây là nhất");
});
$("#putHtml").click(function(){
    $("#test1").html("<b>Ông nội</b> đây là nhất");
});
$("#putValue").click(function(){
    $("#test2").val("hahaha");
});
$("#putAttr").click(function(){
    $("#test3").attr("href", "https://www.youtube.com/watch?v=8zcF04AaOaA");
});
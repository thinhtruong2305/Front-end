$(document).ready(function(){
    $(window).scroll(function(){
        $(".slideanim").each(function(){
            var position = $(this).offset().top;
            var winTop = $(window).scrollTop();
    
            if(position < winTop + 600){
                $(this).addClass("slide");
            }
        });
    });
});
function initMap() {
    var mapProp = {
        center: {lat: 10.7758439, lng: 106.7017555},
        zoom: 12,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: {lat: 10.7758439, lng: 106.7017555},
    });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initMap)
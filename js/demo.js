// $('document').ready(function(){
//     $('h1').click(function(){
//         $('h1').css("background-color","yellow");
//     });
// });
$('document').ready(function () {
    $('nav').click(function () {
        $('nav').addClass("sticky");
    });
    $('h1').click(function () {
        $('h1').addClass("jquery");
    });
    $('.btn').hover(function () {
        $('.btn').css("background-color", "yellow");
    });
    $('.how').click(function () {
        $('.ab').addClass("animated bounceIn");
        // ab class m jaake 'animated bounceIn delay-1s' add krdo
        $(".steps-iphone").addClass("animated fadeInUp");
        // $(".steps-iphone").addClass("animated fadeInUp delay-1s");
    })
});
var callTab;
$(document).ready(function () {
  /*  new WOW().init();
    $('.md-trigger').on('click', function () {

        var modal = $(this).data('modal');
        $("#" + modal).niftyModal();
    });


    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });

    function nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
    function prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    } */

    // For tabs menu

$(document).on('click','.btnTab',function(){
  $('.btnTab').removeClass('active');
  $(this).addClass('active');
});
 $.validate({
    lang: 'es'
  });

  
 setInterval(function(){
     var c = $('.circleInput').val();
     var o = $('.operatorInput').val();
     var n = $('.numberInput').val(); 
     if( c == '' || o == '' || n ==''){
        $('.postpaidBox').addClass('active');
     } else {
          $('.postpaidBox').removeClass('active');
     }
 })
});

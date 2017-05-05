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

$('.commonRadioBtn').on('click', function(e){
  if($(this).hasClass('prepaid')){
    $('.postpaidBox').addClass('active');
    $('.prepaidBox').removeClass('active');
  } else {
    $('.postpaidBox').removeClass('active');
    $('.prepaidBox').addClass('active');
  }
  e.stopPropagation();
})
});

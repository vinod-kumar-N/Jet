var callTab;
var test;
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
  if($(this).val()== 'mobile'){
      $('.commonHBox').fadeOut();
    $('.prepaidBox').fadeIn();
  } else if($(this).val()== 'dc'){
      
  }else if($(this).val()== 'dth'){
    $('.commonHBox').fadeOut();
    $('.DTHBox').fadeIn();
  }else if($(this).val()== 'Landline'){

  }
});
 $.validate({
    lang: 'es'
  });
    
  function callDetails(getSelect,plan){
      this.getSelect = getSelect;
      this.plan = plan;
  }
  test = function(){
    var c = $('.circleInput');
     var o = $('.operatorInput');
     var n = $('.numberInput');
     if( c.val() == '' || o.val() == '' || n.val() =='' || (n.hasClass('error')) ){
        $('.postpaidBox').addClass('active');
     } else {
          $('.postpaidBox').removeClass('active');
     }
  }
  callDetails.prototype.getDetails = function(){
      $('.prepaidBox').html(this.getSelect +' | '+ this.plan );
  }
});

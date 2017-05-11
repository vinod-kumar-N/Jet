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
/* Reuseable code Starts*/
    var commonIncomeBox = function(getName){
        var getName;
        var array =[];
        var arrayData = [];
        $('.'+getName).find('.commonpushItem').each(function(index){
            array.push($(this))
        })
        return array;
    }
    var callDynTab = function(a){
        $.each(a, function(i){
            if(a[i].val() == "" ){
            $('.paidBox').addClass('active');
            return false;
        } else{ 
            $('.paidBox').removeClass('active');
        }
        })
  } 
/* Reuseable code Ends*/
$(document).on('click','.btnTab',function(){
  $('.btnTab').removeClass('active');
  var selectedTab = $('.btnTab.active').val();
  $(this).addClass('active');
  if($(this).val()== 'mobile'){
      $('.commonHBox').fadeOut();
    $('.prepaidBox').fadeIn();
    $('.sec1').html('Mobile');
    var mobile  = commonIncomeBox('prepaidBox');
    callDynTab(mobile);
  } else if($(this).val()== 'dc'){
       $('.sec1').html('Data Card');
       $('.commonHBox').fadeOut();
    $('.prepaidBox').fadeIn();
     var mobile  = commonIncomeBox('prepaidBox');
    callDynTab(mobile);
  }else if($(this).val()== 'dth'){
    $('.sec1').html('DTH');
    $('.commonHBox').fadeOut();
    $('.DTHBox').fadeIn();
    var dth = commonIncomeBox('DTHBox');
        callDynTab(dth);
  }else if($(this).val()== 'Landline'){
     $('.sec1').html('Landline');
     var dth = commonIncomeBox('landline');
        callDynTab(dth);
        $('.commonHBox').fadeOut();
    $('.landline').fadeIn();
  }
});
   $('.commonRadioBtn').on('click', function(){
          $('.sec2').html($(this).parent().find('label').text().trim());  
    })
 $.validate({
    lang: 'es'
  });
    
    test = function(){
        var btnTabActive = $('.btnTab.active').val();
    if(btnTabActive == 'mobile' || btnTabActive == 'dc'){
        var mobile  = commonIncomeBox('prepaidBox');
        callDynTab(mobile);
    } else if(btnTabActive == 'dth'){
        var dth = commonIncomeBox('DTHBox');
        callDynTab(dth);
    }else if(btnTabActive == 'Landline'){
         var dth = commonIncomeBox('landline');
        callDynTab(dth);
    }
  }
});

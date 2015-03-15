$(function(){
    // Add target="_blank" when user opens external link
    $('a').each(function() {
      var a = this;
      if (a.origin !== location.origin) {
        $(a).attr('target', '_blank');
      }
    });

    //ロード or スクロールされると実行
    $(window).on('load scroll', function(){
        //ヘッダーの高さ分スクロールするとクラスを追加
        if ($(window).scrollTop() > 50) {
            $('.js-globalheader').addClass('is-scrolled');
        } else {
            //80px以下だとクラスを削除
            $('.js-globalheader').removeClass('is-scrolled');
        }
    });

});

function get_social_count_facebook(url, counterId) {
  $.ajax({
    url:'https://graph.facebook.com/',
    dataType:'jsonp',
    data:{
      id:url
    },
    success:function(res){
      $('#' + counterId + ' .count').text( res.shares || 0 );
    },
    error:function(){
      $('#' + counterId + ' .count').text('');
    }
  });
}
function get_social_count_twitter(url, counterId) {
  $.ajax({
    url:'http://urls.api.twitter.com/1/urls/count.json',
    dataType:'jsonp',
    data:{
      url:url
    },
    success:function(res){
      $('#' + counterId + ' .count').text( res.count || 0 );
    },
    error:function(){
      $('#' + counterId + ' .count').text('');
    }
  });
}
$(function(){
  get_social_count_facebook( location.href, "socialarea_facebook");
  get_social_count_twitter( location.href, "socialarea_twitter");
});
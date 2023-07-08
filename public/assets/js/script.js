$( function() {

  // smooth
  $(function(){
    $('a[href^="#"]').on("click", function() {
      var speed = 600;
      var header_height = $("header").height();
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - header_height;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });

  // ハンバーガー
    $('.p-nav__btn').on('click',function() {
      $(this).toggleClass('is-active');
      $('#drawer').toggleClass('is-active');
      $('.l-global__nav').toggleClass('is-active');
      $('.l-js__overlay').toggleClass('is-active');
      $('.p-header__inline').toggleClass('is-active');

  });

 //アコーディオンをクリックした時の動作
    $('.p-faq__item').on('click', function() {//タイトル要素をクリックしたら
      var findElm = $(this).next(".p-faq__item-body__ttl");//直後のアコーディオンを行うエリアを取得し
      $(findElm).slideToggle();//アコーディオンの上下動作
        
      if($(this).hasClass('is-active')){//タイトル要素にクラス名closeがあれば
        $(this).removeClass('is-active');//クラス名を除去し
      }else{//それ以外は
        $(this).addClass('is-active');//クラス名closeを付与
      }
    });
 //アコーディオンをクリックした時の動作
    $('.p-faq__item-header__ttl').on('click', function() {//タイトル要素をクリックしたら
      var findElm = $(this).next(".p-faq__item-body__ttl");//直後のアコーディオンを行うエリアを取得し
      $(findElm).slideToggle();//アコーディオンの上下動作
        
    if($(this).hasClass('is-active')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('is-active');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('is-active');//クラス名closeを付与
    }
    });

// results
  new Swiper( '.swiper', {
      speed: 400,
      spaceBetween: 40,
      width: 400,
      loop: true,
      loopedSlides: 6,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        768: {
          spaceBetween: 24,
          width: 274,
        }

      }
  });

//totop トップボタン
const scroll_to_top_btn = document.querySelector('#to_top');

//クリックイベントを追加
scroll_to_top_btn.addEventListener('click', scroll_to_top);

function scroll_to_top(){
	window.scroll({top: 0, behavior: 'smooth'});
};

// form validation
(function() {
  var requireFlg = false;
  var privacyFlg = false;
  var $require = $( '#js-contact-form .js-require' );
  var fillCount = 0;

  function setSubmitProp() {
    if( requireFlg && privacyFlg ) {
      $( '#form-submit' ).prop( 'disabled', false );
    } else {
      $( '#form-submit' ).prop( 'disabled', true );
    }
  }

  // 必須項目
  $require.on( 'blur', function() {
    if( $( this ).attr( 'id' ) === 'js-formKana' && !$( this ).val().match( /^([ァ-ン]|ー)+$/ ) ) {
      $( this ).val( '' );
      alert( '全角カタカナで入力してください。' )
    }

    $require.each( function() {
      var value = $( this ).val();

      if( ( value !== '' && value.match( /[^\s\t]/ ) ) ) {
        fillCount++;
      }
    });

    requireFlg = ( fillCount === $require.length ? true : false );

    setSubmitProp();
    fillCount = 0;
  });

  // プライバシーポリシー
  $( '#form-privacy' ).on( 'change', function() {
    privacyFlg =  ( $( this ).prop( 'checked' ) ? true : false );
    setSubmitProp();
  });


})();


});

'use strict';

{
  window.onload = function() {
    scroll_effect();
    slide_effect();
  
    $(window).scroll(function(){
     scroll_effect();
     slide_effect();
    });
  
    function scroll_effect(){
     $('.effect-fade').each(function(){
      let elemPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
       $(this).addClass('effect-scroll');
      }
     });
    }

    function slide_effect(){
     $('.slideConts').each(function(){
      let elemPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150){
       $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }      
     });
    }
  };
}

// {
//   let fadeConts = document.querySelectorAll('.effect-fade'); // フェードで表示させる要素の取得
//   let fadeContsRect = []; // 要素の位置を入れるための配列
//   let fadeContsTop = []; // 要素の位置を入れるための配列
//   let windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
//   let windowH = window.innerHeight; // ウィンドウの高さを取得
//   const remainder = 100; // ちょっとはみ出させる部分
//   // 要素の位置を取得
//   for (let i = 0; i < fadeConts.length; i++) {
//     fadeContsRect.push(fadeConts[i].getBoundingClientRect());
//   }
//   for (let i = 0; i < fadeContsRect.length; i++) {
//     fadeContsTop.push(fadeContsRect[i].top + windowY);
//   }
//   // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
//   window.addEventListener('resize', function () {
//     windowH = window.innerHeight;
//   });
//   // スクロールされたら
//   window.addEventListener('scroll', function () {
//     // スクロール位置を取得
//     windowY = window.pageYOffset;
    
//     for (let i = 0; i < fadeConts.length; i++) {
//       // 要素が画面の下端にかかったら
//       if(windowY > fadeContsTop[i] - windowH + remainder) {
//         // .effect-scrollを付与
//         fadeConts[i].classList.add('effect-scroll');
//       }
//     }
//   });
// }
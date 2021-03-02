'use strict'

// ローディング、メインビジュアル全画面表示設定
{
  let vh=window.innerHeight;
  document.getElementById('loading').style.height=vh+'px';
  // document.getElementById('view-box').style.height=vh+'px';
}

// メニュー関係
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}

{
  const memberOpens = document.querySelectorAll('.member-open');
  const memberOverlays = document.querySelectorAll('.member-overlay');

  for (let i = 0; i < memberOpens.length; i++) {
    memberOpens[i].addEventListener('click', () => {
      memberOverlays[i].classList.remove('member-hide');
    });
  }

  for (let i = 0; i < memberOverlays.length; i++) {
    memberOverlays[i].addEventListener('click', () => {
      memberOverlays[i].classList.add('member-hide');
    });
  }
}

// {
//   const memberOpen = document.querySelector('.member-open');
//   const memberOverlay = document.querySelector('.member-overlay');

//   memberOpen.addEventListener('click', () => {
//     memberOverlay.classList.remove('member-hide');
//   });

//   memberOverlay.addEventListener('click', () => {
//     memberOverlay.classList.add('member-hide');
//   })
// }

// スムーススクロール
{
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target = rect + offset;
      let windowW = window.innerWidth

      if (windowW < 1320) {
        window.scrollTo({
          top: target - 130,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: target - 30,
          behavior: 'smooth',
        });
      }
    });
  }
}

// {
//   const boxes = document.querySelectorAll('.box');
//   for (let i = 0; i < boxes.length; i++) {
//     boxes[i].classList.add('effect-fade');
//   }
// }

{
  const slideConts = document.querySelectorAll('.slideConts');

  console.log(slideConts);

  window.addEventListener('load', () => {
    for (let i = 0; i < slideConts.length; i++) {
      slideConts[i].classList.add('active');
    }
  });
}
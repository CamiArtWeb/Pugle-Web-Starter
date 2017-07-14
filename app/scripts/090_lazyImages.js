// progressive-image.js

if (window.addEventListener 
  && window.requestAnimationFrame 
  && document.getElementsByClassName) 
  window.addEventListener('load', () => {

  let items = document.getElementsByClassName('lazyImage replace');
  let timer;

  function isInView() {
    let wTop = window.pageYOffset;
    let wBound = wTop + window.innerHeight;
    let cRect, pTop, pBound;
    let i = 0;
    while(i < items.length) {
      cRect = items[i].getBoundingClientRect();
      pTop = wTop + cRect.top;
      pBound = pTop + cRect.height;
      if (wTop < pBound && wBound > pTop) {
        loadFullImage(items[i]);
        items[i].classList.remove('replace');
      }
      else i++;
    }
  }

  function loadFullImage(item) {
    if (!item || !item.dataset.src) return;

    let img = new Image();
    if (item.dataset) {
      img.srcset = item.dataset.srcset || '';
      img.sizes = item.dataset.sizes || '';
    }
    img.src = item.dataset.src;
    img.className = 'reveal';
    if(img.complete)  addImg();
    else img.onload = addImg;
    function addImg() {
      item.appendChild(img).addEventListener('animationend', (e) => {
        let pImg = item.querySelector && item.querySelector('img.preview');
        
        if (pImg) {
          e.target.alt = pImg.alt || '';
          item.removeChild(pImg);
          e.target.classList.remove('reveal');
        }
      });
    }
  }

  window.window.addEventListener('scroll', scroller, false);
  window.window.addEventListener('resize', scroller, false);

  function scroller() {
    timer = timer || setTimeout(() => {
      timer = null;
      requestAnimationFrame(isInView);
    }, 100);
  }
})
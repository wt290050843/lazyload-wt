function isInSight(el) {
  const bound = el.getBoundingClientRect();
  const clientHeight = window.innerHeight;
  //如果只考虑向下滚动加载
  //const clientWidth=window.innerWeight;
  return bound.top <= clientHeight + 100;
}

let index = 0;
function checkImgs() {
  const imgs = document.querySelectorAll('.my-photo');
  for (let i = index; i < imgs.length; i++) {
    if (isInSight(imgs[i])) {
      loadImg(imgs[i]);
      index = i;
    }
  }
  // Array.from(imgs).forEach(el => {
  //   if (isInSight(el)) {
  //     loadImg(el);
  //   }
  // })
}

function loadImg(el) {
  if (!el.src) {
    const source = el.dataset.src;
    el.src = source;
  }
}

function throttle(fn, mustRun = 500) {
  const timer = null;
  let previous = null;
  return function() {
    const now = new Date();
    const context = this;
    const args = arguments;
    if (!previous) {
      previous = now;
    }
    const remaining = now - previous;
    if (mustRun && remaining >= mustRun) {
      fn.apply(context, args);
      previous = now;
    }
  }
}

// // 方式二

// let num = document.getElementsByTagName('img').length;
// let img = document.getElementsByTagName('img');
// let n = 0;

// lazyload()

// window.onscroll = lazyload

// function lazyload() {
//   // 可见区域高度
//   let seeHeight = document.documentElement.clientHeight;
//   // 滚动条距离顶部的高度
//   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//   for (let i = n; i < num; i++) {
//     if (img[i].offsetTop < seeHeight + scrollTop) {
//       img[i].src = img[i].getAttribute('data-src');
//       // 放置重复加载
//       n = i + 1
//     }
//   }
// }

let nav = document.getElementsByTagName('nav')[0],
  mobileIcon = document.getElementsByClassName('mobile-nav-icon')[0],
  menu = document.getElementById('menu'),
  iconTag = mobileIcon.firstChild,
  mobileCloseBtn = document.getElementsByClassName('ion-close-round');

module.exports.sticky = () => {
  window.onscroll = () => {
    let breakpoint = document.getElementById('aboutme').offsetTop - 70;
    if (window.scrollY >= breakpoint || mobileCloseBtn.length > 0) {
      nav.setAttribute('class', 'sticky');
    } else {
      nav.removeAttribute('class');
    }
  };
};

module.exports.mobile = () => {
  const closeNavbar = () => {
    if (mobileCloseBtn.length > 0) {
      iconTag.setAttribute('class', 'ion-navicon-round');
      nav.removeAttribute('class');
      menu.style.display = 'none';
    }
  };

  mobileIcon.onclick = () => {
    if (mobileCloseBtn.length === 0) {
      iconTag.setAttribute('class', 'ion-close-round');
      nav.setAttribute('class', 'sticky');
      menu.style.display = 'block';
    } else {
      closeNavbar();
    }
  };

  let navLinks = nav.getElementsByTagName('a');
  Array.prototype.forEach.call(navLinks, (ele) => {
    if (ele.getAttribute('class') === 'mobile-nav-icon') return;
    ele.onclick = closeNavbar;
  });
};

module.exports.resetBigNavOnResize = () => {
  window.onresize = () => {
    if (window.innerWidth > 767 || mobileCloseBtn.length > 0) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  };
};
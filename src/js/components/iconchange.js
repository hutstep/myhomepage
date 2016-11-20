module.exports = (id, hoverId) => {
  let imgEle = document.getElementById(id),
    hovEle = document.getElementById(hoverId);
  imgEle.onmouseover = () => {
    setTimeout(() => {
      imgEle.style.display = 'none';
      hovEle.style.display = 'inline';
    }, 100);
  };
  hovEle.onmouseout = () => {
    setTimeout(() => {
      hovEle.style.display = 'none';
      imgEle.style.display = 'inline';
    }, 100);
  };
};
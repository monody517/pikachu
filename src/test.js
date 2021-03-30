var eye = document.querySelectorAll('.eye');
var contariner = document.querySelector('.container');
contariner.addEventListener('mousemove', calculation);

function calculation(event) {
  eye.forEach((item, index) => {
    var x = item.offsetLeft + item.clientWidth / 2; // 眼睛的x坐标
    var y = item.offsetTop + item.clientHeight / 2; // 眼睛的y坐标
    var rad = Math.atan2(event.pageX - x, event.pageY - y); // 鼠标和眼睛的坐标距离，然后用atan2函数计算出该点与(0, 0)点之间的弧度
    var rot = (rad * (180 / Math.PI) * -1) + 180; // 转换成角度
    item.style.transform = 'rotate(' + rot + 'deg)';
  })
}

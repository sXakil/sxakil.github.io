const TweenMax = window.TweenMax;
const cursor = document.querySelector(".cursor"),
  follower = document.querySelector(".follow");

let posX = 0,
  posY = 0;

let mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 37,
        top: posY - 37,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

document.onmousemove = function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
};

let string = `
.skin {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background: #ffe600;
    min-height: 50vh;
  }
  .nose {
    position: relative;
    border: 10px solid;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0;
    height: 0;
    left: 50%;
    top: 150px;
    margin-left: -10px;
    z-index: 10;
  }
  .yuan {
    box-sizing: border-box;
    position: absolute;
    background: black;
    border: solid 1px;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 20px;
    height: 6px;
    border-radius: 10px 10px 0 0;
    top: -16px;
    left: -10px;
  }
  @keyframes wave {
    0% {
      transform: rotate(0);
    }
    33% {
      transform: rotate(10deg);
    }
    66% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  .nose:hover {
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
  }
  .eye {
    position: absolute;
    border: 1px solid #000;
    display: inline-block;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    background: white;
    border-radius: 50%;
    display: block;
    content: "";
    width: 25px;
    height: 25px;
    margin-left: 11px;
    margin-top: 2px;
  }
  .eye.right {
    transform: translateX(100px);
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  }
  .mouth .up .lip {
    box-sizing: border-box;
    position: relative;
    background: #ffe600;
    border: 5px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0px;
    background: #ffe600;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-20deg) translateX(-53px);
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.left::after {
    content: "";
    position: absolute;
    display: block;
    width: 100px;
    height: 5px;
    background: #ffe600;
    top: -8px;
    left: 1px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(20deg) translateX(53px);
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    overflow: hidden;
    width: 100%;
    height: 180px;
    position: absolute;
    top: 5px;
  }
  .mouth .down .yuan1 {
    overflow: hidden;
    border: 3px solid black;
    width: 100px;
    height: 500px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    border-radius: 75px / 300px;
    background: #9b000a;
  }
  .mouth .down .yuan1 .yuan2 {
    background: #ff4b5f;
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
  .face {
    position: absolute;
    left: 50%;
    top: 200px;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    margin-left: -44px;
  }
  .face.left {
    transform: translateX(-200px);
    background: #ff0000;
  }
  .face.right {
    transform: translateX(200px);
    background: #ff0000;
  }
  ` 
let n = 1
let time = 100
let run = () => {
    n+=1
    if(n > string.length){
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substr(0,n)
    demo2.innerHTML = string.substr(0,n)
    demo.scrollTop = demo.scrollHeight
}

const play = () => {
    return setInterval(run, time)
}
let id = play()
const pause = () => {
    window.clearInterval(id)
}
const slow = () => {
    pause()
    time = 300
    id = play()
}
const normal = () => {
    pause()
    time = 100
    id = play()
}
const fast = () => {
    pause()
    time = 0
    id = play()
}


btnPause.onclick = pause()
btnPlay.onclick = ()=> {
    id = play()
}
btnSlow.onclick = slow
btnMiddle.onclick = normal
btnFast.onclick = fast
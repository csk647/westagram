// console.log('앞으로 index.js 에 작성!');

// // assignment 자동채점 코드
// // 삭제하지 마세요
// function autoCheck() {
//     return true;
// }

const form = document.querySelector(".largestBox");
const realId = document.querySelector(".idBox1");
const realPw = document.querySelector(".idBox2");
const logBtn = document.querySelector(".idBox3");
// const doEvent = realPw.addEventListener("keypress", changeColor);
// const doEvent2 = realId.addEventListener("keypress", changeColor);



function changeColor(){
    document.getElementById("special").style.backgroundColor ="blue";
    document.getElementById("special").disabled = false;
}

function removeColor(){
    document.getElementById("special").style.backgroundColor = "lightskyblue";
    document.getElementById("special").disabled = true;
}

// function goMain(){
//     let inputToGoMain = document.querySelector("#special");
//     let link= inputToGoMain.createElement("a");
//     link.href = "main.html"
//     inputToGoMain.appendChild(link)
// }


function youCanPress(){
    const howLong = realId.value;
    const howLong2 = realPw.value;
    if (howLong.length !== 0 && howLong2.length !== 0){
        changeColor();
        // goMain();
    } else if(howLong.length ===0 && howLong2.length === 0) {
        removeColor();
        
    }
}
  


function init(){
  form.addEventListener("keyup", youCanPress);
}
init();
let count = 0;

const noBtn =
document.getElementById("noBtn");

const thinkBtn =
document.getElementById("thinkBtn");

function moveButton(){

count++;

document.getElementById(
"counter"
).innerHTML =
"拒绝次数：" +
count +
" 😜";

const x =
Math.random() *
(window.innerWidth-150);

const y =
Math.random() *
(window.innerHeight-100);

noBtn.style.position =
"absolute";

noBtn.style.left =
x + "px";

noBtn.style.top =
y + "px";

if(count==5){

alert(
"💔 这个操作可能会让我伤心"
);

}

if(count>=10){

noBtn.innerHTML =
"同意 ❤️";

noBtn.className =
"accept";

noBtn.onclick =
function(){

window.location=
"accepted.html";

};

}

}

if(noBtn){

noBtn.addEventListener(
"mouseover",
moveButton
);

}

if(thinkBtn){

thinkBtn.addEventListener(
"click",
function(){

alert(
"🤖 系统建议：选择同意 ❤️"
);

thinkBtn.innerHTML =
"同意 ❤️";

thinkBtn.className =
"accept";

thinkBtn.onclick =
function(){

window.location=
"accepted.html";

};

});

}

console.log('Loaded!');
//changing the html content
var element=document.getElementById('main-text');
element.innerHTML='This is the new and changed text';
//move the image with click
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
};
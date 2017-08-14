console.log('Loaded!');
//changing the html content
var element=document.getElementById('main-text');
element.innerHTML='This is the new and changed text';
//move the image with click
var img=document.getElementById('madi');
img.onclick=function(){
    img.style.marginLeft='100px';
};
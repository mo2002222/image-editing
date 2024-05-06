let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let rotate = document.getElementById('hue-rotate');
let opacity = document.getElementById('opacity')
let invert = document.getElementById('invert');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let resetbtn = document.getElementById('reset');
let downloadbtn = document.getElementById('download');
let uploadbtn = document.getElementById('upload');
let img = document.getElementById('img');
let imgBox = document.querySelector('.img-box');
let newimg  ;
let mainimg;
//
function resetValu() {
    img.style.filter = 'none';
    saturate.value = '100'
    contrast.value= '100'
    brightness.value= '100'
    sepia.value= '0'
    grayscale.value= '0'
    blur.value= '0'
    rotate.value= '0'
    opacity.value = '100'
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
}



//
window.onload = function () {
    downloadbtn.style.display = 'none';
    resetbtn.style.display = 'none';
};
//when select photo
uploadbtn.onchange = function () {
    resetValu();
    downloadbtn.style.display = 'block';
    resetbtn.style.display = 'block';
    //read image
    let file = new FileReader();
    file.readAsDataURL(uploadbtn.files[0]);
    file.onload = function(){
        img.src= file.result;
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display='none';
    }
};
//
let filters = document.querySelectorAll('ul li input');
filters.forEach(filter=>{
    filter.addEventListener("input",function(){
        ctx.filter = `blur(${blur.value}px)
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        hue-rotate(${rotate.value}deg)
        invert(${invert.value}%)
        opacity(${opacity.value}%)`
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
    })
        
});
//download function
downloadbtn.onclick= function () {
    downloadbtn.href = canvas.toDataURL();
    downloadbtn.style.color = '#fff'
}

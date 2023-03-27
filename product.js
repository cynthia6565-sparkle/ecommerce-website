const productimages= document.querySelectorAll("./home/cynthia/Desktop/ecommerce-website/shoes");
const imageslide = document.querySelector(".image-slider");
let activeimageslide=0;

productimages.forEach((item,i) =>{
    item.addEventListener('click', ()=> {
        productimages[activeimageslide].classList.remove('active');
        item.classList.add('active');
        productimageslide.style.backgroundimage= `url'${item.src}')`;
        activeimageslide = i;
    })
})
const sizebtns =document.querySelectorAll('.size-radio-btn');
let checkedbtn = 0;

sizebtns.forEach((item,i) =>{
    ImageBitmapRenderingContext.addEventListener('click',()=> {
       sizebtns[checkedbtn].classList.remove('check');
       item.classList.add('check');
       checkedbtn =i; 
    })
})

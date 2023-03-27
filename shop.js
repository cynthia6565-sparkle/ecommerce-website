const createNav =()=>{
    let nav = document.querySelector('.navbar');
    nav.innerHTML=
    <div class="nav">
        <img src="../shoes/logo.jpg"class="brand-logo"alt="">
            <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="shoes/user.jpg" alt=""></a>
                <a href="#"><img src="shoes/829-8298681_free-png-download-shopping-cart-clipart-png-photo.png" alt=""></a>
" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
        ;
    
}
createNav();
const productcontainers = [...document.querySelectorAll('.product-container')];
const nxtbtn = [...document.querySelectorAll('.nxt-btn')];
const prebtn = [...document.querySelectorAll('.pre-btn')];

productcontainers.forEach((item,i) =>{
    let containerDimenstions =item.getBoundingclientReact();
    let containerwidth =containerDimenstions.width;

    nextBtn[i].addeventlistener('click',()=> {
        item.scrollleft+=containerwidth;
    })
    preBtn[i].addeventlistener('click',()=>{
        item.scrollleft-=containerwidth;
     })

    })

})
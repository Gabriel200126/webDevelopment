const nav = document.querySelector('.nav');
//nav chage backgrund
window.addEventListener('scroll', () => {
    if(window.scrollY >= 100){
        nav.classList.add('nav-black')
      
    }else{
        nav.classList.remove('nav-black');
   
    }
})







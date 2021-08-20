window.addEventListener('load', function(){
    const nav_icons = document.querySelectorAll('.nav-icons li i');
    const nav_menus = document.querySelectorAll('.nav-menus .menu');
    const small_nav = document.querySelectorAll('.small-nav li');
    const bgs = document.querySelectorAll('.background li');
    const svg = document.getElementById('svg');

    small_nav.forEach(el => el.addEventListener('click', ()=>{
        small_nav.forEach(closenav => closenav.classList.remove('show'));
        el.classList.add('show');
    }));
    nav_icons.forEach((el, index) => el.addEventListener('click', ()=>{
        bgs.forEach((bg, id)=>{
            if(id === index)
                bg.classList.add('show');
            else
                bg.classList.remove('show');
        })
        nav_menus.forEach((menu, id) => {
            if(id === index)
                menu.classList.add('show');
            else
                menu.classList.remove('show');
        });
        nav_icons.forEach((el) => el.classList.remove('show'));
        el.classList.add('show');
        svg.style.top = -798 - 13 + el.offsetTop + 'px';
    }));
});
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    navbar.classList.toggle('active');
}


// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = ()=>{
    if(darkmode.classList.contains('bxs-sun')){
        darkmode.classList.replace('bxs-sun', 'bxs-moon');
        document.body.classList.add('active');   
    }
    else{
        darkmode.classList.replace('bxs-moon', 'bxs-sun');
        document.body.classList.remove('active');
    }
}

//auto typing 
let type =new Typed('.auto-type',{
    strings : ['App Developer','Website Developer','Flutter Developer','backend Developer','Java Developer','C++ Developer'],
    typeSpeed: 55,
    backSpeed: 55,
    loop: true
});

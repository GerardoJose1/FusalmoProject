const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    menu.classList.toggle('activo');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'Imagenes/open-menu.png'){
        e.target.setAttribute('src','Imagenes/open-menu2.png');
    }else{
        e.target.setAttribute('src','Imagenes/open-menu.png');
    }
});

let fondo = document.getElementById("fondo");

        window.addEventListener('scroll', function(){
        var value = window.scrollY;
        fondo.style.top = value * 0.5 + 'px';
        })
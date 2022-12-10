const scrollButton = document.getElementById('roll-up');

window.onload = () => {
    const menu_btn = document.querySelector('.hamburger');
    const close_menu_btn = document.querySelector('.mobile-menu-close')
    const mobile_menu = document.querySelector('.mobile-nav');
    const mobile_nav_link = document.querySelectorAll('.mobile-nav-link');

    close_menu_btn.addEventListener('click', () => {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    menu_btn.addEventListener('click', () => {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    mobile_nav_link.forEach(element => {
        element.addEventListener('click', () => {
            menu_btn.classList.toggle('is-active');
            mobile_menu.classList.toggle('is-active');
        });
    });
}

window.onscroll = () => {
    const navbar = document.getElementById("nav");
    const sticky = navbar.offsetTop + 3;
    

    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.classList.remove("nav-light");
        navbar.classList.add("nav-dark");
    }else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("nav-dark");
        navbar.classList.add("nav-light");
    }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
}

scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


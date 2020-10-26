 // start form validations

 (function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
// end form validations

$(document).ready(function () {
 
  let navbar = document.querySelector('nav.navbar');
  let navItem = navbar.querySelector('.nav-item');
  let navBarTogglerIcon = navbar.querySelector('.menu.navbar-toggler-icon');
  let navLinkLogin = navbar.querySelector('a.nav-link-login')
  let materialIcons = navbar.querySelector('.material-icons')


  let navItemDropdowns = document.querySelectorAll('li.nav-item.dropdown')
  let dropdownItems = document.querySelectorAll('a.dropdown-item')
  let navbarCollapse = document.querySelector('div.navbar-collapse')



  navBarTogglerIcon.addEventListener('click', function (e) {
    navBarTogglerIcon.classList.toggle("change");
    if(!navbarCollapse.classList.contains('show')){
      navbar.style.backgroundColor='#fff';
      navLinkLogin.style.display= 'none';
      materialIcons.style.display= 'none'
    }else{
      navbar.style.backgroundColor='rgba(255, 255, 255, 0.68)';
      navLinkLogin.style.display= 'flex';
      materialIcons.style.display= 'flex'
    }

    // navLinkLogin.classList.toggle("display-none");
    // materialIcons.classList.toggle("display-none")

  })



  navItemDropdowns.forEach(navItem => navItem.addEventListener('mouseover', function () {
    navItem.classList.add('show')
    let dropdownMenus = navItem.querySelector('div.dropdown-menu');
    // dropdownMenus.forEach(dropdownMenu=>dropdownMenu.classList.add('show'))
    dropdownMenus.classList.add('show')
  }))


  navItemDropdowns.forEach(navItem => navItem.addEventListener('mouseleave', function () {
    navItem.classList.remove('show')
    let dropdownMenus = navItem.querySelector('div.dropdown-menu');
    // dropdownMenus.forEach(dropdownMenu=>dropdownMenu.classList.remove('show'))
    dropdownMenus.classList.remove('show')
  }))


  dropdownItems.forEach(dropdownItem => dropdownItem.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
    nanBarTogglerIcon.classList.toggle("change");
    console.log('hello')
  }))

})
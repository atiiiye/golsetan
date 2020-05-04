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
 
  let navbar = document.querySelector('.navbar');
  let navItem = navbar.querySelector('.nav-item');
  let nanBarTogglerIcon = navbar.querySelector('.navbar-toggler-icon');
  let navLinkLogin = navbar.querySelector('.nav-link-login')
  let materialIcons = navbar.querySelector('.material-icons')

  let navItemDropdowns = document.querySelectorAll('li.nav-item.dropdown')
  let dropdownItems = document.querySelectorAll('a.dropdown-item')
  let navbarCollapse = document.querySelector('div.navbar-collapse')



  nanBarTogglerIcon.addEventListener('click', function (e) {
    nanBarTogglerIcon.classList.toggle("change");

    navLinkLogin.classList.toggle("display-none")
    materialIcons.classList.toggle("display-none")

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
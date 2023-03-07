let btnSlider = document.querySelector('.menuslide')
let list = document.querySelector('.menuslide-content')
let contentBlog = document.querySelector('.content-blog')
let popup = document.querySelector('#popup')
let btnShowPopUp = document.querySelector('#showup')
let btnclosePopUp = document.querySelector('.close')

btnSlider.addEventListener('click',()=>{
    if (list.style.display === "none") {
        list.style.display = "block";
        btnSlider.classList.remove('menuslide')
        btnSlider.classList.add('btnmodifier')
        contentBlog.classList.add('content-blog-modifier')
      } else {
        list.style.display = "none";
        btnSlider.classList.add('menuslide')
        btnSlider.classList.remove('btnmodifier')
        contentBlog.classList.remove('content-blog-modifier')
      }
})
btnShowPopUp.addEventListener('click',()=>{
    popup.style.display = "block";
})
btnclosePopUp.addEventListener('click',()=>{
    popup.style.display = "none";
})
// reste le btn de submit à faire

let form = document.querySelector('form');
let nameInput = document.querySelector('#inputname');
let passwordInput = document.querySelector('#inputpwd');
let signinBtn = document.querySelector('#signin');

signinBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  let name = nameInput.value;
  let pwd = passwordInput.value;
  localStorage.setItem('username', name);
  localStorage.setItem('password', pwd);
  nameInput.value = '';
  passwordInput.value = '';
  console.log('Votre nom et mot de passe ont été enregistrés.');
  alert('Votre nom et mot de passe ont été enregistrés.');
});



  
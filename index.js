//search
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', function(e){
   let result = document.getElementById('result');
   result.style.display = 'block';

   let searchQuerry = e.target.value.toLowerCase();
   let listName = document.getElementsByClassName('name');

   for(let counter = 0; counter < listName.length; counter++){
      const currentName = listName[counter].textContent.toLowerCase();

      if(currentName.includes(searchQuerry)){
         listName[counter].style.display = 'block';
      }else{
         listName[counter].style.display = 'none';
      }
   }
})


// carousel
const slides = document.getElementsByClassName('carousel-item');

let slidePosition = 0;

const totalSlides = slides.length;

const nav = document.getElementsByClassName('dot');

function hideAllSlides(){
   for(let i = 0; i < slides.length; i++){
      slides[i].classList.remove('carousel-item-visible');
      slides[i].classList.add('carousel-item-hidden');
   }
}

moveToNextSlide();

function moveToNextSlide(){
    hideAllSlides();

   if(slidePosition === totalSlides - 1){
      slidePosition = 0;
   }else{
      slidePosition++;
   }

   for(let i = 0; i < nav.length; i++){
      nav[i].className = nav[i].className.replace('active', "");
   }

   slides[slidePosition].classList.add('carousel-item-visible');
   nav[slidePosition].classList.add('active');

   setTimeout(moveToNextSlide, 2000)
}

for(let i = 0; i < nav.length; i++){
   nav[i].className = nav[i].className.replace('active', "");
}

//modal

const overlay = document.querySelector('.overlay');

const submit = document.querySelector('.btn-submit');

const subscribe = document.querySelector('.btn-subscribe');

const subscribeMsg = document.querySelector('.subscribe-msg');

subscribe.addEventListener('click', function(){
   overlay.style.display = 'block';
   subscribe.style.display = 'none';
   
});

submit.addEventListener('click', function(){
   overlay.style.display = 'none';
   subscribe.style.display = 'none';
});

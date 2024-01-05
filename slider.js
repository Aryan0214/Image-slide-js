const left= document.querySelector('.left');
const right= document.querySelector('.right');
const slider= document.querySelector('.slider');
const images= document.querySelectorAll('.image');
const bottom= document.querySelector('.bottom');

let slideNumber= 1;
const length= images.length;

const buttons= document.querySelectorAll('.button');
buttons[0].style.backgroundColor= 'white'

function removeBg(){
  buttons.forEach(button=>{
    button.style.backgroundColor= 'transparent'
  })
}
buttons.forEach((button,i)=>{
  button.addEventListener('click', ()=>{
    removeBg();
    slider.style.transform= `translateX(-${i * 600}px)`;
    slideNumber = i+1;
    button.style.backgroundColor= 'white'
  })
})


const nextSlide= () =>{
    slider.style.transform= `translateX(-${slideNumber * 600}px)`;
      slideNumber ++;
}
const prevSlide= () =>{
    slider.style.transform= `translateX(-${(slideNumber-2) * 600}px)`;
      slideNumber --;
}
const getFirstSlide= () =>{
    slider.style.transform= `translateX(0px)`;
      slideNumber= 1;
}
const getLastSlide= () =>{
    slider.style.transform= `translateX(-${(length - 1) * 600}px)`;
      slideNumber= length;
}


right.addEventListener('click',()=>{
    slideNumber < length ? nextSlide() : getFirstSlide();
    removeBg(); 
    buttons[slideNumber-1].style.backgroundColor= 'white'
})

left.addEventListener('click', () =>{
    slideNumber > 1 ? prevSlide(): getLastSlide();
    removeBg();
    buttons[slideNumber-1].style.backgroundColor= 'white'
})

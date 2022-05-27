const sleep = document.querySelector('.sleep');
const smile = document.querySelector('.smile');
const chill = document.querySelector('.chill');
const love = document.querySelector('.love');

sleep.addEventListener('click', ()=>{
	smile.scrollIntoView({behavior: "smooth"});
});

smile.addEventListener('click', ()=>{
	chill.scrollIntoView({behavior: "smooth"});
});

chill.addEventListener('click', ()=>{
	love.scrollIntoView({behavior: "smooth"});
});
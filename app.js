

window.onscroll = function() {
    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
        document.querySelector("nav.fix").style.top = "0";
      } else {
        document.querySelector("nav.fix").style.top = "-80px";
      }
};
var a;
function conme(e) {
	a=e;
	
	let prev = e.parentNode.querySelector('.prev')
	let next = e.parentNode.querySelector('.next')
	
	e.scrollLeft = 0 
	prev.style.display = 'none';
	
	e.addEventListener('scroll', ()=> {
		if (e.scrollLeft == 0) {prev.style.display = 'none';}
		else {
		prev.style.display = 'flex'
		}
		
		if (e.scrollLeft > e.scrollWidth - e.clientWidth - 10) {
			next.style.display = 'none';
		} else {
		next.style.display = 'flex'
		}
	})
	
	prev.addEventListener('click',()=> {
			e.scrollLeft -=170
	})
	next.addEventListener('click',() => {

			e.scrollLeft += 170;

	})
}



function assign(e,m) {
	e.querySelector('h1').innerHTML = movies[m].title;
	e.querySelector('img').src = 'img/posters/'+m+'.jpg';
	e.querySelector('img').alt = movies[m].title;
}

function createcon(parent,array) {
	for (i=0; i<array.length; i++) {
		it = document.createElement('div');
		it.classList.add('item');

		itimg = document.createElement('img');
		ith1 = document.createElement('h1');

		it.appendChild(itimg);
		it.appendChild(ith1);

		assign(it,array[i])

		parent.appendChild(it);
	}
}

function getRandomMovies(x) {
	let randommov = [];
	for (let i = 0; i<x; i++) {
		do {
			now = Math.floor(Math.random()*56);
		} while (movies[now].title == undefined || randommov.indexOf(now) > -1);
		
		randommov.push(now);
	}
	return randommov;
}

conme(document.getElementById('trendingcon'))
conme(document.getElementById('genrecon'))
conme(document.getElementById('randomcon'))

createcon(document.getElementById('trendingcon'),featured);
createcon(document.getElementById('genrecon'),adventure)
createcon(document.getElementById('randomcon'),getRandomMovies(10))

function spinrandomcon() {
	document.getElementById('randomcon').innerHTML = '';
	document.getElementById('randomcon').scrollLeft= 0;
	createcon(document.getElementById('randomcon'),getRandomMovies(10))
}

function switchGenre(genre) {

	document.getElementById('genrecon').innerHTML = '';
	document.getElementById('genrecon').scrollLeft= 0;
	createcon(document.getElementById('genrecon'),genre)
}
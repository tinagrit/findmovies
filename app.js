function to(x) {
  document.getElementById(x).scrollIntoView(true);
}

function link(x) {
  location.href = x;
}

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

conme(document.getElementById('trendingcon'))
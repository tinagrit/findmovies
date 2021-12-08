let movies = [
	{ // 0
		"title": "Diary of a Wimpy Kid",
	},
	{ // 1
		"title": "Hawkeye",
	},
	{ // 2
		"title": "Squid Game",
	},
	{ // 3
		"title": "Demon Slayer: Kimetsu No Yaiba",
	},
	{ // 4
		"title": "Eternals",
	},
	{ // 5
		"title": "Clifford The Big Red Dog",
	},
	{ // 6
		"title": "The Beatles Get Back",
	},
	{ // 7
		"title": "The Power of the Dog",
	},
	{ // 8
		"title": "Venom: Let There Be Carnage",
	},
	{ // 9
		"title": "Yellowstone",
	},
	{ // 10
		"title": "Spider-Man: No Way Home",
	},
	{ // 11
		"title": "Ghostbusters: Afterlife",
	},
	{ // 12
		"title": "Dune",
	},
	{ // 13
		"title": "Encato",
	},
	{ // 14
		"title": "Shang-Chi and the Legend of the Ten Rings",
	},
	{ // 15
		"title": "No Time To Die",
	},
	{ // 16
		"title": "A Castle for Christmas",
	},
	{ // 17
		"title": "A Boy Called Christmas",
	},
	{ // 18
		"title": "Red Notice",
	},
	{ // 19
		"title": "Free Guy",
	},
	{ // 20
		"title": "Wrath of Man",
	},
	{},
	{},
	{},
	{ // 24
		"title": "The Suicide Squad",
	},
	{ // 25
		"title": "The Last Duel",
	},
	{ },
	{ // 27
		"title": "365 DAYS",
	},
	{ // 28
		"title": "The Little Things",
	},
	{ // 29
		"title": "The Card Counter",
	},
	{ // 30
		"title": "Spencer",
	},
	{ // 31
		"title": "Escape from Pretoria",
	},
	{ // 32
		"title": "The King",
	},
	{ // 33
		"title": "Parasite",
	},
	{ },
	{ // 35
		"title": "The Gentlemen",
	},
	{ // 36
		"title": "Holidate",
	},
	{ // 37
		"title": "Klaus",
	},
	{ // 38
		"title": "Jungle Cruise",
	},
	{ // 39
		"title": "Spies in Disguise",
	},
	{ // 40
		"title": "Fatman",
	},
	{ // 41
		"title": "Luca",
	},
	{ // 42
		"title": "Malignant",
	},
	{ // 43
		"title": "Z",
	},
	{ // 44
		"title": "Old",
	},
	{ // 45
		"title": "The Night House",
	},
	{ // 46
		"title": "Spiral",
	},
	{ // 47
		"title": "Don't Breathe",
	},
	{ // 48
		"title": "หอแต๋วแตกแหกโควิดปังปุริเย่",
	},
	{ // 49
		"title": "เคว้ง",
	},
	{ // 50
		"title": "Friend Zone",
	},
	{ // 51
		"title": "Bad Genius ฉลาดเกมส์โกง",
	},
	{ // 52
		"title": "๙ ศาสตรา",
	},
	{ // 53
		"title": "Tootsies & The Fake",
	},
	{ // 54
		"title": "I Fine..Thank You..Love You",
	},
	{ // 55
		"title": "รักฉุดใจนายฉุกเฉิน",
	}
		
]

let featured = 		[0	,1	,2	,3	,4	,5	,6	,7	,8	,9	];
let adventure = 	[10	,11	,12	,13	,14	,15	,8	,16	,17	,4	];
let action = 		[18	,14	,8	,19	,15	,20	,24				];
let drama = 		[25	,27	,28	,29	,30	,31	,32	,33			];
let comedy = 		[18	,19	,33	,35	,36	,37	,38	,39	,40	,41	];
let horror = 		[42	,43	,44	,45	,46	,47					];
let thai = 			[48	,49	,50	,51	,52	,53	,54	,55			];

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
conme(document.getElementById('genrecon'))

function assign(e,m) {
	e.querySelector('h1').innerHTML = movies[m].title;
	e.querySelector('img').src = 'img/posters/'+m+'.jpg';
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

createcon(document.getElementById('trendingcon'),featured);
createcon(document.getElementById('genrecon'),adventure)


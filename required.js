// JavaScript Document
let movies = [
	/*
	
			{ // No.
				"title": "Movie Title",
				"desc": "Movie Overview",
				"trailer": "YouTube Video ID",
				"watch": "URL to watch movie in streaming services"
			}

			"trailer" and "watch" can be left blank if the movie doesn't have one
		
	*/
	{ // 0
		"title": "Diary of a Wimpy Kid",
		"desc": "Greg Heffley is an ambitious kid with an active imagination and big plans to be rich and famous. The problem is that he has to survive middle school first.",
		"trailer": "VKhCPUa-glo",
		"watch": "https://www.disneyplus.com/movies/diary-of-a-wimpy-kid/3W4BZbeErSgN"
	},
	{ // 1
		"title": "Hawkeye",
		"desc": "Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate Bishop, who took on the role after the original Avenger, Clint Barton.",
		"trailer": "5VYb3B1ETlk",
		"watch": "https://www.disneyplus.com/series/hawkeye/11Zy8m9Dkj5l"
	},
	{ // 2
		"title": "Squid Game",
		"desc": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
		"trailer": "oqxAJKy0ii4",
		"watch": "https://www.netflix.com/title/81040344"
	},
	{ // 3
		"title": "鬼滅の刃",
		"desc": "Kimetsu No Yaiba (Demon Slayer)<br><br>A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
		"trailer": "t6MXHczeEqc",
		"watch": "https://www.netflix.com/title/81091393"
	},
	{ // 4
		"title": "Eternals",
		"desc": "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
		"trailer": "x_me3xsvDgk",
		"watch": ""
	},
	{ // 5
		"title": "Clifford The Big Red Dog",
		"desc": "A young girl's love for a tiny puppy named Clifford makes the dog grow to an enormous size.",
		"trailer": "4zH5iYM4wJo",
		"watch": ""
	},
	{ // 6
		"title": "The Beatles Get Back",
		"desc": "Documentary about the music group The Beatles featuring in-studio footage that was shot in early 1969 for the 1970 feature film 'Let It Be.'",
		"trailer": "Auta2lagtw4",
		"watch": "https://www.disneyplus.com/series/the-beatles-get-back/7DcWEeWVqrkE"
	},
	{ // 7
		"title": "The Power of the Dog",
		"desc": "Charismatic rancher Phil Burbank inspires fear and awe in those around him. When his brother brings home a new wife and her son, Phil torments them until he finds himself exposed to the possibility of love.",
		"trailer": "LRDPo0CHrko",
		"watch": "https://www.netflix.com/title/81127997"
	},
	{ // 8
		"title": "Venom: Let There Be Carnage",
		"desc": "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
		"trailer": "FmWuCgJmxo",
		"watch": ""
	},
	{ // 9
		"title": "Yellowstone",
		"desc": "A ranching family in Montana faces off against others encroaching on their land.",
		"trailer": "LLQNiiZgz9A",
		"watch": "https://www.primevideo.com/detail/0Q6N240LYJDE5U4HSZM5G6MDYW/"
	},
	{ // 10
		"title": "Spider-Man: No Way Home",
		"desc": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
		"trailer": "JfVOs4VSpmA",
		"watch": ""
	},
	{ // 11
		"title": "Ghostbusters: Afterlife",
		"desc": "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
		"trailer": "ahZFCF--uRY",
		"watch": ""
	},
	{ // 12
		"title": "Dune",
		"desc": "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
		"trailer": "8g18jFHCLXk",
		"watch": ""
	},
	{ // 13
		"title": "Encato",
		"desc": "The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto.",
		"trailer": "CaimKeDcudo",
		"watch": ""
	},
	{ // 14
		"title": "Shang-Chi and the Legend of the Ten Rings",
		"desc": "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
		"trailer": "8YjFbMbfXaQ",
		"watch": "https://www.disneyplus.com/movies/shang-chi-and-the-legend-of-the-ten-rings/5GyV9sf9Y041"
	},
	{ // 15
		"title": "No Time To Die",
		"desc": "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
		"trailer": "N_gD9-Oa0fg",
		"watch": ""
	},
	{ // 16
		"title": "A Castle for Christmas",
		"desc": "To escape a scandal, a bestselling author journeys to Scotland, where she falls in love with a castle -- and faces off with the grumpy duke who owns it.",
		"trailer": "T_JbFba2i6s",
		"watch": "https://www.netflix.com/title/81026181"
	},
	{ // 17
		"title": "A Boy Called Christmas",
		"desc": "In this origin story of Father Christmas, an ordinary boy (with a loyal pet mouse and a reindeer at his side) sets out on an extraordinary adventure to find his father who is on a quest to discover the fabled village of Elfhelm.",
		"trailer": "aFI_aiidke0",
		"watch": "https://www.netflix.com/title/81029733"
	},
	{ // 18
		"title": "Red Notice",
		"desc": "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
		"trailer": "Pj0wz7zu3Ms",
		"watch": "https://www.netflix.com/title/81161626"
	},
	{ // 19
		"title": "Free Guy",
		"desc": "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
		"trailer": "X2m-08cOAbc",
		"watch": "https://www.disneyplus.com/movies/free-guy/3qBd6ESjzQOm"
	},
	{ // 20
		"title": "Wrath of Man",
		"desc": "The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.",
		"trailer": "EFYEni2gsK0",
		"watch": "https://www.netflix.com/title/81462126"
	},
	{ // 21
		"title": "Les Misérables",
		"desc": "Les Miserables (Wretched)<br><br>In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The decision changes their lives forever.",
		"trailer": "YmvHzCLP6ug",
		"watch": "https://www.primevideo.com/detail/amzn1.dv.gti.18ac0f2d-f50a-3f4c-ab6f-ecff118f8f54"
	},
	{ // 22
		"title": "君の名は。",
		"desc": "Kimi No Na Ha. (Your Name)<br><br>Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
		"trailer": "ZHzTER30sNo",
		"watch": ""
	},
	{ // 23
		"title": "天気の子",
		"desc": "Tenki No Ko (Weathering with You)<br><br>A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
		"trailer": "d6JDwsjPGXM",
		"watch": ""
	},
	{ // 24 
		"title": "The Suicide Squad",
		"desc": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
		"trailer": "eg5ciqQzmK0",
		"watch": ""
	},
	{ // 25
		"title": "The Last Duel",
		"desc": "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire by challenging him to a duel.",
		"trailer": "FXMB7zjUSeg",
		"watch": ""
	},
	{ // 26
		"title": "グッドラック！！",
		"desc": "Gud Do Rak Ku!! (Good Luck!!)<br><br>Hajime is a pilot on an international jetliner. He can't seem to please Captain Koda since an incident years ago. To complicate matters, he begins a relationship with a mechanic, Ayumi, whose parents died many years ago in the plane crash.",
		"trailer": "",
		"watch": "https://www.youtube.com/playlist?list=PLjz5VjbA5MiyIt_xxfwVrAoYW-e2TvQ6A"
	},
	{ // 27
		"title": "365 DAYS",
		"desc": "Massimo is a member of the Sicilian Mafia family and Laura is a sales director. She does not expect that on a trip to Sicily trying to save her relationship, Massimo will kidnap her and give her 365 days to fall in love with him.",
		"trailer": "RHOPy5GRf_o",
		"watch": "https://www.netflix.com/title/81245964"
	},
	{ // 28
		"title": "The Little Things",
		"desc": "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city.",
		"trailer": "1HZAnkxdYuA",
		"watch": ""
	},
	{ // 29
		"title": "The Card Counter",
		"desc": "Redemption is the long game in Paul Schrader's THE CARD COUNTER. Told with Schrader's trademark cinematic intensity, the revenge thriller tells the story of an ex-military interrogator turned gambler haunted by the ghosts of his past.",
		"trailer": "7RvVT1cDiNc",
		"watch": ""
	},
	{ // 30
		"title": "Spencer",
		"desc": "During her Christmas holidays with the royal family at the Sandringham estate in Norfolk, England, Diana Spencer, struggling with mental health problems, decides to end her decade-long marriage to Prince Charles.",
		"trailer": "WllZh9aekDg",
		"watch": ""
	},
	{ // 31
		"title": "Escape from Pretoria",
		"desc": "Based on the real-life prison break of two political captives, Escape From Pretoria is a race-against-time thriller set in the tumultuous apartheid days of South Africa.",
		"trailer": "fKwsz6ua5EM",
		"watch": "https://www.netflix.com/title/81243687"
	},
	{ // 32
		"title": "The King",
		"desc": "Hal, wayward prince and heir to the English throne, is crowned King Henry V after his tyrannical father dies. Now the young king must navigate palace politics, the war his father left behind, and the emotional strings of his past life.",
		"trailer": "svVykTznk9Q",
		"watch": "https://www.netflix.com/title/80182016"
	},
	{ // 33
		"title": "Parasite",
		"desc": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
		"trailer": "5xH0HfJHsaY",
		"watch": "https://www.netflix.com/title/81221938"
	},
	{ },
	{ // 35
		"title": "The Gentlemen",
		"desc": "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
		"trailer": "Ify9S7hj480",
		"watch": "https://www.netflix.com/title/81178299"
	},
	{ // 36
		"title": "Holidate",
		"desc": "Fed up with being single on holidays, two strangers agree to be each other's platonic plus-ones all year long, only to catch real feelings along the way.",
		"trailer": "hxaaAoI57fk",
		"watch": "https://www.netflix.com/title/81034553"
	},
	{ // 37
		"title": "Klaus",
		"desc": "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg's new postman, Jesper, befriends toymaker Klaus, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions.",
		"trailer": "taE3PwurhYM",
		"watch": "https://www.netflix.com/title/80183187"
	},
	{ // 38
		"title": "Jungle Cruise",
		"desc": "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",
		"trailer": "f_HvoipFcA8",
		"watch": "https://www.disneyplus.com/movies/jungle-cruise/73QMeTY6Dray"
	},
	{ // 39
		"title": "Spies in Disguise",
		"desc": "When the world's best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world.",
		"trailer": "A05s7OM-8Oc",
		"watch": "https://www.disneyplus.com/movies/spies-in-disguise/6JK8S7Rdq8dF"
	},
	{ // 40
		"title": "Fatman",
		"desc": "A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.",
		"trailer": "DWfPGIMDhNw",
		"watch": "https://www.primevideo.com/dp/amzn1.dv.gti.20bacac5-9a41-c02e-8360-03311a8f37c4"
	},
	{ // 41
		"title": "Luca",
		"desc": "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
		"trailer": "mYfJxlgR2jw",
		"watch": "https://www.disneyplus.com/movies/luca/7K1HyQ6Hl16P"
	},
	{ // 42
		"title": "Malignant",
		"desc": "Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers that these waking dreams are in fact terrifying realities.",
		"trailer": "Gczt0fhawDs",
		"watch": ""
	},
	{ // 43
		"title": "Z",
		"desc": "A family finds themselves terrorized by their eight-year-old son's imaginary friend.",
		"trailer": "PbQB_Sav4rQ",
		"watch": "https://www.primevideo.com/dp/amzn1.dv.gti.9dedace8-3969-4ff6-b273-6cfcc840e8b6"
	},
	{ // 44
		"title": "Old",
		"desc": "A vacationing family discovers that the secluded beach where they're relaxing for a few hours is somehow causing them to age rapidly, reducing their entire lives into a single day.",
		"trailer": "A4U2pMRV9_k",
		"watch": ""
	},
	{ // 45
		"title": "The Night House",
		"desc": "A widow begins to uncover her recently deceased husband's disturbing secrets.",
		"trailer": "2Tshycci2ZA",
		"watch": ""
	},
	{ // 46
		"title": "Spiral",
		"desc": "A criminal mastermind unleashes a twisted form of justice in Spiral, the terrifying new chapter from the book of Saw.",
		"trailer": "gzy6ORqE9IY",
		"watch": "https://www.primevideo.com/dp/amzn1.dv.gti.b3be4cb8-9da0-4646-9b4c-3a799757e75c"
	},
	{ // 47
		"title": "Don't Breathe",
		"desc": "Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man who isn't as helpless as he seems.",
		"trailer": "76yBTNDB6vU",
		"watch": "https://www.netflix.com/title/80100649"
	},
	{ // 48
		"title": "หอแต๋วแตกแหกโควิดปังปุริเย่",
		"desc": "Hor Taew Tak Hak COVID Pang Puri Yay (Hor Taew Taek Breaking Through COVID YAY)<br><br>In the 8th episode of 'Hor Taew Tak', no one knows how it starts and how it ends, all we know is 'Jae Taew' came back and 'Pancake' who is still not dead. It also comes with a memorial record about COVID-19 in 2021 in Thailand.",
		"trailer": "Dz-u6ckxDwM",
		"watch": ""
	},
	{ // 49
		"title": "เคว้ง",
		"desc": "Kueng (The Stranded)<br><br>A group of students from a private school has to survive in a deserted island after a tsunami disaster, but seems like there is 'something' blocking them doing so.",
		"trailer": "gXXPRKdcN50",
		"watch": "https://www.netflix.com/title/80242491"
	},
	{ // 50
		"title": "Friend Zone",
		"desc": "Friend Zone, a guy who is stuck in a 'friend zone' to the one who likes for more than 10 years, until when no one knows how this relationship is going to end, will they be a couple, or will they break up!",
		"trailer": "4S81gZQ68LE",
		"watch": ""
	},
	{ // 51
		"title": "ฉลาดเกมส์โกง",
		"desc": "Chalad Game Gong (Bad Genius)<br><br>Using a 'genius' in a bad way can lead to the life you never expect",
		"trailer": "JcUf9ANCpNY",
		"watch": "https://www.netflix.com/title/80245442"
	},
	{ // 52
		"title": "๙ ศาสตรา",
		"desc": "Gao Satra (Nine Satra)<br><br>A story of 'Odd', a boy who has to save the whole entire kingdom of Bangkok from a giant 'Tae Ha Yuk Sa' ",
		"trailer": "J0Wvh4KJOkg",
		"watch": ""
	},
	{ // 53
		"title": "Tootsies & The Fake",
		"desc": "The Fake starts when 'Golf', a big transvestite guy who made 'Katy', a celebrity, get into a big accident. She doesn't wake up but an advertisement campaign must remain working, he must find another presenter, or PAY A COST OF 50 MILLION BAHT",
		"trailer": "dcr-gSaZOuM",
		"watch": "https://www.netflix.com/title/81131413"
	},
	{ // 54
		"title": "I Fine..Thank You..Love You",
		"desc": "'Pleng', an English tutor, has to deal with a situation where one of her student broke up with her girlfriend and went to the United States, the problem is that she can't speak English",
		"trailer": "ELFL42u8mv8",
		"watch": ""
	},
	{ // 55
		"title": "รักฉุดใจนายฉุกเฉิน",
		"desc": "Ruk Chud Jai Nai Chuk Chern (My Ambulance)<br><br>The Love in an emergency department, having everyone shocked with the magic power between the couple, and it leads to unexpected situation, deaths, and so many treatments!",
		"trailer": "JOCIPuwL5AE",
		"watch": "https://www.youtube.com/watch?v=wWbAcdbMi-A&ab_channel=NadaoBangkok"
	}
		
]

let featured = 		[0	,1	,2	,3	,4	,5	,6	,7	,8	,9		];
let adventure = 	[10	,11	,12	,13	,14	,15	,8	,16	,17	,4		];
let action = 		[18	,14	,8	,19	,15	,20	,24					];
let drama = 		[21	,22 ,23 ,25	,27	,28	,29	,30	,31	,32	,33	];
let comedy = 		[19	,33	,18	,35	,36	,37	,38	,39	,40	,41		];
let horror = 		[42	,43	,44	,45	,46	,47						];
let thai = 			[48	,49	,50	,51	,52	,53	,54	,55				];


function to(x) {
  document.getElementById(x).scrollIntoView(true);
}

function link(x) {
  location.href = x;
}

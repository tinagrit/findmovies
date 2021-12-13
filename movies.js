// JavaScript Document
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let movraw = urlParams.get('id');

if (movraw == null || movraw == '') {
    movraw = 'null';
}


function trailer(x) {
    window.scrollTo(0,0)
    document.querySelector('#movie .overlay').classList.toggle('active')
    document.querySelector('body').classList.toggle('cantscroll')
    document.querySelector('#movie .overlay iframe').contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}

let movnum = Number(movraw);
let data = movies[movnum];

if (data.title == undefined) {
    data = movies['null'];
}

document.querySelector('title').innerHTML = data.title + ' - findmovies';

document.querySelector('body').style.backgroundImage = 'url("img/posters/'+movnum+'.jpg")';
document.querySelector('.miniposter').src = "img/posters/"+movnum+".jpg";
document.querySelector('.movietitle').innerHTML = data.title;
document.querySelector('.moviedesc').innerHTML = data.desc;

if (data.watch != '') {
    document.querySelector('.menulink.play').onclick = () => {link(data.watch)}
    document.querySelector('.menulink.play').classList.remove('disabled');
}

if (data.trailer != '') {
    document.querySelector('.menulink.trailer').classList.remove('disabled')
    document.querySelector('.menulink.trailer').onclick = trailer;
    document.querySelector('.overlay iframe').src = 'https://www.youtube.com/embed/' + data.trailer + '?enablejsapi=1&version=3&playerapiid=ytplayer';
}

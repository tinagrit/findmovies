let emailelm = document.getElementById('email');

function infoon() {
    document.querySelector('#inquiry .info').style.visibility = 'visible'
}

document.getElementById('topicSelect').addEventListener('change',()=> {
    switch(document.getElementById('topicSelect').value) {
        case "none": document.querySelector('#inquiry .info').style.visibility = 'hidden';break;
        case "compliment": emailelm.innerHTML   = 'compliment@gmail.com';infoon();break;
        case "complaint": emailelm.innerHTML    = 'complaint@gmail.com';infoon();break;
        case "service": emailelm.innerHTML      = 'service@gmail.com';infoon();break;
        case "inquiry": emailelm.innerHTML      = 'inquiry@gmail.com';infoon();break;
        case "movie": emailelm.innerHTML        = 'movie@gmail.com';infoon();break;
        case "claim": emailelm.innerHTML        = 'claim@gmail.com';infoon();break;
        case "suggest": emailelm.innerHTML      = 'suggest@gmail.com';infoon();break;
        case "other": emailelm.innerHTML        = 'other@gmail.com';infoon();break;
        default: document.querySelector('#inquiry .info').style.visibility = 'hidden';break;
    }
})
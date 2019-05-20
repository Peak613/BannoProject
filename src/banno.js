
import './styles.css'

var loader = document.getElementById("loader");
var spanTitle = document.getElementById("mySpan");

var div1 = document.getElementById("myDiv");

var myHeaders = new Headers();

let parser = new DOMParser();
let parsedHtml;
let HtmlText;

var first = 0;
var second = 0;
var third = 0;

var info = [];
var isPaused = false;
var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

var myRequest = new Request('https://cors-anywhere.herokuapp.com/http://banno.com', myInit);
function getPage() {

    isPaused = true;
    unshowPage();
    fetch(myRequest)


        .then(function (response) {
            if (!response.ok) {

                div1.innerText = 'Error loading content, please try again later'
                showPage();

                throw Error(response.statusText);
            }

            return response;
        })

        .then((response) => response.text()) 

        .then(function (data) {
            var loader = document.getElementById("loader");
            var spanTitle = document.getElementById("mySpan");

            HtmlText = data;
            parsedHtml = parser.parseFromString(data, 'text/html');

            isPaused = false;



        }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ', error.message);
        })
}


function showPage() {
    
    for (var i = 0; i < info.length; i++) {
        var node = document.createElement("LI");
        node.innerText=info[i]; 
        div1.appendChild(node);
    }

    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function unshowPage() {
    document.getElementById("myDiv").style.display = "none";
    document.getElementById("loader").style.display = "block";
}

function char_count(str) {
    let alphan = 'abcdefghijklmnopqrstuvwxyz0123456789'
    alphan = alphan.split("");

    let counts = new Array(alphan.length + 1).fill(0);
   
    for (var i = 0; i < str.length; i++) {
        for (var j = 1; j <= alphan.length; j++) {
            if (str[i].toLowerCase() == alphan[j - 1]) {
                counts[j]++;
            }
        }
    }

    for (var i = 0; i < counts.length; i++) {
        if (counts[i] > counts[first]) { first = i; }
    }
    for (var i = 0; i < counts.length; i++) {
        if (counts[i] > counts[second] && counts[i] < counts[first]) { second = i; }
    }
     for (var i = 0; i < counts.length; i++) {
        if (counts[i] > counts[third] && counts[i] < counts[second]) { third = i; }
    }

    info.push(`Most common Alphanumeric char: ${alphan[first-1]}, count: ${counts[first]}`);
    info.push(`Second most common Alphanumeric char: ${alphan[second-1]}, count: ${counts[second]}`);
    info.push(`Third most common Alphanumeric char: ${alphan[third-1]}, count: ${counts[third]}`);

}

function processor() {
    //alphanumeric top 3
    char_count(HtmlText);

    //products
    let lists = parsedHtml.getElementsByTagName('li');
    info.push(`Number of Products: ${lists[1].childElementCount}`);
    

    //twitter handle
    let anchors = parsedHtml.getElementsByTagName('a');
    var twitter = '';
    for (let i = 0; i < anchors.length; i++) {
        
        if (anchors[i].innerText == "Twitter") {
            
            twitter = anchors[i].getAttribute('href');
        }
    }
    info.push(`Twitter handle: ${twitter}`);

    //financial insitution
    var myPattern = new RegExp('(\\w*' + 'financial institution' + '\\w*)', 'gi');
    var matches = HtmlText.match(myPattern);
    info.push(`Financial Institution occurs ${matches.length} times in text`);

    //pngs
    let imgs = parsedHtml.getElementsByTagName('img');
    let links = parsedHtml.getElementsByTagName('link');
    let metas = parsedHtml.getElementsByTagName('meta');
    myPattern = new RegExp('(\\w*' + '.png' + '\\w*)', 'gi');
    var str = "";
    for (let i = 0; i < imgs.length; i++) {
        str = str + imgs[i].getAttribute('src')
    }
    for (let i = 0; i < links.length; i++) {
        str = str + links[i].getAttribute('href')
    }
    for (let i = 0; i < metas.length; i++) {
        str = str + metas[i].getAttribute('content')
    }
    matches = str.match(myPattern);
    info.push(`There are ${matches.length+1} png images on the page`);
    
    showPage();
}

function waiting() {

    if (isPaused) {
        setTimeout(function () { waiting() }, 100);
    } else {

        processor();
        
    }

}
getPage();
waiting();
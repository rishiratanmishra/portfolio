// Hero Section Floating Button

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var button = document.querySelector('.hiring-hero-section-button');

  if (currentScrollPos > 50) {
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '20px';
    button.style.backgroundColor = '#0A1';
  } else {
    button.style.position = 'absolute';
    button.style.top = '150px';
    button.style.right = '55px';
    button.style.backgroundColor = '';
  }

  button.style.transition = 'top 0.5s ease-in-out, right 0.5s ease-in-out';
};

// Hero Section Floating Button

var mql = window.matchMedia("(max-width: 768px)");

function handleMediaChange(mql) {
  var button = document.querySelector('.hiring-hero-section-button');

  if (mql.matches) {
    button.style.position = 'fixed';
    button.style.top = '50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -0%)';

  } else {
    button.style.position = 'absolute';
    button.style.top = '150px';
    button.style.right = '55px';
    button.style.backgroundColor = '#0A1';
    button.style.transform = 'none';
  }
  
  button.style.transition = 'top 0.5s ease-in-out, left 0.5s ease-in-out, transform 0.5s ease-in-out';
}

mql.addListener(handleMediaChange);
handleMediaChange(mql);




// Skills Button Code

function onHTML() {
  var btnclick = (document.getElementById('btn-text').innerText =
    'With strong understanding in HTML, Rishi is capable in building complex structures for the web pages.');
     document.getElementById("btn-text").style.color = "yellow";
}

function onCSS() {
  var btnclick = (document.getElementById('btn-text').innerText =
    'With strong understanding in CSS, Rishi is capable in building complex designs & animations for the web pages.');
    document.getElementById("btn-text").style.color = "yellow";
}

function onJS() {
  var btnclick = (document.getElementById('btn-text').innerText =
    'With strong understanding in Javascript, Rishi is capable in building complex logic for making web pages functional.');
  document.getElementById("btn-text").style.color = "yellow";

}
function onReact() {
  var btnclick = (document.getElementById('btn-text').innerText =
    'With strong understanding in React, Rishi is capable in building complex UI, designs & resuseable props for the web apps.');
    document.getElementById("btn-text").style.color = "yellow";

}
function onEJS() {
  var btnclick = (document.getElementById('btn-text').innerText =
    'With intermediate understanding in expressJs, Rishi is capable in building servers and connecting to APIs.');
    document.getElementById("btn-text").style.color = "yellow";

}
function onGit() {
  var btnclick = (document.getElementById('btn-text').innerText =
    'Rishi has a solid understanding of version control using Github.');
    document.getElementById("btn-text").style.color = "yellow";

}
function onmySQL() {
  var btnclick = (document.getElementById('btn-text').innerText =
    'With strong understanding in mySQL, Rishi is capable in working for full stack websites.');
    document.getElementById("btn-text").style.color = "yellow";

}
function onWP() {
  var btnclick = (document.getElementById('btn-text').innerText =
    'Rishi has knowledge of the content management system, WordPress, and has an understanding of search engine optimization (SEO). ');
    document.getElementById("btn-text").style.color = "yellow";

}
// Skills Button Code

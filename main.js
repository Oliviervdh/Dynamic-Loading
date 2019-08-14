var container = document.getElementById("container");
var firstPage = document.getElementById("first");
var secondPage = document.getElementById("second");
var thirdPage = document.getElementById("third");
var loadIcon = document.getElementById("home");

var spinner = document.createElement('i');
spinner.setAttribute("class", "fas fa-spinner fa-spin mr-2");



firstPage.addEventListener('click', loadFirst);
function loadFirst(){

    container.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(function (){

        loadIcon.removeChild(loadIcon.childNodes[0]);
        loadIcon.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit!";

fetch('first.html')
    .then(function(response){
        return response.text();
    })
    .then(function(response) {
        container.innerHTML = response;
    });

    }, 700);

    loadIcon.innerText = "Loading First ...";
    loadIcon.insertBefore(spinner, loadIcon.childNodes[0]);

}




secondPage.addEventListener('click', loadSecond);
function loadSecond() {

    container.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(function (){

        loadIcon.removeChild(loadIcon.childNodes[0]);
        loadIcon.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit!";

    fetch('second.html')
        .then(function (response) {
            return response.text();
        })
        .then(function (response) {
            container.innerHTML = response;
        });

    }, 700);

    loadIcon.innerText = "Loading Second ...";
    loadIcon.insertBefore(spinner, loadIcon.childNodes[0]);
}



thirdPage.addEventListener('click', loadThird);
function loadThird() {

    container.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(function (){

        loadIcon.removeChild(loadIcon.childNodes[0]);
        loadIcon.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit!";

    fetch('third.html')
        .then(function (response) {
            return response.text();
        })
        .then(function (response) {
            container.innerHTML = response;
        });

}, 700);

loadIcon.innerText = "Loading Third ...";
loadIcon.insertBefore(spinner, loadIcon.childNodes[0]);
}





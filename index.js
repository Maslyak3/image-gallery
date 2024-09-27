let search = document.querySelector('#search');
search.addEventListener(click, () => {
    sendApi()
})
search.addEventListener(keydown, () => {
    if (event.key === Enter)
    sendApi();
});

function sendApi() {

}

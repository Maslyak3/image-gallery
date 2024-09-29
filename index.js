let search = document.querySelector('#search');
search.addEventListener('click', () => {
    fetchApi()
})
search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter')
    fetchApi(search.value);
});

async function fetchApi(query) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=Mdwg280ski4Qkel6nW_V02v9dOROUAtxaGqCdoslQs8`
    );
    let result = await response.json();
        if (result.results.length > 0) {
            getPhotos(result);
    }

}
fetchApi()


let grid = document.querySelector('.grid');


function getPhotos(result) {
        grid.innerHTML = "";
    result.results.forEach(picture => {


        const image = document.createElement('img');

            image.src = picture.urls.small;
            image.classList.add('img');
            image.width = 50;
            grid.append(image);

        })
}


let button = document.querySelector('.submit')
button.addEventListener('click', () => {
  fetchApi(search.value)
})
window.onload = function () {
  search.focus();
};

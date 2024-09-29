let search = document.querySelector('#search');
search.addEventListener('click', () => {
    fetchApi()
})
search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter')
    fetchApi();
});

async function fetchApi() {
    const response = await fetch(
      'https://api.unsplash.com/search/photos?page=1&query=office&client_id=Mdwg280ski4Qkel6nW_V02v9dOROUAtxaGqCdoslQs8'
    );
    let result = await response.json();
    console.log(result)
    if (result.length > 0) {getPhotos(result) }

}
fetchApi()


let grid = document.querySelector('.grid');


function getPhotos(result) {

        grid.innerHTML = "";
        result.foreach(picture => {
            const image = document.createElement('img');
            image.src = picture.urls.small
            image.classlist.add('img')
            grid.append(image);

        })


}


// img.innerHTML = response.results.urls.small_s3;

// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=984ae24ab42310467bfb640a790d1eaa&text=winter&format=rest&auth_token=72157720930077804-12ddde883df57621&api_sig=4bcf7507b100b5f08853c325517e44de

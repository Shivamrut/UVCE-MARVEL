document.addEventListener('DOMContentLoaded', () => {
    const catImage = document.querySelector('.cat-image');
    
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const catImageUrl = data[0].url;
            catImage.src = catImageUrl;
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
        });
});

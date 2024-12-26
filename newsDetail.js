document.addEventListener('DOMContentLoaded', () => {
    const news = JSON.parse(localStorage.getItem('selectedNews'));

    if(news) {
        document.getElementById('newsImage').src = news.imageURL  || 'https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg';
        document.getElementById('newsAuthor').textContent = news.author  || 'Unknown Author';
        document.getElementById('newsDate').textContent = news.publishedAt  || 'Unknown Date';
        document.getElementById('newsDescription').textContent = news.description  || 'No Texts';
    } else {
        document.body.innerHTML = '<h1 class="text-center text-danger">News details not found!</h1>';
    }

})
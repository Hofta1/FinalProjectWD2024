const url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-11-21&sortBy=publishedAt&apiKey=bfe5dd6f827f468c84a089052458a8a2'

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
  });
let array = [];

async function fetchData() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        array = data.articles;
        console.log('API Response:', data);
        const container = document.getElementById(`CardNews`);
        container.innerHTML;

        array.forEach(article => {
            const imageURL = (article.urlToImage && article.urlToImage != 'null' && article.urlToImage != '') ? article.urlToImage : 'https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg';
            const title = article.title
            const author = article.author

            const card = document.createElement('div');
            card.classList.add('col-md-4');
            card.style.padding = '10px';

            card.innerHTML = `
                <div class="card h-100">
                    <img src="${imageURL}" class="card-img-top" alt="Card Image">
                    <div class="card-body text-center">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${author}</p>
                        <button class="btn btn-primary btn-sm" type="button">Read More</button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
           
        
    }
    catch (error) {
        console.error(`Error : `,error);
        document.getElementById('newsTitle').textContent = 'Failed to load news';
        document.getElementById('newsAuthor').textContent = 'test';
        document.getElementById('newsImage').src = 'https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg';
    }
    
}




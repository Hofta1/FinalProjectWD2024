// API
// const API_KEY = 'fa57b75ad2114776b4f329a673acb9c8' // Nick's API
const API_KEY = 'bfe5dd6f827f468c84a089052458a8a2' // Chris' API
const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`

document.addEventListener('DOMContentLoaded', () => {
    const welcomeTxt = document.getElementById('welcomeText');
    const loginStatus = document.getElementById('logInStatus');
    const userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));

    // check if user has logged in
    if(userLoggedIn){

        welcomeTxt.textContent = `Welcome, ${userLoggedIn.username}`;
        loginStatus.textContent = 'Log Out'

        loginStatus.addEventListener('click', function () {
            localStorage.removeItem('userLoggedIn');
            location.reload();
        });

    } else {
        // set to guest mode
        welcomeTxt.textContent = 'Welcome, Guest';
        loginStatus.textContent = 'Log In';

        loginStatus.addEventListener('click', function (){
        window.location.href = 'index.html';
        })
    }

    fetchData();
    setupHomePage();
  });

function setupHomePage() {
    const homeButton = document.getElementById("home");
    if(homeButton) {
        homeButton.addEventListener("click", refreshPage);
    }
}

function refreshPage() {
    const currentPage = window.location.pathname
    const container = document.getElementById('CardNews')

    if(currentPage.includes('Dashboard.html')){
        container.innerHTML = '';
        fetchData();
    } else {
        window.location.href='Dashboard.html';
    }
}

async function fetchData() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        const articles = data.articles;
        console.log('API Response:', articles);
        newsCard(articles);
    }
    catch (error) {
        console.error(`Error : `,error);
        document.getElementById('newsTitle').textContent = 'Failed to load news';
        document.getElementById('newsAuthor').textContent = 'Failled to load author';
        document.getElementById('newsImage').src = 'https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg';
    }
    
}

function newsCard(articles){
    const container = document.getElementById(`CardNews`);
    // container.innerHTML = '';

    articles.forEach((article, index) => {
        const imageURL = article.urlToImage || 'https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg' // (article.urlToImage && article.urlToImage != 'null' && article.urlToImage != '') ? article.urlToImage : 'https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg';
        const title = article.title || 'no title'
        const author = article.author || 'unknown author'

        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.style.padding = '10px';

        card.innerHTML = `
            <div class="card h-100">
                <img src="${imageURL}" class="card-img-top" alt="Card Image">
                <div class="card-body d-flex flex-column text-center">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${author}</p>
                    <button id="readMore-${index}" class="btn p-2 mt-auto align-self-center" type="button">Read More</button>
                </div>
            </div>
        `;
        
        const readMoreBttn = card.querySelector(`#readMore-${index}`);
        readMoreBttn.addEventListener("click", ()=>{
            localStorage.setItem('selectedNews', JSON.stringify({
                imageURL,
                title,
                author,
                description: article.description || 'No description',
                publishedAt: article.publishedAt || 'No Date of Published',
            }));            
            window.location.href='newsDetail.html';
        });
        container.appendChild(card);
    });
}
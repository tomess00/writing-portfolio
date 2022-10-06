
// Typewriter animation
const animeText = document.querySelector('.text-anime');

new Typewriter(animeText, {
   delay: 90,
})
   .typeString('Redacteur web')
   .start();


const articles = [
   {
      id: 1,
      title: `La broderie diamant c'est quoi ? Notre explication`,
      img: 'images/article/broderie/0.jpg',
      link: `article/broderie.html`
   },

   {
      id: 2,
      title: `Une agence SEO à Toulouse pour booster votre CA`,
      img: 'images/article/agence-seo/0.jpg',
      link: `article/agence-seo.html`
   },

   {
      id: 3,
      title: `Étudiant et auto-entrepreneur, puis-je cumuler les deux ?`,
      img: 'images/article/etudiant/0.jpg',
      link: `article/etudiant.html`
   },

   {
      id: 4,
      title: '',
      img: 'images/article/',
      link: ``
   },

   {
      id: 5,
      title: '',
      img: "images/article/",
      link: ``
   },

   {
      id: 6,
      title: '',
      img: 'images/article/',
      link: ``
   }
]

const grid = document.querySelector('.grid');
console.log(grid);

window.addEventListener('DOMContentLoaded', function () {
   displayArticleItems(articles);
})

function displayArticleItems(articleItems) {
   let displayArticle = articleItems.map(function (item) {
      return `<a href="${item.link}">
      <div class="article">
         <div class="article-image">
            <img class="image" src=${item.img} alt="" />
         </div>
         <div class="article-title">
            <h3>${item.title}</h3>
         </div>
      </div>
   </a>`
   });
   displayArticle = displayArticle.join('');
   grid.innerHTML = displayArticle;
}

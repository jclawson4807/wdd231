import { articles } from '../data/articles.mjs'
 
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const homeButton = document.querySelector('#home');
const familyinfoButton = document.querySelector('#familyinfo');
const onlinesourcesButton = document.querySelector('#onlinesources');
const toolsButton = document.querySelector('#tools');
const fhCenterButton = document.querySelector('#fh-centers');
const researchhelpButton = document.querySelector('#researchhelp');

const pageIdentifierName = document.querySelector("#page-identifier-name");

homeButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
    window.location.replace("index.html");
});

familyinfoButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "familyinfo");

    populateArticles();
});

onlinesourcesButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "onlinesources");

    populateArticles();
});

toolsButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "tools");

    populateArticles();
});

fhCenterButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
    window.location.replace("fh-centers.html");
});

researchhelpButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
    window.location.replace("request-research-help.html");
});

const main = document.querySelector("main");

function generateParagraphList(list) {
    let returnString = `<h3 tabindex="0">${list.listTitle}</h3>`;

    if (list.listType == "Numbered") {
        returnString = returnString + '<ol tabindex="0">';
    }
    else {
        returnString = returnString + '<ul tabindex="0">';
    }

    list.listItems.forEach(listItem => {
        returnString = returnString + `<li tabindex="0">${listItem}</li>`;
    });

    if (list.listType == "Numbered") {
        returnString = returnString + "</ol>";
    }
    else {
        returnString = returnString + "</ul>";
    }

    return returnString;
}

function generateArticleParagraph(paragraph) {
    let returnString = '<p tabindex="0">';

    if (Object.hasOwn(paragraph, "referenceURL")) {
        returnString = returnString + `<a href="${paragraph.referenceURL}" target="blank" tabindex="0">${paragraph.referenceText}</a> `;
    }

    returnString = returnString + `${paragraph.paragraphText}`;

    if (Object.hasOwn(paragraph, "lists")) {
        paragraph.lists.forEach(listItem => {
            returnString = returnString + generateParagraphList(listItem);
        });
    }

    returnString = returnString + "</p>";

    return returnString;
}

function generateArticleSection(article) {
    let returnString = `<section class="article">
            <div class="article-header">
                <img src="images/${article.authorImage}" alt="Author Image" width="50" height="50" loading="lazy" tabindex="0">
                <p tabindex="0"><span class="article-title">${article.articleTitle}</span><span class="article-author">${article.authorName}</span></p>
            </div>
            <div class="article-body" tabindex="0">`;

    if (Object.hasOwn(article, "articleImage")) {
        returnString = returnString + `<img src="images/${article.articleImage}" alt="${article.articleImageAlt}" width="300" height="217" loading="lazy" tabindex="0"></img> `;
    }

    article.paragraphs.forEach(paragraph => {
        returnString = returnString + generateArticleParagraph(paragraph);
    });

    returnString = returnString + "</div></section>";

    return returnString
}

function populateArticles() {
    main.innerHTML = "";

    let filter = window.localStorage.getItem("articleFilter");

    if (filter == "familyinfo") {
        familyinfoButton.classList.add('active');
        onlinesourcesButton.classList.remove('active');
        toolsButton.classList.remove('active');

        pageIdentifierName.textContent = "Family Information";
    } else if (filter == "onlinesources") {
        familyinfoButton.classList.remove('active');
        onlinesourcesButton.classList.add('active');
        toolsButton.classList.remove('active');

        pageIdentifierName.textContent = "Online Sources";
    } else if (filter == "tools") {
        familyinfoButton.classList.remove('active');
        onlinesourcesButton.classList.remove('active');
        toolsButton.classList.add('active');

        pageIdentifierName.textContent = "Tools";
    }

    const newArticles = articles.filter((article) => article.articleType == filter);

    newArticles.forEach(article => {
        let returnString = generateArticleSection(article);

        main.innerHTML = main.innerHTML + returnString;
    });
}

populateArticles();






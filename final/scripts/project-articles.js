import {articles} from '../data/articles.mjs'

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

researchhelpButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
    window.location.replace("request-research-help.html");
});

const main = document.querySelector("main");

function generateParagraphList(list) {
    let returnString = `<h3>${list.listTitle}</h3>`;

    if (list.listType == "Numbered") {
        returnString = returnString + "<ol>";
    }
    else {
        returnString = returnString + "<ul>";
    }

    list.listItems.forEach(listItem => {
        returnString = returnString + `<li>${listItem}</li>`;
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
    let returnString = "<p>";

    if (Object.hasOwn(paragraph, "referenceURL")) {
        returnString = returnString + `<a href="${paragraph.referenceURL}" target="blank">${paragraph.referenceText}</a> `;
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
                <img src="images/${article.authorImage}" alt="Author Image" width="50" height="50" loading="lazy">
                <p><span class="article-title">${article.articleTitle}</span><span class="article-author">${article.authorName}</span></p>
            </div>
            <div class="article-body">`;

    if (Object.hasOwn(article, "articleImage")) {
        returnString = returnString + `<img src="images/${article.articleImage}" alt="${article.articleImageAlt}" width="${article.articleImageWidth}" height="${article.articleImageHeight}" loading="lazy"></img> `;
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






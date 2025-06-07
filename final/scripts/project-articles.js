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
    window.location.replace("project.html");
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

const articles = [
    {
        articleType: "onlinesources",
        articleTitle: "Family Search",
        authorName: "James Clawson",
        authorImage: "author-image.webp",
        articleImage: "family-search-homepage-300-217.webp",
        articleImageAlt: "Family Search homepage",
        articleImageWidth: 300,
        articleImageHeight: 217,
        paragraphs: [
            {
                referenceURL: "https://www.familysearch.org",
                referenceText: "FamilySearch",
                paragraphText: "is a multi-functional website provided by the Church of Jesus Christ of Latter - day Saints though FamilySearch International.  The functionality provided on FamilySearch is vast, and new features are provided frequently.  FamilySearch is free to use, and the access to the site is not restricted to members of the Church of Jesus Christ of Latter-day Saints."
            },
            {
                paragraphText: "FamilySearch provides a full-featured tree builder, along with access to billions of searchable records including census, marriage, death, and other vital records.  The tree tool includes a source management feature with source citation tracking.Users can search a shared global family tree, and add names to the tree.  There are also tools for merging duplicate person records."
            },
            {
                paragraphText: "FamilySearch also provides access to special record collections. For example, there are Immigration records, African American records, US and Canadian Census records, and more.  FamilySearch has an amazing AI enhanced Indexing tool, which allows volunteers to extract information from source records and make that information available to other users of the system.  This information allows records to be found using the various search engines built into the site.  Additionally, FamilySearch includes beginner friendly tools such as guided tree building tools, research hints, and virtual memory books to which users can add images and stories about their family members."
            },
            {
                paragraphText: "We will provide how-to articles and tutorials for our users focused on learning how to use FamilySearch, which is one of the premiere resources for family history researchers."
            }
        ]
    },
    {
        articleType: "onlinesources",
        articleTitle: "American Ancestors",
        authorName: "James Clawson",
        authorImage: "author-image.webp",
        articleImage: "american-ancestors-homepage-300-247.webp",
        articleImageAlt: "American Ancestors",
        articleImageWidth: 300,
        articleImageHeight: 247,
        paragraphs: [
            {
                referenceURL: "https://www.americanancestors.org",
                referenceText: "American Ancestors",
                paragraphText: "is a family history tree building site, which also provides links to other research resources. American Ancestors also provides resources to teach users how to do family history research, a live chat with experienced researches, and more. One of the linked resources provides searchable access to over 1.4 billion searchable names."
            },
            {
                paragraphText: "American Ancestors has multiple collections of family history records, including two collections related to Colonial US research, including records for Mayflower Decedents.  American Ancestors has both free and paid services.  This site can also be used to connect to professional researchers."
            }
        ]
    },
    {
        articleType: "onlinesources",
        articleTitle: "Find My Past",
        authorName: "James Clawson",
        authorImage: "author-image.webp",
        articleImage: "find-my-past-homepage-300-247.webp",
        articleImageAlt: "Find My Past",
        articleImageWidth: 300,
        articleImageHeight: 247,
        paragraphs: [
            {
                referenceURL: "https://www.findmypast.com",
                referenceText: "Find My Past",
                paragraphText: "is a family history tree and research site.  While it includes some US research materials, Find My Past is primarily focused on research using resources from the United Kingdom.  Find My Past has an excellent collection of newspaper records, as well as census and other common sources."
            },
            {
                paragraphText: "Find My Past also includes information about research related to British Royal genealogy.  Find My Past also has research resources for Australian, Irish, and other European sources.  Find My Past has both free and paid services."
            }
        ]
    },
    {
        articleType: "familyinfo",
        articleTitle: "Family History Interviews - Part 1",
        authorName: "James Clawson",
        authorImage: "author-image.webp",
        articleImage: "family-photos-300-234.webp",
        articleImageAlt: "Pile of family photos",
        articleImageWidth: 300,
        articleImageHeight: 234,
        paragraphs: [
            {
                paragraphText: "When my parents joined the Church of Jesus Christ of Latter-day Saints in the mid 1970s, they began doing recorded interviews with family members. My mother worked for a time as a secretary, and would transcribe these recordings during her lunch break.  My parents produced several short family histories based on these interviews.  I have copies of some of these histories, and have read them many times.  As a result, there are family members I feel that I know, though we have never met."
            },
            {
                paragraphText: "When I was young, my parents invited me to participate in a few of these interviews at family reunions.  Since then, I have conducted several interviews with members of my family, or with non-family members while helping others with research.  I have included some techniques that have helped make these interviews successful."
            },
            {
                paragraphText: "1) Record these interviews, and take notes during the interview with follow up questions you need to ask, things you need to research, and significant names, dates, and places.  Once you are done, transcribe the audio as soon as possible.  Review the interview, and ask follow up questions in person, by video chat or phone, or by email as soon after the interview as you can.  This is particularly helpful when talking to people with memory problems."
            },
            {
                paragraphText: "2) One very effective interview technique is to sit together and look at old photographs.  Ask the interview subject about who is in each picture, when the picture was taken, and what event was happening that led to the picture being taken.  I have found that if I take a picture of the photo using the Notes app on my phone, I can then list the names of the people in the picture and any other information I learn in the note.  I organize the notes into a folder with the name of the person being interviewed, and the interview date.  Photos can remind people of events, people, places and dates that they may not have thought of in the context of a general interview.  If there are multiple photos from the same event, go through those together so that you can get as much detail about the event as possible.  I have also found that when possible, reviewing and organizing the photos before the event can be very helpful, especially if I will have multiple interview opportunities with the same person.  In this situation, I try to focus my questions in my first interview on the person's childhood and immediate family.  I then move on to the person's courtship, dating, and marriage, then children, and then expand the discussion to moves, education, career, major accomplishments, etc. in subsequent interviews."
            },
            {
                paragraphText: "3) Another effective interview technique is to send the person a list of questions before the interview.  I will often do this a month or two before we meet, and let the person find pictures, items with nostalgic value such as a wedding dress or photos, pictures of family members or friends, high school yearbooks, etc.  This gives the person you are interviewing the chance to narrow the focus of the interview to the things he or she feels are most important.  This is most useful if you are traveling to see the person you are interviewing or the person is elderly or in moderately poor health, and you are likely to have only have one chance to do the interview."
            },
            {
                paragraphText: "4) Interviewing family members requires tact, patience, preparation, and in some cases - courage.  You may learn things about your family that you wish you had not learned.  You may also be told things that are no accurate, or are not complete.  It is important to capture all of the information you can, and then seek for sources to verify what you learn.  If you are aware of conflict or estrangement between family members, or groups of family members, tread carefully and be respectful."
            },
            {
                paragraphText: "5) If possible, bring a laptop and a scanner capable of scanning original documents.  Flat bed scanners are perfect for large, flat documents like birth or death certificates, marriage records, etc.  Photo scanners with an auto feeder are wonderful for scanning boxes of photos.  Many scanners support slide and negative adapters which allow you to scan slides or photo negatives."
            },
            {
                paragraphText: "6) If you are trying to prepare names for temple ordinances, you will need sources for names, dates, major family events, family relationships, etc.  In this case, it is helpful to ask before the interview that original sources like birth and death certificates, marriage licenses, or other such documents be gathered so that you can review them."
            },
            {
                paragraphText: "6) Offer to share the transcript of your interview, scans of original documents, and any photos you may take.  There are people I have met with who were not originally interested in talking to me, but were willing to talk once I offered to provide scanned copies of their pictures or other documents.  Scanning large photo collections can require a large time commitment, but doing so is often a rewarding project."
            },
            {
                paragraphText: "7) If you do not speak the same language as the person you are interviewing, bring a translator along with you.  This may be important even if the person is bilingual, as some original source documents may be written or printed in a language you do not speak, or which the person you are interviewing can not read."
            },
            {
                paragraphText: "If you prepare well, a family history interview can be a wonderful experience. I have been delighted by some of the things I have learned about the generations that went before me, and have developed much closer relationships with family members I have known for decades as we share tender, personal memories together.  I hope that you can have similar experiences with our own family."
            }
        ]
    },
    {
        articleType: "familyinfo",
        articleTitle: "Family History Interviews - Part 2",
        authorName: "James Clawson",
        authorImage: "author-image.webp",
        articleImage: "grandma-300-248.webp",
        articleImageAlt: "Grandma looking amused while holding large garden shears",
        articleImageWidth: 300,
        articleImageHeight: 248,
        paragraphs: [
            {
                paragraphText: "In my last article, I wrote about techniques that may help you have a successful family history interview.  In this article, I will provide a few lists of questions you may ask during an interview, organized by category.  These lists may be adapted as needed.  For example, if a family member was adopted, you may want to ask additional questions about the person's adoption date, birth name, birth family, etc.  If the person you are interviewing has published articles or books, you can talk about their motivation for writing and publishing those works.  If the person is a talented musician, you may want to record the person performing.  I will add additional lists of techniques and questions in later articles.",
                lists: [
                    {
                        listTitle: "Personal Identity and History",
                        listType: "Numbered",
                        listItems: [
                            "What was your full given name when you are born?",
                            "Have you ever been known by any other names, including nicknames?",
                            "What is your birth date?",
                            "Where were you born?",
                            "What are your talents and interests?",
                            "Have you ever experienced any major health issues?  If so, will you share that experience?",
                            "Where have you lived, and why did you move there?  Talk about your experiences in each place you have lived.",
                            "Have you ever had any 'great adventures'?  If so, tell me about them.",
                            "What are your fondest memories?",
                            "Who were your best friends growing up, and what kinds of experiences did you share?",
                            "Is faith or religion important in your life?  If so, what is your religious affiliation and how did you develop your faith?  How has your faith influenced your life and changed your character?",
                            "What is your educational background, and how did your education prepare you for your life and profession?"
                        ]
                    },
                    {
                        listTitle: "Parents",
                        listType: "Numbered",
                        listItems: [
                            "What is your father's full name?",
                            "Did your father ever use any other names, including nicknames?",
                            "When and where was your father born?",
                            "What was your mother's full name?",
                            "What was your mother's maiden name?",
                            "Did your mother ever use any other names, including nicknames?",
                            "When and where was your mother born?",
                            "When and where were they married?",
                            "If either of them have passed away, when and where did they die?",
                            "Do you know the names of your grandparents or great-grandparents?  If so, please share those as well.",
                            "What are your earliest memories of your parents?",
                            "What are your favorite memories of your parents?",
                            "How did your parents meet?",
                            "Did you get along well with your parents?",
                            "How did your parents teach or instruct in their home?",
                            "Did one or both of your parents help you learn to drive a car?",
                            "Did one or both of your parents help you learn to work?",
                            "What were the lessons or skills you learned from your parents?",
                            "Do you have any pictures your parents?  (If so, see Item 2 in 'Family History Interviews - Part 1')",
                        ]
                    },
                    {
                        listTitle: "Siblings",
                        listType: "Numbered",
                        listItems: [
                            "Do you have any siblings?",
                            "What is the full name, gender, birth date, and birth place of each of your siblings?",
                            "If any of your siblings are deceased, what is the death date of each deceased sibling?",
                            "If any of your siblings are married, what is the marriage date of each married sibling, along with the name of his or her spouse?",
                            "If any of your siblings have children, what is the name and birth date of each niece or nephew?",
                            "Did you get along well with your siblings?",
                            "What are your favorite memories of your siblings?",
                            "What kinds of games did you play together as a family?",
                            "What were your siblings' talents and interests?",
                            "If either of them have passed away, when and where did they die?",
                            "Do you know the names of your grandparents or great-grandparents?  If so, please share those as well.",
                            "What are your earliest memories of your parents?",
                            "What are your favorite memories of your parents?",
                            "How did your parents meet?",
                            "Did you get along well with your parents?",
                            "How did your parents teach or instruct in their home?",
                            "Did one or both of your parents help you learn to drive a car?",
                            "Did one or both of your parents help you learn to work?",
                            "What were the lessons or skills you learned from your parents?",
                        ]
                    },
                    {
                        listTitle: "Marriage and Family",
                        listType: "Numbered",
                        listItems: [
                            "Are you or were you ever married?",
                            "If so, what is the full name, birth date, and birth place of your spouse?",
                            "How did you two meet?",
                            "What was your courtship like? Can you remember any special experiences, dates, or moments you would like to share?",
                            "When and where did you get married?",
                            "What were the wedding and reception like?  Who attended?",
                            "Where did you live after you got married?",
                            "Did you have any children?",
                            "What is the name, gender, and birthdate of each of your children?",
                            "Have your children married?  If so, who did they marry and when?",
                        ]
                    }
                ]
            }
        ]
    },
    {
        articleType: "tools",
        articleTitle: "Online Family History Resources",
        authorName: "James Clawson",
        authorImage: "author-image.webp",
        articleImage: "family-search-homepage-300-217.webp",
        articleImageAlt: "Family Search Homepage",
        articleImageWidth: 300,
        articleImageHeight: 217,
        paragraphs: [
            {
                paragraphText: "The following are categorized lists of online resources for family history research.  These lists will be updated often. Note that resource names followed by a red asterisk have been tested and verified by our staff.  If you have suggestions for additional resources we should include in these lists, please sign up for our newsletter, and use the email address included with each issue to contact us.  We will review all suggested resources.  If you are a software vendor, and would like us to test your tools and write a review, we are happy to do so.",
                lists: [
                    {
                        listTitle: "Common Research Sites",
                        listType: "Unnumbered",
                        listItems: [
                            "<a href='https://www.familysearch.org' target='blank'>FamilySearch<span class='required-asterisk'>*</span></a>",
                            "<a href='https://www.ancestry.com' target='blank'>Ancestry.com<span class='required-asterisk'>*</span></a>",
                            "<a href='https://www.myheritage.com' target='blank'>MyHeritage.com<span class='required-asterisk'>*</span></a>",
                            "<a href='https://www.findmypast.com' target='blank'>Findmypast.com<span class='required-asterisk'>*</span></a>",
                            "<a href='https://www.genesreunited.co.uk' target='blank'>Genesreunited.co.uk</a>",
                            "<a href='https://www.onegreatfamily.com' target='blank'>Onegreatfamily.com</a>",
                            "<a href='hhttps://billiongraves.com' target='blank'>Billiongraves.com<span class='required-asterisk'>*</span></a>",
                            "<a href='https://www.findagrave.com' target='blank'>Findagrave.com<span class='required-asterisk'>*</span></a>",
                            "<a href='https://www.americanancestors.org' target='blank'>Americanancestors.org<span class='required-asterisk'>*</span></a>",
                            "<a href='https://archives.gov' target='blank'>Archives.gov</a>",
                            "<a href='https://dar.org' target='blank'>Daughters of the American Revolution</a>"
                        ]
                    },
                    {
                        listTitle: "Family History Software",
                        listType: "Unnumbered",
                        listItems: [
                            "<a href='https://www.rootsmagic.com' target='blank'>RootsMagic<span class='required-asterisk'>*</span></a>",
                            "<a href='https://www.syniumsoftware.com/macfamilytree' target='blank'>MacFamilyTree<span class='required-asterisk'>*</span></a>",
                            "<a href='https://www.mackiev.com/ftm/index.html' target='blank'>Family Tree Maker</a>",
                            "<a href='https://legacyfamilytree.com' target='blank'>Legacy Family Tree Maker</a>",
                            "<a href='https://www.family-historian.co.uk' target='blank'>Family Historian</a>"
                        ]
                    }
                ]
            }
        ]
    }
]

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






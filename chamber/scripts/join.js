const membershipLevels = [
    {
        levelName: 'Non Profit',
        yearlyCost: 0,
        levelNumber: 0,
        numberOfPositionsAvaialble: -1,
        benefits: [
            'Featured in yearly dinner honoring Sun Prairie Non-Profit organizations',
            'Featured on the Sun Prairie Chamber of Commerce sub-site for non-profits in the community',
            'Opportunity to speak at the City Council\'s Best of Sun Prairie meetings',
            'Membership in the Sun Prairie Non-Profit services Facebook group',
            'Opportunity to play in the Sun Prairie charity golf tournament',
            'Opportunity to apply for city, county, and state grants through our \'Building Wisconsin\' initiative',
            'Opportunity to apply for sponsorships or grants from companies in Sun Prairie',
            'Opportunity to particpate in the UW Madison intership pool',
            'Free booth space at our semi-annual Sun Prairie Non-Profit convention',
            'Free booth space at our annual Sun Prairie community builder convention',
            'Advertising opportunities on the Sun Prairie city website',
            'Member referrals'
        ]
    },
    {
        levelName: 'Bronze',
        yearlyCost: 500,
        levelNumber: 1,
        numberOfPositionsAvaialble: -1,
        benefits: [
            'Featured in yearly dinner honoring Sun Prairie Chamber of Commerce member organizations',
            'Featured on the Sun Prairie Chamber of Commerce sub-site for companies in the community',
            'Opportunity to speak at the City Council\'s Best of Sun Prairie meetings',
            'Membership in the Sun Prairie Businesses Facebook group',
            'Opportunity to play in the Sun Prairie charity golf tournament',
            'Opportunity to apply for city, county, and state grants through our \'Building Wisconsin\' initiative',
            'Opportunity to particpate in the UW Madison intership pool',
            'Free booth space at our semi-annual Sun Prairie Business leadership convention',
            'Free booth space at our annual Sun Prairie community builder convention',
            'Advertising opportunities on the Sun Prairie city website',
            'Opportunity to have a company representative appear on the Sun Pairie City podcast',
            'Opportunity to participate in competitive bidding for city and county contracts in your business domain if relevant',
            'Member referrals',
            'Opportunity to attend quarterly Toastmaster dinners',
        ]
    },
    {
        levelName: 'Silver',
        yearlyCost: 5000,
        levelNumber: 2,
        numberOfPositionsAvaialble: 50,
        benefits: [
            'Featured in yearly dinner honoring Sun Prairie Chamber of Commerce member organizations',
            'Featured on the Sun Prairie Chamber of Commerce sub-site for companies in the community',
            'Opportunity to submit articles to the Sun Prairie Chamber of Commerce sub-site for companies in the community',
            'Opportunity to speak at the City Council\'s Best of Sun Prairie meetings',
            'Membership in the Sun Prairie Businesses Facebook group',
            'Opportunity to play in the Sun Prairie charity golf tournament',
            'Opportunity to apply for city, county, and state grants through our \'Building Wisconsin\' initiative',
            'Opportunity to particpate in the UW Madison intership pool',
            'Opportunity to present at our semi-annual Sun Prairie Business leadership convention',
            'Free medium booth space at our semi-annual Sun Prairie Business leadership convention',
            'Free medium booth space at our annual Sun Prairie community builder convention',
            'Advertising opportunities on the Sun Prairie city website',
            'Opportunity to have a company representative appear on the Sun Pairie City podcast',
            'Opportunity to participate in competitive bidding for city and county contracts in your business domain if relevant',
            'Member referrals',
            'Opportunity to attend monthly business leader lunches',
            'Opportunity to attend quarterly Toastmaster dinners',
            'Monthly training sessions for business leaders by industry experts'
        ]
    },
    {
        levelName: 'Gold',
        yearlyCost: 15000,
        levelNumber: 3,
        numberOfPositionsAvaialble: 12,
        benefits: [
            'Opportunity for C-Suite member to be a featured speaker at yearly dinner honoring Sun Prairie Chamber of Commerce member organizations',
            'Featured on the Sun Prairie Chamber of Commerce sub-site for companies in the community',
            'Opportunity to submit articles to the Sun Prairie Chamber of Commerce sub-site for companies in the community',
            'Opportunity to speak at the City Council\'s Best of Sun Prairie meetings',
            'Participation in Managing Member group for the Sun Prairie Businesses Facebook group',
            'Company wil be listed as a sponsor for the Sun Prairie charity golf tournament',
            'Opportunity to play in the Sun Prairie charity golf tournament',
            'Opportunity to apply for city, county, and state grants through our \'Building Wisconsin\' initiative',
            'Opportunity to particpate in the UW Madison intership pool',
            'Opportunity for C-Suite member to be a featured speaker at our semi-annual Sun Prairie Business leadership convention',
            'Free large booth space at our semi-annual Sun Prairie Business leadership convention',
            'Free large booth space at our annual Sun Prairie community builder convention',
            'Be listed as a featured advertiser on the Sun Prairie city website',
            'Opportunity to have a company representative appear twice per year on the Sun Pairie City podcast',
            'Opportunity to participate in competitive bidding for city and county contracts in your business domain if relevant',
            'Member referrals',
            'Opportunity to attend monthly business leader lunches',
            'Opportunity to attend quarterly Toastmaster dinners',
            'Opportunity for C-Suite member to attend yearly Governor\s ball',
            'Monthly training sessions for business leaders by industry experts'
        ]
    }
]

const html = document.querySelector('html');
const dialog = document.querySelector("dialog");

const npMembershipButton = document.querySelector("#np-membership-button");
const bronzeMembershipButton = document.querySelector("#bronze-membership-button");
const silverMembershipButton = document.querySelector("#silver-membership-button");
const goldMembershipButton = document.querySelector("#gold-membership-button");

npMembershipButton.addEventListener('click', () => {
    getMembershipLevelDetailForLevelNumber(0);
});

bronzeMembershipButton.addEventListener('click', () => {
    getMembershipLevelDetailForLevelNumber(1);
});

silverMembershipButton.addEventListener('click', () => {
    getMembershipLevelDetailForLevelNumber(2);
});

goldMembershipButton.addEventListener('click', () => {
    getMembershipLevelDetailForLevelNumber(3);
});

function getMembershipLevelDetailForLevelNumber(levelNumber) {
    console.log(levelNumber);
    const selectedLevelArray = membershipLevels.filter((membershipLevelDetails) => membershipLevelDetails.levelNumber == levelNumber);

    console.log(selectedLevelArray);

    if (selectedLevelArray.length > 0) {
        displayMembershpLevelDetailsModal(selectedLevelArray[0]); 
    }
}

function conditionalCloseDialog(event) {

    const bondingRect = dialog.getBoundingClientRect();

    if ((event.x < bondingRect.left || event.x > bondingRect.right) || (event.y < bondingRect.top || event.y > bondingRect.bottom)) {
        dialog.close();
        html.removeEventListener('click', conditionalCloseDialog, true);
    }
}

function displayMembershpLevelDetailsModal(membershipDetail) {
    html.addEventListener('click', conditionalCloseDialog, true);
    
    dialog.innerHTML = "";

    const closeButton = document.createElement("button");
    closeButton.id = "close-dialog-button";
    closeButton.textContent = "X";

    closeButton.addEventListener('click', function() {
        dialog.close();
    });

    const dialogHeader = document.createElement("h2");
    dialogHeader.textContent = `${membershipDetail.levelName} Membership`;
    dialogHeader.appendChild(closeButton);

    const numberOfSpots = document.createElement("h3");

    if (membershipDetail.numberOfPositionsAvaialble == -1) {
        numberOfSpots.textContent = "Membership Limit: None"
    } else {
        numberOfSpots.textContent = `Membership Limit: ${membershipDetail.numberOfPositionsAvaialble}`  
    }

    const p1 = document.createElement("p");

    if (membershipDetail.yearlyCost == 0) {
        p1.textContent = `Yearly Membershp Cost: None`;
    } else {
        p1.textContent = `Yearly Membershp Cost: \$${membershipDetail.yearlyCost}.00`;
    }

    dialog.appendChild(dialogHeader);
    dialog.appendChild(numberOfSpots);
    dialog.appendChild(p1);

    membershipDetail.benefits.forEach(benefit => {
        const p = document.createElement("p");
        p.textContent = benefit

        dialog.appendChild(p);    
    });

    dialog.showModal();
}

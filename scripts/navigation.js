const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// add wayfinding
// const allButton = document.querySelector('#all');
// const cseButton = document.querySelector('#cse');
// const wddButton = document.querySelector('#wdd');
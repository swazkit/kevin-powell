import $ from 'jquery'

const navToggle = $('.mobile-nav-toggle');
const primaryNav = $('.primary-navigation');

navToggle.on('click', () => {
    primaryNav.toggleClass('opened');
})
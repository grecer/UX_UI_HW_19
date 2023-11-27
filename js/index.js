console.log("Your index.js file is loaded correctly!")

function scrollToAnchor(aid) {
    const destination = $("a[name='" + aid + "']");
    $('html,body').animate({
        scrollTop: destination.offset().top
    }, 300);
}

// bug??? - For some reason I can't get the animation to be smooth, it starts slow and then jumps to the position. 
// I couldn't find a way to fix this after messing around with both jQuery and CSS...

// scroll to home
$(document).on('click', '#home-link', function () {
    scrollToAnchor('home-section');
})

// scroll to about me
$(document).on('click', '#about-link', function () {
    scrollToAnchor('about-section');
})

// scroll to my work
$(document).on('click', '#work-link', function () {
    scrollToAnchor('work-section');
})

// scroll to contact
$(document).on('click', '#contact-link', function () {
    scrollToAnchor('contact-section');
})
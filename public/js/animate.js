let big = false;
$(document).ready(function() {
    
    window.setTimeout( timer, 1000 ); 
})

function timer() {
    animateButtons()
    window.setTimeout( timer, 1000 ); 

}

function animateButtons() {
    
    const buttonHeight = ($("#verifyButton").height());
    const buttonWidth = $("verifyButton").width();

    if (big) {
        $("#verifyButton").animate({height: `33`}, 1000);
        $("#mailerButton").animate({height: `33`}, 1000);

        big = false;
        console.log("making smaller")
    } else {
        $("#verifyButton").animate({height: `${buttonHeight + 30}`}, 1000);
        $("#mailerButton").animate({height: `${buttonHeight + 30}`}, 1000);

        big = true;
        console.log("making bigger")
    }
}
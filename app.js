// const ratingBox = document.querySelector(".rating-box");
// const thankYou = document.querySelector(".thank-you");
// const form = document.getElementById("form");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const selector = "input[name=ratings]:checked";
//     const checkedInput = document.querySelector(selector);
// })

// if (checkedInput !== null) {
//     const ratingSelection = document.getElementById("rating-selection");
//     ratingSelection.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
//     ratingBox.classList.add("hidden");
//     thankYou.classList.remove("hidden");
// }

const submitBtn = document.querySelector('.rating-box__button');
const ratingBox = document.querySelector('.rating-box');
const thankYou = document.querySelector('.thank-you');
const ratingBtns = document.querySelectorAll('.rating-btn');

submitBtn.addEventListener('click', onSubmit);

ratingBtns.forEach(btn => {
    btn.addEventListener('click', handleRatingBtnClick);
})

function onSubmit() {
    if (
        document.querySelector("input[name=ratings]:checked").value !== null
    ) {
        ratingBox.classList.add('hidden');
        thankYou.classList.remove('hidden');
        // console.log('Rate before submit');
        
    } else {
        const submitError = document.getElementById('submit-error');
        submitError.textContent = 'Rate before submit';
    }
    
    // console.log('submit click')
}

function handleRatingBtnClick(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    })
    
    const selector = "input[name=ratings]:checked";
    const checkedInput = document.querySelector(selector);
    const ratingSelection = document.getElementById("rating-selection");
    ratingSelection.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
    console.log(checkedInput);
}

// form.addEventListener("submit", function(e) {
//         e.preventDefault();   
// })

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const selector = "input[name=ratings]:checked";
//     const checkedInput = document.querySelector(selector);
// })

// if (checkedInput !== null) {
//     const ratingSelection = document.getElementById("rating-selection");
//     ratingSelection.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
//     ratingBox.classList.add("hidden");
//     thankYou.classList.remove("hidden");
// }

// console.log(ratingBtns);
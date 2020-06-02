// Your code here

// moves dodger to the left but doesn't take edge into account

// let dodger = document.getElementById("dodger");

// dodger.style.backgroundColor = "#FF69B4";

// console.log(dodger.style.left);
// console.log(dodger.style.bottom)

// dodger.style.bottom = "0px";

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//         let leftNumbers = dodger.style.left.replace("px", "");
//         let left = parseInt(leftNumbers, 10);

//         dodger.style.left = `${left - 1}px`;
//     }
// });


// move dodger left accounts for the edge
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers,10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
};

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

// move dodger right accounting for edge

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers,10);
    if (left > 0 && left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
};

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
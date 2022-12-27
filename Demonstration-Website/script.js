// Variables

let i1_count = 0;
let i2_count = 0;
let i3_count = 0;

// Functions

function infoClick(n) {
  let box = document.getElementsByClassName(`info${n}`);
  let img = document.getElementById(`i${n}`)
  let msg = document.getElementById(`m${n}`);
  if (n == 1) {
    i1_count += 1;
    if (i1_count % 2 == 0) {
      i1_count = 0;
      img.style.display = "block";
      msg.style.display = "none";
    } else {
      img.style.display = "none";
      msg.style.display = "block";
    } 
  } else if (n == 2) {
    i2_count += 1;
    if (i2_count % 2 == 0) {
      i2_count = 0;
      img.style.display = "block";
      msg.style.display = "none";
    } else {
      img.style.display = "none";
      msg.style.display = "block";
    } 
  } else if (n == 3) {
    i3_count += 1;
    if (i3_count % 2 == 0) {
      i3_count = 0;
      img.style.display = "block";
      msg.style.display = "none";
    } else {
      img.style.display = "none";
      msg.style.display = "block";
    } 
  }
}

// // Data definitions:

// let initialOffset = 0;
// let currentOffset = 0;
// let [rt, gt, bt] = [242, 236, 255]; //top
// let [ r,  g,  b] = [ rt,  gt,  bt]; //curr
// let [rb, gb, bb] = [ 70,  70, 255]; //bottom
// let increment = 3;

// // Functions:

// function scrolled() {
//   currentOffset = window.pageYOffset;
//   if (currentOffset > initialOffset) {
//     if ((r - increment) <= rb) {(r = rb);}
//     if ((g - increment) <= gb) {(g = gb);}
//     r -= increment;
//     g -= increment;
//     console.log("Down");
//   } else if (currentOffset < initialOffset) {
//     if ((r + increment) >= rt) {(r = rt);}
//     if ((g + increment) >= gt) {(g = gt);}
//     r += increment;
//     g += increment;
//     console.log("Up");
//   }
//   document.body.style.background = `rgb(${r}, ${g}, ${b})`;
//   initialOffset = window.pageYOffset;
// }

// // Main:

// window.addEventListener("scroll", scrolled);
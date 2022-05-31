let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let submit = document.querySelector("#submit");
let hide = document.querySelector("#hide");
let thanks = document.querySelector("#thankYou");
let rating = document.querySelector("#rating");
let star = 0;

//SELECT BUTTON

one.addEventListener("click", function () {
  one.classList.remove("bg-[#5F686F]");

  //UNSELCTS OTHER BUTTONS
  two.classList.remove("bg-gray-400");
  three.classList.remove("bg-gray-400");
  four.classList.remove("bg-gray-400");
  five.classList.remove("bg-gray-400");

  two.classList.add("bg-[#5F686F]");
  three.classList.add("bg-[#5F686F]");
  four.classList.add("bg-[#5F686F]");
  five.classList.add("bg-[#5F686F]");

  //SELECTS BUTTON
  one.classList.add("bg-gray-400");
  star = 1;
});

two.addEventListener("click", function () {
  two.classList.remove("bg-[#5F686F]");

  //UNSELCTS OTHER BUTTONS
  one.classList.remove("bg-gray-400");
  three.classList.remove("bg-gray-400");
  four.classList.remove("bg-gray-400");
  five.classList.remove("bg-gray-400");

  one.classList.add("bg-[#5F686F]");
  three.classList.add("bg-[#5F686F]");
  four.classList.add("bg-[#5F686F]");
  five.classList.add("bg-[#5F686F]");

  //SELECTS BUTTON
  two.classList.add("bg-gray-400");
  star = 2;
});
three.addEventListener("click", function () {
  three.classList.remove("bg-[#5F686F]");

  //UNSELCTS OTHER BUTTONS
  one.classList.remove("bg-gray-400");
  two.classList.remove("bg-gray-400");
  four.classList.remove("bg-gray-400");
  five.classList.remove("bg-gray-400");

  one.classList.add("bg-[#5F686F]");
  two.classList.add("bg-[#5F686F]");
  four.classList.add("bg-[#5F686F]");
  five.classList.add("bg-[#5F686F]");

  //SELECTS BUTTON
  three.classList.add("bg-gray-400");
  star = 3;
});
four.addEventListener("click", function () {
  four.classList.remove("bg-[#5F686F]");

  //UNSELCTS OTHER BUTTONS
  one.classList.remove("bg-gray-400");
  two.classList.remove("bg-gray-400");
  three.classList.remove("bg-gray-400");
  five.classList.remove("bg-gray-400");

  one.classList.add("bg-[#5F686F]");
  two.classList.add("bg-[#5F686F]");
  three.classList.add("bg-[#5F686F]");
  five.classList.add("bg-[#5F686F]");

  //SELECTS BUTTON
  four.classList.add("bg-gray-400");
  star = 4;
});
five.addEventListener("click", function () {
  five.classList.remove("bg-[#5F686F]");

  //UNSELCTS OTHER BUTTONS
  one.classList.remove("bg-gray-400");
  two.classList.remove("bg-gray-400");
  three.classList.remove("bg-gray-400");
  four.classList.remove("bg-gray-400");

  one.classList.add("bg-[#5F686F]");
  two.classList.add("bg-[#5F686F]");
  three.classList.add("bg-[#5F686F]");
  four.classList.add("bg-[#5F686F]");

  //SELECTS BUTTON
  five.classList.add("bg-gray-400");
  star = 5;
});

submit.addEventListener("click", function () {
  hide.classList.add("hidden");
  rating.innerText = `You Selected ${star} out of 5`;
  thanks.classList.remove("hidden");
});

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

let actionRandom = Math.floor(Math.random() * action.length);
let whoRandom = Math.floor(Math.random() * who.length);
let whatRandom = Math.floor(Math.random() * what.length);
let whenRandom = Math.floor(Math.random() * when.length);

window.onload = function() {
  //write your code here
  let mensaje = document.getElementById("excuse");
  mensaje.innerHTML = `${who[whoRandom]} ${action[actionRandom]} ${what[whatRandom]} ${when[whenRandom]}`;
  console.log("Hello Rigo from the console!");
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io", "etc."];
  let domain =
    pronoun[Math.floor(Math.random() * 2)] +
    adj[Math.floor(Math.random() * 2)] +
    noun[Math.floor(Math.random() * 2)] +
    ext[Math.floor(Math.random() * 5)];
  console.log(domain);
};

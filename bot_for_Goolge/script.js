// ==UserScript==
// @name         Bot for google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let keywords = ["гобой", "как звучит флейта", "кларнет"];
let keyword = keywords[getRandom(0,keywords.length)];


let btnK = document.getElementsByName('btnK')[0];
if(btnK != undefined){
    document.getElementsByName('q')[0].value = keyword;
    document.getElementsByName('btnK')[0].click();
}else{
    let links = document.links;

    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            console.log("Ссылка найдена"+links[i]);
            links[i].click();
            break;
        }
    }
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

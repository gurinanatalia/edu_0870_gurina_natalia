// ==UserScript==
// @name         Bot for google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let googleInput = document.getElementsByName('q')[0];
let i = 0;
let keywords = ["гобой", "как звучит флейта", "кларнет", "саксофон"];
let keyword = keywords[getRandom(0,keywords.length)];
let btnK = document.getElementsByName('btnK')[0];
let links = document.links;

if(btnK != undefined){
    let timerId = setInterval(()=>{
    googleInput.value += keyword[i];
    i++;
    if(i == keyword.length){
        clearInterval(timerId);
        btnK.click();
    }
 }, 700);

}else if(location.hostname == "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai"){
    console.log("Мы на музыкалке");
    setInterval(
        ()=>{
            let index = getRandom(0,links.length);
            if(getRandom(0,101)>80){
                location.href = 'https://www.google.com/';
            }
            else if(links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
               links[index].click();
            }
        }, getRandom(1000,3000)
    );

}else{
    let nextGooglePage = true;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            let link = links[i];
            nextGooglePage = false;
            setTimeout(()=>{link.click();},getRandom(1000,4000));
            break;
        }
    }
    if (document.querySelector('.YyVfkd').innerText == "10"){
        nextGooglePage = false;
        location.href = `https://www.google.com/`;
    }

    if(nextGooglePage){
        setTimeout(()=>{pnnext.click();}, getRandom(1000,3000));
    }
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

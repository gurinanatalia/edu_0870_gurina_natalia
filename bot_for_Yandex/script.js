// ==UserScript==
// @name         Bot for yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let keywords = ['Гобой', 'Как звучит флейта', 'Кларнет', 'Корнет', 'Багет'];
let keyword = keywords[getRandom(0,keywords.length)];
let search_button = document.getElementsByClassName('button mini-suggest__button button_theme_websearch button_size_ws-head i-bem button_js_inited')[0];
let yandexInput = document.getElementById('text');
let i=0;
let links = document.links;
let next_button = document.querySelector("a[aria-label$='Следующая страница']");


if(search_button != undefined){
    let timerId = setInterval(()=>{
    yandexInput.value += keyword[i];
    i++;
    if(i==keyword.length){
        clearInterval(timerId);
        search_button.click();}
}, getRandom(1000,1500));

}else if(location.hostname == "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai"){
    console.log("Мы на музыкалке");
    setInterval(
        ()=>{
            let index = getRandom(0,links.length);
            if(getRandom(0,101)>=80){
                location.href = "https://yandex.ru/";
            }
            else if(links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            links[index].click();
            }
        },
        getRandom(3000,7000)
    );
}else{

    let yandexNextPage = true;
    for(let i=0;i<links.length;i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            console.log("Ссылка найдена "+links[i]);
            yandexNextPage = false;
            links[i].removeAttribute('target');
            let link = links[i];
            setTimeout(()=>{link.click();}, getRandom(3000,5000));
            break;
        }
    }

    if(document.querySelector("span[aria-label$='Текущая страница 10']")){
       yandexNextPage = false;
       location.href = "https://yandex.ru/";
       }

    if (yandexNextPage){
        setTimeout(()=>{next_button.click();},getRandom(1000,4000));
    }
 }

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}


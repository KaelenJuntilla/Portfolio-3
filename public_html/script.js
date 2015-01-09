/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".yeah").css("background-color", "yellow");
    
    $('p:last').css({"background-color": "purple", "color": "white"});
    
    $('#sibling').bind('click', alertButtonClick);
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
    
    
    
});

function alertButtonClick() {
    alert("There was a button clicked");
}

function mouseOverMe() {
    $("h1").html('This is easy');
}

function mouseOutMe() {
    $('h1').html('Nathan Sucks');
}

function mouseClick() {
    $('p').html('iusdhfiuhiudhfihwieuhfweiufhwiuefhiuwhfiuhuiehfiuwefh');
}


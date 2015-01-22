/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
   $("#yeah").css("background-color", "cyan");
    
    $('#last').css({"background-color": "purple", "color": "white"});
    
    $('#sibling').bind('click', alertButtonClick);
    
    $("#heading1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('#heading4').bind('click', mouseClick);
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara'). bind('click', addPara);
    
    $('#toggleText').bind('click', toggleTheText);
    
    $("#yeah").accordion({ header: "h4"});
   
    
   
});

function alertButtonClick() {
    alert("There was a button clicked");
}

function mouseOverMe() {
    $("#heading1").html('This is easy');
}

function mouseOutMe() {
    $('#heading1').html('I dont know what to do');
}

function mouseClick() {
    $('p').html('iusdhfiuhiudhfihwieuhfweiufhwiuefhiuwhfiuhuiehfiuwefh');
}

function replaceWText() {
    $('#replaceWText').text('Replaced');
}

function addPara() {
    $('#randPara').append('<p>ADDED<p>');
}


function slideTheImage() {
    $('second').slideUp(2500);
}

function unslideTheImage() {
    $('second').slideDown(2500);
}

function toggleTheText() {
    $('#heading4').toggle(2500);
}




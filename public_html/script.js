/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".yeah").css("background-color", "yellow");
    
    $('p:last').css({"background-color": "purple", "color": "white"});
    
    $('#sibling').bind('click', alertButtonClick);
    
});

function alertButtonClick() {
    alert("There was a button clicked");
}

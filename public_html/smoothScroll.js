/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
  var Plugin = function(element){   
          console.log(element);
//get trigger
    // var trigger = document.querySelector('[href^="#"]'),
//get target
var trigger = element,
    target;

    // console.log(trigger);
  trigger.onclick = function(element){
      
    element.preventDefault();
    target = getTarget();
    
   }


    function getTarget(){
      var selector = trigger.getAttribute("href");

      return document.querySelector(selector);
    }

    // console.log(target);
    console.log("it works");
  };
  window.SmoothScroll = Plugin;
  
})();







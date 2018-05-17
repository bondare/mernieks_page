/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var menuElements = document.querySelectorAll('[data-plugin=ss]');
menuElements = Array.prototype.slice.call(menuElements);


menuElements.forEach(function(element){
  SmoothScroll(element);
})

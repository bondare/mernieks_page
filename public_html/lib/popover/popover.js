/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



(function (document, window) {
    var Plugin = function (element) {
        console.log(element);

        var trigger = element,
                title, content, popoverHtml;

        // console.log(trigger);
        if (trigger) {
            trigger.onclick = function (event) {
                event.preventDefault();
                var popoverOnPage = getPopoverHtml();
                popoverOnPage.classList.toggle('is-visible');
            };
        }
        
        function getTitle() {
            if (!title) {
                title = trigger.getAttribute('data-title');
            }
            return title;
        }
        
        function getPopoverHtml() {
            if (popoverHtml) {
                return popoverHtml;
            }
           
            popoverHtml = document.createElement('div');
            popoverHtml.classList.add('my-popover');
            popoverHtml.innerHTML = '<div class="my-popover-title">' +
                
                    getTitle() +
                    '</div>' +
                    '<div class="my-popover-content">' +
                    '<p>' +
                    getContent() +
                    '</p>' +
                    '</div>' +
                    '';
            document.body.appendChild(popoverHtml);
            
            return popoverHtml;
        }
        
        function getContent() {
            if (!content) {
                content = trigger.getAttribute('data-content');
            }
            return content;
        }
        

        
      
        console.log("it works");
    };
     
    window.Popover = Plugin;

})(document, window);

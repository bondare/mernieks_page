// click on button to scroll 

function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}
function scrollTopPos() {
    var supportPageOffset = window.pageXOffset !== undefined,
            isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
            y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    return y;
}
var distance = 40,
        timeout = 10;
function navScroll(curPos, sectionTop) {
    if (Math.abs(curPos - sectionTop) <= distance) {
        curPos = sectionTop;
    } else {
        var dir = (curPos > sectionTop) ? -distance : distance;
        // var dir;
        // if (curPos > sectionTop) {
        //		dir = -distance;
        // } else {
        // 		dir = distance;
        // }
        curPos += dir;
        setTimeout(function () {
            navScroll(curPos, sectionTop)
        }, timeout);
    }
    window.scrollTo(0, curPos);
}
function navClick(e) {
    e.preventDefault();
    var curPos = scrollTopPos(),
            href = this.getAttribute("href");

    console.log(href);
    var sectionTop = $(href).offsetTop;
    sectionTop -= 110;
    if (sectionTop < 0) {
        sectionTop = 0;
    }
    navScroll(curPos, sectionTop);
}

var navItems = $$(".js-nav-item");

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", navClick);
}




//  sliders _____________________________________________

function $$$(selector) {
    var elements = document.querySelectorAll(selector);
    return Array.from(elements);
//  return Array.prototype.slice.call(elements); // (return Array.prototype.slice.call - strādā visos browseros)
}

var sliderItems = $$$('.slider .sliderItem');
// console.log(sliderItems);

var activeItem = 0;    //console.log(activeItem);
// parbaudu aktīvo
sliderItems.forEach(function (item, index) {
    if (item.classList.contains('is-active')) {
        activeItem = index;
    }
});

// taisu pogas
var sliderButtons = [];
var dotsContainer = document.querySelector('.dots-container');
sliderItems.forEach(function (item, index) {
    var newButton = document.createElement("button");
    newButton.classList.add('dot');
    if (index === activeItem) {
        newButton.classList.add('is-active');
    }
    newButton.dataset.elementIndex = index;

    console.log(newButton);
    dotsContainer.appendChild(newButton);
    sliderButtons.push(newButton);
});


// slide to index
function slideToIndex(index) {
    // parliek active uz elementu ar doto index
//    if (index < 0 || index > sliderItems.length - 1) {
//        console.log('index nevar būt < 0 un lielāks par ' + (sliderItems.length - 1)); // -1 (jo array sakas no 0)
//        return false;
//    }
    ;

    // nonem tekošo aktīvo elementu
    sliderItems[activeItem].classList.remove('is-active');
    sliderButtons[activeItem].classList.remove('is-active');

    // nomaina activeItem uz to kas dots ar index
    activeItem = index;

    // pielek active pie elementa ar indeksu index
    sliderItems[activeItem].classList.add('is-active');
    sliderButtons[activeItem].classList.add('is-active');

}


// taisu next
function slideNext() {
    // jāuzzin kurš ir nākamais
    var nextIndex = activeItem + 1;
    // lai nepārsniedz sliderItems garumu
    if (nextIndex >= sliderItems.length) {
        nextIndex = 0;
    }
    slideToIndex(nextIndex);
}

//taisu prew
function slidePrew() {
    // jāuzzin kurš ir iepriekšējais
    var prewIndex = activeItem - 1;

    if (prewIndex <= -1) {
        prewIndex = 2;
    }
    slideToIndex(prewIndex);
}

// pieliek click eventu bultām
$(".arrow.left").addEventListener("click", slidePrew);
$(".arrow.right").addEventListener("click", slideNext);


//pieliek click eventu pogām
for (var i = 0; i < sliderButtons.length; i++) {
    console.log(i);
    sliderButtons[i].addEventListener("click", function() {
//          console.log(sliderButtons[i], sliderButtons[i]);
//          var elIndex = sliderButtons[i].dataset.elementIndex;
        slideToIndex((this.dataset.elementIndex));
    });
}





//sliders mans - jāpārtaisa!!!

//function slide() {
//
//    var sliderItems = $$(".sliderItem"),
//            itemCount = sliderItems.length,
//            active,
//            active_item_index;
//
//    for (i = 0; i < itemCount; i++) {    //  aktīvā elementa indeksu dabū
//        if (sliderItems[i].classList.contains("active")) {   //pārbauda, vai "active" class ir
//            active_item_index = i;
//        }
//    }
//
//
//    //  Buttons - prev, mid, next
//    var navButtons = $$(".slider_button"),
//        buttonCount = navButtons.length;
//
//    for (var k = 0; k < buttonCount; k++) {
//     if (navButtons[k].addEventListener("click", navClick)){
//         active_item_index = 0;
//     }
//    }
//
//    var navSelect = function (evt) {
//
//        sliderItems[active_item_index].classList.remove("active");
//
//        var button = this;
//        if (button) {
//            button.classList.remove('active');
//        }
//
////var target = evt.target;
////        var button = target.parentElement.querySelector('.slider_button.active');
////        if (button) {
////            button.classList.remove('active');
////        }
//
//
//        //  staigāt pa pogām
//        if (target.id === "nx") {
//            console.log("3th slide");
//            active_item_index = 2;
//            target.classList.add('active');
//
//        }
//        if (target.id === "mid") {
//            console.log("2nd slide");
//            active_item_index = 1;
//            target.classList.add('active');
//
//        } else if (target.id === "pr") {
//            console.log("1st slide");
//            active_item_index = 0;
//            target.classList.add('active');
//        }
//
//        sliderItems[active_item_index].classList.add("active");
//
//
//        console.log(active_item_index);
//
//    }
//
//
//
//
//    //  Arrows - prev, next
//    document.getElementById('arrows').addEventListener('click', function (arw) {
//
//        sliderItems[active_item_index].classList.remove("active");
//
//        var target = arw.target;
//
//
//        // palieilināt par 1 vai samazināt par 1 (ar bultām), pāriet uz nākamo/iepriekšejo slaidu
//        if (target.id === "next") {
//            console.log("next slide");
//            active_item_index += 1;
//            if (active_item_index >= itemCount) {
//                active_item_index -= itemCount;
//            }
//        } else if (target.id === "prev") {
//            console.log("previous slide");
//            active_item_index -= 1;
//            if (active_item_index <= -1) {
//                active_item_index += itemCount;
//            }
//        }
//
//        sliderItems[active_item_index].classList.add("active");
//
//
//        console.log(active_item_index);
//
//    }, false);
//
//
//}
//slide();
//
//
//
//
//
//
//
//
//
//
//
//window.Popover(document.querySelector('[data-plugin="popover"]'));

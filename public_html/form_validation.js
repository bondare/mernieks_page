// FORMAS VALIDĀCIJA
console.log("WORKING");

function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector); // lai nav jāraksta visu laiku caur .querySelector()
}


document.getElementById("my-form").onsubmit = function (e) {  // .onsubmit, lai stradatu ar ENTER pogu
    e.preventDefault();

    var errorHolder = {}, // glabājās visi errori

            errorMsg = {
                empty: "Nav aizpildīti visi nepieciešamie lauki!",
                notvalid: "Nederīga e-pasta adrese!"
            },
    fields = {       // objekta vērtības priekš validācijas	
        name: $("#name").value,
        email: $("#email").value,
        message: $("#message").value
    },
    printErrorMsg = function () {
        $(".error-place").innerHTML = "";
        for (var k in errorHolder) {
            var node = document.createElement("div");
            var textnode = document.createTextNode(errorHolder[k]);
            node.appendChild(textnode);
            $(".error-place").appendChild(node);
        }
    };

    printAcceptMsg = function () {
        $(".error-place").innerHTML = "Ziņojums ir nosūtīts!";
    };


    for (var j in fields) {          // izejam cauri "fields" objekta īpašibām
        if (fields[j].trim() === "") {     // pārbauda, vai nav tukšs
            errorHolder[j] = errorMsg.empty;   // pievieno kļūdas "errorHolder" objektā un pieliek īpašību no "errorMsg"
        }
    }

    //E-pasta pārbaude
    var atSign = fields.email.indexOf("@");    // meklē, vai ir simbols "@"
    if (!errorHolder.email) {
        if (atSign === -1) {
            errorHolder.email = errorMsg.notvalid;
        }
    }

    var errorlength = Object.keys(errorHolder).length;

    if (0 < errorlength) {
        printErrorMsg();
    } else {
        printAcceptMsg();
    }

//    function printErrorMsg() {
//        $(".error-place").innerHTML = "";
//        for (var k in errorHolder) {
//            var node = document.createElement("div");
//            var textnode = document.createTextNode(errorHolder[k]);
//            node.appendChild(textnode);
//            $(".error-place").appendChild(node);
//        }
//    }
//    



}



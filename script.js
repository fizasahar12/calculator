var btns = document.querySelectorAll('.btn');
// console.log(btns);



var inputVal = document.querySelector('input');
// var valueBtn = document.querySelectorAll('button');
function btnClick(e) {
    // console.log(e.innerHTML);
    inputVal.value += e.innerText;
    // console.log(inputVal.value += e.innerHTML);
}

function clearBtn(e) {
    inputVal.value = "0";
}

function getCalc() {

    inputVal.value = eval(inputVal.value);
    console.log(inputVal.value);
}


// var Btn = document.getElementById("zero");
function onkeyDown(e) {
    if (e.key == e.innerHTML) {
        btns.classList.add('active');
        inputVal.value += e.key;
        console.log(e);
    }
    else {
    }
    console.log("error")
}

// function onkeyUp(e) {
//     if(e.key == e.innerHTML){
//     Btn.classList.remove('active');
//     }
//     else{
//         console.log("error")
//     }
// }

// window.addEventListener("keydown", e => {
//     for (var i = 0; i < btns.length; i++) {
//         var btn = btns[i];
//         if (e.key == "=") {
//             // btn.classList.add('active');
//             getCalc();
//             return;
//         }

//         if (btn.innerHTML == e.key) {
//             btn.classList.add('active');
//             inputVal.value += e.key;
//             // console.log(e);
//         }
//         if (e.key == "c" || e.kry == "C") {
//             clearBtn();
//         }


//     }
// });
window.addEventListener("keypress", e => {
    for (var i = 0; i < btns.length; i++) {
        var btn = btns[i];
        if (e.key == "=" || e.key == "Enter") {
            // btn.classList.add('active');
            getCalc();
            return;
        }

        if (btn.innerHTML == e.key) {
            btn.classList.add('active');
            inputVal.value += e.key;
            // console.log(e);
        }
        if (e.key == "c" || e.key == "C") {
            clearBtn();
        }


    }
});
window.addEventListener("keyup", e => {
    for (var i = 0; i < btns.length; i++) {
        var btn = btns[i];
        if (btn.innerHTML == e.key) {
            btn.classList.remove('active');
        }

    }
});

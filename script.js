
let pickerA = document.getElementById("color-a");
let pickerB = document.getElementById("color-b");

let hexTextA = document.getElementById("hexTextA");
let hexTextB = document.getElementById("hexTextB");

hexTextA.innerHTML = pickerA.value;
hexTextB.innerHTML = pickerB.value;

let wrapperColorA = document.getElementById("color-wrap-a");
let wrapperColorB = document.getElementById("color-wrap-b");

let rotate = document.getElementById("rotate");
let degree = 0;

let copyCss = document.getElementById("copy-css");
let buttonCopy = document.getElementById("btn-copy");


let randomizer = document.getElementById("randomizer");

let code = `background: linear-gradient(${rotate.value}, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%)`;

//refreshA refreshB for updating all neccesary objects to make the exp more seamless
let refreshA = function(){
    wrapperColorA.style.backgroundColor = pickerA.value;
    hexTextA.innerHTML = pickerA.value;
    document.body.style = `background: linear-gradient(${rotate.value}, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%)`;
}

let refreshB = function() {
    wrapperColorB.style.backgroundColor = pickerB.value;
    hexTextB.innerHTML = pickerB.value;
    document.body.style = `background: linear-gradient(${rotate.value}, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%)`;
}

// event for color picker a
pickerA.addEventListener("input", refreshA);
pickerA.addEventListener("change", refreshA);

//event for color picker b
pickerB.addEventListener("input", refreshB);
pickerB.addEventListener("change", refreshB);

//rotate gradient linear
rotate.addEventListener("click", (event) => {
    degree += 45;
    if (degree === 360){
        degree = 0;
    }
    rotate.value = `${degree}deg`;
    document.body.style = `background: linear-gradient(${rotate.value}, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%)`;
}, false);

//copy css code

buttonCopy.addEventListener("click", (event) => {
    copyCss.innerHTML = "Copied!";
    setTimeout(function(){ copyCss.innerHTML = "Copy Code"; }, 1300);
    code = `background: linear-gradient(${rotate.value}, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%)`;
    let codeToCopy = document.createElement('textarea');
    codeToCopy.value = code;
    document.body.appendChild(codeToCopy);
    codeToCopy.select();
    document.execCommand('copy');
    document.body.removeChild(codeToCopy);
}, false);

//copy hex value
hexTextA.addEventListener("click", (event) => {
    let temp = hexTextA.innerHTML;
    hexTextA.innerHTML = "Copied!";
    setTimeout(function(){ hexTextA.innerHTML = temp; }, 1300);
    let codeToCopy = document.createElement('textarea');
    codeToCopy.value = hexTextA.innerHTML;
    document.body.appendChild(codeToCopy);
    codeToCopy.select();
    document.execCommand('copy');
    document.body.removeChild(codeToCopy);
}, false);

hexTextB.addEventListener("click", (event) => {
    let temp = hexTextB.innerHTML;
    hexTextB.innerHTML = "Copied!";
    setTimeout(function(){ hexTextB.innerHTML = temp; }, 1300);
    let codeToCopy = document.createElement('textarea');
    codeToCopy.value = hexTextB.innerHTML;
    document.body.appendChild(codeToCopy);
    codeToCopy.select();
    document.execCommand('copy');
    document.body.removeChild(codeToCopy);
}, false);

//generate random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let randomhex = '#';
    for (var i = 0; i < 6; i++) {
      randomhex += letters[Math.floor(Math.random() * 16)];
    }
    return randomhex;
  }

randomizer.addEventListener("click", (event) => {
    let randomColorA = getRandomColor();
    let randomColorB = getRandomColor();

    pickerA.value = randomColorA;
    pickerB.value = randomColorB;
    refreshA();
    refreshB();
}, false);

//planned to also build radial gradient feature, but I cant make it on time I guess :(
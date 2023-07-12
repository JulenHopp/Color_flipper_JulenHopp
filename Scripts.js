let tipoColor = true;

let simpleModeButton = document.querySelector('.simple-mode-button');
let hexModeButton = document.querySelector('.hex-mode-button');
let cambiarColorbutton = document.getElementById('cambiar-color-button');

simpleModeButton.addEventListener('click', () => {presedSimpleHexbutton()} );

hexModeButton.addEventListener('click', () => {presedSimpleHexbutton()});

cambiarColorbutton.addEventListener('click', () => {cambiarColor()});


function presedSimpleHexbutton(){

    if(tipoColor === false){
        tipoColor = true;

        simpleModeButton.style.backgroundColor = "#48a5e9ff";
        hexModeButton.style.backgroundColor = "#222222ff";
    }else if(tipoColor === true){
        tipoColor = false;

        simpleModeButton.style.backgroundColor = "#222222ff";
        hexModeButton.style.backgroundColor = "#48a5e9ff";
    }
}

function cambiarColor(){

    if(tipoColor === true){
        simpleColor();
    }else{
        hexColor();
    }
}

function simpleColor(){

    const randomCode = Math.random();
    const textoColor = document.getElementById("texto-color");

    switch (true) {
        case randomCode < 0.2:
          document.body.style.backgroundColor = "purple";
          textoColor.textContent = "Purple";
          break;
        case randomCode < 0.4:
          document.body.style.backgroundColor = "orange";
          textoColor.textContent = "Orange";
          break;
        case randomCode < 0.6:
          document.body.style.backgroundColor = "green";
          textoColor.textContent = "Green";
          break;
        case randomCode < 0.8:
          document.body.style.backgroundColor = "blue";
          textoColor.textContent = "Blue";
          break;
        default:
          document.body.style.backgroundColor = "red";
          textoColor.textContent = "Red";
          break;
      }
}

function hexColor(){

    const textoColor = document.getElementById("texto-color");

    const caracteresValidos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let codigo = "#";

    for (let i = 0; i < 6; i++){

        let indiceAleatorio = Math.floor(Math.random() * caracteresValidos.length);

        codigo += caracteresValidos[indiceAleatorio];

    }

    document.body.style.backgroundColor = codigo;
    textoColor.textContent = codigo;
}








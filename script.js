let bordas = document.getElementById("bordas-personagens");
let numbe = 0;

const mudaborda = () => {
  if (numbe == 1) {
    bordas.style.border = "1px solid transparent";
    bordas.style.transition = "1s";
  } else if (numbe == 2) {
    bordas.style.border = "1px solid rgba(207, 204, 1, 0.466)";
    // bordas.style.transition = "0.6s"
  }
};

const aumentare = () => {
  numbe++;
  mudaborda();
  if (numbe == 2) {
    numbe = 0;
  }
};

setInterval(aumentare, 1000);

let imagemPersonagem = document.getElementById("personagens-jogadores");
let nomePersonagem = document.getElementById('titulo-personagem')
let numeral = 0;

const mudaPersonagem = () => {
    if (numeral == 1) {
        imagemPersonagem.src= "assets/maria.png"
        nomePersonagem.innerText= "Maria"
  }
    else if (numeral == 5) {
        imagemPersonagem.src= "assets/thorin.png"
        nomePersonagem.innerText= "Thorin"
  }
    else if (numeral == 10) {
        imagemPersonagem.src= "assets/kang.png"
        nomePersonagem.innerText= "Kang"
      }
      else if (numeral == 15) {
        imagemPersonagem.src= "assets/zofia.png"
        nomePersonagem.innerText= "Zofia"
      }
};

const acrescentar = () => {
  numeral++
  mudaPersonagem()
  if (numeral == 20) {
    numeral = 0;
  }
  console.log(numeral);
};

setInterval(acrescentar, 1000);



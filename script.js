let bordas = document.getElementById("bordas-personagens");
let numbe = 0;
let imagemPersonagem = document.getElementById("personagens-jogadores");
let nomePersonagem = document.getElementById('titulo-personagem')
let numeral = 0;
let botao1 = document.getElementById('botao1')
let botao2 = document.getElementById('botao2')
let botao3 = document.getElementById('botao3')
let botao4 = document.getElementById('botao4')
let botao5 = document.getElementById('botao5')
let texto1 = document.getElementById('texto1')
let linkpage = document.getElementById('link-page')
let cidadesfoto = document.getElementById('cidadesfoto')



const mudaborda = () => {
  if (numbe == 1) {
    bordas.style.border = "1px solid transparent";
    bordas.style.transition = "1s";
  } else if (numbe == 2) {
    bordas.style.border = "1px solid rgba(207, 204, 1, 0.466)";
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

const mudabotao1 = () => {
  numeral = 0
}
const mudabotao2 = () => {
  numeral = 4
}
const mudabotao3 = () => {
  numeral = 9
}
const mudabotao4 = () => {
  numeral = 14
}
const mudabotao5 = () => {
  numeral = 19
}

const mudaPersonagem = () => {
    if (numeral == 1) {
        imagemPersonagem.src= "assets/maria.png"
        nomePersonagem.innerText= "Maria"
        texto1.innerHTML= 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, temporibus! Reiciendis explicabo labore minus ab temporibus laborum quasi saepe ducimus numquam beatae aliquid recusandae perspiciatis nulla animi debitis laudantium, aliquam sequi illo. <br> <br> Neque quod consequatur porro quos cumque voluptatem eaque numquam non? Quisquam, aspernatur blanditiis? Laboriosam dolores incidunt vero sunt dolorem ducimus eligendi ullam vitae.'
  }
    else if (numeral == 5) {
        imagemPersonagem.src= "assets/thorin.png"
        nomePersonagem.innerText= "Thorin"
        texto1.innerHTML= 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, at. Similique consequatur hic eos omnis ea doloribus et? Minus, dolorum. Dolores quo rerum quidem tempora necessitatibus illum harum id accusantium porro. <br> <br> Doloremque facere beatae expedita dolorem ab sed ducimus, nihil eaque illum veniam eum praesentium quis neque a aspernatur, consequuntur, rem necessitatibus eveniet illo maiores corporis minus voluptatibus aperiam fugit? Voluptates obcaecati, et error nostrum adipisci ipsum tempore consequatur dicta..'
  }
    else if (numeral == 10) {
        imagemPersonagem.src= "assets/kang.png"
        nomePersonagem.innerText= "Kang"
        texto1.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ab quidem voluptatem voluptatibus iusto consequuntur excepturi consequatur, amet ad vel facere, libero tempora. <br> <br> Alias vel adipisci fugiat explicabo voluptatum distinctio corrupti iure nemo laborum quasi ut beatae, perspiciatis nisi amet.'
      }
      else if (numeral == 15) {
        imagemPersonagem.src= "assets/zofia.png"
        nomePersonagem.innerText= "Zofia"
        texto1.innerHTML= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis soluta explicabo a doloribus labore, voluptate deleniti reprehenderit aut non iusto dolor sint distinctio delectus sed vel quae ullam numquam molestiae perferendis. <br> <br> Reiciendis sit illum eligendi reprehenderit beatae officiis hic eos ut laudantium, accusantium sequi quis blanditiis, quod magnam dolores quos!'
      }
      else if (numeral == 20) {
        imagemPersonagem.src= "assets/eugene.png"
        nomePersonagem.innerText= "Eugene"
        texto1.innerHTML= 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit deleniti in adipisci error qui dolores, voluptatum molestias iure accusantium commodi quis placeat rerum ullam esse, temporibus numquam! <br> <br> Ipsa veniam atque, provident ducimus quaerat in sed explicabo facere! Dolor totam rem cumque blanditiis, eveniet repellendus error maiores dignissimos? Iusto doloribus ea necessitatibus dicta omnis at nam tenetur, cum incidunt voluptate?'
      }
};

const acrescentar = () => {
  numeral++
  mudaPersonagem()
  if (numeral == 25) {
    numeral = 0;
  }
  console.log(numeral);
};

setInterval(acrescentar, 1000);



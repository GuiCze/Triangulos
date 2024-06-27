let tri = [];
const prompt = require("prompt-sync")();

let ent = {
  a1: "",
  a2: "",
  a3: "",
  tipo: "",
};
let rodar=true
while (rodar) {
  let tipo = prompt(
    "Escolha as opções: 1.Adiciona um tringulo 2.Lista os tringulos 3.Sair"
  );

  switch (tipo) {
    case "1":
      ent.a1 = +prompt("Digite o primeiro angulo");
      ent.a2 = +prompt("Digite o segundo angulo");
      ent.a3 = +prompt("Digite o terceiro angulo");
      if (ent.a1 + ent.a2 + ent.a3 == 180) {
        if (ent.a1 == ent.a2 || ent.a1 == ent.a3 || ent.a3 == ent.a2) {
          if (ent.a1 == ent.a3 && ent.a2 == ent.a3) {
            ent.tipo = "Equilatero";
            tri.push(ent);
            ent = {};
          } else {
            ent.tipo = "Isóceles";
            tri.push(ent);
            ent = {};
          }
        } else {
          ent.tipo = "Escaleno";
          tri.push(ent);
          ent = {};
        }
      } else {
        console.log(
          "Os angulos digitados não correspondem a um triangulo,digite novamente"
        );
        ent = {};
      }

      break;

    case "2":
      if (tri.lenght == 0) {
        console.log("Não existe nenhum tirnagulo registrado");
      } else {
        console.log(tri);
      }
      break;
    case '3':
        rodar=false;
  }
}

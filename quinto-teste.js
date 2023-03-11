let str = "Exemplo de string";

let inverteStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  inverteStr += str[i];
}

console.log(inverteStr);
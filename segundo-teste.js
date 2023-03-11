
let fib1 = 0;
let fib2 = 1;
let fib_atual = 0;

const num = parseInt(prompt("Digite um número: "));


while (fib_atual < num) {
  fib_atual = fib1 + fib2;
  fib1 = fib2;
  fib2 = fib_atual;
}

if (fib_atual === num) {
  console.log(num + " pertence à sequência de Fibonacci!");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}
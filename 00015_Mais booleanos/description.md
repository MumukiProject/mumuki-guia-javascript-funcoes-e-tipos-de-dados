Para terminar, agora que já vimos como escrever a alternativa condicional, é hora de um pequeno lembrete: se você usa corretamente as expressões booleanas, não precisa usar essa estrutura de controle!

Suponhamos que queiramos desenvolver uma função `eMaiorDeIdade`, que nos diz se alguém tem 18 anos ou mais. Uma tentação é escrever o seguinte:

``` javascript
function eMaiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
```

No entanto, **esse `if` é totalmente desnecessário**, dado que a expressão `edad >= 18` já é booleana:

``` javascript
function eMaiorDeIdade(idade) {
  return idade >= 18;
}
```

Muito mais simples, não acha? :wink:

> Jorge diz que para ele um número dá sorte se

> * é positivo, e
> * é um múltiplo de 2 ou 3, e
> * não é 15

> Escreva a função `eNumeroDeSorte` que dado um número diga se ele está em conformidade com a lógica anterior.

> **Não** use `if`.

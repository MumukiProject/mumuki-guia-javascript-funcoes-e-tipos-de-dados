Gobstones e JavaScript têm muito em comum. Por exemplo, em ambos idiomas podemos declarar **funções** e usá-las muitas vezes.

No entanto, sempre que você aprender um novo idioma, você encontrará um pequeno detalhe: **ele tem uma sintaxe diferente** :disappointed_relieved:. A boa notícia é que a mudança não será tão terrível como parece, então vejamos nossa primeira função de JavaScript:

``` javascript
function dobro(numero) {
   return 2 * numero;
}
```

Diferente, mas nem tanto. Se você a compara com seu equivalente Gobstones...

``` gobstones
function dobro(numero) {
  return (2* numero)
}
```

... você notará que os parênteses no `return` não são necessários, e que a última linha acaba com `;`.

> Vamos ver se você vai entendendo: escreva agora uma função de JavaScript `metade`, que pegue um número e devolva sua metade. Tenha em mente que o operador de divisão em JavaScript é `/`.

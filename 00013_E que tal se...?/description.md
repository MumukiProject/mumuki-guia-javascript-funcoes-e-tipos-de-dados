Nenhuma introdução ao idioma JavaScript estaría completa sem mostrar pelo menos uma estrutura de controle que já conhecemos: a alternativa condicional. Vamos ver um exemplo:

``` javascript
//Equivalente a Math.abs
function valorAbsoluto(umNumero) {
   if (umNumero >= 0) {
     return umNumero;
   } else {
     return -umNumero;
   }
}
```


> Vamos ver se você entendeu: escreva uma função `maximo`, que devolva o máximo entre dois números. Por exemplo, o máximo entre 4 e 5 é 5, e o máximo entre 10 e 4 é 10.

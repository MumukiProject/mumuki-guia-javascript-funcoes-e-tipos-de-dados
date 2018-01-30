E com que se come isso? Quero dizer, ehm... como se usam essas funções? Como faço para passar parâmetros e obter um resultado?

Basta colocar o nome da função e, entre parênteses, seus argumentos. É igual que em Gobstones!

``` javascript
dobro(3)
```

E também podemos usá-los dentro de outras funções! Por exemplo:

``` javascript
function dobro(numero) {
  return 2 * numero
}
 
function seguinteDoDobro(numero) {
   return doble(numero) + 1;
}
```

Ou melhor ainda:

``` javascript
function dobro(numero) {
  return 2 * numero
}
 
function seguinte(numero) {
  return numero + 1
}
 
function seguinteDoDobro(numero) {
   return seguinte(dobro(numero));
}
```

> Vamos ver se você vai entendendo; escreva as seguintes funções:

> * `anterior`: pegue um número e devolva esse número menos um.
> * `triplo`: devolva o triplo de um número.
> * `anteriorDoTriplo`: que combina as duas funções anteriores: multiplica um número por 3 e subtrai 1.
Além das operadoras matemáticas básicas `+`, `-`, `/` e `*`, existem muitas outras funções matemáticas comuns, algumas das quais já estão em JavaScript e estão prontas para serem usadas.

No entanto, a sintaxe dessas funções matemáticas é _algo_ diferente do que temos feito até agora: você deve prefixá-las com `Math.`. Por exemplo, a função que devolve o valor absoluto de um número é `Math.abs`:

``` javascript
function dobroDoAbsoluto(numero) {
   return 2 * Math.abs(numero);
}
```

> Experimente as seguintes expressões no console:

> * `Math.abs(4)`
> * `Math.abs(0)`
> * `Math.abs(-123)`
> * `Math.round(4.6)`
> * `Math.round(4.3)`
> * `Math.floor(4.3)`
> * `Math.floor(4.6)`
> * `Math.max(4, 7)`
> * `Math.min(4, 7)`

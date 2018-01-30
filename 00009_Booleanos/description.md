Agora vejamos os booleanos com um pouco mais de detalhes:

* Podem ser negados, através do operador `!`: `!temComida`
* Você pode fazer a conjunção lógica entre dois booleanos (_and_), através do operador `&&`: `temComida && temBebida`
* Você pode fazer a disjunção lógica entre dois booleanos (_or_) através do operador `||`: `umaExpressão || outraExpressão` 

> Vamos ver se você entendeu; escreva as seguintes funções:

> * `estaEntre`, pegue três números e diga se o primeiro é maior ao segundo e menor ao terceiro.
> * `estaForaDoAlcance`: pegue três números e diga se o primeiro é menor ao segundo ou maior ao terceiro

> Ejemplos:

> ```javascript
> ム estaEntre(3, 1, 10)
> true
> ム estaEntre(90, 1, 10)
> false
> ム estaEntre(10, 1, 10)
> false
> ム estaForaDoAlcance(17, 1, 10)
> true
> ```

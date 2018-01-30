E o que podemos fazer com os strings, além de compará-los? Várias coisas! Por exemplo, podemos perguntar-lhes qual é a quantidade de letras que eles tem:

``` javascript
ム longitude("biblioteca")
10
ム longitude("babel")
5
```

Ou podemos também _uni-los_, ou seja, obter **um novo** que junte dois strings:

``` javascript
ム "aa" + "bb"
"aabb"
ム "suas prateleiras" + "registram todas as combinações"
"suas prateleiras registram todas as combinações"
```

Ou podemos lhes perguntar se um começa com outro:

``` javascript
ム comecaCom("uma página", "uma")
true
ム comecaCom("a biblioteca", "todos os fogos")
false
```

> Vamos ver se você entendeu: escreva uma função `longitudeNomeCompleto`, que pegue um nome e um sobrenome, e devolva a longitude total, contando um espaço extra para separar ambos:

> ``` javascript
> ム longitudeNomeCompleto("Cosme", "Fulano")
> 12
> ```
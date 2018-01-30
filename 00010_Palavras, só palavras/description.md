Muitas vezes queremos escrever programas que funcionem com texto :page_facing_up:: queremos saber quantas palavras tem em um livro, ou converter letras minúsculas em maiúsculas, ou saber em qual parte de um texto está outro.

Para este tipo de problemas, temos os _strings_, também chamados de _cadeias de caracteres_:

* `"Agora o bebê tem que dormir no berço"`
* `'O ferro nos ajuda a brincar'`
* `"Olá miguel!"`

Como você pode ver, todos os strings estão trancados em citações simples ou duplas. Tanto faz usar um ou outro! Mas seja consistente: por exemplo, se você abriu uma citação dupla, você deve fechar com citação dupla. Além disso, um string pode estar formado por (quase) qualquer caractere: letras, números, símbolos, espaços, etc.

E o que podemos fazer com os strings? Por exemplo, compará-los, como  qualquer outro valor:

``` javascript
ム "olá" === " Olá"
false
 
ム "todo mundo" === "todo mundo"
true
```

> Vamos ver se você entendeu: escreva a função `eFimDeSemana` que leva um string que representa o nome de um dia da semana, e nos diga se é `"sábado"` ou `"domingo"`

> ```javascript
> ム eFimDeSemana("sábado")
> true
> ム eFimDeSemana("terça-feira")
> false
> ```

_Vamos fazer um stop no nosso caminho e olhemos as funções `Math.max` e `Math.min`, que podem nos economizar mais trabalho do que parece._

Precisamos de uma função que diga quanto dinheiro fica na sua conta (que tem um determinado `saldo`) se você extrai uma `quantia` de dinheiro.

``` javascript
// o saldo é $100, a quantidade a extrair, $30
ム extrair(100, 30) 
70 //ficam $70 ($100 - $30 =  $70) 
```

Mas, como não queremos que você fique em negativo, se o valor a ser extraído for maior que o saldo, nosso saldo deve ficar em zero.

``` javascript
ム extrair(100, 120)
0 //Ups, queríamos extrair mais dinheiro do que tínhamos.
  //Ficamos com $0
```

Como você pode ver, isso é _quase_ uma subtração entre `saldo` e `quantidade`, com a exceção de que estamos colocando um _limite inferior_: não pode dar menos de zero. :open_mouth:

Em outras palavras (prepare-se!, isso pode explodir sua cabeça :bomb:) `extrair` **devolve o máximo** entre a subtração `saldo - quantidade` e `0`.

> Você se anima a completar a solução que está no editor?

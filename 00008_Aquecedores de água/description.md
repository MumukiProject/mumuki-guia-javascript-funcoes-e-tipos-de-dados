Agora é a sua vez: devemos carregar um aquecedor de água :potable_water:. Não parece uma tarefa difícil, mas temos que considerar algumas coisas:

* O aquecedor de água tem 25 litros.
* Não está completamente vazio, tem um pouco de água.
* Se eu carrego o aquecedor de água com mais água do que o recipiente permite, ele transborda.

Portanto, precisamos de uma função que pegue a quantidade de água que o tanque tem atualmente e a quantidade de água que eu quero carregar, e me diga a quantidade de água que ele realmente carrega. Vamos ver alguns exemplos:

``` javascript
ム quantoCarrega(10, 5) //tem 10 litros de agua, 
                        //e eu tento carrega-lo com 5 litros mais
5 //carrega 5 litros, porque não transborda
ム quantoCarrega(20, 5)
5
ム quantoCarrega(22, 5)
3
ム quantoCarrega(25, 5)
0
```

> Escreva a função `quantoCarrega`

Como acabamos de ver, em JavaScript há pelo menos números e booleanos. No entanto, eles não são os únicos tipos de dados:

| Tipo de dado | Representa          | Exemplo | Operações                   |
|--------------|---------------------|---------|-----------------------------|
|Números       |quantidades          | `4947`  | `+`, `-`, `*`, `%`, `<`, etc|
|Boolean       | valores verdadeiros | `true`  | `&&`, `!`, etc              |
|Strings       | texto               | `"oi"`  | ...em breve o veremos...    |
|Arrays        | conjunto de coisas  | `[1, 9]`| ...em breve o veremos...    |
 
Além disso, existem operações que funcionam para todos os tipos de dados, por exemplo:

* `===`: nos diz se duas coisas são as mesmas
* `!==`: nos diz se duas coisas são diferentes

**É importante usar as operações corretas com os tipos de dados corretos**, por exemplo, não faz sentido somar dois booleanos ou fazer operações booleanas com os números. **Se você usa operações que não correspondem, coisas muito estranhas e ruins podem acontecer.** :confounded:

> Experimente as seguintes coisas no console:

> * `5 + 6` (ok, os números podem ser adicionados)
> * `5 === 6` (ok, todas as coisas podem ser comparadas)
> * `8 > 6` (ok, os números podem ser ordenados)
> * `!true` (ok, os booleanos podem se negar)
> * `false / true` (não é correto, booleanos não podem ser divididos!)

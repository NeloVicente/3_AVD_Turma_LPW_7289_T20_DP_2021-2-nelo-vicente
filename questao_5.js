/* 5) 
- Crie uma classe com os atributos produto, preço, quantidade), 
- Crie os métodos getters e setters. 
- Crie validação para não aceitar nome em branco, preço unitário e
quantidade com valor 0 (zero). 
- O preço total será o preço unitário multiplicado pela quantidade. 
- Considerando questão oferecidos descontos pelo número de
  quantidade comprada, seguindo a tabela abaixo:
a. Até 10 unidades: não tem desconto
b. de 11 a 20 unidades: 10% de desconto sobre o preço total
c. de 21 a 50 unidades: 20% de desconto sobre o preço total
d. acima de 50 unidades: 25% de desconto sobre o preço total
​
Imprima a seguinte mensagem: O produto xxx de preço 999, quantidade comprada
de 999 teve o valor total de 999, o desconto total foi de 999 e o valor pago foi de
99999
*/
​
class Produto {
  setProduto(produto) {
    if (!produto) {
      return "Necessário um nome";
    }
​
    this.produto = produto;
  }
​
  getProduto() {
    return this.produto;
  }
​
  setPreco(preco) {
    if (!preco || preco <= 0) {
      return "Necessário um valor";
    }
​
    this.preco = preco;
  }
​
  getPreco() {
    return this.preco;
  }
​
  setQtd(qtd) {
    if (!qtd || qtd <= 0) {
      return "Necessário um valor";
    }
​
    this.qtd = qtd;
  }
​
  getQtd() {
    return this.qtd;
  }
​
  setPrecoTotal() {
    if (this.qtd <= 10) {
    }
    this.precoTotal = this.preco * this.qtd;
  }
​
  getPrecoTotal() {
    return this.precoTotal;
  }
​
  setDesc() {
    if (this.qtd <= 10) {
      this.desc = 0;
    } else if (this.qtd > 10 && this.qtd <= 20) {
      this.desc = 0.1 * this.precoTotal;
    } else if (this.qtd > 20 && this.qtd <= 50) {
      this.desc = 0.2 * this.precoTotal;
    } else {
      this.desc = 0.25 * this.precoTotal;
    }
  }
​
  getDesc() {
    return this.desc;
  }
}
​
const Chocolate = new Produto();
Chocolate.setProduto("Chocolate");
Chocolate.setPreco(50);
Chocolate.setQtd(90);
Chocolate.setPrecoTotal();
Chocolate.setDesc();
​
console.log(
  `O produto ${Chocolate.getProduto()}, de preço ${Chocolate.getPreco()},quantidade comprada de ${Chocolate.getQtd()}, teve o valor total de ${Chocolate.getPrecoTotal()}, o desconto total foi de ${Chocolate.getDesc()} e o valor pago foi de ${
    Chocolate.getPrecoTotal() - Chocolate.getDesc()
  }`
);
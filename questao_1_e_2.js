/*
1) Crie uma classe Pessoa com os atributos nome, sexo e idade. 
- Crie os getters e setters. 
- No setters valide se o nome for em branco retorne uma mensagem de nome
inválido. 
- Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem
inválida. 
- Se a idade for 0 retorne uma mensagem de idade inválida. 
- Crie um método para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa
maior de idade, caso contrário exibir a mensagem pessoa menor de idade.
*/
​
class Pessoa {
  setName(name) {
    if (!name) {
      return console.log("Nome inválido");
    }
​
    this.name = name;
  }
​
  getName() {
    return this.name;
  }
​
  setSex(sex) {
    if (sex !== "Masculino" || sex !== "Feminino") {
      return console.log("Definição de sexo inválida");
    }
​
    this.sex = sex;
  }
​
  getSex() {
    return this.sexo;
  }
​
  setAge(age) {
    if (age === 0) {
      return console.log("Idade inválida");
    }
​
    this.age = age;
  }
​
  verifyAge() {
    if (this.age >= 18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de idade");
    }
  }
​
  getAge() {
    return this.age;
  }
}
​
const Pedro = new Pessoa();
// Pedro.setAge(18);
​
// console.log(Pedro.getAge());
​
/*
2) Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
quantidade de dias. 
- Crie os getters e setters. 
- No setters crie validações para não aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
zero. 
- Crie um método passeio para receber a quantidade de dias e o valor da
locação. O sistema calcule o total que será a multiplicação da quantidade de dias
pelo valor da locação.
*/
​
class Veiculos {
  setModelo(modelo) {
    if (!modelo) {
      return "Modelo não preenchido";
    }
​
    this.modelo = modelo;
  }
​
  getModelo() {
    return this.modelo;
  }
​
  setMarca(marca) {
    if (!marca) {
      return "Marca não preenchida";
    }
    this.marca = marca;
  }
​
  getMarca() {
    return this.marca;
  }
​
  setAno(ano) {
    if (!ano) {
      return "Ano inválido";
    }
    this.ano = ano;
  }
​
  getAno() {
    return this.ano;
  }
​
  setValorLocacao(valorLocacao) {
    if (valorLocacao <= 0) {
      console.log("Valor não permitido");
      return;
    }
    this.valorLocacao = valorLocacao;
  }
​
  getValorLocacao() {
    return this.valorLocacao;
  }
​
  setQtDias(qtDias) {
    if (qtDias <= 0) {
      return "Valor não permitido";
    }
    this.qtDias = qtDias;
  }
​
  getQtDias() {
    return this.qtDias;
  }
​
  passeio() {
    if (!this.valorLocacao) {
      console.log("Não foi possível fazer o cálculo!");
      return;
    }
    console.log(this.qtDias * this.valorLocacao);
    return;
  }
}
​
const newCar = new Veiculos();
newCar.setValorLocacao(5);
newCar.setQtDias(2);
newCar.passeio();
/*
  7) Crie uma classe de Funcionários com os atributos nome, salario hora, dias
trabalhados, total de faltas no ano. 
- Crie os getters e setters.
- Crie um método para calcular o salário bruto que será a multiplicação do salario
hora pelos dias trabalhados.
- Crie um método para calcular a PLR. Se o numero de faltas for igual a zero a PLR
será igual ao salário bruto. Se o número de faltas for igual a 1 a PLR será 90% do
salário bruto. Se o número de faltas for igual a 2 a PLR será 80% do salário bruto.
Se o número de faltas for igual a 3 a PLR será 70% do salário bruto. se o número de
faltas for igual a 4 a PLR será 60% do salário bruto. Se o número de faltas for maior
ou igual a 5 a PLR será zero.
- Crie um método para calcular o desconto que será 5% do salário bruto.
- Crie um método para calcular o salário liquido. Salario bruto - desconto + PLR.
- Imprima as seguintes mensagens
--- O funcionário de nome xx tem o salário bruto de 999, teve 99 falta(s) e sua PLR foi
de 999
--- O funcionário de nome xx tem o salário bruto de 999, o desconto de 999, a PLR de
999 e o salário líquido de 9999
*/
​
class Funcionarios {
  setName(name) {
    if (!name) {
      return "Necessário ter um nome";
    }
​
    this.name = name;
  }
​
  getName() {
    return this.name;
  }
​
  setSalarioHora(salarioHora) {
    if (!salarioHora) {
      return "Necessário preencher a informação";
    }
​
    this.salarioHora = salarioHora;
  }
​
  getSalarioHora() {
    return this.salarioHora;
  }
​
  setDiasTrab(diasTrab) {
    if (!diasTrab) {
      return "Necessário preencher a informação";
    }
​
    this.diasTrab = diasTrab;
  }
​
  getDiasTrab() {
    return this.diasTrab;
  }
​
  setTotalFaltasAno(totalFaltas) {
    this.totalFaltas = totalFaltas;
  }
​
  getTotalFaltas() {
    return this.totalFaltas;
  }
​
  setSalarioBruto() {
    this.salarioBruto = this.salarioHora * this.diasTrab;
  }
​
  getSalarioBruto() {
    return this.salarioBruto;
  }
​
  setPlr() {
    if (this.totalFaltas === 0) {
      this.plr = this.salarioBruto;
    } else if (this.totalFaltas === 1) {
      this.plr = 0.9 * this.salarioBruto;
    } else if (this.totalFaltas === 2) {
      this.plr = 0.8 * this.salarioBruto;
    } else if (this.totalFaltas === 3) {
      this.plr = 0.7 * this.salarioBruto;
    } else if (this.totalFaltas === 4) {
      this.plr = 0.6 * this.salarioBruto;
    } else {
      this.plr = 0;
    }
  }
​
  getPlr() {
    return this.plr;
  }
​
  setDesc() {
    this.desc = 0.05 * this.salarioBruto;
  }
​
  getDesc() {
    return this.desc;
  }
​
  setSalarioLiq() {
    this.salarioLiq = this.salarioBruto - this.desc + this.plr;
  }
​
  getSalarioLiq() {
    return this.salarioLiq;
  }
}
​
const Funcionario = new Funcionarios();
Funcionario.setName("Fulano");
Funcionario.setSalarioHora(10);
Funcionario.setDiasTrab(350);
Funcionario.setSalarioBruto(10000);
Funcionario.setTotalFaltasAno(0);
Funcionario.setDesc();
Funcionario.setPlr(0);
Funcionario.setSalarioLiq();
​
console.log(
  `O funcionário de nome ${Funcionario.getName()} tem o salário bruto de ${Funcionario.getSalarioBruto()}, teve ${Funcionario.getTotalFaltas()} faltas e sua PLR foi de ${Funcionario.getPlr()}`
);
console.log("----------------");
console.log(
  `O funcionário de nome ${Funcionario.getName()} tem o salário bruto de ${Funcionario.getSalarioBruto()}, o desconto de ${Funcionario.getDesc()} a PLR de ${Funcionario.getPlr()} e o salário líquido de ${Funcionario.getSalarioLiq()}`
);
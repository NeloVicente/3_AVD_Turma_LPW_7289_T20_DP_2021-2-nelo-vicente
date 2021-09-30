/**
 * 3) Crie uma classe para calcular o imposto de renda. 
 * Crie uma classe Pai com os atributos nome e renda anual. 
 * Crie os getters e setters com as suas validações. 
 * Crie uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
com saúde, crie os getter e setter com a validação. 
* Crie uma classe filha Pessoa Jurídica para herdar da classe Pai e com o atributo número de funcionários. 
* Crie o getter e o setter com a validação.
Regras para os cálculos:
Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. 
Se a pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.
​
Exemplo: Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos
com saúde, o imposto fica: (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
​
Pessoa Jurídica: Pessoas jurídicas pagam 16% de imposto, porém, se a empresa
possuir mais de 10 funcionários, ela paga 14% de imposto. 
​
Exemplo: Uma empresa cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 *
14% = 56.000,00
 */
​
class CalcImpostoRenda {
  calcImposto(rendaAnual, type, gastosComSaude, numeroFunc) {
    if (type === "PF") {
      if (gastosComSaude) {
        if (rendaAnual < 20000) {
          return 0.15 * rendaAnual - gastosComSaude / 2;
        } else {
          return 0.25 * rendaAnual - gastosComSaude / 2;
        }
      } else {
        if (rendaAnual < 20000) {
          return 0.15 * rendaAnual;
        } else {
          return 0.25 * rendaAnual;
        }
      }
    } else {
      if (numeroFunc <= 10) {
        return 0.16 * rendaAnual;
      } else {
        return 0.14 * rendaAnual;
      }
    }
  }
}
​
const calc = new CalcImpostoRenda();
​
console.log(calc.calcImposto(90000, "PF"));
​
class Pai {
  setName(name) {
    if (!name) {
      console.log("Necessário um nome");
      return;
    }
​
    this.name = name;
  }
​
  getName() {
    return this.name;
  }
​
  setRendaAnual(valor) {
    if (!valor) {
      console.log("Necessário um valor");
      return;
    }
​
    this.rendaAnual = valor;
  }
​
  getRendaAnula() {
    return this.rendaAnual;
  }
}
​
class PessoaFisica extends Pai {
  setGastosComSaude(gastosComSaude) {
    if (!gastosComSaude) {
      console.log("Necessário um valor");
      return;
    }
​
    this.gastosComSaude = gastosComSaude;
  }
​
  getGastosComSaude() {
    return this.gastosComSaude;
  }
}
​
const Pedro = new PessoaFisica();
Pedro.setGastosComSaude(350);
console.log(Pedro.getGastosComSaude());
​
class PessoaJuridica extends Pai {
  setNumeroFunc(numero) {
    if (!numero || numero <= 0) {
      console.log("Necessário um valor");
      return;
    }
    this.numeroFunc = numero;
  }
​
  getNumeroFunc() {
    return this.numeroFunc;
  }
}
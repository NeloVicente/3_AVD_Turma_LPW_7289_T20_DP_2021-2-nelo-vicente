class Vendedores {
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
    setSalario(salario) {
      if (!salario) {
        return "Necessário um valor";
      }
  ​
      this.salario = salario;
    }
  ​
    getSalario() {
      return this.salario;
    }
  ​
    setValorVenda(valor) {
      if (!valor) {
        return "Necessário um valor";
      }
  ​
      this.valorVenda = valor;
    }
  ​
    getValorVenda() {
      return this.valorVenda;
    }
  ​
    getDesconto() {
      return 0.08 * this.salario;
    }
  }
  ​
  class VendedorDePessoaFisica extends Vendedores {
    setRegiao(regiao) {
      if (
        regiao !== "sul" ||
        regiao !== "sudeste" ||
        regiao !== "centro-oeste" ||
        regiao !== "norte" ||
        regiao !== "nordeste"
      ) {
        return "Região não permitida";
      }
  ​
      this.regiao = regiao;
    }
  ​
    getRegiao() {
      return this.regiao;
    }
  ​
    setComissao() {
      if (this.regiao === "sul") {
        this.comissao = 0.1 * this.valorVenda;
        return;
      } else if (this.regiao === "sudeste") {
        this.comissao = 0.12 * this.valorVenda;
        return;
      } else if (this.regiao === "centro-oeste") {
        this.comissao = 0.14 * this.valorVenda;
        return;
      } else if (this.regiao === "norte") {
        this.comissao = 0.15 * this.valorVenda;
        return;
      } else {
        this.comissao = 0.17 * this.valorVenda;
        return;
      }
    }
  ​
    setSalarioTotal() {
      this.salarioTotal = this.salario + this.comissao;
    }
  ​
    getSalarioTotal() {
      return this.salarioTotal;
    }
  }
  ​
  class PessoaJuridica extends Vendedores {
    setNomeEmpresa(name) {
      if (!name) {
        return "Necessário um nome";
      }
  ​
      this.nomeEmpresa = name;
    }
  ​
    getNomeEmpresa() {
      return this.nomeEmpresa;
    }
  ​
    setTotalFunc(numero) {
      if (!numero) {
        return "Necessário um valor";
      }
  ​
      this.totalFunc = numero;
    }
  ​
    getTotalFunc() {
      return this.totalFunc;
    }
  ​
    setComissao() {
      if (this.valorVenda < 5000) {
        this.comissao = 0.02 * this.valorVenda;
      } else if (this.valorVenda >= 5000 && this.valorVenda < 10000) {
        this.comissao = 0.04 * this.valorVenda;
      } else {
        this.comissao = 0.06 * this.valorVenda;
      }
    }
  ​
    setSalarioTotal() {
      if (this.totalFunc < 100) {
        this.salarioTotal = this.salario + this.comissao + 200;
      } else {
        this.salarioTotal = this.salario + this.comissao + 300;
      }
    }
  }
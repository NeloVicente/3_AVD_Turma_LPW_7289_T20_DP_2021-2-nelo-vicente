/*
6) Escreva a classe ConversaoDeUnidadesDeTempo com métodos estáticos para
conversão
das unidades de velocidade segundo a lista abaixo, por exemplo
converMinutoParaSegundo. Exemplo: O método deverá receber a quantidade de
minutos (10 ou 20 ou 30) e retornar o valor em segundos.
• 1 minuto = 60 segundos
• 1 hora = 60 minutos
• 1 dia = 24 horas
• 1 semana = 7 dias
• 1 mês = 30 dias
• 1 ano = 365.25 dias
*/
​
class ConversaoDeUnidadesDeTempo {
  static converterMinutoParaSegundo(min) {
    return min * 60;
  }
​
  static converterHoraEmMinutos(hora) {
    return hora * 60;
  }
​
  static converterDiaEmHora(dias) {
    return dias * 24;
  }
​
  static converterSemanaEmDias(semanas) {
    return semanas * 7;
  }
​
  static converterMesEmDias(meses) {
    return meses * 30;
  }
​
  static converterAnoEmDias(anos) {
    return anos * 365.25;
  }
}
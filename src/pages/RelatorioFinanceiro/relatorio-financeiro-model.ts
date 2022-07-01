export class RelatorioFinanceiroModel{
  descricao: string
  valor: number
  dataOperacao: Date
  categoria: string
  banco: string
  conta:string


  constructor(categoria:string, banco:string, conta:string, descricao: string, valor: number, dataOperacao: Date) {
    this.descricao = descricao
    this.valor = valor
    this.dataOperacao = dataOperacao
    this.categoria = categoria
    this.banco = banco
    this.conta = conta
  }
}

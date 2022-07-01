import React from 'react';
import {RelatorioFinanceiroModel} from './relatorio-financeiro-model'; 
import './RelatorioFinanceiro.module.css';

interface Props {
    transacoes: RelatorioFinanceiroModel[]
}

function RelatorioFinanceiro({transacoes}: Props) {
    transacoes.push(new RelatorioFinanceiroModel('Transporte', 'Santander', 'Corrente', 'Gasolina', -269.03, new Date()));
    transacoes.push(new RelatorioFinanceiroModel('Empresa', 'Bradesco', 'Corrente', 'Salário', +5200.00, new Date()));
    transacoes.push(new RelatorioFinanceiroModel('Transporte', 'Banco do Brasil', 'Popança', 'Gasolina', -269.03, new Date()));
    transacoes.push(new RelatorioFinanceiroModel('Transporte', 'Santander', 'Corrente', 'Gasolina', -269.03, new Date()));
    transacoes.push(new RelatorioFinanceiroModel('Transporte', 'Santander', 'Corrente', 'Gasolina', -269.03, new Date()));
    transacoes.push(new RelatorioFinanceiroModel('Transporte', 'Santander', 'Corrente', 'Gasolina', -269.03, new Date()));
    transacoes.push(new RelatorioFinanceiroModel('Transporte', 'Santander', 'Corrente', 'Gasolina', -269.03, new Date()));
    transacoes.push(new RelatorioFinanceiroModel('Transporte', 'Santander', 'Corrente', 'Gasolina', -269.03, new Date()));
    transacoes.push(new RelatorioFinanceiroModel('Transporte', 'Santander', 'Corrente', 'Gasolina', -269.03, new Date()));

  return (
  <main>
    <div className="container-fluid">
        <div className="alert alert-success estiloSaldo" role="alert">
        <span className="estiloTextoSaldo">Olá, Maria Aparecida. Seu saldo atual é:</span> <span id="espaco"></span>
        <span className="estiloTextoValor">R$ 8.313,11</span>
        </div>
    </div>

    <button className="botaoModal btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
    data-bs-whatever="@mdo">Adicionar Transação</button>

<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Dados da transação</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form >
        <div className="modal-body">
            <div className="mb-3">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" aria-describedby="validationServer03Feedback" required/>
                <label>Categoria</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" aria-describedby="validationServer03Feedback" required />
                <label>Banco</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" aria-describedby="validationServer03Feedback" required />
                <label>Conta</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" aria-describedby="validationServer03Feedback" required />
                <label>Descrição</label>
              </div>
            </div>
            <div className="mb-3 form-floating">
              <input type="date" className="form-control" required />
              <label>Data</label>
            </div>
            <div className="mb-3">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" aria-describedby="validationServer03Feedback" required />
                <label>Valor</label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button className="btn btn-primary" type="submit">Adicionar</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <table className="row-border hover table table-hover">
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Banco</th>
          <th>Conta</th>
          <th>Descrição</th>
          <th>Data Operação</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
      {transacoes.map(item => (
          <tr>
          <td>{ item.categoria }</td>
          <td>{ item.banco }</td>
          <td>{ item.conta }</td>
          <td>{ item.descricao }</td>
          <td>{ item.dataOperacao.toLocaleDateString()}</td>
          <td>{ item.valor} </td>
        </tr>
        ))}
      </tbody>
    </table>

  </main>

  );
}

export default RelatorioFinanceiro;

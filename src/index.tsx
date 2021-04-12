import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Model, Server } from 'miragejs';

new Server({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Frelance de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6900,
          createdAt: new Date('2021-04-12 10:14:00'),
        },
        {
          id: 2,
          title: 'Supermercado',
          type: 'withdraw',
          category: 'compras',
          amount: 900,
          createdAt: new Date('2021-04-12 12:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return  schema.create('transaction', data);
  
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


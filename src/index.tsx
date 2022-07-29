import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model} from 'miragejs';


createServer ({
  models:{
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Web',
          type: 'deposit',
          categoty: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-07-21 12:00:00')          
        },
        {
          id:2,
          title: 'Alugel',
          type: 'withdraw',
          categoty: 'Casa',
          amount: 1100,
          createdAt: new Date('2022-07-06 12:00:00')          
        }
      ],
    })
},

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request)=> {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


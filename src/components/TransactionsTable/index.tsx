import React, { useEffect } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
     
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr> 
        </thead>
        <tbody>
          <tr>
            <td>Website Development</td>
            <td className="deposit">U$ 12.500</td>
            <td>Development</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>Website Development</td>
            <td className="withdraw">U$ -2.500</td>
            <td>Development</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>Website Development</td>
            <td className="deposit">U$ 3.100</td>
            <td>Development</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>Website Development</td>
            <td className="withdraw">U$ -500</td>
            <td>Development</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>Website Development</td>
            <td className="deposit">U$ 1.500</td>
            <td>Development</td>
            <td>10/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

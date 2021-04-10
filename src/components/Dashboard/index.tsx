import React from 'react'
import { Container, Content } from '../Dashboard/styles'
import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'

export function Dashboard() {
  return (
    <Container>
      <Content >
        <Summary />
        <TransactionsTable />
      </Content>
    </Container>
  )
}

 


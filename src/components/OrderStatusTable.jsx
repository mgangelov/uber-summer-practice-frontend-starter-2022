import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap';

function TableContainer(props) {
  return (
    <Container style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '180px',
    }}
    >
      {props.children}
    </Container>
  );
}

TableContainer.propTypes = {
  children: PropTypes.node,
};

export default function OrderStatusTable(props) {
  if (props.ordersData.length === 0) {
    return (
      <TableContainer>
        <p>No data</p>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <Table striped bordered hover>
        <thead>
          <tr style={{
            backgroundColor: 'black',
            color: 'white',
          }}
          >
            <th align="right">ID</th>
            <th align="right">Status</th>
          </tr>
        </thead>
        <tbody>
          {props.ordersData.map(({
            OrderID,
            Status,
          }) => (
            <tr key={OrderID}>
              <td>
                {OrderID}
              </td>
              <td align="right">{Status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

OrderStatusTable.propTypes = {
  ordersData: PropTypes.array,
};

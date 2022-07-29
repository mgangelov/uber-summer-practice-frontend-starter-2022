import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap';
import JsonData from './data.json';

function TableContainer(props) {
  return (
    <Container style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '600px',
    }}
    >
      {props.children}
    </Container>
  );
}

TableContainer.propTypes = {
  children: PropTypes.node,
};

// [
//   {
//     “id”: 1,
//     "name”:”caesar”,
//     “category”: “salad”,
//     “price”: “11.90$”,
//   },
//   {
//    “id”: 2,
//     “name”:”carbonara”,
//     “category”: “pasta”,
//     “price”: “13.90$”,
//   }
//   ]

function JsonDisplay() {
  const DisplayData = JsonData.map(
    (info) => (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.category}</td>
        <td>{info.price}</td>
      </tr>
    ),
  );
  if (DisplayData.length === 0) {
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
            <th align="right">Name</th>
            <th align="right">Category</th>
            <th align="right">Price</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData}
        </tbody>
      </Table>

    </TableContainer>
  );
}

export default JsonDisplay;

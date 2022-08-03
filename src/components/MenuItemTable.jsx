import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap';

function TableContainer(props) {
  return (
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      {props.children}
    </Container>
  );
}

TableContainer.propTypes = {
  children: PropTypes.node,
};

function DisplayData(props) {
  const { info } = props;

  return (
    <tr key={props.trKey}>
      <td>{info.id}</td>
      <td>{info.name}</td>
      <td>{info.category}</td>
      <td>{info.price}</td>
      <td align="center">
        <button type="button" onClick={() => props.onQuantityChange('-', info.id)} style={{ marginLeft: '20px', background: 'black', color: 'white' }}>-</button>
        {/* REPLACE COUNT WITH info.quantity, remove count stuff after */}
        <p style={{ display: 'inline-block', marginLeft: '20px' }}>{info.quantity}</p>
        <button type="button" onClick={() => props.onQuantityChange('+', info.id)} style={{ marginLeft: '20px', background: 'black', color: 'white' }}>+</button>
      </td>
    </tr>
  );
}

export default function MenuItemTable(props) {
  const [localMenuData, setLocalMenuData] = useState(props.menuData);

  const handleQuantityChange = (operation, menuItemID) => {
    const currItem = localMenuData.find((item) => item.id === menuItemID);
    if (operation === '+') {
      currItem.quantity += 1;
    } else if (operation === '-' && currItem.quantity > 0) {
      currItem.quantity -= 1;
    }

    const index = localMenuData.indexOf(currItem);
    const newLocalMenuData = [...localMenuData];
    newLocalMenuData.splice(index, 1, currItem);
    setLocalMenuData(newLocalMenuData);
  };

  if (props.menuData.length === 0) {
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
            <th style={{ textAlign: 'center' }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {localMenuData.map((menuItem) => (
            <DisplayData
              key={menuItem.id}
              trKey={menuItem.id}
              info={menuItem}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </tbody>
      </Table>

    </TableContainer>
  );
}

MenuItemTable.propTypes = {
  menuData: PropTypes.array,
};

export function getItems(array) {
  const result = array.filter((quantity) => quantity > 0);
  return result;
}

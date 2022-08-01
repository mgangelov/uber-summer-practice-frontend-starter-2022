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
  const [count, setCount] = useState(0);
  const onClickFunc = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <tr key={props.trKey}>
      <td>{info.id}</td>
      <td>{info.name}</td>
      <td>{info.category}</td>
      <td>{info.price}</td>
      <td align="center">
        <button type="button" onClick={onClickFunc} style={{ marginLeft: '20px', background: 'black', color: 'white' }}>-</button>
        {/* REPLACE COUNT WITH info.quantity, remove count stuff after */}
        <p style={{ display: 'inline-block', marginLeft: '20px' }}>{count}</p>
        <button type="button" onClick={() => setCount(count + 1)} style={{ marginLeft: '20px', background: 'black', color: 'white' }}>+</button>
      </td>
    </tr>
  );
}

export default function MenuItemTable(props) {
  console.log('Menu data is ', props.menuData);
  // Update menuData, add quantity property to every menu item
  const menuDataWithQuantity = menuData.map();
  // Use localMenuData to display items
  const [localMenuData, setLocalMenuData] = useState(menuDataWithQuantity);
  if (props.menuData.length === 0) {
    return (
      <TableContainer>
        <p>No data</p>
      </TableContainer>
    );
  }

  const handleQuantityChange = (operation, menuItemID) => {

    // Check if operation is plus or minus
    // If plus:
    //   1. Find menuItem in localMenuData
    //   2. Increase/decrease quantity of local item
    //   3. Set new  localMenuData to contain new item
    
    
    setLocalMenuData({...localMenuData, "new item with increased quality"})
  };

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
          {/* Change menuData with localMenuData here */}
          {props.menuData.map((data) => (
            <DisplayData
              key={data.id}
              trKey={data.id}
              info={data}
              onQuantityChange={(operation) => handleQuantityChange(operation, data.id)}
            />
          ))}
        </tbody>
      </Table>

    </TableContainer>
  );
}

MenuItemTable.propTypes = {
  menuData: PropTypes.node,
};

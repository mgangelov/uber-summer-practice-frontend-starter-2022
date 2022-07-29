import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
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

export function DisplayData(props) {
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
        <p style={{ display: 'inline-block', marginLeft: '20px' }}>{count}</p>
        <button type="button" onClick={() => setCount(count + 1)} style={{ marginLeft: '20px', background: 'black', color: 'white' }}>+</button>
      </td>
    </tr>
  );
}

function JsonDisplay() {
  const [amount, setAmount] = useState([]);

  return (
    <div>
      <table className="table table-strped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th style={{ textAlign: 'center' }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {JsonData.map((data) => (
            <DisplayData
              key={data.id}
              trKey={data.id}
              info={data}
              setAmount={setAmount}
            />
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default JsonDisplay;

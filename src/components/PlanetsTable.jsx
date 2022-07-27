import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap';

function TableContainer(props) {
  return (
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '900px',
    }}
    >
      {props.children}
    </Container>
  );
}

TableContainer.propTypes = {
  children: PropTypes.node,
};

export default function PlanetsTable(props) {
  if (props.planetsData.length === 0) {
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
            backgroundColor: 'aqua',
          }}
          >
            <th>Name</th>
            <th align="right">Climate</th>
            <th align="right">Rotation period</th>
            <th align="right">Terrain</th>
          </tr>
        </thead>
        <tbody>
          {props.planetsData.map(({
            name, climate, rotation_period: rotationPeriod, terrain,
          }) => (
            <tr key={name}>
              <td>
                {name}
              </td>
              <td align="right">{climate}</td>
              <td align="right">{`${rotationPeriod} hrs`}</td>
              <td align="left">
                <ul>
                  {terrain.split(',').map((t) => <li key={t}>{t}</li>)}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

PlanetsTable.propTypes = {
  planetsData: PropTypes.array,
};

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CharacterForm from '../ViewProfileForm';

const INITIAL_VALUES = {
  name: '',
  age: '',
  email: '',
  affinity: 'light',
};

export default function CharacterPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [showCharacterModal, toggleCharacterModal] = useState(false);

  const onFormSubmit = () => toggleCharacterModal(true);

  const navigate = useNavigate();

  return (
    <>
      <div>
        <Button
          variant="outline-primary"
          onClick={() => navigate('/statistics')}
          style={{
            position: 'relative',
            top: '20px',
            flex: 1,
            width: '120px',
          }}
        >
          {' '}
          Statistics

        </Button>
      </div>
      <h1
        className="stat"
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '60px',
          textAlign: 'center',
        }}
      >
        Editing Profile

      </h1>

      <Container style={{
        paddingTop: '30px',
        paddingBottom: '10px',

      }}
      >
        <p>
          Add your new data for the fields which you want to change and in the other
          fields insert your current data
        </p>
        <CharacterForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
      </Container>
    </>
  );
}

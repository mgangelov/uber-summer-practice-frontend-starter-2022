import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EditProfileForm from '../EditProfileForm';

const INITIAL_VALUES = {
  name: '',
  age: '',
  email: '',
};

export default function EditProfilePage() {
  const [values, setValues] = useState(INITIAL_VALUES);
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
        <EditProfileForm values={values} setValues={setValues} onSubmit={() => {}} />
      </Container>
    </>
  );
}

import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import EditProfileForm from '../EditProfileForm';

const INITIAL_VALUES = {
  name: '',
  phoneNumber: '',
  email: '',
};

export default function EditProfilePage() {
  const url = 'http://127.0.0.1:5000';
  const [cookies, setCookie] = useCookies(['x-access-tokens']);
  const [values, setValues] = useState(INITIAL_VALUES);

  const fetchData1 = useCallback(async () => {
    const profileData = await fetch(`${url}/courier`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-tokens': cookies['x-access-tokens'],
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    const profileDataJSON = await profileData.json();
    setValues({
      name: profileDataJSON.name,
      phoneNumber: profileDataJSON.phone_number,
      email: profileDataJSON.email,
    });
  }, [cookies]);

  useEffect(() => {
    fetchData1();
  }, [fetchData1]);

  // console.log(JSON.stringify(viewProfile.name));

  const onFormSubmit = async () => {
    console.log(JSON.stringify(values));
    await fetch(`${url}/courier/edit_profile`, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'x-access-tokens': cookies['x-access-tokens'],
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        name: values.name,
        phone_number: values.phoneNumber,
        email: values.email,
      }),
    });
    alert('Updated successfully');
  };

  const navigate = useNavigate();

  return (
    <>
      <h1
        className="stat"
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '60px',
          textAlign: 'center',
          lineHeight:'2.2',
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
          Add your new data for the fields which you want to change
        </p>
        <EditProfileForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
      </Container>
    </>
  );
}

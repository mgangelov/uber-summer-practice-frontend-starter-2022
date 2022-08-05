import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import { Container } from 'react-bootstrap';
import republicLogo from '../../static/republicLogo.png';
import empireLogo from '../../static/empireLogo.png';
import CharacterForm from '../CharacterForm';
import CharacterModal from '../CharacterModal';

const INITIAL_VALUES = {
  name: 'ivan',
  age: 0,
  email: '',
  affinity: 'light',
};

function ImageContainer(props) {
  return (
    <Container style={{
      height: '400px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '10px',
    }}
    >
      {props.children}
    </Container>
  );
}

ImageContainer.propTypes = {
  children: PropTypes.node,
};

export default function CharacterPage(props) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [showCharacterModal, toggleCharacterModal] = useState(false);
  const [logoSrc, setLogoSrc] = useState();
  const [cookies, setCookie] = useCookies(['x-access-tokens']);

  useEffect(() => {
    setLogoSrc(values.affinity === 'light' ? republicLogo : empireLogo);
  }, [values.affinity]);

  const onFormSubmit = () => {
    toggleCharacterModal(true);
  };

  const onModalClose = () => {
    toggleCharacterModal(false);
    setValues(INITIAL_VALUES);
  };

  return (
    <>
      <Container style={{
        paddingTop: '30px',
        paddingBottom: '10px',
      }}
      >
        <p>
          Hello, your access token is
          {' '}
          {cookies['x-access-tokens']}
        </p>
        <CharacterForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
      </Container>
      <CharacterModal characterData={values} visible={showCharacterModal} onClose={onModalClose} />
    </>
  );
}

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

export default function CharacterPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [showCharacterModal, toggleCharacterModal] = useState(false);
  const [logoSrc, setLogoSrc] = useState();

  useEffect(() => {
    setLogoSrc(values.affinity === 'light' ? republicLogo : empireLogo);
  }, [values.affinity]);

  const onFormSubmit = () => toggleCharacterModal(true);

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
        <ImageContainer>
          <img
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
            }}
            src={logoSrc}
            className="republic-logo"
            alt="republic-logo"
          />
        </ImageContainer>
        <p>Hello, please submit your application for a new Star Wars character</p>
        <CharacterForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
      </Container>
      <CharacterModal characterData={values} visible={showCharacterModal} onClose={onModalClose} />
    </>
  );
}

import React, { useState } from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  padding: 20px;
  width: auto;
  display: flex;
  height: 60px;
  justify-content: flex-start;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    margin-right: 30px;
    li {
      text-decoration: none;
      color: #000;
      font-size: 20px;
      padding: 0 15px 10px;
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

const Form = styled.form`
  width: 30%;
  input {
    width: 100%;
    padding: 5px;
    border: 1.5px solid #ccc;
  }
`;

const RedBorderLi = styled.li`
  border-bottom: 5px solid red;
`;

const GreenBorderLi = styled.li`
  border-bottom: 5px solid green;
`;

const OrangeBorderLi = styled.li`
  border-bottom: 5px solid orange;
`;

const BlueBorderLi = styled.li`
  border-bottom: 5px solid blue;
`;

const Nav = ({ handleMainNews, handleSource, handleSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(searchInput);
  };

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  return (
    <NavBar>
      <h2 onClick={handleMainNews}>JOURNAL NEWS</h2>
      <ul>
        <RedBorderLi id="google-news-ar" onClick={handleSource}>
          Google News
        </RedBorderLi>

        <GreenBorderLi id="la-gaceta" onClick={handleSource}>
          La Gaceta
        </GreenBorderLi>

        <OrangeBorderLi id="Infobae" onClick={handleSource}>
          Infobae
        </OrangeBorderLi>

        <BlueBorderLi id="La-Nacion" onClick={handleSource}>
          La Nacion
        </BlueBorderLi>
      </ul>
      <Form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
      </Form>
    </NavBar>
  );
};

export default Nav;

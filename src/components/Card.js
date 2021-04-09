import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
 width: 300px;
 height: 400px;
 padding: 15px;
 text-align: justify;
 line-height: 18px;
 overflow: hidden;
 h4 {
  margin: 0;
 }
 h4:hover {
  cursor: pointer;
  text-decoration: underline;
 }
 p {
  line-height: 18px;
 }
 div {
  display: flex;
  align-items: center;
  font-size: 15px;
  p {
   margin-right: 15px;
  }
 }
`;

const Div = styled.div`
 height: 40%;
 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
 }
`;

// excelente esta solucion para los colores!!!!
const sourceBackgroundColor = {
 'Google News (Argentina)': 'red',
 'Infobae': 'orange',
 'Tn.com.ar': 'indigo',
 'La Gaceta': 'green',
 'CNN': 'goldenrod',
 'Pronto.com.ar': 'hotpink',
 'La Nacion': 'blue',
 'Lavoz.com.ar': 'sienna',
 'Ambito.com': 'darkcyan',
 'Clarin.com': 'crimson'
}

const Source = styled.p`
 white-space: nowrap;
 color: #fff;
 padding: 5px;
 background-color: ${({fuente}) => sourceBackgroundColor[fuente] ? sourceBackgroundColor[fuente] : 'black'};
`;

const Card = ({noticia}) => {

 const publicationDate = new Date(noticia.publishedAt).toLocaleString();

 return (
  <Article>
   <Div>
   <img src={noticia.urlToImage} alt={noticia.source.name}/> 
   </Div>
   <div>
    <Source fuente={noticia.source.name}>{noticia.source.name}</Source>
    <p>{publicationDate}</p>

   </div>
   <h4>{noticia.title}</h4>
   <p>{noticia.description}</p>
  </Article>
 )
};

export default Card;

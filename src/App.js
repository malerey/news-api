import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import CardsContainer from './components/CardsContainer';
import Footer from './components/Footer';

const API_KEY = '34da431f86ec4ae0811df13d2ae48768';
const App = () => {
  const [news, setNews] = useState([]);
  const [mainNews, setMainNews] = useState(true);
  const [search, setSearch] = useState('');
  const [source, setSource] = useState('');

  useEffect(() => {
    const BASE_URL = 'https://newsapi.org/v2/top-headlines?'
    const searchSource = source ? `sources=${source}&` : ''
    const searchQuery = search ? `language=es&q=${search}&` : ''
    const apiKey = `apiKey=${API_KEY}`
    const country = !search && !source ? `country=ar&` : ''

    const searchString = BASE_URL + country + searchSource + searchQuery + apiKey
    fetch(searchString)
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [mainNews, search, source]);

  const handleSource = e => {
    setSource(e.target.id)
  };

  const handleSearch = query => {
    setSearch(query)
  };

  const handleMainNews = () => {
    setMainNews(!mainNews)
    setSearch('')
    setSource('')
  }

  return (
    <>
      <Nav
        handleMainNews={handleMainNews}
        handleSource={handleSource}
        handleSearch={handleSearch}
      />
      <CardsContainer newsArray={news} />
      <Footer />
    </>
  );
};

export default App;

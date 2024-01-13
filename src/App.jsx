import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './views/config/Routes.jsx';

import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import PagePreviews from "./views/config/PagePreviews.json";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(PagePreviews);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredResults = PagePreviews.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <>
      <Router>
        <Header handleSearch={handleSearch} searchQuery={searchQuery} />
        {renderRoutes(searchResults)}
        <Footer />
      </Router>
    </>
  );
}

export default App;

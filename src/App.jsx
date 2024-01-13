import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { pages } from "./views/config/PageList.js";
import Footer from "./components/Footer.jsx";
import Home from "./views/Home.jsx";
import PagePreviews from "./views/config/PagePreviews.json";

const importComponent = (path) => lazy(() => import(/* @vite-ignore */`./views/${path}`));


function App() {
  
  const [searchQuery, setSearchQuery] = useState('');
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
        <Routes>
            <Route path="/" element={<Home filteredResults={searchResults} />} />
            {pages.map((page) => (
            <Route
                key={page.path}
                path={`/${page.path}`}
                element={
                <Suspense>
                    {React.createElement(importComponent(page.component))}
                </Suspense>
                }
            />
            ))}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

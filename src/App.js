import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import ProductList from './components/ProductList';
import Form from './components/Form';
import { useTelegram } from './hooks/useTelegram';
import './App.css';

const App = () => {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
      <Routes >
        <Route index element={<ProductList />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

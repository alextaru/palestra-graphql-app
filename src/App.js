import "./App.css";
import React, { useState, useEffect } from "react";
import service from "./service";

function App() {
  const [produtos, setProdutos] = useState({});
  const [vendedores, setVendedores] = useState({});

  useEffect(() => {
    buscarProdutos();
    buscarVendedores();
  }, []);

  const buscarProdutos = async () => {
    const response = await service.getAllProdutos();
    setProdutos(response.data[0]);
  };

  const buscarVendedores = async () => {
    const response = await service.getAllVendedores();
    setVendedores(response.data[0]);
  };

  return (
    <div className="App">
      Produtos: {JSON.stringify(produtos)}
      <tr />
      Vendedores: {JSON.stringify(vendedores)}
    </div>
  );
}

export default App;

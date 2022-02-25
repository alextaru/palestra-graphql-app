import "./App.css";
import React, { useState, useEffect } from "react";
import service from "./service";

function App() {
  const [produtos, setProdutos] = useState({});
  const [vendedores, setVendedores] = useState({});

  useEffect(() => {
    buscarVendedoresEProdutos();
  }, []);

  const buscarVendedoresEProdutos = async () => {
    const response = await service.getVendedoresEProdutos();
    setProdutos(response.produtos[0]);
    setVendedores(response.vendedores[0]);
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

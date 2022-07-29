import { Dashboard } from "./components/Dashbord";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTrasactionModal } from "./components/NewTrasactionModal";
import {TransactionsProvider } from "./hooks/useTransaction";


Modal.setAppElement('#root'); // Acessibilidade

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header OnOpenNewTransactionModal={handleOpenNewTransactionModalOpen} />
      <Dashboard />
      <NewTrasactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen} />
      <GlobalStyle />
      </TransactionsProvider>
  );
}


import React from "react";
import "./styles.css";
import { Header } from './components'


const Main = ({ children, title, showAddButton, handleClick }) => {





  return (
    <main className="main bg-light">
      <Header title={title} showAddButton={showAddButton} value={""} handleClick={handleClick} />
      {children}
    </main>
  )
}

export { Main };

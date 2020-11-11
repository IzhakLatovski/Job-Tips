import React from "react";
import "./styles.css";
import TipList from "./components/TipList";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <TipList />
    </div>
  );
}

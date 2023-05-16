import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Works } from "./components/Works/Works";
import { StudyCase } from "./components/StudyCase/StudyCase";
import clients from "./data/clients";

function App() {
  const { clientNameStudyCase } = useParams();
  const [clientName, setClientName] = useState(undefined);

  useEffect(() => {
    const foundClient = clients.find(
      (client) => client.name === clientNameStudyCase
    );
    setClientName(foundClient);
  }, [clientName]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:clientNameStudyCase" element={<StudyCase />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

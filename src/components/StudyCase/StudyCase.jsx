import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./StudyCase.css";
import clients from "../../data/clients";

export const StudyCase = (props) => {
  const { clientNameStudyCase } = useParams();
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    const foundClient = clients.find(
      (client) => client.name === clientNameStudyCase
    );
    setClientName(foundClient);
  }, [clientName]);
  return (
    <div className="studycase__wrapper">
      <div>nom: {clientName.name}</div>
      <div>titre: {clientName.title}</div>
      <div>description: {clientName.description}</div>
    </div>
  );
};

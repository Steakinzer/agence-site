import React from "react";
import "./Works.css";
import { Link, Outlet } from "react-router-dom";
import clients from "../../data/clients";

export const Works = () => {
  return (
    <div className="works__wrapper">
      {clients.map((client) => (
        <Link to={`/works/${client.name}`} key={client.name}>
          {client.name}
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

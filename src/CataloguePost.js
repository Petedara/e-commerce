import React from "react";
import Cataloguehead from "./components/Cataloguehead";
import Product from "./components/Product";
import "./cataloguepost.css";
import users from "./business.js";

console.log(users[1].name);

export default function cataloguepost() {
  return (
    <nav className="cataloguepost">
      {users.map((user) => {
        return <div>
          <Cataloguehead name={user.name} niche={user.niche} />
          <Product />
        </div>;
      })}
    </nav>
  );
}

import React from "react";
import {AiOutlineSearch} from "react-icons/ai";
import Styles from "./styles.module.css";
function Search() {
  return (
    <div className={Styles.search}>
      <input type="text" placeholder="Buscar nota" className={Styles.input} />
      <AiOutlineSearch className={Styles.icon} />
    </div>
  );
}

export default Search;

import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => (
  <div className={styles.searchBox}>
    <h2 className={styles.title}>Find contacts by name</h2>
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder=""
    />
  </div>
);

export default SearchBox;

import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={styles.searchBox}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts..."
    />
  </div>
);

export default SearchBox;

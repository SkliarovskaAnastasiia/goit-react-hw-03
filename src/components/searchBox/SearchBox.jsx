import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={css.searchBox}>
      <label className={css.searchBoxLabel}>Find contacts by name</label>
      <input
        className={css.SearchBoxField}
        type="text"
        name="searchContact"
      ></input>
    </div>
  );
}

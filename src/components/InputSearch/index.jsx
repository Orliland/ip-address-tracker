import "./styles.css";
import IconArrow from "./../../assets/icon-arrow.svg";

export default function InputSearch({ ipRes, setIpRes, handleIpSearch }) {
  const handleIpChange = (e) => {
    setIpRes(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={ipRes}
        placeholder="Search for any IP address or domain"
        onChange={(e) => handleIpChange(e)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleIpSearch();
          }
        }}
      />
      <button className="search__button" onClick={handleIpSearch}>
        <img className="search__icon" src={IconArrow} alt="search ip icon" />
      </button>
    </div>
  );
}

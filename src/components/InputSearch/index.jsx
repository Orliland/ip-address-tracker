import "./styles.css";
import IconArrow from "./../../assets/icon-arrow.svg";

export default function InputSearch({ ip, setIp }) {
  const handleIpChange = (e) => {
    setIp(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={ip}
        placeholder="Search for any IP address or domain"
        onChange={(e) => handleIpChange(e)}
      />
      <button className="search__button">
        <img className="search__icon" src={IconArrow} alt="search ip icon" />
      </button>
    </div>
  );
}

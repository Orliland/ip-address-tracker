import "./styles.css";

function Result({ label, value }) {
  return (
    <div className="result">
      <span className="result__label">{label}</span>
      <span className="result__value">{value}</span>
    </div>
  );
}

export default function ResultGrid({ ipData }) {
  return (
    <div className="results">
      <Result
        label="IP ADDRESS"
        value={ipData == null || ipData == undefined ? "loading" : ipData.ip}
      />
      <Result
        label="LOCATION"
        value={
          ipData == null || ipData == undefined
            ? "loading"
            : `${ipData.location.city}, ${ipData.location.region} ${ipData.location.postalCode}`
        }
      />
      <Result
        label="TIMEZONE"
        value={
          ipData == null || ipData == undefined
            ? "loading"
            : ipData.location.timezone
        }
      />
      <Result
        label="ISP"
        value={ipData == null || ipData == undefined ? "loading" : ipData.isp}
      />
    </div>
  );
}

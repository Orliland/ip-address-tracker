import { useState, useEffect } from "react";
import InputSearch from "./components/InputSearch";
import Map from "./components/Map";
import getIpData from "./utils/getIpData";
import { isIP } from "is-ip";
import "./App.css";

function App() {
  const [ip, setIp] = useState("");
  const [ipRes, setIpRes] = useState("");
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    getIpData(ip).then((r) => {
      setIpData(r);
      setIp(r.query);
    });
  }, [ip, setIp, setIpData]);

  const handleIpSearch = () => {
    if (isIP(ipRes)) {
      setIp(ipRes);
    } else {
      if (ipRes === "") {
        alert("Please, input a IP Address");
      } else {
        alert("IP Address Invalid");
      }
    }
  };

  return (
    <div>
      <InputSearch
        ipRes={ipRes}
        setIpRes={setIpRes}
        handleIpSearch={handleIpSearch}
      />
      <Map ip={ip} ipData={ipData} />
    </div>
  );
}

export default App;

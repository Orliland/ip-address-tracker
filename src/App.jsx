import { useState, useEffect } from "react";
import InputSearch from "./components/InputSearch";
import Map from "./components/Map";
import ResultGrid from "./components/ResultGrid";
import getIpData from "./utils/getIpData";
import { isIP } from "is-ip";
import "./App.css";

function App() {
  const [ip, setIp] = useState("");
  const [ipRes, setIpRes] = useState("");
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    getIpData(ip).then((r) => {
      console.log(r);
      setIpData(r);
      setIp(r.ip);
    });
  }, [ip, setIp, setIpData]);

  const handleIpSearch = () => {
    if (isIP(ipRes)) {
      setIp(ipRes);
    } else {
      if (ipRes === "") {
        alert("Please enter an IP address");
      } else {
        alert("Invalid IP Address");
      }
    }
  };

  return (
    <main className="main">
      <header className="header">
        <h1 className="logo">IP Address Tracker</h1>
      </header>
      <section className="form">
        <InputSearch
          ipRes={ipRes}
          setIpRes={setIpRes}
          handleIpSearch={handleIpSearch}
        />
        <ResultGrid ipData={ipData} />
      </section>
      <Map ip={ip} ipData={ipData} />
    </main>
  );
}

export default App;

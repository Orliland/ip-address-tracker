import { useState, useEffect } from "react";
import InputSearch from "./components/InputSearch";
import getIpData from "./utils/getIpData";
import "./App.css";

function App() {
  const [ip, setIp] = useState("");
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    getIpData(ip).then((r) => {
      setIp(r.query);
      setIpData(r);
    });
  }, [ip, setIp, setIpData]);

  return (
    <div>
      <InputSearch ip={ip} setIp={setIp} />
    </div>
  );
}

export default App;

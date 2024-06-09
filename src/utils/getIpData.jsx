async function getIpData(ip) {
  const apiKey = import.meta.env.VITE_API_IP_KEY;
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
  let response = await fetch(url);
  try {
    let request = await response.json();
    return request;
  } catch {
    return new Error("fallo el cargar los datos");
  }
}

export default getIpData;

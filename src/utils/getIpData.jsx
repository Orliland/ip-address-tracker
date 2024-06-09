async function getIpData(ip) {
  const url = `http://ip-api.com/json/${ip}?fields=58356`;
  let response = await fetch(url, { referrerPolicy: "unsafe-url" });
  try {
    let request = await response.json();
    return request;
  } catch {
    return new Error("fallo el cargar los datos");
  }
}

export default getIpData;

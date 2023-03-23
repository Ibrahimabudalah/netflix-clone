import requests from "../../utils/requests";

export default async function Trending(req, res) {
  const response = await fetch(requests.fetchDocumentaries);
  const data = await response.json();
  res.status(200).json(data);
}

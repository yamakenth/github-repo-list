const baseUrl = 'https://api.github.com/repositories';
const headers = {
  method: 'GET',
  headers: { 'Accept': 'application/vnd.github.v3+json' }
}

export const fetchPublicRepos = async (queryParam) => {
  console.log('fetching data...');
  const response = await fetch(`${baseUrl}?since=${queryParam}`, headers);
  const data = await response.json();
  return data;
}
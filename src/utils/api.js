const baseUrl = 'https://api.github.com/repositories';
const headers = {
  method: 'GET',
  headers: { 'Accept': 'application/vnd.github.v3+json' }
}

// fetch list of public repos
// https://docs.github.com/en/rest/repos/repos#list-public-repositories
// query param of "since" --> only return repos with id greater than this id
export const fetchPublicRepos = async (queryParam) => {
  const response = await fetch(`${baseUrl}?since=${queryParam}`, headers);
  const data = await response.json();
  return data;
}
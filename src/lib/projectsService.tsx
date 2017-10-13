
/**
 * Fetch projects from the server
 */
export const fetchProjects = () => {
  return fetch(`/json/projects.json`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

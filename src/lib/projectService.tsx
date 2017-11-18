
/**
 * Fetch projects from the server
 */
const fetchProjects = () => {
  return fetch(`/assets/json/projects.json`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json());
};

/**
 * Fetch project details
 * @param {String} uri - uri of project
 */
const fetchProjectDetails = (uri: string) => {
  return fetch(`/assets/json/${uri}.json`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json());
};

export {fetchProjects, fetchProjectDetails};
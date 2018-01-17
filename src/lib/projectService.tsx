
/**
 * Fetch projects from the server
 */
export const fetchProjects: any = (): any => {
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
export const fetchProjectDetails: any = (uri: string): any => {
  return fetch(`/assets/json/${uri}.json`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json());
};
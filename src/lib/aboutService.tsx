/**
 * Fetch about page data from the server
 */
export const fetchAbout: any = (): any => {

  return fetch(`/assets/json/about.json`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json());
};
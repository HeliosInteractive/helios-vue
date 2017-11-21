// Define the name of where this is stored on localstorage
const STORAGE_NAME = 'helios-config';
const ENV = process.env.NODE_ENV;
/**
 * Loads the helios.config.json from the static folder.
 * Alerts if the config is not found
 */
// eslint-disable-next-line
export const storeHeliosConfig = () => {
  return fetch('/static/helios.config.json')
    .then((res) => {
      if (res.status === 404) {
        // eslint-disable-next-line
        console.error(
          'helios.example.config.json needs to be renamed. The response is: ',
          res,
        );
        // eslint-disable-next-line
        alert('Rename helios.example.config.json to helios.config.json');
      }

      return res.json();
    })
    .then((json) => {
      let conf = json;
      if (ENV === 'development') {
        conf = json[ENV];
      }

      localStorage.setItem(STORAGE_NAME, JSON.stringify(conf));
    });
};

/**
 * Returns the full config as a JSON object
 */
// eslint-disable-next-line
export const getConfig = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME));
};

/**
 * Will return values of the config based on the key passed in
 * Use '.' to seperate keys and access nested attributes
 *
 * Example config: {reach: {url:'reach.com'}}
 * getItem('reach.url') // 'reach.com'
 * @param {String} key
 */
export const getItem = (key) => {
  const config = getConfig();
  const keys = key.split('.');

  let result = config;
  keys.forEach((k) => {
    result = result[k];
  });

  return result;
};

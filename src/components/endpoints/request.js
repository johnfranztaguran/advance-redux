import axios from 'axios';

const BaseUrl = 'http://stage.buy-sell-race.com/wp-json/';

class WPRequest {

  userRegistration = async (username, email, password) => {
    try {
      await axios.post(`wp-json/wp/v2/users/register`, {
        username,
        email,
        password
      });
    } catch (err) {
      console.error('Error: ', err)
    }
  }

  apiTestFetch = async () => {
    try {
      const result = await axios.get(`http://stage.buy-sell-race.com/wp-json/wc/v3/products?per_page=20`, {
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zdGFnZS5idXktc2VsbC1yYWNlLmNvbSIsImlhdCI6MTU3MzUyODE3MSwibmJmIjoxNTczNTI4MTcxLCJleHAiOjE1NzQxMzI5NzEsImRhdGEiOnsidXNlciI6eyJpZCI6IjExMSJ9fX0.PYsCzWxxJ4dtvT3xDDJRFHILwrgctMCGns_R6b_ap5Q'
        }
      });
      return result;
    } catch (err) {
      console.error('Error: ', err)
    }
  }

}

export default WPRequest;

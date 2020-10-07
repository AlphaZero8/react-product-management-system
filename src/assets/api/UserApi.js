import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

class UserApi {
  static registerUser(
    { firstName, lastName, email, password, userLocation, mobile },
    cb
  ) {
    const params = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
      password,
      location: userLocation,
      mobile,
    };
    axios
      .post('http://localhost:5000/users', params)
      .then((res) => cb(res.data))
      .catch((err) => {
        throw err;
      });
  }
}

export default UserApi;

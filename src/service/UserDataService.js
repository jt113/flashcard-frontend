import axios from 'axios'

class UserDataService {
    addUser(user) {
        return axios.post(`http://localhost:8080/addUser`, user);
    }
}
export default new UserDataService()
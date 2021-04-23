import axios from 'axios'

class UserDataService {
    addUser(user) {
        return axios.post(`http://localhost:8080/user/addUser`, user);
    }
}
export default new UserDataService()
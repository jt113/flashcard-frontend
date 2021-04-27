import axios from 'axios'

class UserDataService {
    addUser(user) {
        return axios.post(`http://localhost:8080/addUser`, user);
    }
    ifUsernameIsTaken(username){
        return axios.get(`http://localhost:8080/ifUsernameIsTaken/${username}`);
    }
    ifCredentialsMatch(theUser){      
        return axios.post(`http://localhost:8080/ifCredentialsMatch`, theUser)
    }
}
export default new UserDataService()
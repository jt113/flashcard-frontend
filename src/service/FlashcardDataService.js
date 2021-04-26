import axios from 'axios'

class FlashcardDataService {
    retrieveAllFlashCards() {
        return axios.get(`http://localhost:8080/retrieveAllFlashCards`);
    }
}
export default new FlashcardDataService()
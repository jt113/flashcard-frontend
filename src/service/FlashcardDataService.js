import axios from 'axios'

class FlashcardDataService {
    retrieveAllFlashCards() {
        return axios.get(`http://localhost:8080/retrieveAllFlashCards`);
    }
    updateFlashcard(flashcard){
        return axios.post(`http://localhost:8080/updateFlashcard`, flashcard)
    }
}
export default new FlashcardDataService()
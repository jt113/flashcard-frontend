import axios from 'axios'

class FlashcardDataService {
    retrieveAllFlashCards() {
        return axios.get(`http://localhost:8080/retrieveAllFlashCards`);
    }
    updateFlashcard(flashcard){
        return axios.post(`http://localhost:8080/updateFlashCard`, flashcard)
    }
    addFlashcard(flashcard){
        return axios.post(`http://localhost:8080/addFlashCard`, flashcard)
    }
    deleteFlashcard(id) {
        return axios.delete(`http://localhost:8080/deleteFlashCard/${id}`)
    }
}
export default new FlashcardDataService()

import axios from 'axios'

export default axios.create({
    API_URL: "https://raw.githubusercontent.com/fhsinchy/movieist/refs/heads/master/_data/movies.json"
})
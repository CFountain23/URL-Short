import axios from "axios";

class linkDataService {

    createLink(data) {
        return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/links/short`, data)
    }

    getFullLink(shortLink) {
        return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/links/full?short=${shortLink}`)
    }

}


export default new linkDataService();
import axios from "axios";

export default class PhotoService {

    getClient() {
        return "UZpMWkqqrQEP0g6t2Z2MWPcIV-jyHfuWPldICb8dBGQ";

    }

    getPhotos(page, per_page, query) {
        console.log('page', page);
        console.log('per_page', per_page);
        console.log('query', query);


        var body = {

            "per_page": per_page,
            "page": page,
            "query": query,
            "client_id": this.getClient(),



        };
        return axios.get('https://api.unsplash.com/search/photos', {
                params: body,

            })
            .then((response) => response.data.results);

    }


    getUsernamePhotos(username, per_page) {
        console.log('username', username);
        console.log('per_page', per_page);


        var body = {

            "per_page": per_page,
            "client_id": this.getClient(),



        };
        return axios.get('https://api.unsplash.com/users/' + username + '/photos', {
                params: body,

            })
            .then((response) => response.data);

    }


}
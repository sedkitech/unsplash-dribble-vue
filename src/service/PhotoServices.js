import axios from "axios";

export default class PhotoService {

    // UNSPLASH API 


    // getClient() {
    //     return "UZpMWkqqrQEP0g6t2Z2MWPcIV-jyHfuWPldICb8dBGQ";

    // }

    // getPhotos(page, per_page, query) {
    //     console.log('page', page);
    //     console.log('per_page', per_page);
    //     console.log('query', query);


    //     var body = {

    //         "per_page": per_page,
    //         "page": page,
    //         "query": query,
    //         "client_id": this.getClient(),



    //     };
    //     return axios.get('https://api.unsplash.com/search/photos', {
    //             params: body,

    //         })
    //         .then((response) => response.data.results);

    // }


    // getUsernamePhotos(username, per_page) {
    //     console.log('username', username);
    //     console.log('per_page', per_page);


    //     var body = {

    //         "per_page": per_page,
    //         "client_id": this.getClient(),



    //     };
    //     return axios.get('https://api.unsplash.com/users/' + username + '/photos', {
    //             params: body,

    //         })
    //         .then((response) => response.data);

    // }


    // END OF UNSPLASH API 



    getPhotos(query) {
      
        console.log('getPhotos query:', query);


        var body = {

           
            "query": query,
        

        };
        return axios.get('http://127.0.0.1:8000/api/getByCategory', {
                params: body,

            })
            // with unsplash API
           // .then((response) => response.data.results);
           .then((response) => response.data);


    }


    getUsernamePhotos(username) {
        console.log('getUsernamePhotos username', username);


        var body = {


            "query": username,

        };
        return axios.get('http://127.0.0.1:8000/api/getByUsername', {
                params: body,

            })
            .then((response) => response.data);

    }



}
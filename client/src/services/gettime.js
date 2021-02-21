const HttpService = 
{ 
    gettime: function() {
        return fetch("http://localhost:9000/gettime")
    },
}

export default HttpService;
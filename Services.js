class Services {

    constructor(){

        const URL = "http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X"
        
        this.http(URL)

    }

    http(url) {

        let script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);
        
    }  
   
}
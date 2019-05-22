class Services { // está classe serve justamente para a chamada da API e caso também necessite abstrair a manipulação do objeto recebido como resposta

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

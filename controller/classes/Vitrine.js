class Vitrine {

    constructor(objectAPI, visitedEl, expandEl, btnLeft, btnRight){

        this.objectAPI = objectAPI;
        this.visitedEl = document.querySelector(visitedEl); 
        this.expandEl = document.querySelector(expandEl);
        this.btnLeft = document.querySelector(btnLeft);
        this.btnRight = document.querySelector(btnRight)

        this.visited();
    }

    visited() { // método responsável por criar o HTML da primeira box "Voce visitou"

        let visitedObj = this.objectAPI.reference.item;

        let li = document.createElement('li');

        li.innerHTML = ` 

        <a href="${visitedObj.detailUrl}">
        <img class="image" src="${visitedObj.imageName}">
        <span class="text-content">${visitedObj.name}</span>
        <span class="text-content">De: ${visitedObj.oldPrice}</span>
        <span class="text-color"> Por: <strong>${visitedObj.price}</strong></span>
        <span class="text-color">${visitedObj.productInfo.paymentConditions}</span>
        </a>
        </li>
        `
        this.visitedEl.appendChild(li);

        this.expand();

    }

    expand() { // método responsável por criar o HTML da segunda box "e talvez tenha interesse por"

        let expandObj = this.objectAPI.recommendation;

        expandObj.forEach((expandObj, index) => {

            if (index <= 3) {
              
                let li = document.createElement('li');

                li.className = "box-content-expand";

                li.innerHTML = ` 

                <a href="${expandObj.detailUrl}">
                <img class="image" src="${expandObj.imageName}">
                <span class="text-content">${expandObj.name}</span>
                <span class="text-content">De: ${expandObj.oldPrice}</span>
                <span class="text-color"> Por: <strong>${expandObj.price}</strong></span>
                <span class="text-color">${expandObj.productInfo.paymentConditions} sem juros</span>
                </a>
                </li>
                `

                li.style.display = "block"; // Nessa parte decido colocar até o index 3 os elementos em display "block", pensando justamente na logica do carousel

                this.expandEl.appendChild(li);


            } else {

                let li = document.createElement('li');

                li.className = "box-content-expand";

                li.innerHTML = ` 

                <a href="${expandObj.detailUrl}">
                <img class="image" src="${expandObj.imageName}">
                <span class="text-content">${expandObj.name}</span>
                <span class="text-content">De: ${expandObj.oldPrice}</span>
                <span class="text-color"> Por: <strong>${expandObj.price}</strong></span>
                <span class="text-color">${expandObj.productInfo.paymentConditions} sem juros</span>
                </a>
                </li>
                `

                li.style.display = "none"; // Os elementos restantes coloco em display "none";

                this.expandEl.appendChild(li);

            }

            

        }) // end forEach
        
        this.btnRight.classList.add("btn-effect"); // essa propriedade é como se fosse um efeito de hover nas setas, desmarcando e marcando as "paginações" ja visiualizadas

        this.buttonLeft();  // aqui faço a chamado dos 2 eventListener responsáveis pelo carousel, o botão esquerdo e direito.
        this.buttonRight();

    }

    buttonLeft() {

        this.btnLeft.addEventListener("click", e => {

            let lista = document.querySelectorAll(".list-expand li"); // aqui faço uma procura de todos os elementos "li" para estruturar melhores minha lógica com arrays
              
                if(lista[0].style.display == "none" && lista[4].style.display == "block" && lista[8].style.display == "none") { 

                    this.btnRight.classList.add("btn-effect") 
                    this.btnLeft.classList.remove("btn-effect")
    
                for(let i = 0; i <= 7; i++){

                    if(i <= 3) {
                    lista[i].style.display = "block";

                    } else {
                    lista[i].style.display = "none";
                    }
                } // end for

                return false; //o return false é para não continuar a execução do código, caso caia na primeira condição.

            } if (lista[0].style.display == "none" && lista[4].style.display == "none" && lista[8].style.display == "block") {

                this.btnRight.classList.add("btn-effect")
                this.btnLeft.classList.add("btn-effect")

                for(let i = 4; i <= 9; i++){

                    if(i <= 7) {
                    lista[i].style.display = "block";
    
                    } else {
                    lista[i].style.display = "none";
                    }
                } // end for

    

            }

            

    }); // end addEventListener

    }

    buttonRight() {

        this.btnRight.addEventListener("click", e => {

            let lista = document.querySelectorAll(".list-expand li");

                if(lista[0].style.display == "block" && lista[4].style.display == "none" && lista[8].style.display == "none") {

                this.btnRight.classList.add("btn-effect")
                this.btnLeft.classList.add("btn-effect")
                
                for(let i = 0; i <= 7; i++) {

                    if(i <= 3) {
                    lista[i].style.display = "none";

                    } else {
                    lista[i].style.display = "block";

                    }
                } 
                
                return false; //end for
         }
             if (lista[0].style.display == "none" && lista[4].style.display == "block" && lista[8].style.display == "none") {

                this.btnRight.classList.remove("btn-effect")
                this.btnLeft.classList.add("btn-effect")

                for(let i = 4; i <= 9; i++) {
                    
                    if(i <= 5) {
                    lista[i].style.display = "none";

                    } else {
                    lista[i].style.display = "block";

                    }
                } // end for
                
                     
            } 

        
    }); // end addEventListener 

    }

}
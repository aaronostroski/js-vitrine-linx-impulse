class Vitrine {

    constructor(object, visitedEl, expandEl){

        this.object = object;
        this.visitedEl = document.querySelector(visitedEl);
        this.expandEl = document.querySelector(expandEl);

        this.carousel();
        
    }

    carousel() {

        this.visited();
        this.expand();
        this.buttonLeft();
        this.buttonRight();
       
    }
    

    visited() {

        let visitedObj = this.object.reference.item;

        let li = document.createElement('li');

        li.innerHTML = ` 

        <a href="${visitedObj.detailUrl}">
        <img class="image" src="${visitedObj.imageName}">
        <span class="text-content">${visitedObj.name}</span>
        <span class="text-content">De: ${visitedObj.oldPrice}</br>
        <span class="text-color"> Por: <strong>${visitedObj.price}</strong> ${visitedObj.productInfo.paymentConditions}</span>
        </span>
        </a>
        </li>
        `
        this.visitedEl.appendChild(li);

    }

    expand() {

        let expandObj = this.object.recommendation;

        expandObj.forEach((expandObj, index) => {

            if (index <= 3) {
              
                let li = document.createElement('li');

                li.className = "box-content-expand";

                li.innerHTML = ` 

                <a href="${expandObj.detailUrl}">
                <img class="image" src="${expandObj.imageName}">
                <span class="text-content">${expandObj.name}</span>
                <span class="text-content">De: ${expandObj.oldPrice}</br>
                <span class="text-color"> Por: <strong>${expandObj.price}</strong> ${expandObj.productInfo.paymentConditions}</span>
                </span>
                </a>
                </li>
                `

                li.style.display = "block";

                this.expandEl.appendChild(li);


            } else {

                let li = document.createElement('li');

                li.className = "box-content-expand";

                li.innerHTML = ` 

                <a href="${expandObj.detailUrl}">
                <img class="image" src="${expandObj.imageName}">
                <span class="text-content">${expandObj.name}</span>
                <span class="text-content">De: ${expandObj.oldPrice}</br>
                <span class="text-color"> Por: <strong>${expandObj.price}</strong> ${expandObj.productInfo.paymentConditions}</span>
                </span>
                </a>
                </li>
                `

                li.style.display = "none";

                this.expandEl.appendChild(li);

            }

        })


    }

    buttonLeft() {

        let rollLeft = document.querySelector(".roll-left");

        rollLeft.addEventListener("click", (e) => {

            let lista = document.querySelectorAll(".list-expand li");
              
                if(lista[0].style.display == "none" && lista[4].style.display == "block" && lista[8].style.display == "none") {
                
                for(let i = 0; i <= 7; i++){

                    if(i <= 3) {
                    lista[i].style.display = "block";

                    } else {
                    lista[i].style.display = "none";
                    }
                }

            } if (lista[0].style.display == "none" && lista[4].style.display == "none" && lista[8].style.display == "block") {

                console.log("chegou")

                for(let i = 4; i <= 9; i++){

                    if(i <= 7) {
                    lista[i].style.display = "block";
    
                    } else {
                    lista[i].style.display = "none";
                    }
                }

            }

            

    });

    }

    buttonRight() {

        let rollRight = document.querySelector(".roll-right")

        rollRight.addEventListener("click", (e) => {

            let lista = document.querySelectorAll(".list-expand li");

                if(lista[0].style.display == "block" && lista[1].style.display == "block" && lista[2].style.display == "block" && lista[3].style.display == "block" &&
                lista[4].style.display == "none" && lista[5].style.display == "none" && lista[6].style.display == "none" && lista[7].style.display == "none") {
                
                for(let i = 0; i <= 7; i++){

                    console.log("chegou no 1")
                    if(i <= 3) {
                    lista[i].style.display = "none";

                    } else {

                    lista[i].style.display = "block";

                    }
                } //end for

            } if (lista[4].style.display == "block" && lista[5].style.display == "block" && lista[6].style.display == "block"
             && lista[7].style.display == "block" && lista[8].style.display == "none" && lista[9].style.display == "none") {

                console.log("chegou no 2")
                for(let i = 4; i <= 9; i++){

                    if(i <= 5) {
                    lista[i].style.display = "none";

                    } else {
                    lista[i].style.display = "block";
                    }
                }
    
                     
            } 
    
         // end if

        
        
        }  // end EventListener
    )

    }

}
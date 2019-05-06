(function(){
    var email = document.querySelector("#email");

    email.addEventListener("keyup", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Email non valide");
        } else {
            email.setCustomValidity("");
        }
    });
    
    function request(datas) {
        fetch(datas.url || "").then(response => {
            if (response.ok) {
                return response.json();
            };
        }).then(result => {
            datas.complete && datas.complete(result);
        });
    };
    let villes = {};
    
    function ville(name) {
        request({
            url: `https://geo.api.gouv.fr/communes?nom=${name}&fields=nom&boost=${name}&format=json&geometry=centre`,
            complete: (e) => {
                villes = e.slice(0,5);
                dataList.innerHTML = "";
                    villes.forEach(ville => {
                        let option = document.createElement("option");
                        option.textContent = ville.nom;
                        dataList.appendChild(option);
                    });
            }
        })
    }
    let inputVille = document.querySelector("[name='ville']");
    let dataList = document.querySelector("datalist");
    inputVille.addEventListener("keyup", function () {
        if (this.value.length >= 2) {
            ville(this.value);
        }
    });
})()

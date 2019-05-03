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
        url: `https://geo.api.gouv.fr/communes?nom=${name}&fields=nom&boost=${name},codesPostaux&format=json&geometry=centre`,
        complete: (e) => {
            villes = e;
        }
    })
}
let inputVille = document.querySelector("[name='ville']");
let dataList = document.querySelector("datalist");
inputVille.addEventListener("keyup", function (e) {
    if (this.value.length > 3) {
        dataList.innerHTML = "";
        ville(this.value);
            villes.forEach(ville => {
                let option = document.createElement("option");
                option.textContent = ville.nom;
                dataList.appendChild(option);
            });
    }
})
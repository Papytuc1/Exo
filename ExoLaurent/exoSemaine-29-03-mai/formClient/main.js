
function request(url, callback){
     fetch(url||"").then(response=>{
        if (response.ok) {
            return response.json();
        };  
    }).then(result=> {
        callback && callback(result);       
    });
}

request("formClient.json",function(r){
console.log(r.client[0].nom)
})
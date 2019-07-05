function getPokemons() {
    fetch('http://10.23.180.88:8080/pokemon/listByState')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
        });
}

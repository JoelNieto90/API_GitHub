const searchAPI = () => {
    //Almacenamos la url de la API de GitHub
    const API_URL = "https://api.github.com/users/"
    //Obtenemos el valor del input
    let userName = document.getElementById("UserNameInput").value
    //Creamos la solicitud utilizando el constructor Request()
    let require = new Request(`${API_URL}${userName}/repos?page=1$per_page=100`)

    fetch(require)
        .then(response => response.json())
        .then(data => {
            //Le indicamos que queremos solo los repos de JavaScript 
            const wordJS = (data) => data.language == "JavaScript"

            //Filtramos aquellos repos que cumplan con la especificación
            let filterJS = data.filter(wordJS)
        
            //Declaramos un arreglo vacio, que contendra cada nombre de repo que sea de JS
            let arrayNames = []

            //Ciclo que recorre aquellos repos que cumplan la condicion 
            //y los va anexando al arreglo con el metodo push
            for (let i in filterJS){
                arrayNames.push(filterJS[i].name)
            }
            
            //Imprimimos el resultado en la etiqueta p declarara 
            document.getElementById("repos").textContent= arrayNames
            console.log(filterJS)
        })

        .catch(err => console.log(err))
}
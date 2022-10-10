let searchBtn = document.querySelector("#search")
searchBtn.addEventListener('click', apiRequest)
document.querySelector("#plant1-btn").addEventListener('click', apiRequest)
let plantName = document.querySelector('input').value
// console.log(plantName)

async function apiRequest() {
    //Conditional to check if input.value
    if (!document.querySelector("input").value){
        plantName = "nehe"
    } else {
        plantName = document.querySelector("input").value
    }

    try{
        const response = await fetch(`https://flower-field-guide-api.herokuapp.com/api/${plantName}`)
        const data = await response.json()

        document.getElementById('plantName').innerText = data.name
        document.getElementById('pronounce').innerText = data.pronounce
        document.getElementById('familyName').innerText = data.family_name
        document.getElementById('scientificName').innerText = data.scientific_name
        document.getElementById('use').innerText = data.use
        document.getElementById('description').innerText = data.description
        document.getElementById('image').src = data.image
       
    } catch(error) {
        console.log(error)
    }
}

async function apiRender() {
    const res1 = "nehe"
    const res2 = "ilima"
    const res3 = "ohai"

    try{
        let [data1, data2, data3] = await Promise.all([
            fetch(`https://flower-field-guide-api.herokuapp.com/api/nehe`),
            fetch(`https://flower-field-guide-api.herokuapp.com/api/ilima`),
            fetch(`https://flower-field-guide-api.herokuapp.com/api/ohai`)
        ])
        
        const response1 = await data1.json()
        document.getElementById('plant1-name').innerText = response1.name
        document.getElementById('plant1-description').innerText = response1.description
        document.getElementById('plant1-image').src = response1.image

        const response2 = await data2.json()
        document.getElementById('plant2-name').innerText = response2.name
        document.getElementById('plant2-description').innerText = response2.description
        document.getElementById('plant2-image').src = response2.image

        const response3 = await data3.json()
        document.getElementById('plant3-name').innerText = response3.name
        document.getElementById('plant3-description').innerText = response3.description
        document.getElementById('plant3-image').src = response3.image
    } catch(error) {
        console.log(error)
    }
}

window.addEventListener('load', apiRender)
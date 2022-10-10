let searchBtn = document.querySelector("#search")
searchBtn.addEventListener('click', apiRequest)
const plantName = document.querySelector('input').value
// console.log(plantName)

async function apiRequest() {
    const plantName = document.querySelector("input").value

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
    const plantName1 = "ohai"
    const plantName2 = "ilima"
    const plantName3 = "nehe"

    try{
        //plant 1
        const response1 = await fetch(`https://flower-field-guide-api.herokuapp.com/api/${plantName1}`)
        const data1 = await response1.json()
        document.getElementById('plant1-name').innerText = data1.name
        document.getElementById('plant1-description').innerText = data1.description
        document.getElementById('plant1-image').src = data1.image
        
         //plant 2
        //  const response2 = await fetch(`https://flower-field-guide-api.herokuapp.com/api/${plantName2}`)
        //  const data2 = await response2.json()
        //  document.getElementById('plant1-name').innerText = data2.name
        //  document.getElementById('plant1-description').innerText = data2.description
        //  document.getElementById('plant1-image').src = data2.image
    } catch(error) {
        console.log(error)
    }
}

window.addEventListener('load', apiRender)
let searchBtn = document.querySelector("#search")
searchBtn.addEventListener('click', apiRequest)
const plantName = document.querySelector('input').value
console.log(plantName)

async function apiRequest() {
    const plantName = document.querySelector('input').value
    try{
        const response = await fetch(`https://flower-field-guide-api.herokuapp.com/api/${plantName}`)
        const data = await response.json()
        console.log(data)

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
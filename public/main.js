document.querySelector('#search').addEventListener('click', apiRequest)

async function apiRequest() {
    const plantName = document.querySelector('input').value
    console.log(plantName)
    // try{
    //     const response = await fetch(`https://field-guide-api.herokuapp.com/api/${alienName}`)
    //     const data = await response.json()
    //     console.log(data)

    //     document.getElementById('alienName').innerText = data.speciesName
    //     document.getElementById('alienWorld').innerText = data.homeworld
    //     document.getElementById('alienFeatures').innerText = data.features
    //     document.getElementById('alienFacts').innerText = data.interestingFact
    //     document.getElementById('alienExamples').innerText = data.notableExamples

    //     document.getElementById('alienImage').src = data.image
    //     document.getElementById('alienCaption').innerText = data.speciesName
    // } catch(error) {
    //     console.log(error)
    // }
}
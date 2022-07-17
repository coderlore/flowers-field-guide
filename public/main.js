document.querySelector('#search').addEventListener('click', apiRequest)
const plantName = document.querySelector('input').value

async function apiRequest() {
    const plantName = document.querySelector('input').value
    try{
        const response = await fetch(`api/${plantName}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'plantName': plantName,
            })
        })
        const data = await response.json()
        console.log(data)

        // document.getElementById('alienName').innerText = data.speciesName
        // document.getElementById('alienWorld').innerText = data.homeworld
        // document.getElementById('alienFeatures').innerText = data.features
        // document.getElementById('alienFacts').innerText = data.interestingFact
        // document.getElementById('alienExamples').innerText = data.notableExamples

        // document.getElementById('alienImage').src = data.image
        // document.getElementById('alienCaption').innerText = data.speciesName
    } catch(error) {
        console.log(error)
    }
}
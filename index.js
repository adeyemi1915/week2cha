function assembleCharacters(){
    //Fetch request for the provided url
    return fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(characters => characters.forEach(value => {
        console.log(value.name)
        //new element and assingning it the name value, then appending it
        let being = document.createElement('p')
        being.textContent = value.name
    
        let container = document.getElementById('cont')
        container.appendChild(lion)
        //Add an event listener and give instructions
        lion.addEventListener('click', ()=> {
            //assign an element name element
            let lion =document.createElement('img')
            lion.src=value.image
            //appending the image element
            being.appendChild(lion)
            //creating a new element and assigning a vote
            let win = document.createElement('a')
            win.textContent = `the total value of votes is ${value.votes}`
            //appending our votes value to our element
            lion.appendChild(win)
            let count = 0
            //creating a buttonelement and adiing event listener to it
            let button = document.createElement('button')
            button.innerText ="Reset"
            button.addEventListener('click',()=>{
                count = count + 1
                win.innerText =count

            } )
            lion.appendChild(button)


        },{once:true})
    }))
}
document.addEventListener('DOMContentLoaded',assembleCharacters)
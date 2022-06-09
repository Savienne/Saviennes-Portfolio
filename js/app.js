import{ myworksArray } from './portfolio-data.js'
// console.log(myworksArray)

const cardContainer = document.getElementById('card-container')
// console.log(cardContainer)

// let project = {

// title: "Tic Tac Toe",
// image: "Snapshot of TTT",
// description:"My first game, Tic Tac Toe!",
// githubLink:"Here is my GH Link",
// deploymentLink:"Here is the Site",
// }

let projectMarkup = myworksArray.map(project =>
  `
  <div class="card text-center" style="width: 18rem;">
  <img src="${project.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${project.title}Card title</h5>
    <p class="card-text">${project.description}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="${project.github}" class="btn btn-primary">Go somewhere</a>
    <a href="${project.deployment}" class="btn btn-secondary"> Deployment</a>
    
  </div>
  </div>
  </div>
`
).join()
cardContainer.innerHTML = projectMarkup
console.log(projectMarkup)


const lightDarkBtn = document.querySelector("#light-dark-button")
lightDarkBtn.addEventListener("click", toggleLightDark)
const body = document.querySelector("body")


function toggleLightDark() {
    // console.log('test')
    body.className = body.className === "dark" ? "" : "dark"
  }
  
  function checkDarkPref() {
    if(
      window.matchMedia("(prefers-color-scheme:dark)").matches && 
      body.className !== "dark"
    ) {
      toggleLightDark()
    }
  }
  checkDarkPref()  

  let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
  }
  closeBtn.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }


  const birdSays = new Audio('assets/audio/realbirdsound.mp3')
  
const birdImg = document.querySelector('#bird')
// console.log(birdImg)
birdImg.addEventListener('click', function(evt){
  // console.log(evt.target)
  birdSays.volume = .20
  birdSays.play()
})







  modalBtn.addEventListener('click', function(evt){
    console.log(evt.target)
    portfoliosound.volume = .10
    portfoliosound.play()
  })
    
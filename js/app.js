import{ myworksArray } from './portfolio-data.js'
const cardContainer = document.getElementById('card-container')

let projectMarkup = myworksArray.map(project =>
  `
  <div class="card text-center" style="width: 18rem;">
    <div class="card-body">
      <img src="${project.image}" class="card-img-top" alt="...">
      <h5 class="card-title">${project.title}</h5>
      <div class="BtnPos">    
        <a href="${project.githubLink}" class="Btn Pos ">GitHub</a>
        <a href="${project.deploymentLink}" class="Bton Pos "> Play Game!</a>
      </div>
    </div>
  </div>
`
).join('')
cardContainer.innerHTML = projectMarkup

const lightDarkBtn = document.querySelector("#light-dark-button")
lightDarkBtn.addEventListener("click", toggleLightDark)
const body = document.querySelector("body")


function toggleLightDark() {
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
    birdImg.addEventListener('click', function(evt){
      birdSays.volume = .20
      birdSays.play()
  })

modalBtn.addEventListener('click', function(evt){
  portfoliosound.volume = .10
    portfoliosound.play()
})

import{ myworksArray } from './portfolio-data.js'
// myworksArray.forEach(work=>
//     console.log(work)
// )
// console.log(myworksArray)
const lightDarkBtn = document.querySelector("#light-dark-button")
lightDarkBtn.addEventListener("click", toggleLightDark)
const body = document.querySelector("body")


function toggleLightDark() {
    console.log('test')
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
import{ myworksArray } from './data/app2.js'
// myworksArray.forEach(work=>
//     console.log(work)
// )
// console.log(myworksArray)
lightDarkBtn.addEventListener("click", toggleLightDark)


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
const myworksArray = [
  {
    title: "Tic Tac Toe",
    deploymentLink:"https://tttsavy.netlify.app",
    image: 'assets/images/tic-tac-toe.png',
    githubLink:"https://github.com/Savienne/ttt-weekend",
      description:"My first game, Tic Tac Toe!",
  },
  {
    title: 'Guess The Number Game',
    deploymentLink:'Here is the Site',
      image: 'assets/images/guessing-game.png',
      githubLink:'https://github.com/Savienne/guess-the-number-lab',
      description:'Guess The Number Project',
  
  
  }
  
  
]
  export {
      myworksArray
      
  }


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

  
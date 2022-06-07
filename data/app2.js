const myworksArray = [
  {
      image: "Snapshot of TTT",
      title: "Tic Tac Toe",
      description:"My first game, Tic Tac Toe!",
      githubLink:"Here is my GH Link",
      deploymentLink:"Here is the Site",
  },
  {
      image: "Snapshot of Guess the Number Game",
      title: "Guess The Number Game",
      description:"Guess The Number Project",
      githubLink:"Here is my GH Link",
      deploymentLink:"Here is the Site",
  
  
  }
  
  
  ]
  export {
      myworksArray
      
  }
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
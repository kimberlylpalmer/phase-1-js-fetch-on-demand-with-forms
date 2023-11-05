const init = () => {
  //grabbing the form
  const form = document.querySelector('form');
  //adding an event listener to the form for an event of submit
  form.addEventListener('submit', (event) =>{
      //preventing the default behavior
      event.preventDefault();
      //setting input variable to grab the input 
      const input = document.querySelector("input#searchByID");

      fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
         
        const title = document.querySelector("section#movieDetails h4")
        const summary = document.querySelector("section#movieDetails p")
        
        title.innerText = data.title;
        summary.innerText = data.summary;
        
        form.reset()
    })
  })
}

document.addEventListener('DOMContentLoaded', init);





let container = document.querySelector('#container')

let button1 = document.querySelector('.grid1')
button1.addEventListener('click', () => {
    container.innerHTML = ""
    container.style.gridTemplate = `repeat(32,1fr) / repeat(32,1fr)`
    defaultGrid(32)

})

let button2 = document.querySelector('.grid2')
button2.addEventListener('click', () => {
    container.innerHTML = ""
    container.style.gridTemplate = `repeat(64,1fr) / repeat(64,1fr)`
    defaultGrid(64)

})

let button3 = document.querySelector('.grid3')
button3.addEventListener('click', () => {
    container.innerHTML = ""
    container.style.gridTemplate = `repeat(100,1fr) / repeat(100,1fr)`
    defaultGrid(100)

})

let RGB = document.querySelector('.RGB')
//Default grid that spawns when page is open
function defaultGrid(cell){
    cell = cell * cell
    //FOR LOOP START
    for(let i = 0; i < cell; i++){
      let gridCell = document.createElement('div')
      gridCell.className = "rows"
      container.appendChild(gridCell)
  
  
      //DEFAULT GRID COLOR
        gridCell.addEventListener('mouseover',()=> {
        gridCell.style.background = "blue"})
      //DEFAULT GRID COLOR END
  
       //RGB
          RGB.addEventListener('mouseover',()=> {
            gridCell.addEventListener('mouseover',()=> {
  
  
        
              let randomColor = Math.floor(Math.random() * 16777215).toString(16)
  
              gridCell.style.background = "#" + `${randomColor}`
              //
  
            })
  
  
  
  
  
  
          })
        //
     }
  
     //FOR LOOP END
   
    
  
  
  
  }


defaultGrid(16)
//END




  
  //END
  

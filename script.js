const gridContainer = document.querySelector('.my_container');

reset();

for(let i = 1; i <= 100; i++){
  const square = getsquare(i);
  
  gridContainer.append(square);
}






















// function

function reset(){
  gridContainer.innerHTML = '';
}

function getsquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';
  sq._sqId = numero ;
   //(this in questo caso è il mio quadrato è il mio elemento che clicco ricrda che sta dentro a click! NB)
  sq.addEventListener('click', function(){
    console.log(this._sqId)
    this.innerHTML = this._sqId;
    this.classList.add('clicked');
  })


  return sq;
}
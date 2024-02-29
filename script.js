const gridContainer = document.querySelector('.my_container');

reset();

for(let i = 1; i <= 100; i++){
  const square = getsquare();
  console.log(square);
  gridContainer.append(square);
}






















// function

function reset(){
  gridContainer.innerHTML = '';
}

function getsquare(){
  const sq = document.createElement('div');
  sq.className = 'square';


  return sq;
}
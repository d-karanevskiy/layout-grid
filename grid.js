(function() {
  var body = document.body;
      gridCreate = document.createElement('div');

  gridCreate.id = 'overlay-grid';
  body.appendChild(gridCreate);

  var grid = document.getElementById('overlay-grid');
      gridPosition = 0;
      gridSize = 10;
      bodyHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight);

  grid.style.cssText = 'display: none; position: absolute; top: 0; width: 100%; pointer-events: none;'
  grid.style.height = bodyHeight + 'px';
  grid.style.backgroundSize = gridSize + 'px' + " " + gridSize + 'px' ;
  grid.style.backgroundColor = 'rgba(255, 0, 0, 0.05)';
  grid.style.backgroundImage = 'linear-gradient(180deg, #777 0.5px, transparent 0)';

  document.onkeydown = function(e) {
    if (e.keyCode == 71 && e.ctrlKey) {
      if (grid.style.display == 'none' ) {
        e.preventDefault();
        grid.style.display = 'block'; }
      else {
        e.preventDefault();
        grid.style.display = 'none'; }
    }
    if (e.altKey && e.key == 'ArrowUp') {
      e.preventDefault();
      gridSize++;
      grid.style.backgroundSize = gridSize + 'px' + " " + gridSize + 'px' ;
    }
    if (e.altKey && e.key == 'ArrowDown') {
      e.preventDefault();
      gridSize--;
      grid.style.backgroundSize = gridSize + 'px' + " " + gridSize + 'px' ;
    }
    if (grid.style.display == 'block' && e.key == 'ArrowDown') {
      e.preventDefault();
      gridPosition++;
      grid.style.top = gridPosition++ + 'px';
    }
    if (grid.style.display == 'block' && e.key == 'ArrowUp') {
      e.preventDefault();
      gridPosition--;
      grid.style.top = gridPosition + 'px';
    }
  }
})();
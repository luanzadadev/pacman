document.addEventListener('DOMContentLoaded', () => {
    const pacman = document.getElementById('pacman');
    let positionX = 200;
    let positionY = 200;
  
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        positionX += 10;
        pacman.style.left = positionX + 'px';
      } else if (event.key === 'ArrowLeft') {
        positionX -= 10;
        pacman.style.left = positionX + 'px';
      } else if (event.key === 'ArrowDown') {
        positionY += 10;
        pacman.style.top = positionY + 'px';
      } else if (event.key === 'ArrowUp') {
        positionY -= 10;
        pacman.style.top = positionY + 'px';
      }
    });
  });
  
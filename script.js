
function startLoading() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('loadingWrapper').style.display = 'block';
  let bar = document.getElementById('loadingBar');
  let text = document.getElementById('loadingText');
  let percent = 1;
  let interval = setInterval(() => {
    percent++;
    bar.style.width = percent + '%';
    text.innerText = percent + '%';
    if (percent >= 100) {
      clearInterval(interval);
      document.getElementById('loadingWrapper').style.display = 'none';
      document.getElementById('platformScreen').style.display = 'block';
    }
  }, 300);
}
function playMusic() {
  document.getElementById('backgroundMusic').play();
}

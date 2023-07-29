function redirectToDeclaration() {
    window.location.href = "pagina_de_declaracao.html";
  }
  
  function moveNoButton() {
    const button = document.getElementById("no");
    const xPos = Math.random() * (window.innerWidth - button.clientWidth);
    const yPos = Math.random() * (window.innerHeight - button.clientHeight);
  
    button.style.position = "absolute";
    button.style.left = xPos + "px";
    button.style.top = yPos + "px";
  }
  
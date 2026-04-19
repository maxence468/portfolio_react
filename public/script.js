
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var closeBtn = document.getElementsByClassName("close")[0];
  var prev = document.getElementsByClassName("prev")[0];
  var next = document.getElementsByClassName("next")[0];
  var triggers = document.getElementsByClassName("myText");

  var currentImages = [];
  var currentIndex = 0;


  for (let i = 0; i < triggers.length; i++) {
    triggers[i].onclick = function() {
    // Récupérer les images associées à ce texte
      currentImages = JSON.parse(this.getAttribute("data-images"));
      currentIndex = 0;
      showImage(currentIndex);
      modal.style.display = "block";
    }
  }

// Fonction pour afficher une image
  function showImage(index) {
    modalImg.src = currentImages[index];
  }

  function previousImage(){
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showImage(currentIndex);
  }
  function nextImage(){
    currentIndex = (currentIndex + 1) % currentImages.length;
    showImage(currentIndex);
  }
  function closeModal(){
    modal.style.display = "none";
  }

  prev.onclick = previousImage;

  next.onclick = nextImage;

  closeBtn.onclick = closeModal;

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" || event.key === "Enter") {
      closeModal();
    }
    if(event.key == "ArrowLeft"){
      previousImage();
    }
    if(event.key == "ArrowRight"){
      nextImage();
    }
    
    
});




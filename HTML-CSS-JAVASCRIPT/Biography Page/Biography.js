const showButton = document.getElementById("read-p");
const hiddenParagraph = document.getElementById("hidden-para");

const colorChangeLink = document.querySelector('.color-Change-link');


showButton.addEventListener("click", () => {
  if (hiddenParagraph.style.display === "none") {
    hiddenParagraph.style.display = "block";
    showButton.textContent = "Collapse";
  } else {
    hiddenParagraph.style.display = "none";
    showButton.textContent = "Read More...";
  }
});

colorChangeLink.addEventListener('click',function(){
    colorChangeLink.style.color = 'green';
})


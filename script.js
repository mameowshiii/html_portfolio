function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("active");
}

function openModal(src){
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = src;
}

function closeModal(){
    document.getElementById("imageModal").style.display = "none";
}

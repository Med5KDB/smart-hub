document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("aside nav a").forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("font-bold", "underline");
        }
    });

    
    document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", function () {
            if (confirm("Voulez-vous vraiment supprimer cet élément ?")) {
                this.closest("tr").remove();
            }
        });
    });

    const uploadInput = document.getElementById("uploadFile");
    if (uploadInput) {
        uploadInput.addEventListener("change", function () {
            const file = this.files[0];
            if (file) {
                alert("Fichier sélectionné : " + file.name);
                // Upload vers API 
            }
        });
    }
});

window.addEventListener("load", () => {
    loading = document.querySelector(".loading");
    loading.style.opacity = 0;
    setTimeout(() => {
        loading.remove();
    }, 600);
});
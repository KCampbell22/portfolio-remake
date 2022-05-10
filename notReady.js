function notReady() {
    document.addEventListener("click", notReady());
    alert('This link is not ready yet.');
}

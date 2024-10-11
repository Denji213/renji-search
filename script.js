document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-bar").value;
    document.getElementById("results").innerHTML = "Résultats de la recherche pour : " + query;
});

document.getElementById("send-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += "<div>Vous: " + userInput + "</div>";
    chatBox.innerHTML += "<div>Renji: Je suis Renji Copilote. Comment puis-je vous aider ?</div>";
    document.getElementById("user-input").value = "";
});

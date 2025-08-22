function helloWorld() {
    const name = document.getElementById("nameInput").value || "Sơn";
    const amount = document.getElementById("amountInput").value || "0";
    const wallet = document.getElementById("walletInput").value || "wallet";
    const message = `${name} send ${amount} to ${wallet}`;

    const li = document.createElement("li");
    li.textContent = message;
    document.getElementById("messageList").appendChild(li);
}

helloWorld();

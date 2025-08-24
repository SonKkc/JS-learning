(() => {
    const userNameInput = document.getElementById("userName");
    const userGenderInput = document.getElementById("userGender");
    const moneyInput = document.getElementById("money");
    const buyBtn = document.getElementById("buyBtn");
    const profileName = document.getElementById("profileName");
    const profileWallet = document.getElementById("profileWallet");
    const profileGender = document.getElementById("profileGender");
    const userNameUpdateBtn = document.getElementById("updateNameButton");
    const userGenderUpdateBtn = document.getElementById("updateGenderButton");
    const transactionHistory = document.getElementById("transactionHistory");
    const transactionHistoryBtn = document.getElementById(
        "showTransactionHistoryButton"
    );
    const walletID = 123456;

    let transactionHistoryList = [];

    const user = {
        name: "customer",
        wallet_amount: 10000,
        gender: "unknown",
    };

    const cart = {
        userName: "",
        amount: 0,
        dateTime: 0,
        shopWallet: 0,
    };

    function renderUserProfile() {
        profileName.innerText = user.name;
        profileWallet.innerText = user.wallet_amount;
        profileGender.innerText = user.gender;
    }

    function updateUserName() {
        user.name = userNameInput.value || "customer";
        renderUserProfile();
    }

    function updateUserGender() {
        user.gender = userGenderInput.value || "unknown";
        renderUserProfile();
    }

    function buy() {
        if (moneyInput.value === "") {
            alert("Please enter an amount to buy");
            return;
        }
        if (moneyInput.value > user.wallet_amount) {
            alert("Not enough money");
            return;
        }
        cart.amount = moneyInput.value;
        cart.dateTime = Date.now();
        cart.shopWallet = walletID;
        user.wallet_amount -= cart.amount;
        renderUserProfile();

        transactionHistoryList.push({
            userName: user.name,
            amount: cart.amount,
            dateTime: cart.dateTime,
            shopWallet: cart.shopWallet,
        });
        alert(
            "Purchase successful! User: " +
                user.name +
                ", has bought: " +
                cart.amount +
                ", at: " +
                new Date(cart.dateTime).toLocaleString() +
                ", and send to shop Wallet: " +
                cart.shopWallet
        );
    }

    function showTransactionHistory() {
        transactionHistory.innerHTML = "";
        transactionHistoryList.forEach((transaction) => {
            const list = document.createElement("li");
            list.innerText =
                "User: " +
                user.name +
                ", Amount: " +
                transaction.amount +
                ", Date: " +
                new Date(transaction.dateTime).toLocaleString() +
                ", Shop Wallet: " +
                transaction.shopWallet;
            transactionHistory.appendChild(list);
        });
    }
    renderUserProfile();
    buyBtn.addEventListener("click", buy);
    userNameUpdateBtn.addEventListener("click", updateUserName);
    userGenderUpdateBtn.addEventListener("click", updateUserGender);
    transactionHistoryBtn.addEventListener("click", showTransactionHistory);
})();

let balance = 0;

function updateScreen() {
    document.getElementById('screen').innerText = `Balance: $${balance}`;
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        balance += amount;
        updateScreen();
        alert(`$${amount} deposited!`);
    } else {
        alert("Please enter a valid amount!");
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateScreen();
        alert(`$${amount} withdrawn!`);
    } else if (amount > balance) {
        alert("Insufficient balance!");
    } else {
        alert("Please enter a valid amount!");
    }
}

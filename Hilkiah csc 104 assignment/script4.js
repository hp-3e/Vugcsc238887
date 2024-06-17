function convertToNaira() {
    var usdAmount = parseFloat(document.getElementById("usdAmount").value);
    var exchangeRate = 410; // Example exchange rate, you can change this to the current rate

    var nairaAmount = usdAmount * exchangeRate;

    document.getElementById("result").innerHTML = "Amount in Naira: ₦" + nairaAmount.toFixed(2);
}

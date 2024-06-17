function calculateCompoundInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    var compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal;

    document.getElementById("result").innerHTML = "Compound Interest: $" + compoundInterest.toFixed(2);
}

document.getElementById("payment-method").addEventListener("change", function() {
    let cardDetails = document.getElementById("card-details");
    if (this.value === "paypal") {
        cardDetails.style.display = "none";
    } else {
        cardDetails.style.display = "block";
    }
});

document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let paymentMethod = document.getElementById("payment-method").value;
    
    if (paymentMethod !== "paypal") {
        let cardNumber = document.getElementById("card-number").value;
        let expiry = document.getElementById("expiry").value;
        let cvv = document.getElementById("cvv").value;

        if (cardNumber.length !== 16 || cvv.length !== 3) {
            alert("Invalid card details!");
            return;
        }
    }

    alert("Payment submitted successfully!");
});

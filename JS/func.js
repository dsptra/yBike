function validation() {
    var name = document.getElementById("custname").value
    var phone = document.getElementById("custphone").value
    var address = document.getElementById("custaddress").value
    var prod = document.getElementById("prodselect").value
    var quan = document.getElementById("quan").value
    if(name === "" || phone === "" || address === "") {
        alert("Required fields cannot be empty");
    }else if(name.length < 4) {
        alert("Name must be longer than 3 characters")
    }else if(phone.length < 10) {
        alert("Phone number must be at least 10 characters")
    }else if(isNaN(phone)) {
        alert("Phone number must be a number")
    }else if(phone.startsWith("08") === false && phone.startsWith("62") === false){
        alert("Phone number must starts with '08' or '62'")
    }else if(address.startsWith("Jl. ") === false) {
        alert("Address must start with 'Jl. '")
    }else if(prod === "ph") {
        alert("Choose product!")
    }else if(isNaN(quan)) {
        alert("Quantity must be a number")
    }else if(quan < 1 ){
        alert("Quantity must be 1 or higher")
    }else {
        alert("Reservation has made!")
    }






}


function generateQR() {
    let qrText = document.getElementById("qrText").value;
    let qrImage = document.getElementById("qrImage");

    if(qrText.length > 0){
        qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
        + encodeURIComponent(qrText);
    } else {
        alert("Please enter text or URL");
    }
}
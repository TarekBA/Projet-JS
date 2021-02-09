const Base64 = file => new Promise((resolve, reject) => {
    const readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.onload = () => resolve(reader.result);
    readFile.onerror = (error) => reject(error);
});

async function productManagement() {
    let nameProdt = document.getElementById("nameProdt");
    let quatityProdt = document.getElementById("quatityProdt");
    let priceProdt = document.getElementById("priceProdt");
    let imageProdt = document.getElementById("imageProdt");

    let b64 ="";
    if(imageProdt.files.length > 0){
        const image = imageProdt.files[0];
        b64 = await Base64(image);    
    }
    let dataProductObj = JSON.parse(localStorage.getItem("prodcuts")) || [];
    dataProductObj.push({
        nameProduct: nameProdt.value,
        quatityProduct: quatityProdt.value,
        priceProduct: priceProdt.value,
        imageProduct: b64
    });
    localStorage.setItem("products",JSON.stringify(dataProductObj));
}
/*function readFile() {
    if (this.files && this.files[0]) {
        var FR= new FileReader();
        FR.addEventListener("load", function(e) {
            document.getElementById("img").src = e.target.result;
            document.getElementById("b64").innerHTML = e.target.result;
        });             
        FR.readAsDataURL( this.files[0] );
    }               
}
document.getElementById("inp").addEventListener("change", readFile);   */

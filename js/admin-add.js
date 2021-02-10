var openFile = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var dataURL = reader.result;
    var imageProdt = document.getElementById("imageProdt");
    imageProdt.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
};
function productManagement() {
  let nameProdt = document.getElementById("nameProdt");
  let quatityProdt = document.getElementById("quatityProdt");
  let priceProdt = document.getElementById("priceProdt");
  let imageProdt = document.getElementById("imageProdt");

  let dataProductObj = JSON.parse(localStorage.getItem("prodcuts")) || [];
  dataProductObj.push({
    nameProduct: nameProdt.value,
    quatityProduct: quatityProdt.value,
    priceProduct: priceProdt.value,
    imageProduct: imageProdt.value
  });
  localStorage.setItem("products", JSON.stringify(dataProductObj));
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


function productManagement() {
  let nameProdt = document.getElementById("nameProdt");
  let quatityProdt = document.getElementById("quatityProdt");
  let priceProdt = document.getElementById("priceProdt");
  let imageProdt = document.getElementById("imageProdt").files;
  let image = "";
  if(imageProdt.length > 0)
  {
      let fileToLoad = imageProdt[0];
      let fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        image = fileLoadedEvent.target.result;
        // save image  in localStorage
        let dataProductObj = JSON.parse(localStorage.getItem("produits")) || [];
        dataProductObj.push({
          nameProduct: nameProdt.value,
          quatityProduct: quatityProdt.value,
          priceProduct: priceProdt.value,
          imageProduct: image
        });
        localStorage.setItem("produits", JSON.stringify(dataProductObj));
        //  vider les champs
        document.getElementById("nameProdt").value = "";
        document.getElementById("quatityProdt").value = "";
        document.getElementById("priceProdt").value = "";
        document.getElementById("imageProdt").value = "";
        // affichage
        ShowProduct();
      }
      fileReader.readAsDataURL(fileToLoad);
  }

}

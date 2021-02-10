function editProduct(i) {
  let dataProductObj = JSON.parse(localStorage.getItem("produits")) || [];
  let nameProd = document.getElementById("nameProd");
  let quatityProd = document.getElementById("quatityProd");
  let priceProd = document.getElementById("priceProd");
  let inputSave = document.getElementById("indexToSave");
  nameProd.value = dataProductObj[i].nameProduct;
  quatityProd.value = dataProductObj[i].quatityProduct;
  priceProd.value = dataProductObj[i].priceProduct;
  inputSave.value = i;
}

function editProduct(i) {
    let dataProductObj = JSON.parse(localStorage.getItem("prodcuts")) || [];
    let nameProd = document.getElementById("nameProd");
    let quatityProd = document.getElementById("quatityProd");
    let priceProd = document.getElementById("priceProd");
    let imageProd = document.getElementById("imageProd");
    let inputSave = document.getElementById("indexToSave");
    nameProd.value = dataProductObj[i].nameProduct;
    quatityProd.value = dataProductObj[i].quatityProduct;
    priceProd.value = dataProductObj[i].priceProduct;
    imageProd.value = dataProductObj[i].imageProduct;
    inputSave.value = i;
}
               
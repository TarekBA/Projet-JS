function ShowProduct() {
  let dataProductObj = JSON.parse(localStorage.getItem("prodcuts")) || [];
  let rowProdt = document.getElementById("rowProdt");
  let rowProduct = "";
  for (let i = 0; i < dataProductObj.length; i++) {
    rowProduct += `<tr class="rem1">
                        <td class="invert">${i + 1}</td>
                        <td class="invert-image"><a href="single.html"><img src="${
                          dataProductObj[i].imageProduct
                        }" alt=" " class="img-responsive"></a></td>
                        <td class="invert">${
                          dataProductObj[i].quatityProduct
                        }</td>
                        <td class="invert">${dataProductObj[i].nameProduct}</td>
                        <td class="invert">${
                          dataProductObj[i].priceProduct
                        }</td>
                        <td class="invert">
                            <button data-toggle="modal" data-target="#exampleModal" class="btn btn-success text-white" onclick="editProduct(${i})">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                            <button class="btn btn-danger text-white" onclick="deleteProduct(${i})">
                                <i class="fas fa-trash-alt"></i> Delete
                            </button>
                        </td>
                    </tr>`;
  }
  rowProdt.innerHTML = rowProduct;
}

function deleteProduct(i) {
  let dataProductObj = JSON.parse(localStorage.getItem("prodcuts")) || [];
  let rowProdt = document.getElementById("rowProdt");
  if (confirm(`Are you sure to delete this line Nbr(${i + 1}) ?`)) {
    rowProdt.deleteRow(i);
    dataProductObj.splice(i, 1);
  }
  localStorage.setItem("products", JSON.stringify(dataProductObj));
  ShowProduct();
}

function updateProduct() {
  let nameProd = document.getElementById("nameProd");
  let quatityProd = document.getElementById("quatityProd");
  let priceProd = document.getElementById("priceProd");
  let imageProd = document.getElementById("imageProd");
  let inputSave = document.getElementById("indexToSave");
  let dataProductObj = JSON.parse(localStorage.getItem("prodcuts")) || [];
  let updateNewProduct = {
    nameProduct: nameProd.value,
    quatityProduct: quatityProd.value,
    priceProduct: priceProd.value,
    imageProduct: imageProd.value
  };
  let i = inputSave.value;
  dataProductObj.splice(i, 1, updateNewProduct);
  localStorage.setItem("products", JSON.stringify(dataProductObj));
  ShowProduct();
}

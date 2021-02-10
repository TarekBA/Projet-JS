function ShowProduct() {
  let dataProductObj = JSON.parse(localStorage.getItem("produits")) || [];
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
                        }<i class="fa fa-usd"></i></td>
                        <td class="invert">
                            <button data-toggle="modal" data-target="#exampleModal" class="btn btn-success text-white" onclick="editProduct(${i})">
                            <i class="fa fa-edit"></i>&nbsp;&nbsp;&nbsp;Edit
                            </button>
                            <button class="btn btn-danger text-white" onclick="deleteProduct(${i})">
                                <i class="fas fa-trash-alt"></i>&nbsp;&nbsp;&nbsp;Delete
                            </button>
                        </td>
                    </tr>`;
  }
  rowProdt.innerHTML = rowProduct;
}

function deleteProduct(i) {
  let dataProductObj = JSON.parse(localStorage.getItem("produits")) || [];
  let rowProdt = document.getElementById("rowProdt");
  if (confirm(`Are you sure to delete this line Nbr(${i + 1}) ?`)) {
    rowProdt.deleteRow(i);
    dataProductObj.splice(i, 1);
    localStorage.setItem("produits", JSON.stringify(dataProductObj));
    ShowProduct();
  }
}

function updateProduct() {
  let nameProd = document.getElementById("nameProd");
  let quatityProd = document.getElementById("quatityProd");
  let priceProd = document.getElementById("priceProd");
  let inputSave = document.getElementById("indexToSave");
  let imageProd = document.getElementById("imageProd").files;
  let image = "";

  if (imageProd.length > 0) {
    let fileToLoad = imageProd[0];
    let fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
      image = fileLoadedEvent.target.result;
      // save image  in localStorage
      let dataProductObj = JSON.parse(localStorage.getItem("produits")) || [];
      let updateNewProduct = {
        nameProduct: nameProd.value,
        quatityProduct: quatityProd.value,
        priceProduct: priceProd.value,
        imageProduct: image,
      };
      let i = inputSave.value;
      dataProductObj.splice(i, 1, updateNewProduct);
      localStorage.setItem("produits", JSON.stringify(dataProductObj));
      ShowProduct();
    };
    fileReader.readAsDataURL(fileToLoad);
  } else {
    let dataProductObj = JSON.parse(localStorage.getItem("produits")) || [];
    let updateNewProduct = {
      nameProduct: nameProd.value,
      quatityProduct: quatityProd.value,
      priceProduct: priceProd.value,
    };
    let i = inputSave.value;
    dataProductObj.splice(i, 1, updateNewProduct);
    localStorage.setItem("produits", JSON.stringify(dataProductObj));
    ShowProduct();
  }
}

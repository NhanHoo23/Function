let products = [];
function add() {
    let productName = document.getElementById("InputProduct").value;
    products.push(productName)
    document.getElementById("InputProduct").value = ""
    displayProduct()
}

function displayProduct() {
    let data = "<tr>"
    for(let i = 0; i < products.length; i++) {
        data += `
            <td>${i+1}</td>
            <td style="width: 300px;">${products[i]}</td>
            <td style="width: 100px;"><button class="button" onclick="editProduct(${i})">Edit</button></td>
            <td><button class="button" onclick="deleteProduct(${i})">Delete</button></td></tr><tr>`
    }
    data += "</tr>"
    document.getElementById("ProductList").innerHTML = data
}

function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm có tên: " +  products[index] + " ?")) {
        products.splice(index, 1)
    }
    displayProduct() 
}

function editProduct(index) {
    for(let i = 0; i < products.length; i++) {
        if (i == index) {
            document.getElementById("InputProduct").value = products[i]
        }
    }
}

function editProduct(index) {
    let updateProduct = prompt("Cập nhật sản phẩm có tên " + products[index] + " :")
    products[index] = updateProduct
    displayProduct()
}
let products = []
let indexP;


function display() {
    let boardProduct = document.getElementById("display")
    let data = "<table><tr><th><h4>Product</h4></th><th colspan='2' style='text-align: right'>" + products.length + " products" +"</th></tr>"
    for (let i = 0; i < products.length; i++) {
        data += "<tr>"
        data += "<td>" + products[i] + "</td>"
        data += "<td>" + "<button onclick='edit(" + i + ")'>Edit</button>" + "</td>"
        data += "<td>" + "<button onclick='deleteP(" + i + ")'>Delete</button>" + "</td>"
        data += "</tr>"
    }
    data += "</table>"
    boardProduct.innerHTML = data
}

function add() {
    let newProduct = document.getElementById("add").value
    if (newProduct === "") {
        alert("Nhập giá trị sản phẩm!!")
    } else {
        products.push(newProduct)
        document.getElementById("add").value = ""
    }
    display()
}

function edit(index) {
    // let newProduct = prompt("Nhập sản phẩm mới: ")
    // while (newProduct === "") {
    //     newProduct = prompt("Nhập sản phẩm mới: ")
    // }
    // products[index] = newProduct
    indexP = index
    document.getElementById("edit").value = products[index]
    display()
}

function editP() {
    let newProduct = document.getElementById("edit").value
    if (newProduct === "") {
        alert("Nhập giá trị sản phẩm!!")
    } else {
        products[indexP] = newProduct
        document.getElementById("edit").value = ""
    }
    display()
}

function deleteP(index) {
    products.splice(index, 1)
    display()
}

display()
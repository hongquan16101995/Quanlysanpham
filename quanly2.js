let products = []
let indexP;


function display() {
    let boardProduct = document.getElementById("display")
    let data = "<table><tr><th><h4>Person</h4></th><th colspan='5' style='text-align: right'>" + products.length + " persons" +"</th></tr>"
    for (let i = 0; i < products.length; i++) {
        data += "<tr>"
        data += "<td>" + products[i].getName() + "</td>"
        data += "<td>" + products[i].age + "</td>"
        data += "<td>" + products[i].gender + "</td>"
        data += "<td>" + products[i].address + "</td>"
        data += "<td>" + "<button onclick='edit(" + i + ")'>Edit</button>" + "</td>"
        data += "<td>" + "<button onclick='deleteP(" + i + ")'>Delete</button>" + "</td>"
        data += "</tr>"
    }
    data += "</table>"
    boardProduct.innerHTML = data
}

function add() {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    let address = document.getElementById("address").value
    let person = new Person(name, age, gender, address)
    if (name === "" || age === "" || gender === "" || address === "") {
        alert("Nhập giá trị!!")
    } else {
        products.push(person)
        document.getElementById("name").value = ""
        document.getElementById("age").value = ""
        document.getElementById("gender").value = ""
        document.getElementById("address").value = ""
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
//1. in năm sản xuất xe
let car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
};
console.log(`Năm sản xuất xe: ${car.year}`);

//2. in tên đường của người
let person = {
    "name": "Testing",
    "address": {
        "street": "đây là 1 con đường mòn",
        "city": "TPHCM",
        "country": "VN"
    }
};
console.log(`Tên đường ${person.address.street}`);

//3. truy cập điểm môn toán sử dụng ngoặc vuông
let student = {
    "name": "Văn A",
    "grades": {
        "math": 10,
        "english": 10
    }
};
console.log(`Điểm môn toán: ${student["grades"]["math"]}`);

//4. in tên và giá sản phẩm
let product = {
    product1: {
        "name": "1 trái xoài",
        "price": 10
    },
    product2: {
        "name": "1 trái ổi",
        "price": 20
    }
};
for (let property in product) {
    console.log(`Thông tin sản phẩm ${product[property].name}`);
    console.log(`Giá sản phẩm ${product[property].price}`);
}

//5. Thay đổi giá trị , in ra object mới

let setting = {
    "volume": 10,
    "brightness": "tuyệt vời"
};
setting.volume = 20;
console.log(
    `Update setting với volumne ${setting.volume} và brightness ${setting.brightness}`
);

//6. Tạo object và thêm thuộc tính mới vào object
let bike = {
    "name": "1 chiếc xe xinh đẹp",
    "age": 2
}
bike.color ="Blue"
console.log(`Giá trị được thêm vào trong object là ${bike.color}`)

//7. Tạo object và xóa thuộc tính khỏi object
let employee = {
    "name": "Văn A",
    "age": 20
}
delete employee.age;
console.log(employee)

//8. 
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
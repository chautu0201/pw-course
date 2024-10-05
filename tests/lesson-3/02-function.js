//1.  Viet ham tinh chi so BMI dua tren chieu cao va can nang
function tinhBMI(heightCM, weightKG) {
    let heightM = heightCM / 100;
    let bmi = weightKG / (heightM * heightM);
    if (bmi < 18.5) {
        return `Thieu can - Chi so BMI la: ${bmi}`;
    } else if (bmi < 25) {
        return `Binh thuong - Chi so BMI la: ${bmi}`;
    } else if (bmi < 30) {
        return `Thua can - Chi so BMI la: ${bmi}`;
    } else {
        return `Beo phi - Chi so BMI la: ${bmi}`;
    }
}
console.log(tinhBMI(150, 38));

//2. Viet ham chuyen doi nhiet do tu do C sang do F va nguoc lai
function changeTemperature(temperature, type) {
    let valueChange;
    if (type === "C") {
        valueChange = (temperature * 9) / 5 + 32;
        return `Do C bang ${valueChange}`;
    } else if (type === "F") {
        valueChange = ((temperature - 32) * 5) / 9;
        return `Do F bang ${valueChange}`;
    }
}
console.log(changeTemperature(200, "C"));
console.log(changeTemperature(400, "F"));

//3. Khai bao 1 mang cac phan tu bat ki. Viet 1 ham tinh tong cac phan tu trong mang
arr1 = [2, 3, 8, 500];
function arrTotal() {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i];
    }
    return sum;
}
console.log(arrTotal(arr1));

//4. Viet ham loc ra cac so nguyen to tu 1 mang da cho.
// So 0, so 1 khong phai la so nguyen to
// Các so nguyen to chi chia het cho 1 và chinh nó
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function isPrime(number) {
    if (number < 2) {
        return `${number} khong phai la so nguyen to`;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return `${number} khong phai la so nguyen to`;
        }
    }
    return `${number} la so nguyen to`;
}
arr2.forEach((num) => {
    console.log(isPrime(num));
});

// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail

global = [
    { name: "Name Testing 1", email: "emai1@gmail.com" },
    { name: "Name Testing 2", email: "emai2@gmail.com" }
];

function updateEmail(name, newEmail) {
    for (let i = 0; i < global.length; i++) {
        if (global[i].name === name) {
            global[i].email = newEmail;
            return `Email updated: ${global[i].email}`;
        }
        return global[i].name;
    }
}
console.log(updateEmail("Name Testing 1", "test@gmail"));

// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}

arr_score = [
    { name: "Alex", score: 85 },
    { name: "Join", score: 100 },
    { name: "Layla", core: 200 }
];
// function averageScoreStudent(studentScore){

//     let totalCheck = 0;

//     for(let i = 0; i < studentScore.length; i++){
//          totalCheck = totalCheck + studentScore[i].score;
//     }
//     let averageScore = totalCheck / studentScore.length;
//     return averageScore;
// }
// let avg = averageScoreStudent(arr_score);
// console.log(`diem trung binh: ${avg}`);
// BẾ TẮC, ĐỂ TẠM Ở ĐÂY

// 7.Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 }

productlist = [
    { name: "product1", price: 20 },
    { name: "product2", price: 0 },
    { name: "product3", price: 1 }
];
function checkProductPrice(productlist) {
    let arrtest = [];
    let index = 0;
    for (let i = 0; i < productlist.length; i++) {
        if (productlist[i].price > 0) {
            arrtest[index] = productlist[i];
            index++;
        }
    }
    return arrtest;
}
let result = checkProductPrice(productlist);
console.log(result);

//8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.
let currentdate = new Date();
let storeOpen1 = new Date();
let storeClose1 = new Date();

// Set the opening and closing hours
storeOpen1.setHours(9, 0, 0);
storeClose1.setHours(21, 0, 0);
let arrStoreTime = [storeOpen1, storeClose1];

function checkStoreTime(currentDate) {
    let currentHour = currentDate.getHours();
    let storeOpenHour = arrStoreTime[0].getHours();
    let storeCloseHour = arrStoreTime[1].getHours();

    if (currentHour >= storeOpenHour && currentHour < storeCloseHour) {
        console.log("The Store is Open.");
    } else {
        console.log("The Store is Closed.");
    }
}
console.log(
    `Current Time: ${currentdate.getHours()}:${currentdate.getMinutes()}`
);

checkStoreTime(currentdate);

//9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
function checkTicketPrice(age) {
    if (age < 5) {
        return "Mien phi";
    } else if (age >= 6 && age <= 17) {
        return "Phi 50k";
    } else {
        return "Phi 100k";
    }
}
console.log(checkTicketPrice(10));

//10 Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý.
function printMonthName(month) {
    switch (month) {
        case 1:
            console.log("Thang 1");
            break;
        case 2:
            console.log("Thang 2");
            break;
        case 3:
            console.log("Thang 3");
            break;
        case 4:
            console.log("Thang 4");
            break;
        case 5:
            console.log("Thang 5");
            break;
        case 6:
            console.log("Thang 6");
            break;
        default:
            console.log("So thang khong hop le");
    }
}
printMonthName(10);

//11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
function checkStudentPoint(point) {
    if (point >= 8) {
        return "Gioi";
    } else if (point >= 6.5) {
        return "Kha";
    } else if (point >= 5) {
        return "Trung binh";
    } else {
        return "Yeu";
    }
}
console.log(checkStudentPoint(1));

//12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ
//và thông báo trạng thái thời tiết: nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
function notificationWeather(temperature) {
    if (temperature >= 30) {
        return "Nong";
    } else if (temperature >= 20) {
        return "Mat";
    } else {
        return "Lanh";
    }
}
console.log(notificationWeather(50));



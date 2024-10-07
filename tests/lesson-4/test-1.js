// 1. Khởi động Tàu Vũ trụ K10
const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K10";
crew = ["Thư", "Khải", "Tú Anh", "Ngân", "Khanh", "Thơm"];

function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K10!.`;
}
//in thông điệp
console.log(launchShip(crew));

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time;
}
//in kết quả
console.log(`Khoảng cách đến hành tinh đó sẽ là ${(calculateDistance(1000, 24))}`);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    //chuyển đổi sang Hex
    return time.toString(16);
}
//gọi hàm converTimeToHex với thời gian là 120
let timeDecimal = 120;
let timeHex = convertTimeToHex(timeDecimal);
//in kết quả
console.log(`Giá trị thời gian đã chuyển đổi được tính là ${timeHex}`);

// 4. Khám phá kho báu
function decryptCode(code) {
    //tạo biến lưu mật mã
    let decoded = "";
    //kiểm tra kí tự và chuyển đổi
    for (let character of code) {
        if (character === character.toLowerCase()) {
            decoded += character.toUpperCase();
        } else {
            decoded += character.toLowerCase();
        }
    }
    //trả về mật mã đã được giải
    return decoded;
}
//in kết quả
console.log(`Đã tìm được mật mã: ${decryptCode("K10 Challenge")}`);

//5. Trở về Trái Đất
function returnToEarth(){
    console.log("Chuẩn bị trở về Trái Đất")
}
returnToEarth();

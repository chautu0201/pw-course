//1.Tính tổng từ 1 đến 100.
let total = 0;
for (let i = 0; i <= 100; i++) {
    total = total + i;
}
console.log(`Tong cac so tu 1 den 100 la: ${total}`);

//2. In bảng cửu chương từ 2 đến 9.

for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i}`);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    } 
}


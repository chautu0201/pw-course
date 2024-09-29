# 1. VERSION CONTROL SYSTEM
## **Là hệ thống quản lý các phiên bản**
## **- Local**: Lưu ở máy cá nhân
## **- Centralize**: Lưu ở một máy chủ tập trung
## **- Distributed**: Lưu ở nhiều máy khác nhau
# 2. GIT
## **Dùng GIT do nhu cầu quản lý phiên bản và làm việc giữa nhiều người với nhau**
## - So sánh GIT VÀ GITHUB
Git  | Github
------------- | -------------
Là một phần mềm  |Là một dịch vụ web
Cài trên máy của bạn | Host trên website
Là một commandline tool | Là công cụ có giao diện
Là công cụ quản lý phiên bản đưa file vào Git repository | Là nơi để upload Git repository lên
Có các tính năng của Version Control System | Có các tính năng của Version Control System và một số tính năng khác

## - Git tree states
 1. Working directory
 2. Staging Area
 3. Repository
## - Git status
- git init : Khởi tạo git
- git add . : add tất cả các file từ vùng working directory sang vùng staging area
- git add <testing.html>: add file testing.html từ vùng working directory sang vùng staging area
- git commit -m "message: tạo commit, ghi lại những thay đổi đã được đưa vào từ vùng staging area
- git status: hiển thị trạng thái của thư mục làm việc (working directory) và khu vực tạm thời (staging area)

## - Git - key takeaways
- Khởi tạo name và email cho

 1 repo  | Toàn bộ máy tính
 ------------- | -------------
 git config user.name “name”  | git config --global user.name "user"
 git config user.email “email”  | git config --global user.name "email"

# 3. JAVASCRIPT BASIC
## - Tạo file
Ex: Open VS code -> Create file testing01.js
## - Tạo variable
 - Khai báo: var, let, const
    1. var: phạm vi toàn cục, có thể sử dụng lại được
    2. let: phạm vi trong dấu ngoặc {}, không thể sử dụng lại được
    3. const: hằng số, khai báo giá trị không thể thay đổi

Nên: Dùng let và const để dễ kiểm soát phạm vi biến
## - Data type
 - Có 8 kiểu dữ liệu: String, Number, 
Bigint, Boolean, Undefined, Null, 
Symbol, Object.
## - Comparison operator
 - So sánh hơn kém: >, <
 - So sánh bằng: ==, ===,!=, !==, >=, <=
 ## - Unary operator
 - i++ bằng với i=i+1
 - i-- bằng với i=i-1
 ## - Arithmetic operator
  - Dùng tính toán giá trị biểu 
thức
  - Các phép toán: +, -, *, /
## - Conditional
  - Cú pháp: if (<điều kiện>) { // code }. 

## - Loops
  - Cú pháp: for(<khởi tạo>; <điều 
kiện dừng>; <điều kiện tăng>) { 
// code }



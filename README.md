# JS-learning
## 1. Function Declaration (Khai báo hàm)
- Định nghĩa hàm với `function tênHàm() {}`  
- Có **hoisting** → có thể gọi trước khi định nghĩa.

---

## 2. Function Expression (Biểu thức hàm)
- Gán hàm vào một biến.  
- Không có hoisting.

---

## 3. Arrow Function
- Cú pháp ngắn gọn.  
- Không có `this` riêng.  
- Không hoisting.

---

## 4. Parameters & Arguments
- Dùng để truyền dữ liệu vào hàm.  
- Có thể dùng **default parameter** và **rest parameter**.

---

## 5. Scope (Phạm vi biến)
- Hàm tạo scope riêng cho biến.  
- Biến local không thể truy cập bên ngoài.  
- `let` và `const` có block scope.

---

## 6. Closures
- Hàm con có thể nhớ biến từ hàm cha.  
- Cho phép tạo ra state riêng cho mỗi hàm.

---

## 7. `this` trong Function
- Hàm thường → `this` phụ thuộc cách gọi.  
- Arrow function → lấy `this` từ scope cha.

---

## 8. Higher-Order Functions
- Hàm có thể nhận hàm khác làm tham số.  
- Hàm có thể trả về một hàm khác.

---

## 9. Async Functions
- Dùng để làm việc với Promise.  
- Viết với từ khóa `async/await`.
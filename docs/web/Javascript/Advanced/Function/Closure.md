# Closure

## Closure trong JavaScript

Closure (đóng gói) là một tính năng quan trọng trong JavaScript, cho phép một hàm "ghi nhớ" môi trường (scope) nơi nó được tạo ra, ngay cả khi hàm đó được thực thi bên ngoài phạm vi ban đầu.

---

### **Khái niệm**

- **Closure** là sự kết hợp giữa một hàm và môi trường (scope) nơi hàm đó được khai báo.
- **Closure** giúp truy cập các biến trong phạm vi bên ngoài của hàm, ngay cả khi hàm được gọi ở một nơi khác.

    - **Ví dụ:**
    ```javascript
    function outerFunction() {
        let outerVariable = "Tôi là biến từ outerFunction";

        function innerFunction() {
            console.log(outerVariable); // Kết quả: "Tôi là biến từ outerFunction"
        }

        return innerFunction;
    }

    const closureFunction = outerFunction();
    closureFunction(); // Gọi hàm innerFunction thông qua closure
    ```

---

### **Cách hoạt động**

1. **Hàm lồng nhau**: 
    - Closure thường xảy ra khi một hàm được khai báo bên trong một hàm khác.
2. **Ghi nhớ phạm vi**: 
    - Hàm bên trong có thể truy cập các biến được khai báo trong hàm bao bọc (outer function) ngay cả sau khi hàm bao bọc kết thúc.

    - **Ví dụ:**
    ```javascript
    function createCounter() {
        let count = 0;

        return function () {
            count++;
            console.log(`Giá trị của count: ${count}`);
        };
    }

    const counter = createCounter();
    counter(); // Kết quả: Giá trị của count: 1
    counter(); // Kết quả: Giá trị của count: 2
    ```

---

### **Tính chất của Closure**

- **Truy cập biến cục bộ**: Closure có thể ghi nhớ và sử dụng các biến cục bộ của hàm cha.
- **Tạo private variables**: Closure thường được sử dụng để tạo các biến "private", giúp bảo vệ dữ liệu khỏi bị truy cập hoặc sửa đổi từ bên ngoài.
- **Lưu trạng thái**: Closure có thể lưu trữ trạng thái trong các biến mà nó truy cập.

    - **Ví dụ:**
    ```javascript
    function createPrivateCounter() {
        let count = 0;

        return {
            increment: function () {
                count++;
                console.log(`Tăng lên: ${count}`);
            },
            decrement: function () {
                count--;
                console.log(`Giảm xuống: ${count}`);s
            },
            getCount: function () {
                console.log(`Giá trị hiện tại: ${count}`);
            }
        };
    }

    const counter = createPrivateCounter();
    counter.increment(); // Tăng lên: 1
    counter.increment(); // Tăng lên: 2
    counter.getCount();  // Giá trị hiện tại: 2
    counter.decrement(); // Giảm xuống: 1
    ```

---

### **Ứng dụng của Closure**

1. **Tạo private variables**: Sử dụng closure để bảo vệ các biến bên trong phạm vi của một hàm.
2. **Lưu trạng thái**: Closure thường được dùng trong các trường hợp cần lưu trữ trạng thái, như bộ đếm hoặc cấu hình.
3. **Hàm callback**: Closure rất hữu ích trong việc sử dụng các hàm callback, đặc biệt trong các API hoặc sự kiện không đồng bộ.

- **Ví dụ:**
    ```javascript
    function sayHelloLater(name) {
        setTimeout(function () {
            console.log(`Xin chào, ${name}!`);
        }, 1000);
    }

    sayHelloLater("Ngọc"); // Kết quả: "Xin chào, Ngọc!" (sau 1 giây)
    ```

---

### **Tóm tắt**

| Thuộc tính của Closure                     | Ý nghĩa                                                      |
|--------------------------------------------|-------------------------------------------------------------|
| **Truy cập phạm vi ngoài**                  | Có thể truy cập các biến của hàm bao bọc ngay cả khi đã thoát ra. |
| **Tạo biến private**                        | Giúp bảo vệ các biến khỏi bị sửa đổi hoặc truy cập từ bên ngoài. |
| **Lưu trữ trạng thái**                      | Ghi nhớ giá trị của biến để sử dụng trong tương lai.         |


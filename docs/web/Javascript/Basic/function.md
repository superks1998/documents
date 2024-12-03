---
sidebar_position: 6
---

# Functions

## Hàm (Functions) trong JavaScript

- Hàm (Function) là khối mã thực hiện một nhiệm vụ cụ thể và có thể được tái sử dụng. JavaScript có nhiều loại hàm, mỗi loại có đặc điểm riêng về `this`, hoisting, và cách sử dụng. Dưới đây là các loại hàm phổ biến và chi tiết từng đặc điểm của chúng.

### Các Loại Hàm trong JavaScript

- ***Function Declaration***
    - **Giới thiệu**: Là cách khai báo hàm truyền thống trong JavaScript. Được hoisted nên có thể gọi trước khi được khai báo trong mã.
    - **Hoisting**: Function declaration được hoisted lên đầu phạm vi, nghĩa là có thể gọi hàm trước khi khai báo.
    - **`this` trong Function Declaration**: Giá trị của `this` phụ thuộc vào cách hàm được gọi, thường là `undefined` trong strict mode hoặc trỏ đến global object (window trong trình duyệt).
    - **Cú pháp**:
      ```javascript
      function functionName(parameters) {
          // code to be executed
      }
      ```
    - **Ví dụ**:
      ```javascript
      function greet(name) {
          return "Hello, " + name + "!";
      }
      console.log(greet("Alice")); // In ra "Hello, Alice!"
      ```

- ***Function Expression***
    - **Giới thiệu**: Khai báo hàm dưới dạng biểu thức, thường gán vào một biến. Không được hoisted, nghĩa là không thể gọi trước khi khai báo.
    - **Hoisting**: Function expression không được hoisted, vì thế cần khai báo trước khi gọi.
    - **`this` trong Function Expression**: Tương tự function declaration, `this` trong function expression phụ thuộc vào cách hàm được gọi.
    - **Cú pháp**:
      ```javascript
      const functionName = function(parameters) {
          // code to be executed
      };
      ```
    - **Ví dụ**:
      ```javascript
      const add = function(a, b) {
          return a + b;
      };
      console.log(add(5, 3)); // In ra 8
      ```

- ***Arrow Function***
    - **Giới thiệu**: Cú pháp hàm rút gọn, thích hợp cho các hàm ngắn gọn. Không có `this` riêng mà kế thừa `this` từ phạm vi bên ngoài (lexical `this`). Không được hoisted.
    - **Hoisting**: Arrow function không được hoisted nên phải khai báo trước khi gọi.
    - **`this` trong Arrow Function**: Arrow function không có `this` riêng, nó kế thừa `this` từ phạm vi bên ngoài. Điều này rất hữu ích khi cần truy cập `this` trong ngữ cảnh của hàm cha.
    - **Cú pháp**:
      ```javascript
      const functionName = (parameters) => {
          // code to be executed
      };
      ```
    - **Ví dụ**:
      ```javascript
      const person = {
          name: "Alice",
          sayHello: () => {
              console.log("Hello, " + this.name);
          }
      };
      person.sayHello(); // In ra "Hello, undefined" vì `this` trỏ đến global object, không trỏ đến object person

      const person = {
          name: "Alice",
          sayHello: () => {
              console.log("Hello, " + this.name);
          }
      };

      person.sayHello(); // In ra "Hello, Alice" vì `this` trỏ đến object person
      ```

- ***Anonymous Function***
    - **Giới thiệu**: Hàm không có tên, thường được sử dụng trong các trường hợp không cần tái sử dụng hàm. Không có tên nên không thể gọi trực tiếp bằng tên, chỉ có thể gọi thông qua một biến hoặc trong ngữ cảnh nhất định.
    - **Hoisting**: Anonymous function không được hoisted vì phải được gán vào biến hoặc gọi trực tiếp tại chỗ.
    - **Ví dụ**:
      ```javascript
      setTimeout(function() {
          console.log("This is an anonymous function");
      }, 1000);
      ```

- ***IIFE (Immediately Invoked Function Expression)***
    - **Giới thiệu**: Hàm được khai báo và gọi ngay lập tức. IIFE thường được dùng để tạo phạm vi cục bộ nhằm ngăn xung đột biến trong mã JavaScript.
    - **Hoisting**: Không có hoisting vì được thực thi ngay khi khai báo.
    - **Cú pháp**:
      ```javascript
      (function() {
          // code to be executed immediately
      })();
      ```
    - **Ví dụ**:
      ```javascript
      (function() {
          console.log("This is an IIFE");
      })();
      ```

### So Sánh `this` trong Các Loại Hàm

| Loại Hàm              | Giá trị `this`                   | Phạm vi `this`                |
|-----------------------|----------------------------------|-------------------------------|
| **Function Declaration** | Phụ thuộc vào cách gọi           | Có `this` riêng, xác định khi hàm được gọi |
| **Function Expression**  | Phụ thuộc vào cách gọi           | Có `this` riêng, xác định khi hàm được gọi |
| **Arrow Function**       | Kế thừa `this` từ phạm vi bên ngoài | Không có `this` riêng         |
| **Anonymous Function**   | Phụ thuộc vào cách gọi           | Có `this` riêng trong ngữ cảnh gọi |
| **IIFE**                 | Phụ thuộc vào cách gọi           | Có `this` riêng, xác định tại thời điểm gọi |

### Ví dụ về Hoisting và `this`

- **Hoisting**:
    - Function declarations có thể được gọi trước khi chúng được khai báo.
    - Function expressions và arrow functions không thể được gọi trước khi khai báo.

    ```javascript
    // Function Declaration
    console.log(sum(2, 3)); // In ra 5 vì function declaration được hoisted

    function sum(a, b) {
        return a + b;
    }

    // Function Expression
    console.log(subtract(5, 3)); // Lỗi vì function expression không được hoisted
    const subtract = function(a, b) {
        return a - b;
    };

    // Arrow Function
    console.log(multiply(3, 4)); // Lỗi vì arrow function không được hoisted
    const multiply = (a, b) => a * b;
    ```

- **Sử dụng `this`**:
    - Với function declaration và function expression, `this` có thể thay đổi phụ thuộc vào cách hàm được gọi.
    - Arrow functions không có `this` riêng, luôn sử dụng `this` từ phạm vi bên ngoài.

    ```javascript
    // Function Declaration
    function showThis() {
        console.log(this);
    }
    showThis(); // `this` trỏ đến global object (hoặc undefined trong strict mode)

    const obj = {
        name: "Alice",
        showThis: showThis
    };
    obj.showThis(); // `this` trỏ đến obj vì hàm được gọi thông qua obj

    // Arrow Function
    const person = {
        name: "Alice",
        greet: () => {
            console.log("Hello, " + this.name);
        }
    };
    person.greet(); // `this` trỏ đến global object (hoặc undefined trong strict mode) vì `this` của arrow function là của phạm vi bên ngoài
    ```

### Các Tính Năng Quan Trọng của Hàm trong JavaScript

- **Tham số Mặc định (Default Parameters)**:
    - JavaScript cho phép đặt giá trị mặc định cho tham số trong hàm, giúp tránh lỗi khi thiếu đối số khi gọi hàm.
    - **Ví dụ**:
      ```javascript
      function greet(name = "Guest") {
          return "Hello, " + name;
      }
      console.log(greet()); // In ra "Hello, Guest"
      ```

- **Rest Parameters**:
    - Cho phép truyền vào một số lượng tham số không xác định dưới dạng mảng.
    - **Ví dụ**:
      ```javascript
      function sum(...numbers) {
          return numbers.reduce((total, num) => total + num, 0);
      }
      console.log(sum(1, 2, 3, 4)); // In ra 10
      ```

- **Closures**:
    - Closure là một hàm có thể truy cập các biến từ phạm vi của hàm chứa nó ngay cả khi hàm chứa đó đã kết thúc.
    - **Ví dụ**:
      ```javascript
      function outer() {
          let count = 0;
          return function() {
              count++;
              return count;
          };
      }
      const counter = outer();
      console.log(counter()); // In ra 1
      console.log(counter()); // In ra 2
      ```

### So Sánh Các Loại Hàm trong JavaScript

| Loại Hàm              | Sử Dụng Khi                     | Ưu Điểm                       | Nhược Điểm                        |
|-----------------------|---------------------------------|-------------------------------|-----------------------------------|
| **Function Declaration** | Cần khai báo hàm có tên         | Dễ gọi ở bất kỳ đâu trong phạm vi | Không phù hợp cho các hàm ngắn, đơn giản |
| **Function Expression**  | Cần lưu hàm vào biến            | Linh hoạt, dễ truyền vào các hàm khác | Không thể gọi trước khi khai báo |
| **Arrow Function**       | Cần cú pháp ngắn gọn, không cần `this` | Ngắn gọn, dễ đọc               | Không có `this` riêng nên không phù hợp với tất cả trường hợp |
| **Anonymous Function**   | Cần dùng hàm không tái sử dụng  | Tiết kiệm cú pháp, gọn nhẹ     | Không có tên nên khó debug |
| **IIFE**                 | Cần tạo phạm vi riêng          | Ngăn xung đột biến            | Khó đọc nếu lạm dụng |

---

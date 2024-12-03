# Hoisting
## Hoisting trong JavaScript

- **Hoisting** là một khái niệm quan trọng trong JavaScript, giúp người mới học hiểu rõ hơn cách mà trình biên dịch xử lý các biến, hàm và lớp trước khi mã được thực thi.

### **Khái niệm**

- **Hoisting** là quá trình mà trình biên dịch JavaScript di chuyển các khai báo **biến**, **hàm**, hoặc **lớp** lên đầu phạm vi của chúng (scope) trong quá trình **compile**. 
- Điều này có nghĩa là bạn có thể sử dụng chúng trước khi chúng được khai báo trong mã nguồn.

- Tuy nhiên, **giá trị** của các biến (được khai báo bằng `var`, `let`, hoặc `const`) sẽ không được hoisting.

---

### **Cách hoạt động**

- **Khai báo biến bằng `var`**: Các biến được khai báo bằng `var` sẽ được hoisting, nhưng giá trị của chúng mặc định là `undefined` cho đến khi được gán giá trị.

- **Khai báo bằng `let` và `const`**: Cũng được hoisting, nhưng nằm trong "Temporal Dead Zone" (TDZ): thời gian từ khi khởi tạo cho đến khi khai báo biến và không thể sử dụng trước khi khai báo.

- **Hàm**: Hoisting toàn bộ hàm (cả khai báo lẫn định nghĩa), giúp bạn gọi hàm trước khi định nghĩa.

- **Lớp (class)**: Hoisting chỉ xảy ra với phần khai báo, nhưng bạn không thể sử dụng lớp trước khi định nghĩa.

---

### **Ví dụ minh họa**

#### 1. **Khai báo biến với `var`**
    ```javascript
    console.log(x); // Kết quả: undefined
    var x = 5;
    console.log(x); // Kết quả: 5
    ```
    - **Giải thích**: Biến x được hoisting lên đầu với giá trị ban đầu là undefined.

#### 2. **Khai báo biến với let và `const`**
    ```javascript
    console.log(y); // Lỗi: Cannot access 'y' before initialization
    let y = 10;

    console.log(z); // Lỗi: Cannot access 'z' before initialization
    const z = 20;
    ```
    - **Giải thích**: let và const nằm trong TDZ và không thể truy cập trước khi được khai báo.
#### 3. **Hoisting với `hàm`**
    ```javascript
    sayHello(); // Kết quả: "Hello, world!"

    function sayHello() {
    console.log("Hello, world!");
    }
        - **Giải thích**: Toàn bộ hàm sayHello được hoisting, cho phép gọi hàm trước khi định nghĩa.
    ```
#### 4. **Hoisting với `class`**
    ```javascript
    const obj = new MyClass(); // Lỗi: Cannot access 'MyClass' before initialization

    class MyClass {
    constructor() {
        this.name = "```JavaScript";
    }
    }
    ```
    - **Giải thích**: Class chỉ được hoisting phần khai báo, nhưng không thể sử dụng trước khi định nghĩa.


### **Tóm tắt**

    | Loại           | Có Hoisting                | Giá trị mặc định       | Giá trị mặc định      |
    |----------------------|-----------------------------|--------------------------|--------------------------|
    | `var`           | Có       |    `undefined`    | Được phép   |
    |`let`           | Có | Không | Không (TDZ) | 
    | `const`       | Có                          | Không                    | Không (TDZ)                  |
    | `Function`      | Có                          | Đầy đủ                     | Được phép                |
    | `Class`      | Có                          | Không               | Không                    |
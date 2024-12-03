---
sidebar_position: 7
---

# Objects

## JavaScript Objects

- Đối tượng (Object) trong JavaScript là một kiểu dữ liệu cho phép lưu trữ các thuộc tính (properties) và phương thức (methods). Mỗi thuộc tính có một tên (key) và một giá trị (value), giúp tổ chức dữ liệu thành các đơn vị có cấu trúc.

### 1. Tạo một đối tượng
- **Cách tạo đối tượng**: Đối tượng có thể được tạo bằng cách sử dụng dấu ngoặc nhọn `{}` hoặc từ khóa `new Object()`.

    #### Cú pháp
    ```javascript
    const obj = {
        key1: value1,
        key2: value2,
        // ...
    };
    ```

    #### Ví dụ
    ```javascript
    const person = {
        name: "John",
        age: 30,
        isStudent: false
    };
    console.log(person);
    // Output: { name: "John", age: 30, isStudent: false }
    ```

### 2. Truy cập thuộc tính trong đối tượng
- **Dot Notation**: Sử dụng dấu chấm `.` để truy cập vào thuộc tính của đối tượng.
- **Bracket Notation**: Sử dụng dấu ngoặc vuông `[]` cùng tên thuộc tính dưới dạng chuỗi (string).

    #### Ví dụ
    ```javascript
    console.log(person.name);       // Output: "John"
    console.log(person["age"]);     // Output: 30
    ```

### 3. Thêm hoặc sửa đổi thuộc tính
- Bạn có thể thêm thuộc tính mới hoặc thay đổi giá trị của thuộc tính hiện có bằng `dot notation` hoặc `bracket notation`.

    #### Ví dụ
    ```javascript
    person.city = "New York";       // Thêm thuộc tính mới
    person.age = 31;                // Thay đổi giá trị thuộc tính hiện có
    console.log(person);
    // Output: { name: "John", age: 31, isStudent: false, city: "New York" }
    ```

### 4. Xóa thuộc tính
- Để xóa một thuộc tính khỏi đối tượng, sử dụng từ khóa `delete`.

    #### Ví dụ
    ```javascript
    delete person.isStudent;
    console.log(person);
    // Output: { name: "John", age: 31, city: "New York" }
    ```

### 5. Phương thức trong đối tượng
- **Phương thức** là các hàm được định nghĩa bên trong đối tượng. Chúng có thể truy cập và thao tác với các thuộc tính của đối tượng.

    #### Cú pháp
    ```javascript
    const obj = {
        key1: value1,
        methodName() {
            // code phương thức
        }
    };
    ```

    #### Ví dụ
    ```javascript
    const person = {
        name: "John",
        age: 30,
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    person.greet(); // Output: "Hello, my name is John"
    ```

### 6. Vòng lặp qua các thuộc tính trong đối tượng
- **`for...in`**: Sử dụng vòng lặp `for...in` để duyệt qua tất cả các thuộc tính trong một đối tượng.

    #### Ví dụ
    ```javascript
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    // Output:
    // name: John
    // age: 30
    // city: New York
    ```

### 7. Các phương thức hữu ích với đối tượng

Đối tượng (Object) trong JavaScript cho phép lưu trữ dữ liệu và phương thức liên quan. Dưới đây là chi tiết các phương thức phổ biến và hữu ích khi làm việc với đối tượng trong JavaScript.

#### 1. Phương thức `Object.keys()`
- **Mô tả**: Trả về một mảng chứa tất cả các tên thuộc tính của đối tượng (dạng chuỗi).
- **Ứng dụng**: Hữu ích khi cần duyệt qua tất cả các thuộc tính hoặc khi muốn lấy danh sách các thuộc tính của đối tượng.

    #### Ví dụ
    ```javascript
    const person = { name: "John", age: 30, city: "New York" };
    const keys = Object.keys(person);
    console.log(keys); 
    // Output: ["name", "age", "city"]
    ```

#### 2. Phương thức `Object.values()`
- **Mô tả**: Trả về một mảng chứa tất cả các giá trị của thuộc tính trong đối tượng.
- **Ứng dụng**: Giúp thu thập giá trị của các thuộc tính, thường được sử dụng khi muốn xử lý các giá trị mà không cần tên thuộc tính.

    #### Ví dụ
    ```javascript
    const values = Object.values(person);
    console.log(values); 
    // Output: ["John", 30, "New York"]
    ```

#### 3. Phương thức `Object.entries()`
- **Mô tả**: Trả về một mảng chứa các cặp `[key, value]` của đối tượng, mỗi phần tử là một mảng con.
- **Ứng dụng**: Hữu ích cho việc duyệt qua từng cặp `key-value` khi bạn muốn cả tên và giá trị thuộc tính cùng lúc.

    #### Ví dụ
    ```javascript
    const entries = Object.entries(person);
    console.log(entries); 
    // Output: [["name", "John"], ["age", 30], ["city", "New York"]]
    ```

#### 4. Phương thức `Object.assign()`
- **Mô tả**: Sao chép các thuộc tính của một hoặc nhiều đối tượng nguồn vào đối tượng đích, và trả về đối tượng đích đó.
- **Ứng dụng**: Được dùng để sao chép hoặc hợp nhất đối tượng, tạo bản sao nông (shallow copy) của đối tượng.

    #### Ví dụ
    ```javascript
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };
    const result = Object.assign(target, source);
    console.log(result);
    // Output: { a: 1, b: 4, c: 5 }
    ```

#### 5. Phương thức `Object.create()`
- **Mô tả**: Tạo một đối tượng mới với đối tượng hiện tại làm nguyên mẫu (prototype).
- **Ứng dụng**: Được dùng trong lập trình hướng đối tượng để tạo các đối tượng có cấu trúc kế thừa.

    #### Ví dụ
    ```javascript
    const personPrototype = {
        greet() {
            console.log("Hello!");
        }
    };
    const newPerson = Object.create(personPrototype);
    newPerson.greet(); 
    // Output: "Hello!"
    ```

#### 6. Phương thức `Object.hasOwnProperty()`
- **Mô tả**: Kiểm tra xem đối tượng có thuộc tính nhất định nào đó hay không (thuộc tính của riêng đối tượng, không phải kế thừa).
- **Ứng dụng**: Được sử dụng để kiểm tra sự tồn tại của thuộc tính một cách chính xác, tránh các thuộc tính kế thừa.

    #### Ví dụ
    ```javascript
    const person = { name: "John" };
    console.log(person.hasOwnProperty("name"));  // Output: true
    console.log(person.hasOwnProperty("age"));   // Output: false
    ```



### 7. Nested Objects (Đối tượng lồng nhau)
- Đối tượng có thể chứa các đối tượng khác làm thuộc tính, cho phép tạo cấu trúc dữ liệu phức tạp.

    #### Ví dụ
    ```javascript
    const person = {
        name: "John",
        age: 30,
        address: {
            street: "123 Main St",
            city: "New York"
        }
    };
    console.log(person.address.city); // Output: "New York"
    ```

### Tổng kết
- Đối tượng là một cách mạnh mẽ và linh hoạt để tổ chức và quản lý dữ liệu trong JavaScript, giúp cho việc thao tác dữ liệu trở nên dễ dàng và hiệu quả.
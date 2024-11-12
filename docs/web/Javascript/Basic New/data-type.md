---
sidebar_position: 2
---


# Data Types

## Kiểu Dữ Liệu (Data Types) trong JavaScript

JavaScript hỗ trợ nhiều kiểu dữ liệu khác nhau, từ kiểu dữ liệu đơn giản (như số, chuỗi) đến kiểu dữ liệu phức tạp hơn (như đối tượng, mảng). Việc hiểu rõ các kiểu dữ liệu trong JavaScript giúp bạn xử lý dữ liệu hiệu quả hơn và tránh được các lỗi không mong muốn trong mã nguồn.

### ***1. Kiểu Dữ Liệu Nguyên Thủy (Primitive Data Types)***
Các kiểu dữ liệu nguyên thủy là những giá trị không thể thay đổi sau khi được khởi tạo. Khi thay đổi một giá trị nguyên thủy, một bản sao mới của giá trị sẽ được tạo ra.

#### ***1.1. String (Chuỗi)***
  - **Giới thiệu**: Kiểu dữ liệu chuỗi dùng để lưu trữ các ký tự. Một chuỗi có thể chứa một hoặc nhiều ký tự.
  - **Cách khai báo**: Có thể khai báo chuỗi bằng dấu nháy đơn `'`, dấu nháy kép `"`, hoặc dấu nháy chéo ` (backtick)`.
  - **Ví dụ**:
    ```javascript
    let name = "John Doe";
    let message = 'Hello, world!';
    let greeting = `Hi, ${name}!`; // Template literals
    console.log(greeting); // "Hi, John Doe!"
    ```

#### ***1.2. Number (Số)***
  - **Giới thiệu**: Kiểu dữ liệu số dùng để lưu trữ các giá trị số học. JavaScript hỗ trợ các số nguyên và số thập phân.
  - **Ví dụ**:
    ```javascript
    let age = 30; // Số nguyên
    let price = 99.99; // Số thập phân
    console.log(age); // 30
    console.log(price); // 99.99
    ```
  - **Lưu ý**: JavaScript sử dụng kiểu `Number` để đại diện cho tất cả các số, không phân biệt giữa số nguyên và số thực.

#### ***1.3. Boolean (Boolean - Đúng/Sai)***
  - **Giới thiệu**: Kiểu dữ liệu boolean chỉ có hai giá trị: `true` (đúng) hoặc `false` (sai). Thường được dùng trong các biểu thức điều kiện.
  - **Ví dụ**:
    ```javascript
    let isActive = true;
    let isComplete = false;
    console.log(isActive); // true
    console.log(isComplete); // false
    ```

#### ***1.4. Undefined***
  - **Giới thiệu**: Kiểu `undefined` là giá trị mặc định của một biến chưa được gán giá trị. Khi khai báo một biến nhưng chưa gán giá trị, JavaScript sẽ tự động gán cho nó giá trị `undefined`.
  - **Ví dụ**:
    ```javascript
    let x;
    console.log(x); // undefined, vì x chưa được gán giá trị
    ```

#### ***1.5. Null***
  - **Giới thiệu**: `null` là một giá trị đặc biệt đại diện cho "không có giá trị". Đây là một giá trị có thể gán cho biến khi bạn muốn biểu thị rằng một đối tượng không tồn tại.
  - **Ví dụ**:
    ```javascript
    let user = null; // Không có giá trị người dùng
    console.log(user); // null
    ```

#### ***1.6. Symbol (Biểu tượng)***
  - **Giới thiệu**: `Symbol` là một kiểu dữ liệu đặc biệt dùng để tạo ra các giá trị độc nhất. Nó được sử dụng trong các tình huống cần giá trị duy nhất, như trong các thuộc tính của đối tượng.
  - **Ví dụ**:
    ```javascript
    const uniqueId = Symbol('id');
    console.log(uniqueId); // Symbol(id)
    ```

#### ***1.7. BigInt***
  - **Giới thiệu**: `BigInt` là kiểu dữ liệu được sử dụng để đại diện cho các số nguyên lớn, vượt quá giới hạn của kiểu `Number`.
  - **Ví dụ**:
    ```javascript
    const bigNumber = 1234567890123456789012345678901234567890n;
    console.log(bigNumber); // 1234567890123456789012345678901234567890n
    ```

### ***2. Kiểu Dữ Liệu Phức Tạp (Reference Data Types)***
Khác với kiểu nguyên thủy, kiểu dữ liệu phức tạp được lưu trữ dưới dạng tham chiếu. Điều này có nghĩa là khi bạn thay đổi giá trị của một đối tượng hoặc mảng, tất cả các tham chiếu tới đối tượng đó đều sẽ bị thay đổi.

#### ***2.1. Object (Đối tượng)***
  - **Giới thiệu**: Kiểu dữ liệu đối tượng được dùng để lưu trữ các giá trị dưới dạng cặp `key-value`. Đây là kiểu dữ liệu rất quan trọng trong JavaScript, thường dùng để lưu trữ thông tin phức tạp.
  - **Ví dụ**:
    ```javascript
    let person = {
      name: 'John',
      age: 30,
      greet: function() {
        console.log('Hello, ' + this.name);
      }
    };
    console.log(person.name); // John
    person.greet(); // Hello, John
    ```

#### ***2.2. Array (Mảng)***
  - **Giới thiệu**: Mảng là một kiểu dữ liệu đặc biệt dùng để lưu trữ danh sách các giá trị, có thể là các giá trị của bất kỳ kiểu dữ liệu nào.
  - **Ví dụ**:
    ```javascript
    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers[0]); // 1
    numbers.push(6);
    console.log(numbers); // [1, 2, 3, 4, 5, 6]
    ```

#### ***2.3. Function (Hàm)***
  - **Giới thiệu**: Hàm trong JavaScript là một đối tượng đặc biệt, có thể được khai báo và gọi để thực thi một đoạn mã cụ thể.
  - **Ví dụ**:
    ```javascript
    function greet(name) {
      return 'Hello, ' + name;
    }
    console.log(greet('Alice')); // Hello, Alice
    ```

### ***So sánh Kiểu Nguyên Thủy và Kiểu Phức Tạp***

| Đặc điểm               | Kiểu Nguyên Thủy                             | Kiểu Phức Tạp              |
|------------------------|----------------------------------------------|-----------------------------|
| **Khả năng thay đổi**  | Không thay đổi (immutable)                   | Có thể thay đổi (mutable)   |
| **Tham chiếu**         | Lưu giá trị trực tiếp                        | Lưu tham chiếu đến vùng nhớ |
| **Kiểu dữ liệu**       | Number, String, Boolean, Null, Undefined...  | Object, Array, Function...  |
| **Lưu trữ giá trị**    | Lưu trực tiếp giá trị                        | Lưu địa chỉ của đối tượng   |

Ví dụ minh họa:
```javascript
// Kiểu nguyên thủy
let a = 10;
let b = a;
b = 20;
console.log(a); // 10, do a và b là các giá trị độc lập

// Kiểu phức tạp
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4], do arr1 và arr2 cùng tham chiếu đến một mảng
```

### ***3. Kiểm Tra Kiểu Dữ Liệu***
Để kiểm tra kiểu dữ liệu của một biến trong JavaScript, bạn có thể sử dụng toán tử `typeof` hoặc `instanceof` cho các đối tượng.

#### ***3.1. `typeof`***
  - **Giới thiệu**: `typeof` trả về một chuỗi mô tả kiểu dữ liệu của biến.
  - **Ví dụ**:
    ```javascript
    console.log(typeof 123); // "number"
    console.log(typeof 'hello'); // "string"
    console.log(typeof true); // "boolean"
    console.log(typeof {}); // "object"
    console.log(typeof undefined); // "undefined"
    console.log(typeof null); // "object" (đây là một đặc điểm không mong muốn trong JavaScript)
    ```

#### ***3.2. `instanceof`***
  - **Giới thiệu**: `instanceof` dùng để kiểm tra một đối tượng có phải là thể hiện (instance) của một lớp hay không.
  - **Ví dụ**:
    ```javascript
    let arr = [1, 2, 3];
    console.log(arr instanceof Array); // true
    let person = {};
    console.log(person instanceof Object); // true
    ```

### ***Tóm tắt các Kiểu Dữ Liệu***

| Kiểu Dữ Liệu    | Mô Tả                                 | Ví Dụ                                     |
|-----------------|---------------------------------------|-------------------------------------------|
| `String`        | Dùng để lưu trữ chuỗi ký tự           | `"Hello"`, `'World'`                     |
| `Number`        | Dùng để lưu trữ số                    | `10`, `3.14`, `-5`                       |
| `Boolean`       | Dùng để lưu trữ giá trị đúng/sai      | `true`, `false`                          |
| `undefined`     | Biến chưa được gán giá trị           | `let x;`                                 |
| `null`          | Biến có giá trị "không có giá trị"    | `let y = null;`                          |
| `Symbol`        | Giá trị độc nhất                       | `Symbol('description')`                  |
| `BigInt`        | Dùng cho số nguyên lớn hơn `Number`   | `1234567890123456789012345678901234567890n` |
| `Object`        | Lưu trữ các cặp key-value             | `{ name: 'Alice', age: 25 }`             |
| `Array`         | Lưu trữ danh sách các giá trị         | `[1, 2, 3, 4]`                           |
| `Function`      | Một đối tượng thực thi mã             | `function greet() { return 'Hi!'; }`     |

Như vậy, JavaScript cung cấp nhiều kiểu dữ liệu, mỗi loại có ứng dụng riêng và giúp bạn tổ chức, xử lý dữ liệu trong chương trình một cách hiệu quả.
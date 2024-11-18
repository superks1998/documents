# Strings

## JavaScript Strings

- String trong JavaScript là một kiểu dữ liệu chuỗi được sử dụng để lưu trữ và thao tác với văn bản. Strings trong JavaScript có thể được tạo bằng dấu nháy đơn (`'`), nháy kép (`"`), hoặc dấu nháy ngược (`` ` ``).

### Các Tạo String trong JavaScript

- JavaScript cho phép tạo chuỗi theo nhiều cách:

    - **Dùng dấu nháy đơn hoặc nháy kép**: Đây là cách phổ biến và đơn giản nhất để khai báo chuỗi.
    ```javascript
    let greeting = "Hello, World!";
    let name = 'John Doe';
    ```

    - **Dùng dấu nháy ngược (Template Literals)**: Cách này cho phép nhúng biến và biểu thức vào chuỗi mà không cần phép nối (concatenation).
    ```javascript
    let age = 25;
    let message = `John is ${age} years old.`;
    ```

### Tính Chất Cơ Bản của Strings

- **Chuỗi có thể có độ dài bằng 0** (string rỗng) hoặc có độ dài lớn hơn 0, lưu trữ các ký tự Unicode.
- **Strings là bất biến**: Một khi được tạo, chuỗi không thể thay đổi nội dung. Các thao tác trên chuỗi sẽ tạo ra một chuỗi mới.

### Các Phương Thức String Quan Trọng

- JavaScript cung cấp nhiều phương thức giúp thao tác với chuỗi dễ dàng:

    - **`length`**: Trả về độ dài của chuỗi.
    ```javascript
    let text = "Hello";
    console.log(text.length); // Output: 5
    ```

    - **`toUpperCase()`** và **`toLowerCase()`**: Chuyển đổi chuỗi thành chữ hoa hoặc chữ thường.
    ```javascript
    let word = "Hello";
    console.log(word.toUpperCase()); // Output: "HELLO"
    console.log(word.toLowerCase()); // Output: "hello"
    ```

    - **`includes(substring)`**: Kiểm tra xem một chuỗi có chứa một chuỗi con không.
    ```javascript
    let phrase = "JavaScript is fun";
    console.log(phrase.includes("fun")); // Output: true
    ```

    - **`indexOf(substring)`** và **`lastIndexOf(substring)`**: Tìm vị trí xuất hiện đầu tiên hoặc cuối cùng của một chuỗi con.
    ```javascript
    let sentence = "Hello, world!";
    console.log(sentence.indexOf("world")); // Output: 7
    ```

    - **`slice(start, end)`**: Lấy một phần của chuỗi từ `start` đến `end` (không bao gồm `end`).
    ```javascript
    let text = "JavaScript";
    console.log(text.slice(0, 4)); // Output: "Java"
    ```

    - **`replace(search, replacement)`**: Thay thế chuỗi con đầu tiên tìm thấy.
    ```javascript
    let phrase = "Hello, World!";
    console.log(phrase.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"
    ```

    - **`substring(start, end)`**: Lấy chuỗi con từ `start` đến `end` (không bao gồm `end`). Khác với `slice`, `substring` không nhận chỉ số âm.
    ```javascript
    let text = "JavaScript";
    console.log(text.substring(0, 4)); // Output: "Java"
    ```

    - **`concat()`**: Nối hai hoặc nhiều chuỗi với nhau.
    ```javascript
    let greeting = "Hello";
    let name = "Alice";
    console.log(greeting.concat(", ", name)); // Output: "Hello, Alice"
    ```

    - **`trim()`**: Loại bỏ khoảng trắng ở đầu và cuối chuỗi.
    ```javascript
    let str = "   Hello, World!   ";
    console.log(str.trim()); // Output: "Hello, World!"
    ```

    - **`padStart(targetLength, padString)`** và **`padEnd(targetLength, padString)`**: Thêm ký tự vào đầu hoặc cuối chuỗi để đạt độ dài mong muốn.
    ```javascript
    let num = "5";
    console.log(num.padStart(3, "0")); // Output: "005"
    console.log(num.padEnd(3, "0")); // Output: "500"
    ```

    - **`split(separator)`**: Chia chuỗi thành mảng dựa trên ký tự phân cách.
    ```javascript
    let text = "JavaScript is awesome";
    console.log(text.split(" ")); // Output: ["JavaScript", "is", "awesome"]
    ```

    - **`repeat(count)`**: Lặp lại chuỗi với số lần `count` xác định.
    ```javascript
    let word = "Hi ";
    console.log(word.repeat(3)); // Output: "Hi Hi Hi "
    ```

    - **`startsWith(substring)`** và **`endsWith(substring)`**: Kiểm tra chuỗi có bắt đầu hoặc kết thúc bằng chuỗi con cụ thể không.
    ```javascript
    let text = "Hello, World!";
    console.log(text.startsWith("Hello")); // Output: true
    console.log(text.endsWith("World!")); // Output: true
    ```

    - **`charAt(index)`**: Trả về ký tự tại vị trí `index`.
    ```javascript
    let text = "JavaScript";
    console.log(text.charAt(3)); // Output: "a"
    ```

    - **`charCodeAt(index)`**: Trả về mã Unicode của ký tự tại vị trí `index`.
    ```javascript
    let text = "JavaScript";
    console.log(text.charCodeAt(3)); // Output: 97 (Unicode của "a")
    ```

    - **`match(regex)`**: Tìm và trả về mảng các chuỗi khớp với biểu thức chính quy.
    ```javascript
    let text = "JavaScript is fun";
    console.log(text.match(/is/g)); // Output: ["is"]
    ```

    - **`search(regex)`**: Tìm vị trí đầu tiên của chuỗi khớp với biểu thức chính quy.
    ```javascript
    let text = "JavaScript is fun";
    console.log(text.search(/fun/)); // Output: 15
    ```

### Concatenation (Nối Chuỗi)

- Chuỗi có thể nối với nhau bằng toán tử `+` hoặc `+=`.

```javascript
let greeting = "Hello, ";
let name = "Alice";
console.log(greeting + name); // Output: "Hello, Alice"
```

### Template Literals

- Template literals (dấu nháy ngược **`**) cho phép nhúng biến và biểu thức vào chuỗi một cách dễ dàng.

```javascript
let user = "John";
let age = 30;
let message = `User ${user} is ${age} years old.`;
console.log(message); // Output: "User John is 30 years old."
```

### Escape Characters
- Để hiển thị các ký tự đặc biệt như dấu nháy (`"`, `'`), dấu xuống dòng (`\n`), hoặc dấu gạch chéo ngược (`\\`), cần sử dụng ký tự escape.

```javascript
let text = "She said, \"Hello!\"";
let multiline = "This is line 1.\nThis is line 2.";
```
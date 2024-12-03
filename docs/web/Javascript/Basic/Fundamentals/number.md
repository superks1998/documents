# Numbers

## JavaScript Numbers

JavaScript có một kiểu dữ liệu dành riêng cho các số, gọi là **Number**. Số trong JavaScript có thể là số nguyên, số thực (số thập phân), số âm, hoặc số dạng đặc biệt như `NaN` (Not-a-Number) và `Infinity`. 

JavaScript không phân biệt kiểu số nguyên và số thực; tất cả các số đều thuộc kiểu **Number**.

### Các Cách Khai Báo Number

- JavaScript hỗ trợ các cách khai báo số cơ bản:

    - **Số nguyên**: Là các số nguyên, không chứa phần thập phân.
    ```javascript
    let age = 25; // Số nguyên
    ```

    - **Số thực**: Là các số có phần thập phân.
    ```javascript
    let price = 19.99; // Số thực
    ```

    - **Số âm**: Có thể là số nguyên hoặc số thực với dấu âm phía trước.
    ```javascript
    let temperature = -5; // Số âm
    ```

    - **Số lớn (Exponential notation)**: Có thể dùng ký hiệu khoa học cho các số lớn hoặc nhỏ.
    ```javascript
    let bigNumber = 5e6; // Tương đương với 5000000
    let smallNumber = 2e-3; // Tương đương với 0.002
    ```

### Các Loại Số Đặc Biệt

- **`NaN` (Not-a-Number)**: Là một giá trị đặc biệt, đại diện cho một phép tính không hợp lệ.
    ```javascript
    let result = "hello" / 2; // Output: NaN
    ```

- **`Infinity`** và **`-Infinity`**: Đại diện cho giá trị vô hạn và âm vô hạn.
    ```javascript
    let largeNumber = 1 / 0; // Output: Infinity
    let negativeInfinity = -1 / 0; // Output: -Infinity
    ```

### Các Phương Thức và Thuộc Tính của Number

JavaScript cung cấp nhiều phương thức và thuộc tính để thao tác với số:

- **`Number.isFinite(value)`**: Kiểm tra xem giá trị có phải là một số hữu hạn không.
    ```javascript
    console.log(Number.isFinite(100)); // Output: true
    console.log(Number.isFinite(Infinity)); // Output: false
    ```

- **`Number.isInteger(value)`**: Kiểm tra xem giá trị có phải là một số nguyên không.
    ```javascript
    console.log(Number.isInteger(10)); // Output: true
    console.log(Number.isInteger(10.5)); // Output: false
    ```

- **`Number.parseFloat(string)`**: Chuyển chuỗi thành số thực (số thập phân).
    ```javascript
    console.log(Number.parseFloat("3.14")); // Output: 3.14
    ```

- **`Number.parseInt(string, radix)`**: Chuyển chuỗi thành số nguyên. `radix` là cơ số (như 10 cho hệ thập phân).
    ```javascript
    console.log(Number.parseInt("42")); // Output: 42
    console.log(Number.parseInt("101", 2)); // Output: 5 (hệ nhị phân)
    ```

- **`toFixed(digits)`**: Chuyển một số thành chuỗi với số chữ số thập phân cố định.
    ```javascript
    let pi = 3.14159;
    console.log(pi.toFixed(2)); // Output: "3.14"
    ```

- **`toString(radix)`**: Chuyển một số thành chuỗi ở hệ cơ số xác định (như nhị phân, thập lục phân).
    ```javascript
    let num = 255;
    console.log(num.toString(16)); // Output: "ff" (hệ 16)
    ```

- **`Math.round()`**: Làm tròn số đến số nguyên gần nhất.
    ```javascript
    console.log(Math.round(4.5)); // Output: 5
    ```

- **`Math.ceil()`** và **`Math.floor()`**: `ceil()` làm tròn lên, `floor()` làm tròn xuống.
    ```javascript
    console.log(Math.ceil(4.1)); // Output: 5
    console.log(Math.floor(4.9)); // Output: 4
    ```

- **`Math.abs(value)`**: Trả về giá trị tuyệt đối của value.

    ```javascript
    console.log(Math.abs(-10)); // Output: 10
    ```

- **`Math.max(...values)`** và **`Math.min(...values)`**
    - Math.max: Tìm giá trị lớn nhất trong một danh sách các số.
    - Math.min: Tìm giá trị nhỏ nhất trong một danh sách các số.
    ```javascript
    console.log(Math.max(10, 20, 5)); // Output: 20
    console.log(Math.min(10, 20, 5)); // Output: 5
    ```
- **`Math.pow(base, exponent)`** và **`Math.sqrt(value)`**
    - Math.pow: Tính base mũ exponent.
    - Math.sqrt: Tính căn bậc hai của value.

    ```javascript
    console.log(Math.pow(2, 3)); // Output: 8
    console.log(Math.sqrt(16));  // Output: 4
    ```

- **`Math.random()`**: Tạo một số ngẫu nhiên từ 0 đến 1 (không bao gồm 1).

    ```javascript
    console.log(Math.random()); // Output: Một số ngẫu nhiên giữa 0 và 1
    ```

### Các Giá Trị Constants Quan Trọng

- **`Number.MAX_VALUE`**: Giá trị lớn nhất có thể lưu trữ.
    ```javascript
    console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
    ```

- **`Number.MIN_VALUE`**: Giá trị nhỏ nhất có thể lưu trữ (gần bằng 0).
    ```javascript
    console.log(Number.MIN_VALUE); // Output: 5e-324
    ```

- **`Number.POSITIVE_INFINITY`** và **`Number.NEGATIVE_INFINITY`**: Giá trị dương vô hạn và âm vô hạn.
    ```javascript
    console.log(Number.POSITIVE_INFINITY); // Output: Infinity
    console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
    ```

- **`Number.NaN`**: Giá trị "Not-a-Number".
    ```javascript
    console.log(Number.NaN); // Output: NaN
    ```

### Các Phép Toán Thường Dùng Với Số

- JavaScript hỗ trợ các phép toán cơ bản:

    - **Phép Cộng (+)**, **Phép Trừ (-)**, **Phép Nhân (*)**, **Phép Chia (/)**, **Phép Chia Lấy Dư (%)**.
    ```javascript
    let x = 10;
    let y = 3;
    console.log(x + y); // Output: 13
    console.log(x - y); // Output: 7
    console.log(x * y); // Output: 30
    console.log(x / y); // Output: 3.333...
    console.log(x % y); // Output: 1
    ```

- **Toán tử tăng (`++`) và giảm (`--`)**: Tăng hoặc giảm giá trị của biến lên 1.
    ```javascript
    let count = 5;
    count++;
    console.log(count); // Output: 6
    count--;
    console.log(count); // Output: 5
    ```

- **Toán tử lũy thừa (`**`)**: Tính lũy thừa.
    ```javascript
    let base = 2;
    console.log(base ** 3); // Output: 8 (2^3)
    ```

### Lưu Ý Về Số Chính Xác (Floating Point Precision)

- Số thực trong JavaScript đôi khi có lỗi chính xác khi tính toán, vì JavaScript dùng chuẩn IEEE 754 để lưu trữ số thực dưới dạng nhị phân.
    ```javascript
    console.log(0.1 + 0.2); // Output: 0.30000000000000004
    ```

- Để tránh lỗi chính xác, có thể làm tròn hoặc sử dụng hàm `toFixed()`.
    ```javascript
    let result = (0.1 + 0.2).toFixed(2);
    console.log(result); // Output: "0.30"
    ```

### Kết Luận

- JavaScript cung cấp nhiều cách để làm việc với số, từ các phương thức cơ bản đến các phương thức nâng cao. Tuy nhiên, cần lưu ý về lỗi chính xác khi thao tác với số thực trong JavaScript.
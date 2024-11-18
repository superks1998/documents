---
sidebar_position: 3
---

# Operators

## JavaScript Operators

- Toán tử trong JavaScript là các ký hiệu đặc biệt giúp thực hiện các thao tác trên các biến và giá trị. Có nhiều loại toán tử khác nhau trong JavaScript, được sử dụng để thực hiện các phép tính, so sánh, logic và nhiều chức năng khác.

### 1. Toán tử Số học (Arithmetic Operators)
- **Mục đích**: Dùng để thực hiện các phép tính toán cơ bản.

    - **Toán tử Cộng (+)**: Dùng để cộng hai giá trị.
    - **Toán tử Trừ (-)**: Dùng để trừ một giá trị từ một giá trị khác.
    - **Toán tử Nhân (*)**: Dùng để nhân hai giá trị.
    - **Toán tử Chia (/)**: Dùng để chia một giá trị cho một giá trị khác.
    - **Toán tử Phần dư (%)**: Dùng để lấy phần dư của phép chia.
    - **Toán tử Lũy thừa (**)**: Dùng để nâng một giá trị lên lũy thừa của giá trị khác.

    #### Ví dụ
    ```javascript
    let a = 10;
    let b = 3;
    console.log(a + b); // 13
    console.log(a - b); // 7
    console.log(a * b); // 30
    console.log(a / b); // 3.333...
    console.log(a % b); // 1
    console.log(a ** b); // 1000
    ```

### 2. Toán tử Gán (Assignment Operators)
- **Mục đích**: Dùng để gán giá trị cho biến.

    - **Gán bằng (=)**: Gán giá trị phía bên phải cho biến phía bên trái.
    - **Cộng và Gán (+=)**: Cộng giá trị hiện tại với giá trị mới và gán lại.
    - **Trừ và Gán (-=)**: Trừ giá trị hiện tại với giá trị mới và gán lại.

    #### Ví dụ
    ```javascript
    let x = 5;
    x += 3; // x = 8
    x -= 2; // x = 6
    ```

### 3. Toán tử So sánh (Comparison Operators)
- **Mục đích**: Dùng để so sánh hai giá trị và trả về kết quả dạng boolean (`true` hoặc `false`).

    - **Bằng (==)**: So sánh giá trị, không xét kiểu dữ liệu.
    - **Bằng chặt chẽ (===)**: So sánh cả giá trị và kiểu dữ liệu.
    - **Không bằng (!=)**: Kiểm tra giá trị khác nhau.
    - `Lớn hơn (>)`, `Lớn hơn hoặc bằng (>=)`, `Nhỏ hơn (<)`, `Nhỏ hơn hoặc bằng (<=)`: So sánh kích thước.

    #### Ví dụ
    ```javascript
    let y = 10;
    console.log(y == "10");  // true
    console.log(y === "10"); // false
    console.log(y != 8);     // true
    console.log(y > 5);      // true
    ```

### 4. Toán tử Logic (Logical Operators)
- **Mục đích**: Dùng để thực hiện các phép toán logic, thường được dùng trong các biểu thức điều kiện.

    - **Và (&&)**: Trả về `true` nếu cả hai vế đều `true`.
    - **Hoặc (||)**: Trả về `true` nếu một trong hai vế `true`.
    - **Phủ định (!)**: Đảo ngược giá trị của biểu thức.

    #### Ví dụ
    ```javascript
    let p = true;
    let q = false;
    console.log(p && q); // false
    console.log(p || q); // true
    console.log(!p);     // false
    ```

### 5. Toán tử Tăng/Giảm (Increment/Decrement Operators)
- **Mục đích**: Dùng để tăng hoặc giảm giá trị của biến đi 1 đơn vị.

    - **Tăng (++)**: Tăng giá trị biến lên 1.
    - **Giảm (--)**: Giảm giá trị biến đi 1.

    #### Ví dụ
    ```javascript
    let n = 5;
    n++; // n = 6
    n--; // n = 5
    ```

- **Tiền tố và Hậu tố**
    - **Tiền tố** (`++biến` hoặc `--biến`): Tăng/giảm giá trị của biến trước, sau đó trả về giá trị đã thay đổi.
    - **Hậu tố** (`biến++` hoặc `biến--`): Trả về giá trị hiện tại của biến trước, rồi mới tăng/giảm giá trị.
    
    #### Ví dụ
    ```javascript
    let a = 5;
    let b = ++a; // Tiền tố: Tăng giá trị của `a` trước (a = 6), rồi gán cho `b`.
    console.log(a); // 6 (a đã được tăng lên)
    console.log(b); // 6 (b nhận giá trị mới của a)

    let c = 5;
    let d = c++; // Hậu tố: Gán giá trị hiện tại của `c` (c = 5) cho `d`, rồi mới tăng `c` (c = 6).
    console.log(c); // 6 (c được tăng sau)
    console.log(d); // 5 (d nhận giá trị trước khi c tăng)
    ```

### 6. Toán tử Điều kiện (Ternary Operator)
- **Mục đích**: Thực hiện kiểm tra điều kiện trong một dòng.

    - **Cú pháp**: `condition ? value_if_true : value_if_false`

    #### Ví dụ
    ```javascript
    let age = 18;
    let canVote = (age >= 18) ? "Có thể bầu cử" : "Không thể bầu cử";
    console.log(canVote); // Có thể bầu cử
    ```

### 7. Toán tử Kiểu dữ liệu (Type Operators)
- **Mục đích**: Kiểm tra kiểu dữ liệu hoặc chuyển đổi đối tượng.

    - **typeof**: Trả về kiểu của biến.
    - **instanceof**: Kiểm tra xem một đối tượng có thuộc kiểu của một lớp cụ thể không.

    #### Ví dụ
    ```javascript
    console.log(typeof "Hello");    // "string"
    console.log(typeof 42);         // "number"
    console.log([1, 2, 3] instanceof Array); // true
    ```
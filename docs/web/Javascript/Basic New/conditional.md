---
sidebar_position: 4
---

# Conditional

## JavaScript Conditional Statements

- Câu lệnh điều kiện trong JavaScript cho phép bạn thực thi các đoạn mã khác nhau dựa trên điều kiện cụ thể. Đây là công cụ cơ bản giúp tạo ra các luồng logic trong chương trình.

### 1. Câu lệnh `if`
- **Mục đích**: Kiểm tra một điều kiện, nếu điều kiện đúng (`true`), đoạn mã bên trong `if` sẽ được thực thi.

    #### Cú pháp
    ```javascript
    if (condition) {
        // code thực thi nếu condition là true
    }
    ```

    #### Ví dụ
    ```javascript
    let age = 18;
    if (age >= 18) {
        console.log("Bạn đã đủ tuổi trưởng thành");
    }
    // Output: "Bạn đã đủ tuổi trưởng thành"
    ```

### 2. Câu lệnh `if...else`
- **Mục đích**: Kiểm tra điều kiện, nếu điều kiện đúng, thực thi đoạn mã `if`. Ngược lại, thực thi đoạn mã `else`.

    #### Cú pháp
    ```javascript
    if (condition) {
        // code thực thi nếu condition là true
    } else {
        // code thực thi nếu condition là false
    }
    ```

    #### Ví dụ
    ```javascript
    let age = 16;
    if (age >= 18) {
        console.log("Bạn đã đủ tuổi trưởng thành");
    } else {
        console.log("Bạn chưa đủ tuổi trưởng thành");
    }
    // Output: "Bạn chưa đủ tuổi trưởng thành"
    ```

### 3. Câu lệnh `if...else if...else`
- **Mục đích**: Kiểm tra nhiều điều kiện khác nhau. Nếu điều kiện đầu tiên sai, sẽ kiểm tra điều kiện tiếp theo và cứ tiếp tục như vậy. Nếu không điều kiện nào đúng, sẽ thực thi đoạn mã trong `else`.

    #### Cú pháp
    ```javascript
    if (condition1) {
        // code thực thi nếu condition1 là true
    } else if (condition2) {
        // code thực thi nếu condition2 là true
    } else {
        // code thực thi nếu không có condition nào là true
    }
    ```

    #### Ví dụ
    ```javascript
    let score = 75;
    if (score >= 90) {
        console.log("Xếp loại A");
    } else if (score >= 80) {
        console.log("Xếp loại B");
    } else if (score >= 70) {
        console.log("Xếp loại C");
    } else {
        console.log("Xếp loại D");
    }
    // Output: "Xếp loại C"
    ```

### 4. Câu lệnh `switch`
- **Mục đích**: Dùng để kiểm tra một giá trị cụ thể trong nhiều trường hợp (`case`). Nếu một `case` phù hợp, đoạn mã tương ứng sẽ được thực thi. `switch` hữu ích khi có nhiều nhánh rẽ.

    #### Cú pháp
    ```javascript
    switch (expression) {
        case value1:
            // code thực thi nếu expression === value1
            break;
        case value2:
            // code thực thi nếu expression === value2
            break;
        default:
            // code thực thi nếu không có case nào khớp
    }
    ```

    #### Ví dụ
    ```javascript
    let day = 3;
    switch (day) {
        case 1:
            console.log("Thứ Hai");
            break;
        case 2:
            console.log("Thứ Ba");
            break;
        case 3:
            console.log("Thứ Tư");
            break;
        default:
            console.log("Không xác định");
    }
    // Output: "Thứ Tư"
    ```

#### Lưu ý
- `break` trong `switch`: Dùng để dừng lại sau khi một `case` được thực thi, tránh thực thi các `case` tiếp theo.
- Nếu có 2 hoặc nhiều `case` có cùng 1 câu lệnh cần thực thi. thì các `case` phía trước không cần điền câu lệnh, chỉ cần `case` cuối cùng.

    #### Ví dụ
    ```javascript
    let day;
    switch (day) {
        case 1:
        case 2:
            console.log("Thứ Ba");
            break;
        case 3:
            console.log("Thứ Tư");
            break;
        default:
            console.log("Không xác định");
    }
    // day = 1 và day = 2 đều có output là "Thứ Ba"
    ```

### 5. Câu lệnh `?:` (Toán tử điều kiện hay Ternary Operator)
- **Mục đích**: Là một dạng câu lệnh điều kiện ngắn gọn, thường dùng để gán giá trị dựa trên điều kiện.

    #### Cú pháp
    ```javascript
    condition ? value_if_true : value_if_false;
    ```

    #### Ví dụ
    ```javascript
    let age = 20;
    let canVote = (age >= 18) ? "Có thể bầu cử" : "Không thể bầu cử";
    console.log(canVote); // Output: "Có thể bầu cử"
    ```

---

# Built-in Function

## Các Hàm Built-in Cơ Bản trong JavaScript

JavaScript cung cấp một số hàm built-in cơ bản để thực hiện các tác vụ phổ biến như hiển thị thông báo, lấy đầu vào từ người dùng, và quản lý thời gian. Dưới đây là các hàm quan trọng và cách sử dụng chúng.

---

### 1. `alert`

- **Mô tả**: Hàm `alert` được sử dụng để hiển thị một hộp thoại chứa thông báo cho người dùng. Hộp thoại này sẽ hiển thị thông báo và yêu cầu người dùng bấm OK để đóng.
- **Cú pháp**:
    ```javascript
    alert(message);
    ```
- **Tham số**:
    - `message`: Chuỗi văn bản chứa nội dung thông báo.
- **Ví dụ**:
    ```javascript
    alert("Xin chào! Đây là một thông báo.");
    ```

---

### 2. `console`

- **Mô tả**: Hàm `console` có các phương thức như `log`, `warn`, `error` dùng để ghi thông tin vào bảng điều khiển của trình duyệt, chủ yếu phục vụ mục đích kiểm tra và debug mã.
- **Cú pháp**:
    ```javascript
    console.log(message);      // Ghi thông tin thông thường
    console.warn(message);     // Ghi cảnh báo
    console.error(message);    // Ghi lỗi
    ```
- **Ví dụ**:
    ```javascript
    console.log("Đây là một thông báo thông thường.");
    console.warn("Cảnh báo! Đang có vấn đề.");
    console.error("Lỗi! Hành động không thể hoàn thành.");
    ```

---

### 3. `confirm`

- **Mô tả**: Hàm `confirm` hiển thị hộp thoại xác nhận với các nút OK và Cancel. Hàm trả về `true` nếu người dùng chọn OK, và `false` nếu người dùng chọn Cancel.
- **Cú pháp**:
    ```javascript
    confirm(message);
    ```
- **Tham số**:
    - `message`: Chuỗi văn bản chứa câu hỏi hoặc thông báo cần xác nhận.
- **Ví dụ**:
    ```javascript
    let isConfirmed = confirm("Bạn có chắc chắn muốn xóa không?");
    if (isConfirmed) {
        console.log("Người dùng đã chọn OK.");
    } else {
        console.log("Người dùng đã chọn Cancel.");
    }
    ```

---

### 4. `prompt`

- **Mô tả**: Hàm `prompt` hiển thị hộp thoại để người dùng nhập thông tin. Trả về chuỗi đầu vào nếu người dùng nhập giá trị và bấm OK, hoặc `null` nếu chọn Cancel.
- **Cú pháp**:
    ```javascript
    prompt(message, defaultValue);
    ```
- **Tham số**:
    - `message`: Chuỗi văn bản hiển thị như một câu hỏi.
    - `defaultValue`: (Tùy chọn) Giá trị mặc định cho trường nhập liệu.
- **Ví dụ**:
    ```javascript
    let name = prompt("Nhập tên của bạn:", "Tên của bạn");
    if (name !== null) {
        console.log(`Xin chào, ${name}!`);
    } else {
        console.log("Người dùng đã hủy bỏ.");
    }
    ```

---

### 5. `setTimeout`

- **Mô tả**: Hàm `setTimeout` dùng để thực hiện một hàm hoặc đoạn mã sau một khoảng thời gian (theo mili giây).
- **Cú pháp**:
    ```javascript
    setTimeout(function, delay);
    ```
- **Tham số**:
    - `function`: Hàm cần thực thi.
    - `delay`: Thời gian trì hoãn tính bằng mili giây.
- **Ví dụ**:
    ```javascript
    setTimeout(() => {
        console.log("Thông báo sau 2 giây.");
    }, 2000); // 2000 mili giây = 2 giây
    ```

---

### 6. `setInterval`

- **Mô tả**: Hàm `setInterval` thực thi một hàm hoặc đoạn mã lặp đi lặp lại sau khoảng thời gian cố định (theo mili giây).
- **Cú pháp**:
    ```javascript
    setInterval(function, interval);
    ```
- **Tham số**:
    - `function`: Hàm cần thực thi lặp lại.
    - `interval`: Khoảng thời gian giữa các lần thực thi (tính bằng mili giây).
- **Ví dụ**:
    ```javascript
    setInterval(() => {
        console.log("Thông báo mỗi 1 giây.");
    }, 1000); // 1000 mili giây = 1 giây
    ```

---

### 7. `clearTimeout`

- **Mô tả**: Hàm `clearTimeout` được sử dụng để hủy một hành động đã được lên lịch bởi `setTimeout`.
- **Cú pháp**:
    ```javascript
    clearTimeout(timeoutID);
    ```
- **Tham số**:
    - `timeoutID`: ID của hành động do `setTimeout` trả về.
- **Ví dụ**:
    ```javascript
    let timeoutID = setTimeout(() => {
        console.log("Thông báo sau 3 giây");
    }, 3000);
    
    // Hủy timeout trước khi hoàn tất
    clearTimeout(timeoutID);
    ```

    > **Giải thích**: Trong ví dụ này, `clearTimeout` được gọi trước khi `setTimeout` hoàn thành, do đó thông báo sẽ không hiển thị.

---

### 8. `clearInterval`

- **Mô tả**: Hàm `clearInterval` được sử dụng để dừng hành động được thiết lập lặp đi lặp lại bởi `setInterval`.
- **Cú pháp**:
    ```javascript
    clearInterval(intervalID);
    ```
- **Tham số**:
    - `intervalID`: ID của hành động do `setInterval` trả về.
- **Ví dụ**:
    ```javascript
    let intervalID = setInterval(() => {
        console.log("Thông báo mỗi 2 giây");
    }, 2000);
    
    // Dừng interval sau 5 giây
    setTimeout(() => {
        clearInterval(intervalID);
    }, 5000);
    ```

    > **Giải thích**: Trong ví dụ này, `clearInterval` sẽ dừng `setInterval` sau 5 giây, vì vậy thông báo chỉ xuất hiện hai lần.

---

## So sánh `setTimeout` và `setInterval`

| **Đặc điểm**               | **setTimeout**                                               | **setInterval**                                       |
|----------------------------|--------------------------------------------------------------|-------------------------------------------------------|
| **Chức năng**              | Thực hiện một hành động sau một khoảng thời gian nhất định. | Thực hiện một hành động liên tục sau mỗi khoảng thời gian. |
| **Thời gian thực thi**     | Chỉ thực thi một lần sau thời gian trì hoãn.                | Thực thi lặp đi lặp lại sau mỗi khoảng thời gian.       |
| **ID**                     | Trả về ID của hành động để hủy bằng `clearTimeout`.           | Trả về ID của hành động để hủy bằng `clearInterval`.    |
| **Ứng dụng thường gặp**    | Dùng khi cần trì hoãn một hành động (ví dụ: thông báo sau vài giây). | Dùng khi cần thực hiện một hành động liên tục (ví dụ: cập nhật thời gian). |

### Ví dụ So sánh
```javascript
// Ví dụ với setTimeout
let timeoutID = setTimeout(() => {
    console.log("Thông báo sau 3 giây");
}, 3000);

// Ví dụ với setInterval
let intervalID = setInterval(() => {
    console.log("Thông báo mỗi 2 giây");
}, 2000);

// Hủy sau 5 giây để kết thúc cả hai
setTimeout(() => {
    clearTimeout(timeoutID);
    clearInterval(intervalID);
    console.log("Đã dừng cả timeout và interval");
}, 5000);
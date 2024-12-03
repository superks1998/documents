# Callbacks

## Callbacks trong JavaScript

- Callbacks là một trong những khái niệm quan trọng trong JavaScript, đặc biệt khi làm việc với các tác vụ bất đồng bộ (asynchronous tasks) như tải dữ liệu từ server hay xử lý sự kiện.

### 1. **Callback là gì?**
    - Callback là một hàm (function) được truyền vào như một tham số của hàm khác, và được gọi lại (callback) bên trong hàm đó khi có sự kiện hoặc điều kiện xảy ra.
    - Trong JavaScript, callback thường được sử dụng để đảm bảo mã sẽ được thực hiện theo thứ tự, đặc biệt khi làm việc với các hoạt động bất đồng bộ.

### 2. **Cách Hoạt Động của Callback**
    - Khi một hàm nhận một callback làm tham số, nó sẽ lưu callback đó và sẽ gọi lại hàm callback này khi cần thiết.
    - Ví dụ: khi bạn thực hiện một yêu cầu API, bạn không muốn ứng dụng "đứng yên" cho đến khi dữ liệu trả về. Thay vào đó, bạn sử dụng callback để chạy một đoạn mã khác trong khi chờ dữ liệu, và chỉ khi dữ liệu đã có, callback mới được gọi để xử lý kết quả.

### 3. **Ví Dụ Đơn Giản Về Callback**
    - Dưới đây là ví dụ về một hàm callback trong JavaScript:

        ```javascript
        function greet(name, callback) {
            console.log(`Hello, ${name}!`);
            callback();
        }

        function sayGoodbye() {
            console.log("Goodbye!");
        }

        // Gọi hàm greet và truyền sayGoodbye làm callback
        greet("John", sayGoodbye);
        ```

    - **Giải thích**:
        - Hàm `greet` nhận vào hai tham số: `name` và `callback`.
        - Khi `greet` được gọi, nó in ra lời chào rồi sau đó gọi `callback`, trong trường hợp này là hàm `sayGoodbye`.
        - Kết quả sẽ là in "Hello, John!" trước, sau đó là "Goodbye!".

### 4. Callback trong các tác vụ bất đồng bộ

    - Một trong những ứng dụng phổ biến của callback là xử lý tác vụ bất đồng bộ như đọc dữ liệu từ API hay thao tác với tệp tin.
    - Dưới đây là ví dụ callback với `setTimeout`, một hàm bất đồng bộ thường dùng trong JavaScript:

        ```javascript
        console.log("Bắt đầu");

        setTimeout(function() {
            console.log("Đã đợi 2 giây!");
        }, 2000);

        console.log("Kết thúc");
        ```

    - **Giải thích**:
        - JavaScript sẽ chạy `console.log("Bắt đầu")` trước.
        - `setTimeout` thiết lập một hàm callback (ở đây là `function() { console.log("Đã đợi 2 giây!"); }`) sẽ chạy sau 2 giây.
        - Sau khi thiết lập `setTimeout`, JavaScript tiếp tục chạy `console.log("Kết thúc")`.
        - Kết quả: JavaScript in ra "Bắt đầu", "Kết thúc" ngay lập tức, và sau 2 giây mới in "Đã đợi 2 giây!".
        
### 5. Ưu điểm và Nhược điểm của Callback
    - Ưu điểm:

        - Callback giúp quản lý các tác vụ bất đồng bộ hiệu quả, giúp JavaScript chạy trơn tru mà không bị chặn (non-blocking).
        - Cho phép mã chạy một cách có trật tự, đặc biệt khi xử lý chuỗi tác vụ phụ thuộc nhau.
    - Nhược điểm:

        - Dễ dẫn đến "callback hell" - khi có nhiều callback lồng nhau, mã sẽ trở nên khó đọc và khó bảo trì.
        - Việc xử lý lỗi có thể phức tạp, đặc biệt trong các callback bất đồng bộ.

### 6. Callback Hell và Cách Giải Quyết
- **Callback Hell** xảy ra khi có nhiều callback lồng nhau, gây khó khăn trong việc đọc và duy trì mã nguồn.

- **Ví dụ về Callback Hell**:
    ```javascript
    doTask1(function(result1) {
        doTask2(result1, function(result2) {
            doTask3(result2, function(result3) {
                doTask4(result3, function(result4) {
                    console.log("Tất cả các tác vụ đã hoàn thành!");
                });
            });
        });
    });
    ```
- Để giảm thiểu callback hell, chúng ta có thể sử dụng các kỹ thuật như:
    - **Promise**: Một cơ chế mới hơn trong JavaScript để xử lý bất đồng bộ, thay thế callback bằng cách sử dụng `then` và `catch`.
    - **Async/Await**: Một cách viết hiện đại hơn, giúp mã trở nên dễ đọc và dễ bảo trì hơn khi xử lý các tác vụ bất đồng bộ.






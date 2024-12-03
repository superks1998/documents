# Synchronous and Asynchronous

# Đồng bộ (Synchronous) và Bất đồng bộ (Asynchronous) trong JavaScript

- JavaScript là một ngôn ngữ lập trình đơn luồng, nghĩa là chỉ có thể thực hiện một tác vụ tại một thời điểm. 
- Tuy nhiên, để quản lý tốt các tác vụ mất thời gian (như yêu cầu API, truy vấn cơ sở dữ liệu), JavaScript hỗ trợ các cơ chế đồng bộ (sync) và bất đồng bộ (async) để xử lý các công việc này hiệu quả hơn.

### Đồng bộ (Synchronous)

- **Khái niệm**: Trong JavaScript, các thao tác đồng bộ được thực hiện lần lượt theo thứ tự. Tức là, một tác vụ sẽ phải hoàn thành trước khi tác vụ tiếp theo được thực hiện.
- **Cách thức hoạt động**: Nếu một tác vụ mất thời gian để hoàn thành (như một phép tính lớn hoặc thao tác I/O), nó sẽ chặn luồng thực thi và ngăn các tác vụ sau nó được thực hiện cho đến khi hoàn tất.
- **Ưu điểm**: Dễ hiểu và dễ viết do các tác vụ thực thi tuần tự.
- **Nhược điểm**: Gây ra hiện tượng "blocking" (tắc nghẽn), khiến ứng dụng chậm lại nếu có nhiều tác vụ mất thời gian.

#### Ví dụ về Synchronous

    ```javascript
        console.log("Tác vụ 1");
        console.log("Tác vụ 2");
        console.log("Tác vụ 3");
    ```
    
    - **Giải thích**:
        - Trong ví dụ này, các tác vụ được thực thi lần lượt: "Tác vụ 1", sau đó "Tác vụ 2", và cuối cùng là "Tác vụ 3".

### Bất đồng bộ (Asynchronous)
- **Khái niệm**: 
    - Với cơ chế bất đồng bộ, JavaScript có thể thực hiện các tác vụ mà không cần chờ tác vụ trước hoàn thành. 
    - Thay vì chặn luồng thực thi, các tác vụ mất thời gian sẽ được "đặt lịch" và chuyển sang trạng thái chờ.
- **Cách thức hoạt động**: 
    - Khi một tác vụ bất đồng bộ được gọi, JavaScript sẽ đặt tác vụ đó vào hàng chờ, cho phép luồng chính tiếp tục thực hiện các tác vụ khác. Khi tác vụ bất đồng bộ hoàn thành, nó sẽ "đánh thức" JavaScript để xử lý kết quả.
- **Ưu điểm**: Cho phép xử lý nhiều tác vụ song song, không chặn luồng chính, giúp cải thiện hiệu suất.
- **Nhược điểm**: Phức tạp hơn để hiểu và quản lý, do không tuân theo thứ tự thực hiện tuần tự.

### Ví dụ về Asynchronous
    ```javascript
        console.log("Tác vụ 1");

        setTimeout(() => {
            console.log("Tác vụ 2 (sau 2 giây)");
        }, 2000);

        console.log("Tác vụ 3");
    ```
    - **Giải thích**: 
        - Trong ví dụ này, Tác vụ 1 sẽ được in ra trước. 
        - Sau đó, Tác vụ 3 sẽ được thực hiện mà không cần chờ Tác vụ 2. 
        - Tác vụ 2 chỉ được thực thi sau 2 giây, nhờ vào cơ chế bất đồng bộ của setTimeout.

### Các kỹ thuật xử lý bất đồng bộ trong JavaScript

#### 1. Callbacks
- **Khái niệm**: Callbacks là các hàm được truyền như tham số vào một hàm khác để thực thi sau khi tác vụ trước đó hoàn tất. Đây là cách cơ bản để xử lý bất đồng bộ.
- **Nhược điểm**: Dễ dẫn đến callback hell (cấu trúc lồng nhau phức tạp, khó đọc).
    ```javascript
    function greet(callback) {
        console.log("Hello");
        callback();
    }

    greet(() => {
        console.log("Welcome!");
    });
    ```
#### 2. Promises
- **Khái niệm**: Promise là một đối tượng đại diện cho một tác vụ bất đồng bộ mà kết quả của nó có thể là hoàn thành (resolved) hoặc thất bại (rejected). Promises giúp cải thiện mã dễ đọc hơn so với callbacks.
- **Cấu trúc**: .then() được gọi khi thành công, .catch() được gọi khi lỗi.

    ```javascript
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Kết quả sau 2 giây"), 2000);
    });

    promise
        .then(result => console.log(result))
        .catch(error => console.log(error));
    ```

#### 3. Async/Await
- **Khái niệm**: async và await giúp viết mã bất đồng bộ mà nhìn giống như mã đồng bộ. await chỉ được sử dụng trong hàm async và nó dừng thực thi hàm cho đến khi Promise được hoàn thành.
- **Ưu điểm**: Dễ đọc và dễ quản lý hơn so với Promises và callbacks.

    ```javascript
    async function fetchData() {
        let result = await new Promise(resolve => setTimeout(() => resolve("Kết quả sau 2 giây"), 2000));
        console.log(result);
    }

    fetchData();
    ```

### So sánh Synchronous và Asynchronous

| Đặc điểm    | Đồng bộ (Synchronous)                              | Bất đồng bộ (Asynchronous)                                |
|-----------------------|-------------------------|-------------------------------------------|
| `Cách thực thi`        | Tuần tự         | Không chặn luồng, song song                  |
| `Ảnh hưởng đến hiệu suất`        | Có thể gây tắc nghẽn                  | Cải thiện hiệu suất                      |
| `Độ phức tạp trong quản lý`       | Đơn giản      | Phức tạp hơn với callbacks hoặc Promises                  |
| `Ví dụ`     | `console.log("A"); console.log("B");`           | `setTimeout(() => console.log("A"), 1000); console.log("B");`                                 |
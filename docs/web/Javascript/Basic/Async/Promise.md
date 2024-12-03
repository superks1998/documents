# Promises

## JavaScript Promises

- Trong JavaScript, **Promise** là một đối tượng đại diện cho một giá trị có thể có sẵn ngay lập tức, trong tương lai hoặc không bao giờ có. 
- Promise giúp xử lý các tác vụ bất đồng bộ, như yêu cầu HTTP, một cách rõ ràng và dễ hiểu hơn so với việc sử dụng callback.

- ***Promise*** là một đối tượng đại diện cho quá trình xử lý một tác vụ bất đồng bộ, và cho phép thực hiện các thao tác khi tác vụ đó hoàn thành hoặc thất bại.

---

### Các trạng thái của Promise

1. **Pending (Chờ xử lý)**: Trạng thái ban đầu, khi Promise chưa được giải quyết (đang chờ kết quả).
2. **Fulfilled (Hoàn thành)**: Promise đã hoàn thành thành công, và trả về giá trị.
3. **Rejected (Thất bại)**: Promise đã hoàn thành với một lỗi hoặc kết quả không như mong muốn.

---

### Cách tạo một Promise

- Một Promise được tạo ra bằng cách sử dụng từ khóa `new Promise()`, và truyền vào một hàm **executor** với hai tham số là `resolve` và `reject`.
  
- **resolve**:
    - Hàm resolve là một hàm `callback` được gọi khi tác vụ bất đồng bộ hoàn thành thành công. 
    Khi bạn gọi `resolve(value)`, nó sẽ chuyển trạng thái của Promise từ `Pending` sang `Fulfilled`. Giá trị value trong `resolve(value)` sẽ được truyền vào `.then()` ở các bước sau để xử lý.

    - **Ví dụ**:

        ```javascript
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Thành công!");  // Khi hoàn thành thành công, gọi resolve
            }, 1000);
        });

        promise.then(result => {
            console.log(result); // Kết quả: "Thành công!"
        });
        ```
- **reject**: 
    - Hàm `reject` là một hàm `callback` được gọi khi tác vụ gặp lỗi hoặc thất bại. 
    Khi bạn gọi `reject(error)`, trạng thái của Promise sẽ chuyển từ `Pending` sang `Rejected` và giá trị error sẽ được truyền vào `.catch()` để xử lý lỗi.

    - **Ví dụ**:

        ```javascript
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Có lỗi xảy ra!");  // Khi gặp lỗi, gọi reject
            }, 1000);
        });

        promise
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error); // Kết quả: "Có lỗi xảy ra!"
            });
        ```

- **Ví dụ sử dụng resolve và reject trong một tác vụ**
    - Giả sử bạn có một hàm `checkNumber` để kiểm tra nếu một số là chẵn hay lẻ. Nếu số là chẵn, Promise sẽ hoàn thành thành công (gọi resolve), còn nếu là lẻ, Promise sẽ bị từ chối (gọi reject).

        ```javascript
        function checkNumber(number) {
            return new Promise((resolve, reject) => {
                if (number % 2 === 0) {
                    resolve("Số là chẵn"); // Kết quả thành công
                } else {
                    reject("Số là lẻ");   // Kết quả thất bại
                }
            });
        }

        checkNumber(4)
            .then(result => console.log(result))    // Kết quả: "Số là chẵn"
            .catch(error => console.error(error)); // Nếu là lẻ, sẽ vào catch
        ```
        - **Giải thích**:
            - Khi checkNumber(4) được gọi, số 4 là số chẵn, nên resolve sẽ được gọi và trả về "Số là chẵn".
        - Nếu số là lẻ, reject sẽ được gọi và trả về "Số là lẻ", và catch sẽ xử lý thông báo lỗi đó.

- Sử dụng `then` và `catch` với **Promise**
    - `.then()`: Được gọi khi Promise hoàn thành thành công (fulfilled).
    - `.catch()`: Được gọi khi Promise thất bại (rejected).
    - `.finally()`: Được gọi sau khi Promise kết thúc, bất kể thành công hay thất bại.

    ```javascript
    myPromise
        .then(result => {
            console.log(result); // In ra "Tác vụ hoàn thành thành công!"
        })
        .catch(error => {
            console.log(error); // In ra "Tác vụ thất bại." nếu thất bại
        })
        .finally(() => {
            console.log("Promise đã kết thúc."); // In ra bất kể kết quả là thành công hay thất bại
        });
    ```
- **Ví dụ thực tế với Promise**: Yêu cầu API giả lập
    - Giả sử chúng ta có một hàm fetchData sử dụng Promise để mô phỏng yêu cầu dữ liệu từ một API.

    ```javascript
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve({ data: "Dữ liệu đã tải thành công!" });
                } else {
                    reject("Lỗi khi tải dữ liệu.");
                }
            }, 2000);
        });
    }

    // Sử dụng Promise với `fetchData`
    fetchData()
        .then(response => {
            console.log(response.data); // In ra "Dữ liệu đã tải thành công!" sau 2 giây
        })
        .catch(error => {
            console.log(error); // In ra "Lỗi khi tải dữ liệu." nếu thất bại
        });
    ```
### Promise Chain
- Khi cần thực hiện các tác vụ bất đồng bộ nối tiếp nhau, chúng ta có thể chuỗi các Promise bằng cách sử dụng .then().

    ```javascript
    function step1() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Bước 1 hoàn thành"), 1000);
        });
    }

    function step2() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Bước 2 hoàn thành"), 1000);
        });
    }

    function step3() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Bước 3 hoàn thành"), 1000);
        });
    }

    // Thực hiện các bước theo chuỗi
    step1()
        .then(result => {
            console.log(result);
            return step2();
        })
        .then(result => {
            console.log(result);
            return step3();
        })
        .then(result => {
            console.log(result);
            console.log("Tất cả các bước đã hoàn thành.");
        });
    ```
### Promise.all
- **Promise.all()**: Chạy nhiều Promise song song và đợi cho đến khi tất cả các Promise hoàn thành. Trả về một mảng kết quả của các Promise.

    ```javascript
    let promise1 = Promise.resolve("Kết quả 1");
    let promise2 = Promise.resolve("Kết quả 2");
    let promise3 = Promise.resolve("Kết quả 3");

    Promise.all([promise1, promise2, promise3])
        .then(results => {
            console.log(results); // In ra ["Kết quả 1", "Kết quả 2", "Kết quả 3"]
        })
        .catch(error => {
            console.log(error);
        });
    ```

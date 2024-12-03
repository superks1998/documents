---
sidebar_position: 5
---

# Loops

## Vòng Lặp (Loops) trong JavaScript

- Vòng lặp là một trong những công cụ quan trọng trong lập trình, giúp thực hiện lặp lại một khối mã nhiều lần cho đến khi một điều kiện được đáp ứng. JavaScript cung cấp nhiều loại vòng lặp với các cú pháp và cách dùng khác nhau để hỗ trợ cho các tình huống khác nhau trong việc xử lý dữ liệu.

### Các Loại Vòng Lặp trong JavaScript

- ***for loop***
    - **Giới thiệu**: Đây là loại vòng lặp cơ bản nhất, cho phép lặp lại một đoạn mã với một số lần nhất định dựa vào điều kiện xác định.
    - **Cú pháp**:
      ```javascript
      for (initialization; condition; increment) {
          // code to be executed
      }
      ```
    - **Giải thích**:
        - `initialization`: Khởi tạo biến vòng lặp.
        - `condition`: Điều kiện để vòng lặp tiếp tục chạy. Khi điều kiện là `false`, vòng lặp dừng lại.
        - `increment`: Phần tử thay đổi sau mỗi lần lặp (thường là tăng hoặc giảm giá trị của biến).
    - **Ví dụ**:
      ```javascript
      for (let i = 0; i < 5; i++) {
          console.log(i); // In ra 0, 1, 2, 3, 4
      }
      ```

- ***while loop***
    - **Giới thiệu**: Vòng lặp `while` lặp lại một đoạn mã miễn là một điều kiện được thỏa mãn.
    - **Cú pháp**:
      ```javascript
      while (condition) {
          // code to be executed
      }
      ```
    - **Giải thích**:
        - `condition`: Điều kiện kiểm tra mỗi lần trước khi thực hiện vòng lặp. Khi điều kiện là `false`, vòng lặp sẽ dừng.
    - **Ví dụ**:
      ```javascript
      let i = 0;
      while (i < 5) {
          console.log(i); // In ra 0, 1, 2, 3, 4
          i++;
      }
      ```

- ***do...while loop***
    - **Giới thiệu**: Vòng lặp `do...while` luôn thực hiện ít nhất một lần trước khi kiểm tra điều kiện.
    - **Cú pháp**:
      ```javascript
      do {
          // code to be executed
      } while (condition);
      ```
    - **Giải thích**:
        - `condition`: Điều kiện được kiểm tra sau khi thực hiện đoạn mã trong vòng lặp.
    - **Ví dụ**:
      ```javascript
      let i = 0;
      do {
          console.log(i); // In ra 0, 1, 2, 3, 4
          i++;
      } while (i < 5);
      ```

- ***for...of loop***
    - **Giới thiệu**: Vòng lặp `for...of` dùng để lặp qua các phần tử của một đối tượng có thể duyệt được như mảng, chuỗi, Map, Set, ...
    - **Cú pháp**:
      ```javascript
      for (const element of iterable) {
          // code to be executed
      }
      ```
    - **Ví dụ**:
      ```javascript
      const array = [10, 20, 30];
      for (const number of array) {
          console.log(number); // In ra 10, 20, 30
      }
      ```

- ***for...in loop***
    - **Giới thiệu**: Vòng lặp `for...in` dùng để lặp qua các thuộc tính của một đối tượng.
    - **Cú pháp**:
      ```javascript
      for (const key in object) {
          // code to be executed
      }
      ```
    - **Ví dụ**:
      ```javascript
      const person = { name: "Alice", age: 25 };
      for (const key in person) {
          console.log(key + ": " + person[key]); // In ra name: Alice, age: 25
      }
      ```

### So Sánh Các Loại Vòng Lặp

| Vòng Lặp       | Sử Dụng Khi                   | Ưu Điểm                        | Nhược Điểm                         |
|----------------|--------------------------------|--------------------------------|------------------------------------|
| **for**        | Khi biết trước số lần lặp      | Cú pháp ngắn gọn               | Không phù hợp cho các đối tượng iterable không có chiều dài cố định |
| **while**      | Khi số lần lặp không xác định  | Linh hoạt với điều kiện phức tạp | Có thể gây vòng lặp vô hạn nếu không cẩn thận |
| **do...while** | Khi cần thực hiện ít nhất 1 lần | Đảm bảo chạy ít nhất một lần   | Cần cẩn thận với điều kiện để tránh vòng lặp vô hạn |
| **for...of**   | Duyệt qua các phần tử iterable | Cú pháp đơn giản, dễ đọc       | Không phù hợp cho đối tượng không iterable |
| **for...in**   | Duyệt qua thuộc tính của object | Dễ sử dụng với các đối tượng   | Không khuyến khích với mảng vì có thể duyệt cả thuộc tính không mong muốn |

---
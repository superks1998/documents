---
sidebar_position: 10
---

# Array

## Mảng trong JavaScript

- Mảng là một cấu trúc dữ liệu trong JavaScript giúp lưu trữ và quản lý nhiều giá trị trong một biến duy nhất. Mỗi giá trị trong mảng được gọi là một phần tử và có vị trí xác định được gọi là chỉ mục (index).

- Mảng rất hữu ích khi cần lưu trữ các danh sách, dãy số, chuỗi, hoặc các đối tượng.

### Cách tạo mảng

- **Sử dụng cú pháp mảng rỗng**: Tạo một mảng không chứa phần tử nào.

    ```javascript
    let arr = [];
    ```

- **Tạo mảng có phần tử**: Có thể thêm các phần tử ngay khi khai báo mảng.

    ```javascript
    let fruits = ['Apple', 'Banana', 'Orange'];
    ```

- **Sử dụng từ khóa `new Array()`**: Một cách khác để tạo mảng, nhưng ít phổ biến hơn.

    ```javascript
    let numbers = new Array(1, 2, 3, 4, 5);
    ```

### Các phương thức cơ bản của mảng

- **Thêm phần tử**:
    - `push()`: Thêm một hoặc nhiều phần tử vào cuối mảng.

        ```javascript
        fruits.push('Mango');
        // Kết quả: ['Apple', 'Banana', 'Orange', 'Mango']
        ```

    - `unshift()`: Thêm một hoặc nhiều phần tử vào đầu mảng.

        ```javascript
        fruits.unshift('Grapes');
        // Kết quả: ['Grapes', 'Apple', 'Banana', 'Orange', 'Mango']
        ```

- **Xóa phần tử**:
    - `pop()`: Xóa phần tử cuối mảng và trả về phần tử đã xóa.

        ```javascript
        let lastFruit = fruits.pop();
        // Kết quả: lastFruit = 'Mango'; fruits = ['Grapes', 'Apple', 'Banana', 'Orange']
        ```

    - `shift()`: Xóa phần tử đầu tiên của mảng và trả về phần tử đã xóa.

        ```javascript
        let firstFruit = fruits.shift();
        // Kết quả: firstFruit = 'Grapes'; fruits = ['Apple', 'Banana', 'Orange']
        ```

- **Truy cập phần tử trong mảng**:
    - Có thể truy cập phần tử trong mảng bằng cách sử dụng chỉ mục, bắt đầu từ 0.

        ```javascript
        console.log(fruits[0]); // Kết quả: 'Apple'
        ```

- **Độ dài của mảng**:
    - Sử dụng thuộc tính `length` để lấy số phần tử trong mảng.

        ```javascript
        console.log(fruits.length); // Kết quả: 3
        ```

### Một số phương thức quan trọng khác

- **`splice()`**: Thêm, xóa, hoặc thay thế các phần tử trong mảng.

    ```javascript
    fruits.splice(1, 1, 'Kiwi'); // Thay phần tử tại vị trí 1 bằng 'Kiwi'
    // Kết quả: ['Apple', 'Kiwi', 'Orange']
    ```

- **`slice()`**: Tạo một mảng mới là bản sao của một phần trong mảng gốc.

    ```javascript
    let newFruits = fruits.slice(1, 3);
    // Kết quả: newFruits = ['Kiwi', 'Orange']
    ```

- **`map()`**: Tạo một mảng mới từ việc áp dụng một hàm lên từng phần tử của mảng cũ.

    ```javascript
    let numbers = [1, 2, 3];
    let squaredNumbers = numbers.map(num => num * num);
    // Kết quả: squaredNumbers = [1, 4, 9]
    ```

- **`filter()`**: Tạo một mảng mới chứa các phần tử thỏa mãn điều kiện.

    ```javascript
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    // Kết quả: evenNumbers = [2]
    ```

- **`reduce()`**: Tính toán một giá trị duy nhất bằng cách gộp các phần tử của mảng theo một hàm.

    ```javascript
    let sum = numbers.reduce((total, num) => total + num, 0);
    // Kết quả: sum = 6
    ```

### Một số ví dụ cơ bản về mảng

- **Tạo một mảng số và tính tổng các phần tử trong mảng**

    ```javascript
    let numbers = [5, 10, 15, 20];
    let sum = numbers.reduce((total, num) => total + num, 0);
    console.log(sum); // Kết quả: 50
    ```

- **Tìm các số chẵn trong một mảng**

    ```javascript
    let numbers = [1, 2, 3, 4, 5, 6];
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // Kết quả: [2, 4, 6]
    ```

- **Chuyển đổi một mảng chuỗi thành chữ hoa**

    ```javascript
    let fruits = ['apple', 'banana', 'orange'];
    let upperFruits = fruits.map(fruit => fruit.toUpperCase());
    console.log(upperFruits); // Kết quả: ['APPLE', 'BANANA', 'ORANGE']
    ```

---

### Bảng tóm tắt một số phương thức chính của mảng

| Phương thức      | Chức năng                                             | Ví dụ                               |
|------------------|-------------------------------------------------------|-------------------------------------|
| `push()`         | Thêm phần tử vào cuối mảng                            | `arr.push(4)`                       |
| `pop()`          | Xóa phần tử cuối và trả về phần tử đã xóa             | `arr.pop()`                         |
| `shift()`        | Xóa phần tử đầu và trả về phần tử đã xóa              | `arr.shift()`                       |
| `unshift()`      | Thêm phần tử vào đầu mảng                             | `arr.unshift(0)`                    |
| `map()`          | Tạo mảng mới với các phần tử sau khi biến đổi         | `arr.map(x => x * 2)`               |
| `filter()`       | Lọc các phần tử thỏa mãn điều kiện                    | `arr.filter(x => x > 2)`            |
| `reduce()`       | Tính toán giá trị duy nhất từ các phần tử trong mảng  | `arr.reduce((a, b) => a + b)`       |
| `slice()`        | Trích xuất một phần của mảng                          | `arr.slice(1, 3)`                   |
| `splice()`       | Thêm/xóa/thay thế các phần tử trong mảng             | `arr.splice(1, 1, 'New')`           |
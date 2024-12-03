# Tham trị

## Tham trị trong JavaScript

- Tham trị (Pass by Value) là một khái niệm quan trọng trong JavaScript khi làm việc với các kiểu dữ liệu nguyên thủy.
- Nó giải thích cách giá trị được truyền và sử dụng trong các biến hoặc hàm.

---

### **Khái niệm Tham trị**

- Khi một biến được gán giá trị hoặc truyền vào một hàm, một **bản sao** của giá trị đó được tạo.
- Sự thay đổi của bản sao sẽ **không ảnh hưởng** đến giá trị ban đầu.
- Tham trị áp dụng cho các kiểu dữ liệu nguyên thủy (**Primitive Types**) bao gồm:
  - `number`
  - `string`
  - `boolean`
  - `null`
  - `undefined`
  - `symbol`
  - `bigint`

---

### **Cách hoạt động của Tham trị**

#### **1. Gán giá trị giữa các biến**

- Khi một biến được gán giá trị kiểu nguyên thủy cho một biến khác, một bản sao của giá trị được sao chép.

-   **Ví dụ:**
        ```javascript
        let a = 10;
        let b = a; // Sao chép giá trị của a vào b

        b = 20;    // Thay đổi b không ảnh hưởng đến a

        console.log(a); // 10
        console.log(b); // 20
        ```

#### **2. Truyền giá trị vào hàm**
- Khi truyền một biến kiểu nguyên thủy vào một hàm, chỉ có giá trị của biến đó được sao chép và truyền đi.

-   **Ví dụ:**

        ```javascript
        function updateValue(x) {
        x = 100; // Thay đổi x trong hàm
        }

        let y = 50;
        updateValue(y); // Truyền giá trị của y vào hàm

        console.log(y); // 50 (Không bị ảnh hưởng)
        ```

### **So sánh giữa Tham trị và Tham chiếu**

- So sánh giữa Tham trị và Tham chiếu

    | Đặc điểm  | Tham trị (Pass by Value)                 | Tham chiếu (Pass by Reference)     |
    |---------|-------------------------------|---------------------------------|
    | **Kiểu dữ liệu áp dụng** | Kiểu nguyên thủy   | Kiểu phức tạp (`object`, `array`, `function`)      |
    | **Phức tạp**| Sao chép giá trị |      Sao chép tham chiếu   |
    | **Thay đổi giá trị**| Không ảnh hưởng biến gốc |    Ảnh hưởng biến gốc  |
    | **Ví dụ**| `number`, `string`, `boolean`, etc. |     `object`, `array`, `function`  |

### **Minh họa trực quan**
#### 1. Với kiểu nguyên thủy:
- Khi gán giá trị hoặc truyền vào hàm:

```javascript
let x = 5;
let y = x; // Sao chép giá trị

y = 10;

console.log(x); // 5 (Không thay đổi)
console.log(y); // 10
```

#### 2. Trong hàm:
    ```javascript
    function increment(num) {
    num += 1;
    }

    let value = 7;
    increment(value);

    console.log(value); // 7 (Giá trị gốc không bị ảnh hưởng)
    ```

### Lưu ý khi làm việc với Tham trị
#### Không có tác động hai chiều:

- Khi làm việc với các kiểu dữ liệu nguyên thủy, việc thay đổi biến bản sao không ảnh hưởng đến biến gốc.
- Phù hợp cho dữ liệu không thay đổi:

- Tham trị thích hợp để làm việc với các dữ liệu không cần sửa đổi nhiều, như giá trị số, chuỗi, hoặc các hằng số.

### Tóm tắt
- Tham trị (Pass by Value) chỉ áp dụng cho kiểu dữ liệu nguyên thủy.
- Khi gán hoặc truyền vào hàm, giá trị được sao chép hoàn toàn độc lập.
- Đây là cách hoạt động mặc định của JavaScript với kiểu dữ liệu nguyên thủy.

### Ví dụ thực tế
- Tính toán mà không thay đổi biến gốc:

    ```javascript
    function doubleValue(num) {
    return num * 2; // Nhân đôi giá trị và trả về
    }

    let original = 15;
    let doubled = doubleValue(original);

    console.log(original); // 15
    console.log(doubled);  // 30
    ```

#### So sánh kiểu nguyên thủy với kiểu phức tạp:
    ```javascript
    let primitive = 10;
    let complex = { value: 10 };

    function modifyValues(p, c) {
    p = 20;           // Không ảnh hưởng primitive
    c.value = 20;     // Ảnh hưởng object
    }

    modifyValues(primitive, complex);

    console.log(primitive); // 10 (Không thay đổi)
    console.log(complex);   // { value: 20 } (Bị thay đổi)
    ```
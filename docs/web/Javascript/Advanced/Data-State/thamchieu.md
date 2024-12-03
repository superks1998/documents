# Tham chiếu

## Tham chiếu trong JavaScript

- **Tham chiếu** trong JavaScript là một khái niệm quan trọng khi làm việc với các kiểu dữ liệu phức tạp như đối tượng (`object`) và mảng (`array`). 
- Hiểu rõ **tham chiếu** sẽ giúp bạn tránh những lỗi khó đoán trong khi lập trình.

### **Khái niệm cơ bản**

- Trong JavaScript, dữ liệu được lưu trữ và quản lý theo hai cách chính:

    - **Kiểu dữ liệu nguyên thủy (Primitive Types)**: Gồm `number`, `string`, `boolean`, `null`, `undefined`, và `symbol`. Các kiểu này được lưu trữ theo **giá trị (by value)**.
    - **Kiểu dữ liệu phức tạp (Complex Types)**: Gồm `object`, `array`, và `function`. Các kiểu này được lưu trữ theo **tham chiếu (by reference)**.

---

### **Tham chiếu hoạt động như thế nào?**

#### **Kiểu dữ liệu nguyên thủy**
- Khi bạn gán một biến có kiểu dữ liệu nguyên thủy cho một biến khác, giá trị được **sao chép**.
- Thay đổi giá trị của biến thứ hai không ảnh hưởng đến biến đầu tiên.

- **Ví dụ:**
    ```javascript
    let x = 10;
    let y = x; // Sao chép giá trị của x
    y = 20;

    console.log(x); // 10
    console.log(y); // 20
    ```
#### **Kiểu dữ liệu phức tạp**
- Khi bạn gán một đối tượng hoặc mảng cho một biến khác, chỉ có tham chiếu đến vùng nhớ của đối tượng/mảng đó được sao chép.
- Thay đổi trên biến mới sẽ ảnh hưởng đến biến gốc, vì cả hai cùng trỏ đến cùng một vùng nhớ.

- **Ví dụ:**
    ```javascript
    let obj1 = { name: "John" };
    let obj2 = obj1; // Sao chép tham chiếu

    obj2.name = "Doe";

    console.log(obj1.name); // "Doe"
    console.log(obj2.name); // "Doe"
    ```

### So sánh giá trị và tham chiếu
#### So sánh giá trị
- Với các kiểu dữ liệu nguyên thủy, so sánh hai biến sẽ so sánh giá trị thực của chúng.

- **Ví dụ:**

```javascript
let a = 5;
let b = 5;

console.log(a === b); // true
```
#### So sánh tham chiếu
- Với các kiểu dữ liệu phức tạp, so sánh hai biến sẽ kiểm tra tham chiếu đến vùng nhớ, không phải giá trị bên trong.

- **Ví dụ:**

```javascript
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 === arr2); // false (khác vùng nhớ)
console.log(arr1 === arr3); // true (cùng tham chiếu)
```

### Cách tránh lỗi khi làm việc với tham chiếu

#### Tạo bản sao độc lập (Deep Copy):
- Sử dụng các phương pháp như `JSON.parse(JSON.stringify())` hoặc thư viện như `Lodash` để sao chép sâu đối tượng/mảng.

- **Ví dụ:**

    ```javascript
    let original = { name: "Alice", hobbies: ["reading", "coding"] };
    let copy = JSON.parse(JSON.stringify(original));

    copy.hobbies.push("traveling");

    console.log(original.hobbies); // ["reading", "coding"]
    console.log(copy.hobbies);     // ["reading", "coding", "traveling"]
    ```

#### Sử dụng các hàm sao chép nông (Shallow Copy):
- Dùng cú pháp spread ... hoặc Object.assign().
- **Ví dụ:**

    ```javascript
    let original = { name: "Alice" };
    let shallowCopy = { ...original };

    shallowCopy.name = "Bob";

    console.log(original.name); // "Alice"
    console.log(shallowCopy.name); // "Bob"
    ```

### Tóm tắt

    | Kiểu dữ liệu  | Lưu trữ                   | Khi gán       |        Khi so sánh       |
    |---------|-------------------------------|---------------|------------------|
    | **Nguyên thủy** | Giá trị      | Sao chép giá trị |     So sánh giá trị         |
    | **Phức tạp**| Tham chiếu      | Sao chép tham chiếu |       So sánh vùng nhớ/tham chiếu      |



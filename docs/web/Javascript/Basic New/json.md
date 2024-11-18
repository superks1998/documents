# JSON

## JSON trong JavaScript

JSON (JavaScript Object Notation) là một định dạng dữ liệu nhẹ, dễ đọc, thường được sử dụng để trao đổi dữ liệu giữa máy khách (client) và máy chủ (server). JSON có cấu trúc rất giống với đối tượng trong JavaScript, giúp nó trở nên phổ biến trong việc lưu trữ và truyền dữ liệu.

### 1. Đặc điểm của JSON

- **Định dạng văn bản**: JSON là một chuỗi văn bản, do đó nó có thể dễ dàng gửi qua mạng.
- **Cấu trúc đơn giản**: JSON chỉ bao gồm các cặp khóa-giá trị và các mảng (arrays) của chúng.
- **Tương thích với nhiều ngôn ngữ**: Hầu hết các ngôn ngữ lập trình hiện đại đều hỗ trợ JSON.

### 2. Cấu trúc JSON

JSON có thể chứa các loại dữ liệu sau:
- **Số**: `10`, `3.14`
- **Chuỗi**: `"Xin chào"`
- **Giá trị boolean**: `true` hoặc `false`
- **Mảng**: `[1, 2, 3]`
- **Đối tượng**: `{ "name": "Alice", "age": 25 }`
- **Giá trị null**: `null`

#### Ví dụ về cấu trúc JSON
```json
{
    "name": "Alice",
    "age": 25,
    "isStudent": false,
    "subjects": ["Math", "Science", "History"],
    "address": {
        "city": "New York",
        "zip": "10001"
    }
}
```

### 3. JSON và JavaScript
- Trong JavaScript, JSON thường được sử dụng khi làm việc với dữ liệu từ API hoặc khi cần chuyển đổi đối tượng JavaScript thành chuỗi văn bản.

- Các phương thức làm việc với JSON trong JavaScript:
    - `JSON.stringify()`: Chuyển đổi một đối tượng JavaScript thành chuỗi JSON.
    - `JSON.parse()`: Phân tích một chuỗi JSON và chuyển đổi thành đối tượng JavaScript.
### 4. JSON.stringify()
- **Mục đích**: Chuyển đổi đối tượng JavaScript thành chuỗi JSON để dễ dàng lưu trữ hoặc truyền qua mạng.

- **Cú pháp**:
    ```javascript
    JSON.stringify(value, replacer, space);
    ```
    - `value`: Đối tượng cần chuyển đổi.
    - `replacer (tùy chọn)`: Hàm hoặc mảng dùng để lọc các thuộc tính sẽ được thêm vào chuỗi JSON.
    - `space (tùy chọn)`: Số lượng khoảng trắng để thụt dòng, giúp cho chuỗi JSON dễ đọc hơn.

- **Ví dụ**:

    ```javascript
    Sao chép mã
    const person = {
        name: "Alice",
        age: 25,
        isStudent: false,
        subjects: ["Math", "Science"]
    };

    const jsonString = JSON.stringify(person);
    console.log(jsonString); // In ra: {"name":"Alice","age":25,"isStudent":false,"subjects":["Math","Science"]}
    ```
    - **Với space**:
        ```javascript
        const jsonStringPretty = JSON.stringify(person, null, 2);
        console.log(jsonStringPretty);
        // In ra chuỗi JSON thụt dòng:
        // {
        //   "name": "Alice",
        //   "age": 25,
        //   "isStudent": false,
        //   "subjects": ["Math", "Science"]
        // }
        ```

### 5. JSON.parse()
- **Mục đích**: Chuyển đổi chuỗi JSON thành đối tượng JavaScript để dễ dàng thao tác.

- **Cú pháp**:

    ```javascript
    JSON.parse(text, reviver);
    ```
    - `text`: Chuỗi JSON cần phân tích.
    - `reviver (tùy chọn)`: Hàm xử lý từng cặp khóa-giá trị, có thể chỉnh sửa giá trị trước khi trả về.

- **Ví dụ**:
    ```javascript
    const jsonString = '{"name":"Alice","age":25,"isStudent":false}';
    const personObj = JSON.parse(jsonString);

    console.log(personObj.name); // In ra: Alice
    console.log(personObj.age);  // In ra: 25
    ```

### 6. Lưu ý khi làm việc với JSON
<!-- - Chuỗi JSON phải có dấu ngoặc kép " " bao quanh khóa và chuỗi giá trị. -->

- JSON không hỗ trợ các thuộc tính hàm hoặc không phải dữ liệu: Chỉ chứa được dữ liệu, không chứa được hàm hay các thuộc tính không phải dữ liệu.

    ```javascript
    const person = {
        name: "Alice",
        age: 25,
        greet: function() { console.log("Hello!"); }
    };

    const jsonString = JSON.stringify(person);
    console.log(jsonString); 
    // In ra: {"name":"Alice","age":25}, thuộc tính greet không được thêm vào
    ```
- JSON không hỗ trợ undefined: Nếu một thuộc tính có giá trị là undefined, nó sẽ bị loại bỏ khi chuyển đổi thành JSON.

    ```javascript
    Sao chép mã
    const person = {
        name: "Alice",
        age: undefined
    };

    const jsonString = JSON.stringify(person);
    console.log(jsonString); 
    // In ra: {"name":"Alice"}
    ```

### 7. Ví dụ Tổng Hợp
- Giả sử chúng ta có một đối tượng người dùng và muốn chuyển đối tượng này thành JSON để lưu trữ trong cơ sở dữ liệu và sau đó chuyển lại thành đối tượng JavaScript để sử dụng.

    ```javascript
    Sao chép mã
    // Đối tượng JavaScript
    const user = {
        id: 1,
        username: "alice123",
        email: "alice@example.com",
        roles: ["user", "admin"],
        isActive: true
    };

    // Chuyển đối tượng thành chuỗi JSON
    const jsonUser = JSON.stringify(user);
    console.log("Chuỗi JSON:", jsonUser); 
    // In ra: {"id":1,"username":"alice123","email":"alice@example.com","roles":["user","admin"],"isActive":true}

    // Giả sử chúng ta nhận chuỗi JSON từ server và muốn sử dụng trong ứng dụng
    const parsedUser = JSON.parse(jsonUser);
    console.log("Đối tượng JavaScript:", parsedUser);
    // In ra: { id: 1, username: "alice123", email: "alice@example.com", roles: ["user", "admin"], isActive: true }
    ```
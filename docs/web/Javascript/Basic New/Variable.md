---
sidebar_position: 1
---

# Variable

## Khai báo Biến

Trong JavaScript, biến là cách để lưu trữ dữ liệu và có thể thay đổi giá trị trong quá trình chạy chương trình. Có ba cách khai báo biến: `var`, `let`, và `const`. 

Mỗi cách có phạm vi sử dụng và đặc điểm riêng biệt.

### ***1. var***
  - **Giới thiệu**: `var` là cách khai báo biến đầu tiên trong JavaScript.

  - **Phạm vi (Scope)**:

    - **Phạm vi hàm**: Biến `var` chỉ có hiệu lực trong hàm chứa nó. Nếu khai báo bên ngoài hàm, biến đó sẽ trở thành **biến toàn cục**.

    - **Biến toàn cục (Global Variable)**: Là biến có thể truy cập ở bất kỳ đâu trong chương trình. Nếu bạn khai báo `var` bên ngoài bất kỳ hàm nào, biến đó sẽ tồn tại toàn cục.

  - **Ví dụ về phạm vi**:
    ```javascript
    function sayHello() {
        var greeting = "Hello!";
        console.log(greeting); // "Hello!"
    }
    sayHello();
    console.log(greeting); // Lỗi, greeting chỉ tồn tại trong hàm sayHello
    ```

    - Nếu khai báo `var` ngoài hàm:

      ```javascript
      var globalVar = "I'm global";
      function showGlobal() {
          console.log(globalVar); // "I'm global"
      }
      showGlobal();
      ```

  - **Hoisting**:
    - `var` có đặc điểm hoisting, tức là có thể được dùng trước khi khai báo nhưng giá trị sẽ là `undefined`.
    - Ví dụ:
      ```javascript
      console.log(x); // undefined
      var x = 10;
      ```
  - **Tái khai báo**:
    - `var` cho phép tái khai báo biến trong cùng một phạm vi mà không báo lỗi.
      ```javascript
      var y = 5;
      var y = 10; // Không lỗi
      console.log(y); // 10
      ```

### ***2. let***

  - **Giới thiệu**: `let` được giới thiệu từ phiên bản ES6 (2015), giúp tránh các vấn đề của `var`.

  - **Phạm vi (Scope)**:
    - **Phạm vi khối**: `let` chỉ tồn tại trong khối `{}` chứa nó, chẳng hạn như trong `if`, `for`, hoặc `{}` trong hàm.

  - **Ví dụ về phạm vi**:

    ```javascript
    if (true) {
        let blockVar = "Inside block";
        console.log(blockVar); // "Inside block"
    }
    console.log(blockVar); // Lỗi, blockVar không tồn tại ngoài khối if
    ```
  - **Hoisting**:
    - `let` cũng được hoisted, nhưng không thể sử dụng trước khi khai báo do "Temporal Dead Zone" (TDZ) – thời gian từ khi khởi tạo cho đến khi khai báo biến.
    - Ví dụ:
      ```javascript
      console.log(a); // Lỗi, a không thể truy cập trước khi khai báo
      let a = 30;
      ```
  - **Tái khai báo**:
    - `let` không cho phép tái khai báo trong cùng một phạm vi, tránh được các lỗi do trùng tên biến.
      ```javascript
      let b = 5;
      let b = 10; // Lỗi, không thể tái khai báo biến b
      ```

### ***3. const***
  - **Giới thiệu**: `const` dùng để khai báo biến không thay đổi giá trị sau khi khởi tạo.
  - **Phạm vi (Scope)**:
    - Giống `let`, `const` chỉ tồn tại trong phạm vi khối `{}` chứa nó.
  - **Không thể thay đổi giá trị**:
    - Giá trị của `const` không thể gán lại sau khi khai báo. Tuy nhiên, nếu là kiểu dữ liệu phức tạp (như mảng, đối tượng), bạn có thể thay đổi nội dung của mảng hoặc đối tượng đó.
  - **Ví dụ về không thể thay đổi**:
      ```javascript
      const PI = 3.1415;
      PI = 3.14; // Lỗi, không thể thay đổi giá trị của PI
      
      const arr = [1, 2, 3];
      arr.push(4); // Hợp lệ, vì thay đổi nội dung của mảng chứ không gán lại arr
      console.log(arr); // [1, 2, 3, 4]
      ```
  - **Hoisting**:
    - `const` cũng có TDZ và không thể truy cập trước khi khai báo.
      ```javascript
      console.log(c); // Lỗi, c không thể truy cập trước khi khai báo
      const c = 40;
      ```

### ***So sánh giữa `var`, `let`, và `const`***

    | Đặc điểm             | `var`                       | `let`                    | `const`                  |
    |----------------------|-----------------------------|--------------------------|--------------------------|
    | Phạm vi              | Hàm (Function Scope)        | Khối (Block Scope)       | Khối (Block Scope)       |
    | Hoisting             | Có, với giá trị `undefined` | Có, với Temporal Dead Zone (TDZ) | Có, với Temporal Dead Zone (TDZ) |
    | Tái khai báo         | Có                          | Không                    | Không                    |
    | Gán lại giá trị      | Có                          | Có                       | Không                    |

### ***Khi nào sử dụng `var`, `let`, và `const`***

- **`const`**: Dùng khi giá trị không thay đổi, giúp mã rõ ràng và dễ bảo trì.
- **`let`**: Dùng khi biến cần thay đổi giá trị, nhất là trong vòng lặp hoặc điều kiện.
- **`var`**: Hạn chế sử dụng `var` trong mã mới, do phạm vi không chặt chẽ và dễ gây lỗi.
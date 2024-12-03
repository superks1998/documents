## Scope trong JavaScript

Scope (phạm vi) là một khái niệm quan trọng trong JavaScript, xác định ngữ cảnh mà các biến, hàm, hoặc đối tượng có thể được truy cập hoặc sử dụng trong mã nguồn.

### **Khái niệm**

- **Scope** mô tả nơi các biến hoặc hàm tồn tại và có thể được truy cập trong mã. 
- Có ba loại scope chính trong JavaScript:
  1. **Global Scope** (Phạm vi toàn cục)
  2. **Function Scope** (Phạm vi hàm)
  3. **Block Scope** (Phạm vi khối)

---

### **Các loại Scope**

#### 1. **Global Scope (Phạm vi toàn cục)**

- Các biến hoặc hàm được khai báo bên ngoài tất cả các hàm hoặc khối mã nằm trong phạm vi toàn cục.
- Chúng có thể được truy cập từ bất kỳ nơi nào trong mã.

    - **Ví dụ:**
        ```javascript
        var globalVar = "Tôi là biến toàn cục";

        function printGlobalVar() {
            console.log(globalVar); // Kết quả: "Tôi là biến toàn cục"
        }

        printGlobalVar();
        console.log(globalVar); // Kết quả: "Tôi là biến toàn cục"
        ```

---

#### 2. **Function Scope (Phạm vi hàm)**

- Các biến được khai báo bên trong một hàm chỉ có thể được truy cập trong phạm vi hàm đó.
- Áp dụng với các biến được khai báo bằng `var`, `let`, hoặc `const`.

    - **Ví dụ:**
        ```javascript
        function myFunction() {
            var functionVar = "Tôi là biến phạm vi hàm";
            console.log(functionVar); // Kết quả: "Tôi là biến phạm vi hàm"
        }

        myFunction();
        console.log(functionVar); // Lỗi: functionVar is not defined
        ```

---

#### 3. **Block Scope (Phạm vi khối)**

- Các biến được khai báo bên trong một khối `{}` bằng `let` hoặc `const` chỉ tồn tại trong khối đó.
- Không áp dụng cho biến được khai báo bằng `var`.

    - **Ví dụ:**
        ```javascript
        {
            let blockScoped = "Tôi là biến phạm vi khối";
            console.log(blockScoped); // Kết quả: "Tôi là biến phạm vi khối"
        }

        console.log(blockScoped); // Lỗi: blockScoped is not defined

        ```
    - **So sánh với `var`:**
    ```javascript
    {
        var notBlockScoped = "Tôi không bị giới hạn bởi phạm vi khối";
    }

    console.log(notBlockScoped); // Kết quả: "Tôi không bị giới hạn bởi phạm vi khối"

    ```

---

### **Scope Chain (Chuỗi phạm vi)**

- Khi truy cập một biến, JavaScript tìm kiếm biến đó trong phạm vi hiện tại.
- Nếu không tìm thấy, nó sẽ tìm kiếm ở các phạm vi cha cho đến phạm vi toàn cục.

    - **Ví dụ:**
        ```javascript
        var globalVar = "Tôi là biến toàn cục";

        function outerFunction() {
            var outerVar = "Tôi là biến phạm vi hàm ngoài";

            function innerFunction() {
                var innerVar = "Tôi là biến phạm vi hàm trong";
                console.log(globalVar); // Kết quả: "Tôi là biến toàn cục"
                console.log(outerVar); // Kết quả: "Tôi là biến phạm vi hàm ngoài"
                console.log(innerVar); // Kết quả: "Tôi là biến phạm vi hàm trong"
            }

            innerFunction();
        }

        outerFunction();

        ```

---

### **Lexical Scope (Phạm vi từ vựng)**

- JavaScript sử dụng **phạm vi từ vựng**, nghĩa là phạm vi của một biến được xác định tại vị trí mà nó được khai báo trong mã.
- Các hàm lồng nhau có thể truy cập biến từ phạm vi cha của chúng.

    - **Ví dụ:**
        ```javascript
        function parentFunction() {
            var parentVar = "Tôi là biến của hàm cha";

            function childFunction() {
                console.log(parentVar); // Kết quả: "Tôi là biến của hàm cha"
            }

            childFunction();
        }

        parentFunction();


        ```

---

### **Tóm tắt**

| Loại Scope        | Định nghĩa                                           | Truy cập được ở đâu                               |
|--------------------|-----------------------------------------------------|--------------------------------------------------|
| **Global Scope**   | Biến/hàm được khai báo bên ngoài tất cả hàm hoặc khối.| Ở bất kỳ đâu trong mã nguồn.                     |
| **Function Scope** | Biến khai báo bên trong hàm.                        | Chỉ trong phạm vi của hàm đó.                   |
| **Block Scope**    | Biến khai báo trong khối `{}` bằng `let` hoặc `const`.| Chỉ trong phạm vi khối đó.                      |

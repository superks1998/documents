# DOM Manipulation

## DOM Manipulation (Tương tác với HTML DOM) trong JavaScript

DOM (Document Object Model) là một mô hình đối tượng của tài liệu HTML hoặc XML. JavaScript sử dụng DOM để tương tác và thay đổi nội dung, cấu trúc, và kiểu dáng của trang web. Với DOM, bạn có thể dễ dàng thay đổi các phần tử    HTML, thuộc tính, sự kiện, và cấu trúc của trang.

---

### 1. DOM là gì?

- **DOM** là một đối tượng đại diện cho tài liệu  HTML hoặc XML của trang web, giúp bạn có thể truy xuất và thao tác với các phần tử của trang.
- Trong JavaScript, DOM được cung cấp dưới dạng một cây đối tượng (tree structure), với mỗi phần tử HTML là một nút trong cây.

  **Ví dụ** về một cây DOM:

  ```html
  <html>
    <body>
      <h1>Chào mừng bạn đến với DOM!</h1>
      <p>Đây là đoạn văn.</p>
    </body>
  </html>
  ```
- Cây DOM của nó sẽ có dạng:

    ```html
    └── body
        ├── h1
        └── p
    ```
### 2. Các Phương Thức DOM Manipulation Cơ Bản
#### 2.1 Truy Xuất Các Phần Tử
- `document.getElementById()`
    - **Chức năng**: Truy xuất phần tử đầu tiên có id cụ thể.
    - **Cú pháp**:
    ```javascript
    const element = document.getElementById("elementId");
    ```
    - **Ví dụ**:
    ```html
    <div id="myDiv">Hello World!</div>
    <script>
    const div = document.getElementById("myDiv");
    console.log(div.textContent); // Output: Hello World!
    </script>
    ```
- `document.getElementsByClassName()`
    - **Chức năng**: Truy xuất tất cả phần tử có cùng một class.
    - **Cú pháp**:
    ```javascript
    const elements = document.getElementsByClassName("className");
    ```
    - **Ví dụ**:
    ```html
    <div class="myClass">Item 1</div>
    <div class="myClass">Item 2</div>
    <script>
    const items = document.getElementsByClassName("myClass");
    console.log(items[0].textContent); // Output: Item 1
    </script>
    ```
- `document.querySelector()`
    - **Chức năng**: Truy xuất phần tử đầu tiên khớp với selector CSS.
    - **Cú pháp**:
    ```javascript
    const element = document.querySelector(".myClass");
    ```
    - **Ví dụ**:
    ```html
    <div class="myClass">Item 1</div>
    <script>
    const item = document.querySelector(".myClass");
    console.log(item.textContent); // Output: Item 1
    </script>
    ```
- `document.querySelectorAll()`
**Chức năng**: Truy xuất tất cả các phần tử khớp với selector CSS.
**Cú pháp**:

    ```javascript
    const elements = document.querySelectorAll(".myClass");
    ```

    - **Ví dụ**:

    ```html 
    <div class="myClass">Item 1</div>
    <div class="myClass">Item 2</div>
    <script>
    const items = document.querySelectorAll(".myClass");
    console.log(items.length); // Output: 2
    </script>
    ```

### 3. Thao Tác với Nội Dung Phần Tử
#### 3.1 Thay Đổi Nội Dung Văn Bản
- `textContent`: Để lấy hoặc thay đổi nội dung văn bản của một phần tử.
    - **Ví Dụ**:
    ```html
    <div id="message">Chào bạn!</div>
    <script>
    const message = document.getElementById("message");
    message.textContent = "Chào bạn, vui lòng thử lại!";
    </script>
    ```
#### 3.2 Thay Đổi Nội Dung HTML
- `innerHTML`: Để lấy hoặc thay đổi nội dung HTML bên trong phần tử.
    - **Ví Dụ**:
    ```html
    <div id="container"><p>Đây là đoạn văn.</p></div>
    <script>
    const container = document.getElementById("container");
    container.innerHTML = "<p>Đoạn văn mới được thêm vào.</p>";
    </script>
    ```
#### 3.3 Thêm Phần Tử Mới
- `appendChild()`: Thêm một phần tử con vào cuối phần tử hiện tại.
    - **Ví Dụ**:
    ```html
    <div id="container"></div>
    <script>
        const container = document.getElementById("container");
        const newDiv = document.createElement("div");
        newDiv.textContent = "Đây là phần tử mới!";
        container.appendChild(newDiv);
    </script>
    ```
- `insertBefore()`: Chèn phần tử mới trước một phần tử đã có.

    - **Ví Dụ**:
    ```html
    <div id="container">
    <div>Item 1</div>
    <div>Item 2</div>
    </div>
    <script>
        const container = document.getElementById("container");
        const newDiv = document.createElement("div");
        newDiv.textContent = "Item 0";
        const firstChild = container.firstChild;
        container.insertBefore(newDiv, firstChild);
    </script>
    ```
#### 3.4 Xoá Phần Tử
- `removeChild()`: Xoá một phần tử con khỏi phần tử cha.
    - **Ví Dụ**:
    ```html
    <div id="container">
    <div id="item1">Item 1</div>
    <div id="item2">Item 2</div>
    </div>
    <script>
    const container = document.getElementById("container");
    const item1 = document.getElementById("item1");
    container.removeChild(item1);
    </script>
    ```
### 4. Thao Tác với Thuộc Tính của Phần Tử
- `setAttribute()`: Để thay đổi giá trị của thuộc tính của phần tử.

    - **Ví Dụ**:
    ```html
    <img id="myImage" src="image.jpg" alt="A picture">
    <script>
    const image = document.getElementById("myImage");
    image.setAttribute("src", "new-image.jpg");
    </script>
    ```
- `getAttribute()`: Để lấy giá trị của thuộc tính của phần tử.
    - **Ví Dụ**:
    ```html
    <a id="myLink" href="https://example.com">Click Here</a>
    <script>
    const link = document.getElementById("myLink");
    const linkHref = link.getAttribute("href");
    console.log(linkHref); // Output: https://example.com
    </script>
    ```
- `classList.add()`: Thêm một lớp CSS vào phần tử.
    - **Ví Dụ**:
    ```html
    <div id="myDiv">Hello</div>
    <script>
        const div = document.getElementById("myDiv");
        div.classList.add("highlight");
    </script>
    ```
- `classList.remove()`: Loại bỏ một lớp CSS khỏi phần tử.
    - **Ví Dụ**:
    ```html
        <div id="myDiv" class="highlight">Hello</div>
        <script>
        const div = document.getElementById("myDiv");
        div.classList.remove("highlight");
        </script>
    ```
- `classList.toggle(className)`: Đổi trạng thái của một lớp CSS (thêm nếu chưa có, xóa nếu đã có).

- **Ví Dụ**:
    ```html
        <div id="myDiv" class="highlight active">Hello</div>
        <script>
        const div = document.getElementById("myDiv");
        div.classList.toggle("active");
        </script>
    ```

### 5. Sự Kiện (Event Handling)

- JavaScript cho phép bạn xử lý các sự kiện như `click`, `mouseover`, `keydown`, v.v. Các sự kiện có thể được thêm vào phần tử qua `addEventListener()`:

- `addEventListener()`: Đăng ký sự kiện cho phần tử.

    - **Cú Pháp**:
    ```javascript
    element.addEventListener(event, function);
    ```

    - **Ví Dụ**:
    ```html
        <button id="myButton">Click me</button>
        <script>
            const button = document.getElementById("myButton");
            button.addEventListener("click", function() {
                alert("Button clicked!");
            });
        </script>
    ```
- `removeEventListener()`: Xoá sự kiện đã đăng ký.
    - **Ví Dụ**:
    ```html
    <button id="myButton">Click me</button>
    <script>
        const button = document.getElementById("myButton");
        function showAlert() {
            alert("Button clicked!");
        }
        button.addEventListener("click", showAlert);
        button.removeEventListener("click", showAlert);
    </script>
    ```

### 6. Thao Tác với CSS (CSS Manipulation)
- Bạn có thể thay đổi hoặc thao tác với các thuộc tính CSS của phần tử qua JavaScript:

    - Thay đổi CSS trực tiếp:

    ```javascript
    const element = document.getElementById('myElement');
    element.style.backgroundColor = 'red';
    ```

    - Thêm hoặc xóa lớp CSS:

    ```javascript
    element.classList.add('newClass');
    ```
---
sidebar_position: 2
---

# Tag Important

## Basic Tags

- `DOCTYPE`:
  - Thẻ doctype trong HTML là một khai báo nằm ở dòng đầu tiên của một tài liệu HTML.
  - Nó cho trình duyệt biết phiên bản HTML mà trang web đang sử dụng.
- `html`: Thẻ gốc của tài liệu HTML, bao quanh toàn bộ nội dung trang web.
- `head`: Bao quanh các phần tử như tiêu đề, liên kết tới tệp CSS, và meta dữ liệu.
- `body`: Chứa toàn bộ nội dung hiển thị của trang web.

## Semantic Tags

- `header`: Phần đầu của một trang hoặc một phần.
- `footer`: Phần cuối của một trang hoặc một phần.
- `main`: Nội dung chính của trang.
- `nav`: Phần điều hướng.
- `article`: Định nghĩa một bài viết độc lập.
- `section`: Định nghĩa một phần hoặc đoạn của tài liệu.
- `aside`: Định nghĩa nội dung phụ.

## Typography Tags

- `h1 -> h6`: Các thẻ tiêu đề từ lớn nhất (h1) đến nhỏ nhất (h6).
- `p`: Định nghĩa một đoạn văn.
- `br`: Chèn một dòng mới (break line).
- `hr`: Chèn một đường kẻ ngang (horizontal rule) để phân tách nội dung.

## Text Formatting Tags

- `b`: Tạo văn bản in đậm.
- `strong`: Tạo văn bản in đậm, nhấn mạnh ngữ nghĩa.
- `i`: Tạo văn bản in nghiêng.
- `em`: Tạo văn bản in nghiêng, nhấn mạnh ngữ nghĩa.
- `u`: Tạo văn bản gạch chân.

## Links & Media Tags

- `a`:
  - **Concept**: Định nghĩa một liên kết.
  - **Attributes**:
    - `href`: Đường dẫn URL mà liên kết sẽ trỏ tới.
      - **Value**:
      - `mailto:`: Có thêm tiền tố này sẽ mở ứng dụng email để gửi thư đến địa chỉ được chỉ định.
      - `tel:`: Có thêm tiền tố này sẽ thực hiện cuộc gọi điện thoại đến số được chỉ định.
    - `target`: Xác định cách hiển thị liên kết.
      - **Value**:
        - `_self`: Mở liên kết trong cùng tab.
        - `_blank`: Mở liên kết trong tab mới.
    - `rel`: Mô tả mối quan hệ giữa tài liệu hiện tại và tài liệu được liên kết.
      - **Value**:
        - `noopener`: Ngăn không cho trang được liên kết truy cập vào `window.opener`.
        - `noreferrer`: Không gửi thông tin người giới thiệu đến trang được liên kết.
    - `title`: Cung cấp thông tin bổ sung khi di chuột qua liên kết.
  ```html title='example'
  <a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
    title="Go to Example"
    >Visit Example</a
  >
  ```
  **Result:**
  <a
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
      title="Go to Example"
      >Visit Example</a>

- `img`:
  - **Concept**: Chèn một hình ảnh.
  - **Attributes**:
    - `src`: Đường dẫn tới file hình ảnh.
    - `alt`: Văn bản thay thế nếu hình ảnh không hiển thị được.
    - `width`: Chiều rộng của hình ảnh.
    - `height`: Chiều cao của hình ảnh.
    - `title`: Cung cấp thông tin bổ sung khi di chuột qua hình ảnh.
    - `loading`: Xác định khi nào nên tải hình ảnh.
      - **Value**:
        - `lazy`: Tải ảnh khi cần thiết.
        - `eager`: Tải ảnh ngay lập tức.

```html title='example'
<img
  src="hhttps://p325k7wa.twic.pics/high/jojo/jojo-bizarre-adventure-all-star-battle-r/02-news/JOJOASBR_launchTrailer_thumbnail.jpg?twic=v1/resize=760/step=10/quality=80"
  alt="Description of image"
  width="380"
  height="214"
  loading="lazy"
  title="Image Title"
/>
```
**Result**:
<img src="https://p325k7wa.twic.pics/high/jojo/jojo-bizarre-adventure-all-star-battle-r/02-news/JOJOASBR_launchTrailer_thumbnail.jpg?twic=v1/resize=760/step=10/quality=80" alt="Description of image" width="380" height="214" loading="lazy" title="Image Title" />



- `iframe`:
  - **Concept**: Chèn một trang web hoặc tài liệu khác vào trong trang hiện tại.
  - **Attributes**:
    - `src`: Đường dẫn tới trang web hoặc tài liệu cần nhúng.
    - `width`: Chiều rộng của iframe.
    - `height`: Chiều cao của iframe.
    - `allowfullscreen`: Cho phép iframe hiển thị ở chế độ toàn màn hình.

```html
<iframe
  src="https://example.com"
  width="200"
  height="300"
  allowfullscreen
></iframe>
```
**Result**:
<iframe src="https://example.com" width="200" height="300" allowfullscreen></iframe>

## Form Tags
- `form`:
  - **Concept**: Định nghĩa biểu mẫu để gửi dữ liệu.
  - **Attributes**:
    - `action`: URL nơi dữ liệu biểu mẫu sẽ được gửi đến.
    - `method`: Phương thức gửi dữ liệu.
      - **Value**:
        - `GET`: Gửi dữ liệu dưới dạng chuỗi truy vấn URL.
        - `POST`: Gửi dữ liệu dưới dạng payload của yêu cầu HTTP.
    - `enctype`: Kiểu mã hóa dữ liệu khi gửi.
      - **Value**:
        - `application/x-www-form-urlencoded`: Mặc định, gửi dữ liệu dưới dạng URL-encoded.
        - `multipart/form-data`: Sử dụng khi tải lên tệp.
        - `text/plain`: Gửi dữ liệu dưới dạng văn bản thuần.
    - `autocomplete`: Xác định liệu trình duyệt có tự động hoàn thành các trường nhập liệu hay không.
     - **Value**:
        - `on`: Cho phép tự động hoàn thành.
        - `off`: Tắt tự động hoàn thành. 
    - `novalidate`: Vô hiệu hóa kiểm tra tính hợp lệ của dữ liệu khi gửi biểu mẫu.

- `input`:
  - **Concept**: Định nghĩa trường nhập liệu (text, password, checkbox, radio, v.v.).
  - **Attributes**:
    - `type`: Loại trường nhập liệu.
      - **Value**:
        - `text`: Trường nhập văn bản.
        - `password`: Trường nhập mật khẩu.
        - `checkbox`: Hộp kiểm.
        - `radio`: Nút chọn.
        - `email`: Trường nhập địa chỉ email.
        - `number`: Trường nhập số.
        - `file`: Trường tải lên tệp.
    - `name`: Tên của trường nhập liệu, được gửi cùng với dữ liệu biểu mẫu.
    - `value`: Giá trị mặc định của trường nhập liệu.
    - `placeholder`: Văn bản hiển thị bên trong trường trước khi nhập liệu.
    - `required`: Yêu cầu người dùng phải nhập liệu trước khi gửi biểu mẫu.
    - `disabled`: Vô hiệu hóa trường nhập liệu, không cho phép người dùng tương tác.
    - `readonly`: Chỉ cho phép xem, không cho phép chỉnh sửa.
    - `min, max`: Giá trị tối thiểu và tối đa (đối với các loại nhập liệu số).
    - `maxlength`: Số ký tự tối đa được phép nhập.
    - `pattern`: Biểu thức chính quy để kiểm tra tính hợp lệ của dữ liệu nhập.

- `textarea`:
  - **Concept**: Định nghĩa ô nhập liệu nhiều dòng.
  - **Attributes**:
    - `name`: Tên của ô nhập liệu, được gửi cùng với dữ liệu biểu mẫu.
    - `rows`: Số dòng hiển thị mặc định.
    - `cols`: Số cột hiển thị mặc định.
    - `placeholder`: Văn bản hiển thị bên trong ô trước khi nhập liệu.
    - `required`: Yêu cầu người dùng phải nhập liệu trước khi gửi biểu mẫu.
    - `disabled`: Vô hiệu hóa ô nhập liệu, không cho phép người dùng tương tác.
    - `readonly`: Chỉ cho phép xem, không cho phép chỉnh sửa.
    - `maxlength`: Số ký tự tối đa được phép nhập.

- `button`:
  - **Concept**: Định nghĩa một nút bấm.
  - **Attributes**:
    - `type`: Xác định loại nút bấm.
      - **Value**:
        - `submit`: Gửi dữ liệu biểu mẫu.
        - `reset`: Đặt lại các trường nhập liệu về giá trị mặc định.
        - `button`: Một nút bấm tùy chỉnh không liên quan đến biểu mẫu.
    - `disabled`: Vô hiệu hóa nút bấm, không cho phép người dùng nhấn.

- `select`:
  - **Concept**: Định nghĩa danh sách chọn (drop-down list).
  - **Attributes**:
    - `name`: Tên của danh sách chọn, được gửi cùng với dữ liệu biểu mẫu.
    - `multiple`: Cho phép chọn nhiều giá trị.
    - `required`: Yêu cầu người dùng phải chọn ít nhất một giá trị trước khi gửi biểu mẫu.
    - `disabled`: Vô hiệu hóa danh sách chọn, không cho phép người dùng tương tác.
    - `size`: Xác định số lượng tùy chọn hiển thị cùng một lúc.

- `option`:
  - **Concept**: Định nghĩa tùy chọn trong danh sách chọn.
  - **Attributes**:
    - `value`: Giá trị của tùy chọn, được gửi khi người dùng chọn.
    - `selected`: Xác định tùy chọn nào được chọn mặc định.
    - `disabled`: Vô hiệu hóa tùy chọn này, không cho phép người dùng chọn.

- `label`:
  - **Concept**: Định nghĩa nhãn cho các phần tử form.
  - **Attributes**:
    - `for`: ID của phần tử form mà nhãn liên kết đến.

### Form example
```html
<form
  action="/submit"
  method="POST"
  enctype="multipart/form-data"
  autocomplete="on"
  novalidate
>
  <div>
    <label for="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Enter your username"
      required
      autofocus
    />
  </div>

  <div>
    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
      required
      minlength="6"
    />
  </div>

  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" autocomplete="email" required />
  </div>

  <div>
    <label for="gender">Gender:</label>
    <select name="gender" id="gender" required>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>

  <div>
    <label for="bio">Bio:</label>
    <textarea
      id="bio"
      name="bio"
      rows="4"
      cols="50"
      maxlength="500"
      placeholder="Tell us about yourself"
    ></textarea>
  </div>

  <div>
    <label for="file">Upload file:</label>
    <input type="file" id="file" name="file" multiple />
  </div>

  <div>
    <button type="submit">Submit</button>

    <button type="reset">Reset</button>
  </div>
</form>
```

**Result**
<form 
  action="/submit" 
  method="POST" 
  enctype="multipart/form-data" 
  autocomplete="on" 
  novalidate
>
  <div>
    <label for="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Enter your username"
      required
      autofocus
    />
  </div>

  <div>
    <label for="password">Password:</label>
    <input 
      type="password" 
      id="password" 
      name="password" 
      required 
      minlength="6" 
    />
  </div>

  <div>
    <label for="email">Email:</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      autocomplete="email" 
      required 
    />
  </div>

  <div>
    <label for="gender">Gender:</label>
    <select 
      name="gender" 
      id="gender" 
      required
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>

  <div>
    <label for="bio">Bio:</label>
    <textarea 
      id="bio" 
      name="bio" 
      rows="4" 
      cols="50" 
      maxlength="500" 
      placeholder="Tell us about yourself"
    ></textarea>
  </div>

  <div>
    <label for="file">Upload file:</label>
    <input 
      type="file" 
      id="file" 
      name="file" 
      multiple 
    />
  </div>

  <div>
    <button 
      type="submit"
    >
      Submit
    </button>
    
    <button 
      type="reset"
    >
      Reset
    </button>
  </div>
</form>

## Table Tags
- `table`:Định nghĩa một bảng.
- `caption`: Định nghĩa tiêu đề cho bảng.
- `thead`: Định nghĩa phần đầu của bảng.
- `tbody`: Định nghĩa phần thân của bảng.
- `th`: Định nghĩa một ô tiêu đề trong bảng.
- `tr`: Định nghĩa một hàng trong bảng.
- `td`: Định nghĩa một ô dữ liệu trong bảng.
- `tfoot`: Định nghĩa phần chân của bảng.

```html title='example'
<table>
  <caption>
    Danh sách sinh viên
  </caption>
  <thead>
    <tr>
      <th>Mã sinh viên</th>
      <th>Tên</th>
      <th>Ngày sinh</th>
      <th>Lớp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SV001</td>
      <td>Nguyễn Văn A</td>
      <td>01/01/2000</td>
      <td>10A1</td>
    </tr>
    <tr>
      <td>SV002</td>
      <td>Trần Thị B</td>
      <td>02/02/2000</td>
      <td>10A2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Tổng số: 2 sinh viên</td>
    </tr>
  </tfoot>
</table>
```
**Result:**

<table>
  <caption>Danh sách sinh viên</caption>
  <thead>
    <tr>
      <th>Mã sinh viên</th>
      <th>Tên</th>
      <th>Ngày sinh</th>
      <th>Lớp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SV001</td>
      <td>Nguyễn Văn A</td>
      <td>01/01/2000</td>
      <td>10A1</td>
    </tr>
    <tr>
      <td>SV002</td>
      <td>Trần Thị B</td>
      <td>02/02/2000</td>
      <td>10A2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Tổng số: 2 sinh viên</td>
    </tr>
  </tfoot>
</table>

## List Tags

- `ul`: Định nghĩa một danh sách không có thứ tự (unordered list), các mục của nó sẽ không được sắp xếp theo thứ tự mà chỉ được đánh dấu bằng một ký tự đặc trưng.
- `ol`: 
  - **Concept**: Định nghĩa một danh sách có thứ tự (ordered list), mà các mục của nó được sắp xếp theo thứ tự bằng số hoặc chữ cái.
  - **Attribute** 
    - `type`: danh sách được đánh số theo value tương ứng:
      - **Value**: 
        - `1(default)`: số nguyên (1, 2, 3, 4).
        - `a`: bảng chữ cái thường (a, b, c, d).
        - `A`: bảng chữ cái hoa (A, B, C, D).
        - `i`: số La Mã thường (i, ii, iii, iv).
        - `I`: số La Mã hoa (I, II, III, IV).
- `li`: Định nghĩa một mục trong danh sách.

```html title='example'
<!-- ul -->
<ul>
  <li>item</li>
  <li>item</li>
</ul>
<!-- ol -->
<ol type="a">
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ol>
```
**Result:**
<ul>
  <li>item</li>
  <li>item</li>
</ul>
<ol type="a"> 
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ol>

## Script & Resource Tags
- `script`
  - **Concept**: 
    - Chèn mã JavaScript vào tài liệu HTML.
    - Vị trí sử dụng:
      - ``Thẻ head``: Nếu cần tải và thực thi script trước khi hiển thị trang, ví dụ như để cấu hình cài đặt ban đầu.
      - ``Cuối thẻ body``: Nếu muốn đảm bảo rằng toàn bộ nội dung HTML đã tải xong trước khi script được thực thi, nhằm cải thiện hiệu suất tải trang.
  - **Attributes**:
    - `src`: Đường dẫn URL tới tệp JavaScript bên ngoài.
    - `type`: Loại nội dung của tệp script.
      - **Value**:
        - `text/javascript`: Mặc định, chỉ định loại là JavaScript.
    - `async`: Tải và thực thi script bất đồng bộ, không chờ nội dung HTML tải xong. Script sẽ chạy ngay khi tải xong.
    - `defer`: Tải script bất đồng bộ nhưng chỉ thực thi sau khi toàn bộ nội dung HTML đã tải xong, để đảm bảo rằng script không cản trở việc tải trang.
```html title='example'
<script src="app.js" async></script>
```

- `noscript`: 
  - **Concept**: 
    - Hiển thị nội dung thay thế nếu trình duyệt không hỗ trợ hoặc đã tắt JavaScript.
    - Vị trí sử dung: Bên trong thẻ body, nơi nội dung cần được thay thế bởi noscript nếu JavaScript không khả dụng.
- `link`:
  - **Concept**: 
    - Liên kết tới tài nguyên bên ngoài như tệp CSS hoặc favicon.
    - Vị trí sử dụng: Bên trong thẻ head.
  - **Attributes**:
    - `href`: Đường dẫn URL tới tài nguyên.
    - `rel`: Mối quan hệ giữa tài liệu hiện tại và tài nguyên liên kết.
      - **Value**:
        - `stylesheet`: Liên kết tới tệp CSS.
        - `icon`: Liên kết tới favicon.
        - `type`: Loại tài nguyên.
```html title='example'
<link href="styles.css" rel="stylesheet" type="text/css">
```

- `style`
  - **Concept**: 
    - Chèn mã CSS trực tiếp vào tài liệu HTML.
    - Vị trí sử dụng: Bên trong thẻ head để đảm bảo rằng các quy tắc CSS được áp dụng trước khi nội dung HTML được hiển thị.
  - **Attributes**:
    - `type`: Loại nội dung của phần tử (thường là text/css).
```html title='example'
<style>
  body {
    background-color: lightblue;
  }
</style>
```

- `meta`
  - **Concept**: 
    - Cung cấp metadata như charset, viewport, description, và các thông tin khác.
    - Vị trí sử dụng: Bên trong thẻ head.
  - **Attributes**:
    - charset: Định nghĩa bộ ký tự của tài liệu (thường là UTF-8).
    - name: Định nghĩa tên của thông tin meta (như description, keywords).
    - content: Cung cấp nội dung cho thông tin meta.
    - http-equiv: Tương tự như các thuộc tính HTTP header (như refresh, content-type).
```html title='example'
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="A sample website">

```
- `base`
  - **Concept**: 
    - Định nghĩa URL cơ sở cho tất cả các liên kết trên trang.
    - Vị trí sử dụng: Bên trong thẻ head.
  - **Attributes**:
    - href: URL cơ sở cho tất cả các liên kết.
    - target: Xác định nơi mở các liên kết mặc định (như _blank, _self).
```html title='example'
<base href="https://example.com/" target="_blank">
```

- `title`: 
  - **Concept**: 
    - Định nghĩa tiêu đề của trang, được hiển thị trên thanh tiêu đề của trình duyệt hoặc tab.
    - Vị trí sử dụng: Bên trong thẻ head.


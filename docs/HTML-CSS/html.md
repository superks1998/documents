# HTML

## HTML

- HTML là HyperText Markup Language là ngôn ngữ đánh dấu siêu văn bản, được sử dụng để tạo một trang web, trên một website có thể chứa nhiều trang và mỗi trang được quy ra là một tài liệu html.

## Doctype

- Doctype là một lệnh khai báo, dùng để khai báo kiểu của tài liệu HTML

## Tag

### Tag

- thẻ (tag) là một thành phần cơ bản được sử dụng để định dạng và cấu trúc nội dung của một trang web.
### Thành phần Tag
- Mỗi thẻ thường bao gồm một cặp thẻ mở và thẻ đóng, với nội dung nằm giữa hai thẻ này.
  Thẻ mở bắt đầu bằng ký tự < và kết thúc bằng >, và thẻ đóng có cú pháp tương tự nhưng thêm dấu / trước tên thẻ.

### Thuộc tính chung của thẻ
- thuộc tính chung của thẻ là class và id

## Head

- mục đích giúp trình duyệt sẽ tải và áp dụng các quy tắc CSS trước khi hiển thị nội dung của trang web

## meta

- thẻ meta trong HTML được sử dụng để cung cấp metadata về tài liệu HTML.
### attribute charset
- Khai báo cho trình duyệt biết bảng mã ký tự siêu văn bản bên trong tài liệu là gì, thường là UTF-8.

### attribute name
- name đi liền với content
<meta name=""author content="Thach Pham"/>

## form
### method
- Thuộc tính method xác định cách dữ liệu từ biểu mẫu sẽ được gửi đến máy chủ.
### action
- action: địa chỉ của tài nguyên trên máy chủ (thường là một script hoặc một trang xử lý dữ liệu).
- http là bộ giao thức giúp client(trình duyệt) và server giao tiếp với nhau.


## a
### attribute Target
-   _blank	Mở tài liệu liên kết đến windown hoặc tab mới
-   _self	Mở tài liệu được liên kết trong cùng khung với khung được nhấp
-   _parent	Mở tài liệu được liên kết trong khung cha
-   _top	Mở tài liệu được liên kết trong toàn bộ khung của cửa sổ

### attribute href
- Chỉ định url của trang mà liên kết dẫn đến

### gửi mail
- thuộc tính href="mailto:tên_gmail"
- <p><a href="mailto:phuong.caothithu1@gmail.com">Send email</a></p>

## Ordered List

- Kiểu sắp xếp (Ordered List): Là kiểu hiển thị một danh sách mà các mục con của nó được sắp xếp theo thứ tự bằng số hoặc chữ cái. ol li
  <ol type="1">
  <li>item</li>
  <li>item</li>
  <li>item</li>
  </ol>
## Unordered List

  Kiểu không sắp xếp (Unordered List): Là kiểu hiển thị danh sách mà các mục con của nó sẽ không được sắp xếp theo thứ tự mà chỉ được đánh dấu bằng một ký tự đặc trưng. ul li
  <ul>
    <li>item</li>
    <li>item</li>
  </ul>

## Định dạng chữ viết
### 

## img
### attribute img

- Xác định một nội dung văn bản sẽ được hiển thị thay thế khi đường dẫn đến tập tin hình ảnh không chính xác

### attribute src
- Xác định đường dẫn đến tệp hình ảnh mà bạn muốn chèn vào trang web

## Thẻ table
- tr, th định nghĩa tiêu đề cột
- tr, td ô tiếp theo trong hàng

## script
- thẻ script dùng để nhúng javascript

## Question

### Khác nhau giữa Class và id
#### id
- id là duy nhất, mỗi thẻ chỉ có 1 id.
#### class
- thuộc tính class được chỉ định lớp cho một phần tử. Nhiều phần tử html có thể chia sẻ cùng một class.

### Khác nhau giữa div và span
#### div
- thẻ div là thẻ block
#### span
- thẻ span là thẻ inline

### Phân biệt block và inline
#### Block
- Block là thuật ngữ chỉ chung các thẻ HTML có chức năng tạo ra một khối và khối này sẽ hiển thị mở mỗi dòng riêng biệt và trong HTML có một số thẻ block như: thẻ h1, thẻ p, thẻ ul,thẻ table,thẻ div.
#### inline
- Inline là thuật ngữ chỉ chung các thẻ HTML mà khi khai báo vào nội dung thì nó sẽ vẫn nằm chung một dòng với các thẻ khác trong văn bản. Khi muốn gộp các thẻ inline lại với nhau ta dùng thẻ span. Một số thẻ inline như: i, u, span, a, img

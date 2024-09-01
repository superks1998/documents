---
sidebar_position: 1
---

# Main Concept

## HTML
- HTML là HyperText Markup Language là ngôn ngữ đánh dấu siêu văn bản, được sử dụng để tạo một trang web.
- HTML cung cấp cấu trúc và nội dung cho một trang web.
- Trên một website có thể chứa nhiều trang và mỗi trang được quy ra là một tài liệu html.

## HTML Tag
- HTML tag (thẻ HTML) là các đoạn mã dùng để đánh dấu các phần tử trong một tài liệu HTML.
- Mỗi thẻ HTML thường có một thẻ mở \<\> và một thẻ đóng \</\>
```html title='example'
<p>...</p>
```
## HTML Element 
- Element là một đơn vị cấu trúc trong tài liệu HTML, được tạo ra từ các thẻ HTML và nội dung bên trong chúng.

### Block-level Element
- Block-level elements là các phần tử chiếm toàn bộ chiều ngang của trang và bắt đầu trên một dòng mới.
- Một số block-level elements như: thẻ h1, thẻ p, thẻ ul,thẻ table,thẻ div.

### Inline Elements
- Inline Elements là các phần tử chỉ chiếm không gian cần thiết và nằm trên cùng một dòng với các phần tử khác.
- Một số thẻ inline như: i, u, span, a, img

### Void elements
- Void elements (hay còn gọi là self-closing elements) là những phần tử HTML không có nội dung và không cần thẻ đóng.
- Một số void elements có thể được tự đóng lại bằng cách thêm dấu gạch chéo / trước dấu > (như /<br />), nhưng điều này không bắt buộc trong HTML5.
- Các void elements phổ biển: img, br, hr, meta, link,...

## HTML Attribute
- Các thuộc tính cung cấp thêm thông tin cho các thẻ HTML.
- Attribute được viết trong thẻ mở.
```html title='example'
<img src="image.jpg" alt="Description">
```
### Attribute common
HTML tag có các thuộc tính chung mà nhiều thẻ sử dụng:
#### id
- Dùng để định danh duy nhất cho một HTML element trên 1 page HTML.
#### class
- Dùng để phân nhóm các HTML element có cùng kiểu dáng(style) hoặc hành vi(behavior), giúp áp dụng CSS hoặc JavaScript dễ dàng hơn.
#### style
- Cho phép thêm kiểu CSS trực tiếp vào một phần tử HTML.
```html title='example'
<p style="color: blue; font-size: 14px;">This is styled text.</p>
```
#### src
- Được dùng trong các thẻ như img, script, iframe để chỉ định nguồn của hình ảnh, tệp JavaScript, hoặc tài liệu khác.


## HTML Semantic
#### Concept
- Semantic HTML là khái niệm đề cập đến việc sử dụng các thẻ HTML có ý nghĩa rõ ràng và đặc trưng về mặt ngữ nghĩa để mô tả nội dung của trang web.
- Thay vì chỉ sử dụng các thẻ chung như div hay span, Semantic HTML khuyến khích sử dụng các thẻ chuyên biệt như header, footer, article, nav, v.v để cấu trúc và xác định từng phần của trang web theo đúng chức năng và nội dung của chúng.
#### Characteristics
- Tầm quan trọng của Semantic HTML:
  + Truy cập (Accessibility): Semantic HTML giúp các thiết bị hỗ trợ (như trình đọc màn hình) hiểu rõ hơn về cấu trúc và nội dung của trang, từ đó cung cấp trải nghiệm tốt hơn cho người dùng khuyết tật.
  + SEO (Search Engine Optimization): Các công cụ tìm kiếm như Google sử dụng ngữ nghĩa để hiểu nội dung của trang web, từ đó cải thiện khả năng tìm thấy và xếp hạng của trang trên kết quả tìm kiếm.
  + Bảo trì và Phát triển: Sử dụng Semantic HTML giúp mã nguồn trở nên dễ đọc, dễ hiểu và dễ bảo trì hơn. Khi các phần tử có tên gọi rõ ràng và ngữ nghĩa, việc phát triển và cập nhật trang web sẽ trở nên hiệu quả hơn.
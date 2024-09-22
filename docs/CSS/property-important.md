---
sidebar_position: 2
---

# Property Important

## Layout Properties

- `display`
  - **Concept**: Xác định kiểu hiển thị của phần tử.
  - **Values**:
    - `block`: Phần tử sẽ chiếm toàn bộ chiều rộng của phần tử chứa và bắt đầu trên một dòng mới.
    - `inline`: Phần tử chỉ chiếm chiều rộng cần thiết và không bắt đầu trên một dòng mới.
    - `inline-block`: Kết hợp giữa `inline` và `block`. Phần tử có thể đặt các thuộc tính kích thước như `width` và `height`, nhưng không bắt đầu trên một dòng mới.
    - `flex`: Chuyển phần tử thành một container flex, cho phép sử dụng các thuộc tính flexbox.
    - `grid`: Chuyển phần tử thành một container grid, cho phép sử dụng các thuộc tính grid.
    - `none`: Ẩn phần tử, không chiếm không gian trên trang.

    ![CSS display](/img/css-display.jpg)

- `position`
  - **Concept**: Xác định cách phần tử được định vị trên trang.
  - **Values**:
    - `static`: Giá trị mặc định. Phần tử được định vị theo luồng tài liệu bình thường.
    - `relative`: Phần tử được định vị theo vị trí bình thường của nó, nhưng có thể di chuyển bằng cách sử dụng các thuộc tính `top`, `right`, `bottom`, `left`.
    - `absolute`:Phần tử được định vị dựa trên phần tử cha gần nhất có thuộc tính `position` khác `static`.
    - `fixed`: Phần tử được định vị so với cửa sổ trình duyệt và không di chuyển khi cuộn trang.
    - `sticky`: Phần tử hoạt động giống như `relative` khi ở trong phạm vi của phần tử chứa và giống như `fixed` khi cuộn qua một điểm xác định.

    ![CSS position](/img/css-position.jpg)

- `float`
  - **Concept**: Đẩy phần tử sang trái hoặc phải trong vùng chứa, cho phép các phần tử khác nổi xung quanh.
  - **Values**:
    - `left`: Đẩy phần tử sang bên trái.
    - `right`: Đẩy phần tử sang bên phải.
    - `none`: Không áp dụng float.
    - `inherit`: Kế thừa giá trị từ phần tử cha.


```html title='example'
<div style="float: left; width: 100px; height: 100px; background: lightcoral;">
  Float Left
</div>
<div style="float: right; width: 100px; height: 100px; background: lightseagreen;">
  Float Right
</div>
<p>
  This paragraph will wrap around the floated elements. 
  The text will first wrap around the left-floated element, leaving space to the right of it. 
  After the right-floated element starts, the text will wrap around it as well. 
  As both floated elements have a width of 100px, the remaining space will be filled by the paragraph text.
</p>
```
  
<div style={{
          float: "left",
          width: "100px",
          height: "100px",
          background: "lightcoral",
        }}>
  Float Left
</div>
<div  style={{
          float: "right",
          width: "100px",
          height: "100px",
          background: "lightseagreen",
        }}>
  Float Right
</div>
<p>
  This paragraph will wrap around the floated elements. 
  The text will first wrap around the left-floated element, leaving space to the right of it. 
  After the right-floated element starts, the text will wrap around it as well. 
  As both floated elements have a width of 100px, the remaining space will be filled by the paragraph text.
</p>

- `clear`
  - **Concept**: Xác định vị trí của phần tử với các phần tử nổi trước đó.
  - **Values**:
    - `none`: Không áp dụng clear.
    - `left`: Xóa các phần tử nổi bên trái.
    - `right`: Xóa các phần tử nổi bên phải.
    - `both`: Xóa các phần tử nổi ở cả hai bên.
    - `inherit`: Kế thừa giá trị từ phần tử cha.

```html title='example'
<div style="float: left; width: 100px; height: 100px; background: lightcoral;">Float Left</div>
<div style="float: right; width: 100px; height: 100px; background: lightseagreen;">Float Right</div>
<div style="clear: both; background: lightgrey;">Cleared Element</div>
```
**Result**:
  <div   
    style={{
      float: "left",
      width: "100px",
      height: "100px",
      background: "lightcoral",
      }}>
    Float Left
  </div>
  <div  
    style={{
      float: "right",
      width: "100px",
      height: "100px",
      background: "lightseagreen",
    }}>
    Float Right
  </div>
  <p>
    This paragraph will wrap around the floated elements. 
    The text will first wrap around the left-floated element, leaving space to the right of it. 
    After the right-floated element starts, the text will wrap around it as well. 
    As both floated elements have a width of 100px, the remaining space will be filled by the paragraph text.
  </p>
  <div 
    style={{
      clear: "both",
      background: "lightgrey",
      padding: "10px",}}>
      Cleared Element
  </div>
  <div 
    style={{
      clear: "left",
      background: "green",
      padding: "10px",}}>
      Cleared Element
  </div>

**Explanation**: `both`: Phần tử `div` với `clear: both` sẽ nằm dưới các phần tử nổi, không bị ảnh hưởng bởi chúng.

- `overflow`
  - **Concept**: Xác định cách nội dung bị tràn ra ngoài phần tử chứa.
  - **Values**:
    - `visible`: Nội dung tràn ra ngoài phần tử và không bị cắt bớt.
    - `hidden`: Nội dung tràn ra ngoài phần tử bị cắt bớt và không thể cuộn.
    - `scroll`: Thêm thanh cuộn nếu nội dung vượt quá kích thước phần tử.
    - `auto`: Thêm thanh cuộn nếu cần, tùy thuộc vào kích thước nội dung.

   ![CSS overflow](/img/css-overflow.avif)

- `z-index`
  - **Concept**: Xác định độ ưu tiên của phần tử khi phần tử bị chồng lên nhau.
  - **Values**:
    - `auto`: Giá trị mặc định, không có ảnh hưởng đến độ ưu tiên.
    - `integer`: Một số nguyên để xác định độ ưu tiên của phần tử. Phần tử với giá trị cao hơn sẽ được hiển thị trên phần tử có giá trị thấp hơn.

    ![CSS z-index](/img/css-z-index.png)


## Box model Properties

- `margin`:
  - **Concept**: Định nghĩa khoảng cách giữa phần tử và phần tử khác, hoặc các cạnh của trình duyệt.
  - **Sub-properties**:
    - `margin-top`: Khoảng cách từ phần tử đến phía trên.
    - `margin-right`: Khoảng cách từ phần tử đến phía bên phải.
    - `margin-bottom`: Khoảng cách từ phần tử đến phía dưới.
    - `margin-left`: Khoảng cách từ phần tử đến phía bên trái.
  - **Shorthand**:
    - `margin`: top right bottom left;
      - VD: `margin: 10px 15px 20px 25px;` sẽ tương ứng `margin-top: 10px; margin-right: 15px; margin-bottom: 20px; margin-left: 25px;.`
    - `margin`: vertical horizontal;
      - VD: `margin: 10px 20px;` tương ứng `margin-top: 10px; margin-bottom: 10px; margin-left: 20px; margin-right: 20px;.`
    - `margin`: all sides;
      - VD: `margin: 10px;` tương ứng `margin-top, margin-right, margin-bottom, margin-left đều bằng 10px.`

    ![CSS Margin](/img/css-margin.svg)
      
  - **Values**:
    - `px`: Đơn vị pixel 
      - VD: `margin: 20px` sẽ tạo ra khoảng cách 20px từ phần tử này đến phần tử khác.
    - `%`: Khoảng cách tính theo phần trăm dựa trên kích thước của phần tử cha 
      - VD: `margin: 5%` sẽ tạo khoảng cách bằng 5% chiều rộng của phần tử cha.
    - `em`: Đơn vị dựa trên kích thước font hiện tại của phần tử.
      VD: `margin: 2em` sẽ bằng 2 lần kích thước font của phần tử đó.
    - `auto`: Tự động tính toán khoảng cách dựa trên bối cảnh.
      - VD: `margin: 0 auto` dùng để căn giữa phần tử theo chiều ngang.

- `padding`:
  - **Concept**: Định nghĩa khoảng cách giữa nội dung của phần tử và đường viền của nó.
  - **Sub-properties**:
    - `padding-top`: Khoảng cách giữa nội dung và phía trên.
    - `padding-right`: Khoảng cách giữa nội dung và phía bên phải.
    - `padding-bottom`: Khoảng cách giữa nội dung và phía dưới.
    - `padding-left`: Khoảng cách giữa nội dung và phía bên trái.
  - **Shorthand**:
    - `padding`: top right bottom left;
      - VD: `padding: 10px 15px 20px 25px;`
    - `padding`: vertical horizontal;
      - VD: `padding: 10px 20px;`
    - `padding`: all sides;
      - VD: `padding: 10px;`
  - **Values**:
    - `px`: Đơn vị pixel 
      - VD: `padding: 10px` tạo ra khoảng cách 10px từ nội dung đến đường viền.
    - `%`: Khoảng cách tính theo phần trăm của chiều rộng phần tử 
      - VD: `padding: 5%` sẽ thêm khoảng cách bằng 5% chiều rộng phần tử.
    - `em`: Đơn vị dựa trên kích thước font hiện tại của phần tử.
      - VD: `padding: 1.5em` sẽ bằng 1.5 lần kích thước font của phần tử đó.

      ![CSS Padding](/img/css-padding.webp)

- `border`:
  - **Concept**: Tạo đường viền cho phần tử, có thể tùy chỉnh độ dày, kiểu và màu sắc.
  - **Sub-properties**:
    - `border-top`: Áp dụng đường viền cho phía trên.
    - `border-right`: Áp dụng cho bên phải.
    - `border-bottom`: Áp dụng cho phía dưới.
    - `border-left`: Áp dụng cho bên trái.
  - **Values**:
    - `border-width`: Độ dày đường viền (VD: 1px, 2px).
    - `border-style`: Kiểu đường viền như solid, dashed, dotted.
    - `border-color`: Màu sắc của đường viền, có thể là tên màu, mã hex (VD: red, #ff0000).
  - **Shorthand**:
    - `border`: width style color;
      - Ví dụ: `border`: 2px solid red; sẽ tương ứng với:` border-width: 2px`; `border-style: solid ``border-color: red`;

      
    ![CSS Border Styles](/img/css-border-styles.jpg)

- `border-radius`:
  - **Concept**: Định nghĩa độ bo tròn của các góc phần tử.
  - **Sub-properties**:
    - `border-top-left-radius`: Bo tròn góc trên-trái.
    - `border-top-right-radius`: Bo tròn góc trên-phải.
    - `border-bottom-left-radius`: Bo tròn góc dưới-trái.
    - `border-bottom-right-radius`: Bo tròn góc dưới-phải.
    - `border-radius`: **Shorthand** để thiết lập độ bo tròn cho tất cả các góc.
  - **Values**: `px`, `em`,`%` (VD: 50% cho hình tròn).

    ![CSS Border Radius](/img/css-border-radius.png)

- `box-sizing`:
  - **Concept**: Xác định cách tính toán kích thước của phần tử bao gồm hay không bao gồm padding và border.
  - **Values**:
    - `content-box`: Kích thước phần tử chỉ bao gồm nội dung (mặc định).
    - `border-box`: Kích thước phần tử bao gồm nội dung, padding và border.
    - `inherit`: Kế thừa thuộc tính này từ phần tử cha của nó.

      
    ![CSS Box-sizing](/img/css-box-sizing.png)

- `width & height`:
  - **Concept**: Định nghĩa chiều rộng và chiều cao của phần tử.
  - **Sub-properties**:
    - `min-width`: Chiều rộng tối thiểu mà phần tử có thể có.
    - `max-width`: Chiều rộng tối đa của phần tử.
    - `min-height`: Chiều cao tối thiểu của phần tử.
    - `max-height`: Chiều cao tối đa của phần tử.
    - `width`: Chiều rộng của phần tử.
    - `height`: Chiều cao của phần tử.
  - **Values**:
    - `px`: Xác định chiều rộng hoặc chiều cao chính xác bằng pixel.
    - `%`: Tính theo phần trăm chiều rộng hoặc chiều cao của phần tử cha.
    - `em`: Tính theo đơn vị font chữ của phần tử.
    - `vh` và `vw`: Đơn vị phụ thuộc vào kích thước cửa sổ trình duyệt.

## Typography Properties
- `font-family`:
  - Concept: Định nghĩa loại font chữ sử dụng.
  - Values: Ví dụ: "Arial", sans-serif.
- `font-size`:
  - Concept: Xác định kích thước của văn bản.
  - Values: px, em, rem, %.
- `font-weight`:
  - Concept: Xác định độ dày của chữ.
  - Values:
    - `normal`: Độ dày bình thường.
    - `bold`: Chữ in đậm.
    - `Giá trị số` (100 đến 900): Độ dày cụ thể.
- `text-align`:
  - Concept: Canh chỉnh văn bản theo các hướng.
  - Values:
    - `left`: Canh trái.
    - `center`: Canh giữa.
    - `right`: Canh phải.


## Color Properties
- `color`:
  - Concept: Màu chữ của phần tử.
  - Values: red, #ff0000, rgb(255, 0, 0)...
- `background-color`:
  - Concept: Màu nền của phần tử.
  - Values: red, #ff0000, rgba(255, 0, 0, 0.5)...
- `opacity`:
  - Concept: Xác định độ trong suốt của phần tử.
  - Values: Từ 0 (trong suốt hoàn toàn) đến 1 (hoàn toàn không trong suốt).

## Background Properties
- `background-image`:
  - Concept: Đặt hình ảnh nền cho phần tử.
  - Values: URL của hình ảnh (url('image.jpg')), hoặc none để không sử dụng hình nền.
- `background-size`:
  - Concept: Xác định kích thước của hình ảnh nền.
  - Values:
    - cover: Hình nền phủ toàn bộ phần tử.
    - contain: Hình nền vừa khít trong phần tử mà không bị cắt.
- `background-position`:
  - Concept: Xác định vị trí của hình nền trong phần tử.
  - Values: top, bottom, left, right, center.
- `background-repeat`:
  - Concept: Xác định xem hình nền có lặp lại hay không.
  - Values:
    - `repeat`: Lặp lại hình nền theo cả hai chiều.
    - `no-repeat`: Không lặp lại hình nền.
    - `repeat-x`: Lặp lại theo chiều ngang.
    - `repeat-y`: Lặp lại theo chiều dọc.


## Animation & Transition Properties
- `animation`:
  - Concept: Định nghĩa các hiệu ứng hoạt hình cho phần tử.
  - Values:
    - `animation-name`: Tên của hoạt ảnh.
    - `animation-duration`: Thời gian hoạt ảnh kéo dài.
    - `animation-timing-function`: Kiểm soát cách hoạt ảnh thay đổi theo thời gian.
- `transition`:
  - Concept: Tạo hiệu ứng chuyển đổi mượt mà giữa các trạng thái của phần tử.
  - Values:
    - `transition-property`: Thuộc tính sẽ có hiệu ứng chuyển đổi.
    - `transition-duration`: Thời gian chuyển đổi.
    - `transition-timing-function`: Kiểm soát tốc độ chuyển đổi.

List Properties
list-style-type:

Concept: Xác định kiểu dấu đầu dòng cho danh sách.
Values:
disc: Hình tròn đặc (mặc định).
circle: Hình tròn rỗng.
square: Hình vuông.
none: Không có dấu đầu dòng.
list-style-position:

Concept: Xác định vị trí của dấu đầu dòng so với văn bản.
Values:
inside: Dấu đầu dòng nằm bên trong phần tử danh sách.
outside: Dấu đầu dòng nằm bên ngoài phần tử danh sách.
Table Properties
border-collapse:

Concept: Điều khiển xem các đường viền bảng có bị gộp lại hay không.
Values:
collapse: Gộp các đường viền của các ô liền kề.
separate: Để các đường viền của các ô tách biệt.
table-layout:

Concept: Xác định cách bảng điều chỉnh kích thước của các ô.
Values:
auto: Tự động điều chỉnh dựa trên nội dung.
fixed: Đặt kích thước của cột dựa trên chiều rộng bảng.
Cursor Properties
cursor:
Concept: Xác định kiểu con trỏ khi di chuột qua phần tử.
Values:
pointer: Con trỏ chỉ tay (thường dùng khi hover qua liên kết).
default: Con trỏ mặc định.
move: Con trỏ di chuyển.
text: Con trỏ văn bản (dùng khi di chuột qua văn bản có thể chọn).
Filter Properties
filter:
Concept: Áp dụng các hiệu ứng đồ họa như mờ, độ sáng, độ tương phản cho phần tử.
Values:
blur(px): Làm mờ phần tử.
brightness(%): Điều chỉnh độ sáng.
contrast(%): Điều chỉnh độ tương phản.
grayscale(%): Chuyển phần tử sang thang độ xám.
Transform Properties
transform:

Concept: Xoay, kéo giãn, hoặc dịch chuyển phần tử.
Values:
rotate(deg): Xoay phần tử.
scale(x, y): Kéo giãn phần tử theo chiều ngang và dọc.
translate(x, y): Dịch chuyển phần tử theo các trục x và y.
transform-origin:

Concept: Xác định điểm gốc mà phần tử xoay hoặc kéo giãn.
Values: center, top, bottom, left, right.
Transition & Animation Properties (Chi tiết hơn)
transition-property:

Concept: Xác định thuộc tính nào của phần tử sẽ có hiệu ứng chuyển đổi.
Values: Ví dụ: width, height, background-color.
transition-duration:

Concept: Đặt thời gian hiệu ứng chuyển đổi.
Values: 1s, 500ms.
animation-name:

Concept: Đặt tên cho hoạt ảnh.
Values: Tên hoạt ảnh được định nghĩa bằng @keyframes.
animation-duration:

Concept: Thời gian chạy của hoạt ảnh.
Values: 2s, 3s, 500ms.
Column Properties
column-count:

Concept: Chia nội dung của phần tử thành nhiều cột.
Values: Số nguyên, ví dụ: 2, 3.
column-gap:

Concept: Xác định khoảng cách giữa các cột.
Values: Đơn vị đo như 10px, 1rem.
column-width:

Concept: Đặt chiều rộng cho mỗi cột.
Values: Đơn vị đo như 100px, 20em.


CSS visibility
Concept:
visibility là thuộc tính trong CSS xác định liệu một phần tử có hiển thị trên trang web hay không. Tuy nhiên, khác với display: none, phần tử vẫn giữ không gian chiếm đóng của nó trong tài liệu.

Values:
visible:

Mô tả: Phần tử được hiển thị bình thường trên trang.
Ví dụ:
css
Copy code
visibility: visible;
Giải thích: Đây là giá trị mặc định của visibility. Phần tử vẫn hiển thị và chiếm không gian trong bố cục.
hidden:

Mô tả: Phần tử không hiển thị nhưng vẫn chiếm không gian trong bố cục.
Ví dụ:
css
Copy code
visibility: hidden;
Giải thích: Phần tử sẽ bị ẩn, không xuất hiện trên giao diện nhưng vẫn giữ chỗ trong tài liệu. Các phần tử khác không bị thay đổi vị trí.
collapse (chỉ áp dụng với các phần tử trong bảng):

Mô tả: Giống như hidden, nhưng dành cho các hàng hoặc cột trong bảng (table), và phần tử sẽ không chiếm không gian.
Ví dụ:
css
Copy code
visibility: collapse;
Giải thích: Với các hàng và cột trong bảng, collapse sẽ xóa bỏ hoàn toàn không gian mà chúng chiếm, khác với hidden.
inherit:

Mô tả: Giá trị được kế thừa từ phần tử cha.
Ví dụ:
css
Copy code
visibility: inherit;
Giải thích: Phần tử sẽ kế thừa giá trị visibility từ phần tử cha của nó.


So sánh visibility: hidden với display: none:
visibility: hidden: Phần tử bị ẩn nhưng vẫn giữ không gian trong bố cục.
display: none: Phần tử bị ẩn và không chiếm bất kỳ không gian nào trên trang, các phần tử khác sẽ di chuyển để lấp chỗ trống.
Use Cases:
visibility: hidden: Thường dùng khi bạn muốn ẩn phần tử tạm thời mà không thay đổi bố cục trang.
display: none: Dùng khi muốn loại bỏ hoàn toàn phần tử khỏi giao diện và bố cục.







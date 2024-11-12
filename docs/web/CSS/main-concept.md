---
sidebar_position: 1
---

# Main Concept

## CSS

- **Concept**:
  - CSS (Cascading Style Sheets) là ngôn ngữ dùng để định kiểu cho tài liệu HTML.
  - CSS giúp tách biệt nội dung và giao diện của trang web, dễ dàng điều chỉnh giao diện mà không cần thay đổi HTML.
  - CSS được sử dụng để quy định màu sắc, bố cục, font chữ, và các yếu tố thiết kế khác cho trang web.

## How to

- Có 3 cách để sử dụng CSS trong website:
  - `Inline CSS`: Áp dụng trực tiếp lên phần tử HTML bằng thuộc tính `style`.
    - **Pros and Cons**: Nhanh chóng áp dụng các thay đổi nhỏ nhưng khó bảo trì khi có nhiều phần tử cần định kiểu.
  - `Internal CSS`: Đặt trong thẻ style bên trong thẻ head của tài liệu HTML.
    - **Pros and Cons**: Dễ quản lý trong một trang đơn lẻ nhưng không tối ưu cho nhiều trang.
  - `External CSS`: Sử dụng tệp CSS riêng biệt và liên kết với tài liệu HTML bằng thẻ link bên trong thẻ head.
    - **Pros and Cons**: Tốt nhất để quản lý và tái sử dụng, phù hợp cho các dự án lớn.

## CSS Syntax

- **Selector (Bộ Chọn):** Chọn phần tử HTML để áp dụng các kiểu.
- **Declaration Block (Khối Khai Báo):** Được bao trong `{}`, chứa các thuộc tính và giá trị để định kiểu cho phần tử.

![CSS Syntax](/img/css/css-syntax.jpg)

## CSS Selector

- **Concept**:
  - `CSS Selector` là một phần của cú pháp CSS được sử dụng để "chọn" các phần tử HTML mà bạn muốn áp dụng kiểu dáng (styles).
  - Selector giúp xác định những phần tử nào trong tài liệu HTML sẽ được áp dụng quy tắc CSS tương ứng.
- **Types of Selectors:**
  - `Universal Selector`():
    - **Concept**: Chọn tất cả các phần tử trên trang.
    - **Syntax**: Ký hiệu bằng dấu `*`.
      - `VD`: \* \{ css }
  - `Type Selector (Element Selector)`:
    - **Concept**: Chọn tất cả các phần tử HTML thuộc một loại nhất định.
    - **Syntax**: Sử dụng tên thẻ HTML để áp dụng quy tắc CSS.
      - `VD`: a \{ css }, p \{ css }, h \{ css }
  - `Class Selector`:
    - **Concept**: Chọn các phần tử HTML dựa trên giá trị của thuộc tính class của thẻ HTML.
    - **Syntax**: Bắt đầu bằng dấu chấm `.` + `tên class`.
      - `VD`: .container \{ css }
  - `ID Selector`:
    - **Concept**: Chọn phần tử HTML có thuộc tính `id` cụ thể.
    - **Syntax**: Bắt đầu bằng dấu `#`+ `tên ID`.
      - `VD`: #main-header \{ css }
  - `Attribute Selector`:
    - **Concept**: Chọn phần tử HTML dựa trên thuộc tính(attribute) và giá trị(optional) của thuộc tính đó.
    - **Syntax**:
      - `[attribute]`: Chọn phần tử HTML có thuộc tính bất kể giá trị.
      - `[attribute="value"]`: Chọn phần tử HTML có thuộc tính với giá trị chính xác.
      - `[attribute~="value"]`: Chọn phần tử HTML có thuộc tính chứa giá trị trong một danh sách giá trị phân tách bằng dấu cách.
      - `[attribute^="value"]`: Chọn phần tử HTML có giá trị thuộc tính bắt đầu bằng một giá trị cụ thể.
      - `[attribute$="value"]`: Chọn phần tử HTML có giá trị thuộc tính kết thúc bằng một giá trị cụ thể.
      - `[attribute*="value"]`: Chọn phần tử HTML có giá trị thuộc tính chứa giá trị cụ thể ở bất kỳ đâu.
        - `VD`: a[target] \{ css }, a[target="_blank"] \{ css }
    - `Group Selector`:
      - **Concept**: Chọn nhiều phần tử HTML cùng lúc bằng cách nhóm các selector lại với nhau.
      - **Syntax**: Sử dụng dấu phẩy, giữa các selector.
        - `VD`: h1, h2, h3 \{ css }
    - `Pseudo-Class Selector`:
      - **Concept**: Chọn phần tử HTML dựa trên trạng thái đặc biệt của phần tử (ví dụ: khi hover chuột hoặc khi phần tử là con đầu tiên).
      - **Syntax**: Sử dụng dấu hai chấm `:` trước tên của pseudo-class.
        - `VD`: a:hover \{ css }, input:focus \{ css }
      - **Common Pseudo-Classes**:
        - `:hover`: Kích hoạt khi người dùng di chuột (hover) vào phần tử.
          - **Áp dụng cho**: Hầu hết các phần tử có thể tương tác như `a`, `button`, `div`, `span`.
          - `VD`: a:hover \{ css }
            - **Explanation**: Khi người dùng di chuột qua liên kết a sẽ áp dụng CSS.
        - `:focus`: Áp dụng khi phần tử nhận được sự tập trung (focus) từ người dùng.
          - **Áp dụng cho**: Các phần tử có thể nhận input như `input`, `textarea`, `button`, `select`, `a`.
          - `VD`: input:focus \{ css }
            - **Explanation**: Khi phần tử input nhận focus (ví dụ: khi người dùng nhấp vào để nhập dữ liệu) sẽ áp dụng CSS.
        - `:focus`: Áp dụng khi phần tử nhận được sự tập trung (focus) từ người dùng.
          - **Áp dụng cho**: Các phần tử có thể nhận input như `input`, `textarea`, `button`, `select`, `a`.
          - `VD`: input:focus \{ css }
            - **Explanation**: Khi phần tử input nhận focus (ví dụ: khi người dùng nhấp vào để nhập dữ liệu) sẽ áp dụng CSS.
    - `Pseudo-Element Selector`:
      - **Concept**: Chọn một phần của phần tử HTML, chẳng hạn như chữ cái đầu tiên hoặc nội dung trước/ sau phần tử.
      - **Syntax**: Sử dụng dấu hai chấm `::` trước tên của pseudo-element.
        - `VD`: p::first-letter \{ css }, div::after \{ css }
          - **Explanation**: chọn chữ cái đầu tiên của đoạn văn p và và chọn vào nội dung sau của thẻ div.

## CSS Combinators

- **Concept**:
  - CSS Combinators là khái niệm bộ chọn kết hợp của CSS, kết hợp các selector để chọn phần tử dựa trên mối quan hệ giữa các phần tử.
- **Types of Combinators**:
  - `Descendant Combinator` (Kết hợp phân cấp):
    - **Concept**: Chọn tất cả các phần tử con của phần tử tổ tiên.
    - **Syntax**: Ký hiệu bằng khoảng trắng `space` giữa hai selector.
      - VD: div p \{ css }

        ![CSS combinators](/img/css/css-combinators3.png)
        - **Explanation**: Chọn tất cả các thẻ p nằm bên trong bất kỳ thẻ div nào, không quan trọng bao nhiêu cấp độ lồng nhau.


  - `Child Combinator` (Kết hợp con trực tiếp):
    - **Concept**: Chọn tất cả các phần tử là con trực tiếp của phần tử cha.
    - **Syntax**: Ký hiệu bằng dấu `>` giữa hai selector.
      - VD: div > p \{ css }

        ![CSS combinators](/img/css/css-combinators2.png)
        - **Explanation**: Chọn tất cả các thẻ p là con trực tiếp của thẻ div, không bao gồm các phần tử con lồng sâu hơn.


    - `Adjacent Sibling Combinator` (Kết hợp anh em liền kề):
      - **Concept**: Chọn phần tử ngay sau một phần tử khác, là anh em trực tiếp của nó.
      - **Syntax**: Ký hiệu bằng dấu `+` giữa hai selector.
        - VD: p + p \{ css }

        ![CSS combinators](/img/css/css-combinators1.png)

          - **Explanation**: Chọn thẻ p đầu tiên ngay sau thẻ p và áp dụng quy tắc CSS cho nó.


    - `General Sibling Combinator` (Kết hợp anh em tổng quát):
      - **Concept**: Chọn tất cả các phần tử anh em của một phần tử khác, không nhất thiết phải liền kề.
      - **Syntax**: Ký hiệu bằng dấu `~` giữa hai selector.
        - VD: h1 ~ p \{ css }

        ![CSS combinators](/img/css/css-combinators.png)

          - **Explanation**: Chọn tất cả các thẻ p là anh em (cùng cấp) với thẻ h1 và áp dụng quy tắc CSS cho chúng.

## CSS Unit

- `Absolute Units`:
  - **Concept**: Absolute Units(đơn vị tuyệt đối) xác định kích thước cụ thể, không phụ thuộc vào môi trường xung quanh.
  - **Các đơn vị phổ biến**:
    - `px (pixels)`: 1 đơn vị điểm ảnh (pixel) trên màn hình.
    - `cm (centimeters)`: 1 đơn vị là 1 cm.
    - `mm (millimeters)`: 1 đơn vị là 1 mm.
- `Relative Units`:

  - **Concept**: Relative Units(đơn vị tương đối) dựa trên các yếu tố khác (như kích thước font chữ hoặc viewport).
  - **Các đơn vị phổ biến**:

    - `em`:

      - **Concept**:
        - `em` là một đơn vị tương đối dựa trên kích thước font của phần tử cha gần nhất.
        - Có thể bị lồng và ảnh hưởng bởi các phần tử cha.
      - **Ưu điểm**: Linh hoạt trong các thiết kế phụ thuộc vào cha.
      - **Nhược điểm**: Có thể dẫn đến hiện tượng kích thước phóng đại.

        - VD về nhược điểm của `em`:

          ```css
          .parent {
            font-size: 20px;
          }
          /* Cha có font-size là 20px */

          .child {
            font-size: 1.5em;
          }
          /* Con có font-size là 1.5 lần cha (20px * 1.5 = 30px) */

          .grandchild {
            font-size: 2em;
          }
          /* Cháu có font-size là 2 lần của cha (30px * 2 = 60px) */
          ```

    - `rem`:
      - **Concept**:
        - `rem` là một đơn vị tương đối dựa trên kích thước font của phần tử gốc(thẻ html).
      - **Ưu điểm**: Ổn định và dễ dự đoán trong toàn bộ tài liệu, không bị lồng như `em`.
      - **Nhược điểm**: Không linh hoạt như em khi muốn thay đổi theo cha.
    - `%`: Dựa trên kích thước của phần tử cha.
    - `vw`: 1 đơn vị bằng 1% chiều rộng của viewport (khung nhìn).
    - `vh`: 1 đơn vị bằng 1% chiều cao của viewport.

- `Time Units`:
  - **Concept**: Time Units(đơn vị đo thời gian) trong CSS thường được dùng cho các hiệu ứng(animation).
  - **Các đơn vị phổ biến**:
    - `s`: Giây.
    - `ms`: Mili giây (1 giây = 1000 mili giây).
- `Angle Units`:
  - **Concept**: Angle Units(đơn vị đo góc) thường được sử dụng cho các thuộc tính xoay góc(transform).
  - **Các đơn vị phổ biến**:
    - `deg`: Độ (360 độ là một vòng tròn hoàn chỉnh).

## CSS Cascade

- **Concept**:
  - CSS cho phép nhiều style được áp dụng cho một phần tử.
  - Cascade (thác đổ) là một cơ chế mà trình duyệt sử dụng để quyết định CSS nào sẽ được áp dụng khi có nhiều quy tắc xung đột với nhau, dựa trên thứ tự và mức độ ưu tiên của các quy tắc.
- **Origin**:
  - `Có 3 loại`:
    - **Author styles**: Kiểu do developer định nghĩa (Ưu tiên cao nhất).
    - **User styles**: Kiểu do người dùng định nghĩa (VD: tùy chỉnh trực tiếp trên trình duyệt).
    - **User Agent Stylesheets (Trình duyệt)**: Kiểu mặc định của trình duyệt (Ưu tiên thấp nhất).
- **Specificity**:

  - `Thứ tự tính điểm`:

    - **Inline styles**: Có độ ưu tiên cao nhất (1000 điểm).
    - **ID selectors**: 100 điểm VD: (Ví dụ: #id).
    - **Class selectors, pseudo-class, attribute selectors**: 10 điểm (VD: .class, :hover, [type="text"]).
    - **Element selectors, pseudo-elements**: 1 điểm (VD: p, div, ::before).

    ```css title='example'
    p {
      color: blue; /* 1 điểm */
    }

    .text {
      color: green; /* 10 điểm */
    }

    #unique {
      color: red; /* 100 điểm */
    }

    <p id="unique" class="text">Hello World!</p> /* 1000 điểm */
    ```

- **!important**:

  - Quy tắc có `!important` sẽ ghi đè tất cả các quy tắc khác, bất kể độ ưu tiên.

  ```css title='example'
  p {
    color: blue !important; /* Ưu tiên cao nhất */
  }

  .text {
    color: green;
  }

  #unique {
    color: red;
  }

  <p id="unique" class="text">Hello World!</p>
  ```

- **Thứ tự Cascade**:
  - Khi nhiều quy tắc cùng áp dụng cho một phần tử, trình duyệt sẽ quyết định theo thứ tự sau:
    - **Importance**: Quy tắc có !important sẽ được ưu tiên.
    - **Specificity**: Quy tắc có độ ưu tiên cao hơn sẽ được chọn.
    - **Source order**: Nếu mọi yếu tố khác bằng nhau, quy tắc xuất hiện sau cùng trong CSS sẽ được áp dụng.

![CSS specific](/img/css/css-specific.png)

## Box Model

- **Concept**:
  - Box Model là một khái niệm mô tả cách trình duyệt xác định kích thước và bố trí các phần tử HTML.
- **Thành phần**:
  - Mỗi phần tử được trình bày như một hộp bao gồm các thành phần: nội dung, padding, border, và margin.
    - `Content`: Phần chứa nội dung thực tế của phần tử (text, hình ảnh, v.v.).
    - `Padding`: Khoảng trống giữa nội dung và viền của phần tử.
    - `Border`: Đường viền bao quanh phần tử.
    - `Margin`: Khoảng trống bên ngoài đường viền, cách phần tử với các phần tử khác.
      ![CSS Box Model](/img/css/css-box-model.jpg)
- **Attributes**:
  - `width, height`: Xác định kích thước của nội dung.
  - `padding`: Điều chỉnh khoảng đệm giữa nội dung và border.
  - `border`: Định nghĩa đường viền của phần tử.
  - `margin`: Xác định khoảng cách giữa phần tử và các phần tử khác.

```css title='example'
<div > Nội dung của box </div > div {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
/* Content: 200px x 100px.
  Padding: 20px.
  Border: 2px.
  Margin: 10px. */
```

## Flexbox

**Concept**:

- Flexbox (Flexible Box Layout) là một mô hình bố cục CSS cung cấp khả năng sắp xếp các phần tử theo trục (horizontal hoặc vertical) một cách linh hoạt.
- Mục đích chính của flexbox là cải thiện việc sắp xếp, điều chỉnh kích thước của các phần tử trong container khi kích thước của chúng thay đổi theo các kích thước màn hình khác nhau.

**Container Properties**:

- Container properties trong Flexbox điều khiển cách mà các phần tử con (flex items) được sắp xếp bên trong phần tử cha (flex container).
- Những thuộc tính này xác định hướng, sắp xếp, và cách các phần tử con được hiển thị khi kích thước container thay đổi.
  ![CSS Flexbox](/img/css/css-flex-box.jpg)
  - `display`:
    - **Value**:
      - `flex`: Kích hoạt bố cục flex cho phần tử cha (container), và các phần tử con sẽ sắp xếp theo flexbox.
      - `inline-flex`: Tương tự flex, nhưng phần tử container sẽ được xử lý như một phần tử inline.
  - `flex-direction`: Xác định hướng sắp xếp các phần tử con bên trong container.
    - **Value**:
      - `row`: Sắp xếp từ trái sang phải theo chiều ngang (default).
      - `row-reverse`: Sắp xếp từ phải sang trái theo chiều ngang.
      - `column`: Sắp xếp từ trên xuống dưới theo chiều dọc.
      - `column-reverse`: Sắp xếp từ dưới lên trên theo chiều dọc.
  - `flex-wrap`: Quyết định các phần tử con có bị xuống dòng khi không đủ không gian hay không.
    - **Value**:
      - `nowrap`: Không cho phép xuống dòng (default).
      - `wrap`: Cho phép xuống dòng khi không đủ không gian.
      - `wrap-reverse`: Cho phép xuống dòng nhưng theo hướng ngược lại.
  - `justify-content`: Điều khiển cách các phần tử con được sắp xếp dọc theo trục chính (main axis).
    - **Value**:
      - `flex-start`: Canh trái/trên.
      - `flex-end`: Canh phải/dưới.
      - `center`: Canh giữa.
      - `space-between`: Khoảng cách đều giữa các phần tử, phần tử đầu và cuối sát container.
      - `space-around`: Khoảng cách đều giữa các phần tử, bao gồm khoảng cách giữa container và phần tử đầu/cuối.
  - `align-items`: Điều khiển cách các phần tử con được sắp xếp dọc theo trục phụ (cross axis).
    - **Value**:
      - `stretch`: Phần tử con sẽ kéo dãn hết chiều cao/chiều rộng của container (default).
      - `flex-start`: Canh trái/trên.
      - `flex-end`: Canh phải/dưới.
      - `center`: Canh giữa.
      - `baseline`: Canh theo dòng cơ sở của phần tử con.
  - `align-content`: Điều khiển cách các dòng flex (khi có nhiều dòng) được sắp xếp dọc theo trục phụ.
    - **Value**:
      - `stretch`: Kéo dãn các dòng để chiếm hết không gian container (default).
      - `flex-start`: Canh trái/trên.
      - `flex-end`: Canh phải/dưới.
      - `center`: Canh giữa.
      - `baseline`: Canh theo dòng cơ sở của phần tử con.
      - `space-between`: Khoảng cách đều giữa các dòng.
      - `space-around`: Khoảng cách đều giữa các dòng, bao gồm khoảng cách giữa container và dòng đầu/cuối.

**Item Properties**

- Item properties điều khiển cách các phần tử con (flex items) hoạt động trong container flex.
- Những thuộc tính này giúp điều chỉnh kích thước, trật tự và sự sắp xếp của từng phần tử con độc lập với nhau.
  - `order`: Xác định thứ tự sắp xếp của phần tử trong container.
    - **Value**: Mặc định là 0, phần tử có số order nhỏ hơn sẽ đứng trước.
  - `flex-grow`: Điều khiển khả năng mở rộng của phần tử trong container khi có không gian thừa.
    - **Value**: Một số dương. 0 là mặc định (không mở rộng).
  - `flex-shrink`: Điều khiển khả năng thu nhỏ của phần tử trong container khi không gian không đủ.
    - **Value**: Một số dương. 1 là mặc định (phần tử sẽ co lại khi cần).
  - `flex-basis`: Xác định kích thước ban đầu của phần tử trước khi phân bổ không gian thừa.
    - **Value**: Giá trị về kích thước (ví dụ: auto, px, %).
  - `align-self`: Cho phép ghi đè thuộc tính align-items của container chỉ đối với một phần tử con.
    - **Value**:
      - `auto`: Sử dụng giá trị của align-items trong container (default).
      - `flex-start`: Canh trái/trên.
      - `flex-end`: Canh phải/dưới.
      - `center`: Canh giữa.
      - `baseline`: Canh theo dòng cơ sở.
      - `stretch`: Kéo dãn phần tử để chiếm hết chiều cao/chiều rộng của container.

## Grid Layout

- **Concept**:
  - CSS Grid Layout là một hệ thống bố cục mạnh mẽ trong CSS, giúp bạn thiết kế các giao diện phức tạp với khả năng kiểm soát tốt cả về hàng và cột. 
  - Nó hỗ trợ tạo các khu vực (grid areas) và căn chỉnh các phần tử một cách linh hoạt.
  - Hệ thống grid hoạt động theo dạng lưới (grid), trong đó các phần tử con có thể được đặt vào các vị trí cụ thể dựa trên hàng (rows) và cột (columns).

Hệ thống lưới của Bootstrap sử dụng các lớp tiện ích để tạo bố cục đáp ứng (responsive layout).
## Normalize/Reset CSS
- **Concept**: 
  - Reset CSS và Normalize CSS là hai kỹ thuật được sử dụng để tạo ra sự đồng nhất giữa các trình duyệt khác nhau khi hiển thị trang web.
  - Chúng giúp xóa bỏ hoặc chuẩn hóa các style mặc định mà các trình duyệt áp dụng cho các phần tử HTML.
  - Mục tiêu là đảm bảo trang web có cách hiển thị nhất quán bất kể người dùng sử dụng trình duyệt nào.


- **Reset CSS**:
  - **Concept**: Xóa bỏ toàn bộ các kiểu mặc định của trình duyệt, trả các phần tử HTML về trạng thái cơ bản nhất (như margin, padding, font size).
  - **Pros**:
    - Đưa tất cả phần tử về một trạng thái mặc định hoàn toàn.
    - Giúp nhà phát triển kiểm soát toàn bộ thiết kế từ đầu.

    ```css title='example'
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    ```
    
    - **Explanation**: Reset CSS tất cả thẻ HTML. 

  - **Cons**:
    - Có thể làm mất các kiểu hữu ích mà trình duyệt cung cấp sẵn.
    - Yêu cầu định nghĩa lại tất cả các kiểu cho các phần tử.
- **Normalize CSS**:
  - **Concept**: Chuẩn hóa các kiểu mặc định của trình duyệt nhưng vẫn giữ lại một số kiểu hữu ích (như `margin` và `padding` cơ bản cho các phần tử block VD: `p`, `h1`...).
  - **Pros**:
    - Cải thiện sự đồng nhất trong cách hiển thị giữa các trình duyệt.
    - Giữ lại các kiểu mặc định hữu ích của trình duyệt mà không xóa bỏ tất cả.
  - **Cons**:
    - Không loại bỏ hoàn toàn tất cả các kiểu mặc định, do đó một số phần tử có thể vẫn có sự khác biệt nhẹ giữa các trình duyệt.

    ```css title='example'
    html {
      line-height: 1.15; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
    }

    body {
      margin: 0;
    }

    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    /* Grouping selectors for common reset */
    ol, ul {
      list-style: none;
    }

    img {
      max-width: 100%;
      height: auto;
    }
    ```

    - **Explanation**: Reset CSS của 1 số phần tử chứ không phải tất cả.  

  - **Use Cases**:
    - `Reset CSS`: 
      - Khi phát triển các giao diện từ con số 0, không muốn bất kỳ ảnh hưởng nào từ kiểu mặc định của trình duyệt.
      - Thường sử dụng trong các dự án thiết kế web tùy chỉnh, nơi mọi thứ đều được thiết kế lại.
    - `Normalize CSS`:
      - Khi cần chuẩn hóa kiểu mặc định giữa các trình duyệt nhưng vẫn muốn giữ lại những thiết lập hữu ích như kích thước font chữ cơ bản, margin cho các phần tử.
      - Thường được sử dụng trong các framework CSS phổ biến (`Bootstrap`, `Foundation`) để đảm bảo sự đồng nhất mà không cần thiết kế lại toàn bộ.
- **Vị trí sử dụng**:
  - `Reset CSS`: 
    - Thường được sử dụng ở đầu tệp CSS chính của dự án, ngay sau thẻ `style` hoặc tệp CSS chính. Đặc biệt thích hợp khi xây dựng một giao diện tùy chỉnh hoàn toàn.
  - `Normalize CSS`: 
    - Được sử dụng đầu tiên trong các dự án để chuẩn hóa cách hiển thị cơ bản giữa các trình duyệt, sau đó là các lớp CSS tùy chỉnh hoặc framework.
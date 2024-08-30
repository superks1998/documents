# CSS and Module

## Sử dụng CSS độc lập trong component

-   Có 2 cách là dùng Css module và packages styled-components.

### CSS module

```
- CSS module là chức năng có sẵn của webpack.
- Cách dùng là đổi tên file css có thêm đuôi module rồi import vào component.
VD: import Style from './Style.module.css'
- Style sẽ trả về 1 Object chứa các class được viết trong file css của nó.
VD: {
    heading: Style_heading_3oX0Z
}
- Cách sử dụng là dùng nhập className của component sử dụng Object className Style trả về.
- CSS module luôn đổi tên file nên muốn chỉ sử dụng được với className.
```

## packages xử lý className

```
- Có 2 packages chức năng tương tự nhau là classnames và clsx
để xử lý ClassName Css module.
- Clsx có thể thêm nhiều className CSS module cho 1 element với cú pháp đẹp hơn.
- Install: yarn add clsx.
- Cú pháp: clsx(..input) Return String.
- Hàm clsx nhận các đối số là String, Array, Object
xử lý để trả về className, cách nhau bằng dấu ','.
- Gía trị false sẽ không được hiển thị,
Object sẽ in ra key.
- Truyền biến của CSS module dưới dạng key Object truyền vào clsx cần có dấu '[]'.
VD: clsx({
    foo: true
}, {
    bar: false
}, {
    '--foobar': 'hello'
}) // output: 'foo -foobar'
```

```js title='Ví dụ'
// áp dụng để tạo component nhận props để thay đổi css.

import clsx from "clsx";
import styles from "./button.module.scss";

function Button({ primary, success, disabled }) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled,
    });

    return <button className={classes}>Click me</button>;
}

export default Button;

// button.module.scss
// .btn {
//     padding: 5px 10px;
//     background-color: #ccc;
//     color: brown;
// }

// .primary {
//     background-color: #007bfe;
// }

// .disabled {
//     opacity: 0.5;
//     pointer-events: none;
// }
```

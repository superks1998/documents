# Basic

## React.createElement()

```js title='Ví dụ'
const h1React = React.createElement(
    "h1",
    {
        title: "Hello",
        className: "heading",
    },
    "Hello Guy~"
);
// Cú pháp React.createElement(type, props, children, childrenN)
// type: string(tagName HTML), function/class(component)
// props: Attribute thẻ,
// children: nội dung thẻ (nằm giữa thẻ)

// Tạo thẻ ul với JS thuần
const ulDOM = document.createElement("ul");
const liDOM1 = document.createElement("li");
liDOM1.innerText = "Javascript";

const liDOM2 = document.createElement("li");
liDOM2.innerText = "React";

ulDOM.appendChild(liDOM1); // thêm liDOM là con của thẻ ulDOM
ulDOM.appendChild(liDOM2);

document.body.appendChild(ulDOM); // Thêm ulDOM là con của thẻ body

// Với React
const ulReact = React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Javascript"),
    React.createElement("li", null, "Javascript")
);
```

## ReactDOM

```js
ReactDOM.render(element, container[, callback]);
// element: Phần tử React Element được thêm vào tạo bằng React.createElement().
// container: phần tử cha được của phần tử element được thêm vào.
// callback: optional, nếu callback được thêm vào, nó sẽ chạy sau khi component render hoặc update.
```

```title='React.StrictMode'
- 1 Component có sẵn của React giúp verify code, warning code để báo lỗi.
- Hàm mặc định này có 1 tác dụng phụ là call api 2 lần khi ở môi trường dev.
```

## JSX và Babel

```

-   JSX - Javascript XML.
-   JSX không phải là HTML.
-   Cần có Javascript, Babel để dùng JSX
-   Babel là 1 trình biên dịch Javascript.
-   Babel cho phép dịch từ những chuẩn Javascript mới nhất cho các version browser cũ
    (từ ES6 về ES5) và biên dịch JSX qua React Element.

```

```js title='Ví dụ'
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type='text/babel'>
</script> // Thêm type vào thẻ script để babel biên dịch
const reactCourse = 'ReactJS'
const ul = <ul>
        <li>Javascript</li>
        <li>{reactCourse}</li>
    <ul>
```

## Props

```text title='React elements'
- Sử dụng props giống với attribute của thẻ HTML
- 2 props class, for => className, htmlFor
- Phải đặt tên theo quy ước có sẵn.
```

```text title='React component'
- Sử dụng props giống đối số như Function.
- Tự do đặt tên props:
    - Đặt theo camelCase.
    - Có thể bao gồm dấu gạch ngang.
```

```text title='Children Props'
- Children Props được viết ở trong cặp ngoặc của component.
VD: <Button>Click me!</Button>, Click me! là children props.
```

```js title='Render props'
    function List({ data, children }) {
        return (
            <ul>
                {data.map((...props) => children(...props))}
                // Lấy children props và áp dụng toán tử rest và spread để lấy tất cả props
                // rồi truyền vào hàm children
            </ul>
        )
    }

    function App() {
        const cars = ['BMW', 'Honda', 'Mazda'];

        return (
            <div id='wrapper'>
                <List data={cars}>
                    {(item, index) => <li key={index}>{item}</li>
                <List>
            </div>
        )
    }

```

```text title='Chú ý'
- Prop 'key' là prop đặc biệt cần khi lọc qua 1 mảng.
- Props cơ bản là đối số của Component
 => Props có thể là bất cứ kiểu dữ liệu gì.
- Sử dụng destructuring.
```

## DOM event

```
- Không nên viết trực tiếp arrow function vào 1 DOM event
kể cả để truyền dữ liệu của map() vào DOM event vì nó sẽ ảnh hưởng đến performance.
- Nên tạo 1 hàm riêng để xử lý VD: HandleClick()
- Nên viết arrow function ở React element để truyền dữ liệu thay vì React Element.
- Không nên xử lý logic ở UI component.
```

```js
// VD: Cho 1 mảng chứa các khóa học, render ra giao diện console.log title khóa học bằng cách click vào title ở giao diện
const courses = [...courses];

// UI component
function CourseItem({ course, onClick }) {
    return (
        <div>
            <h2 onClick={() => onClick(course)}>{course.title}</h2>
        </div>
    );
}

// Container
function App() {
    const handleClick = (course) => {
        console.log(course.title);
    };

    return (
        <div id="wrapper">
            {courses.map((course) => (
                <CourseItem
                    key={course.id}
                    course={course}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
}
```



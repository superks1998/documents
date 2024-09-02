# Hook

## useState

```title='Dùng khi nào'
- Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)
```

```jsx title='Cách dùng'
const [state, setState] = useState(initialState);
```

```title='Lưu ý'
- Component được re-render khi setState.
- Initial state chỉ dùng cho lần đầu.
- setState với call back: đối số sẽ là giá trị trước đó của state.
VD: setState(prevState => prevState + 1)
- Initial state với callback: lấy giá trị return trong callback làm giá trị khởi tạo.
- Setstate là thay thế state bằng giá trị mới: nên copy state cũ lại để tránh mất dữ liệu (sử dụng toán tử Spread ...)
```

### Tow-way binding (form)

```
- ReactJS default sẽ là ràng buộc 1 chiều (One-way binding).
- Tow-way binding: ràng buộc 2 chiều nghĩa là có thể thay đổi cả dữ liệu ở component
và ngoài giao diện đều có thể thay đổi dữ liệu gốc (2 chiều).
```

```js title='Ví dụ'
import { useState } from "react";

const courses = [
    { id: 1, name: "HTML, CSS" },
    {
        id: 2,
        name: "Javascript",
    },
    {
        id: 3,
        name: "ReactJS",
    },
];

function App() {
    // radio
    const [checked, setChecked] = useState(1);
    const handleChangeInput = (id) => {
        setChecked(id);
    };

    // checkbox
    const [checked, setChecked] = useState([]);
    const handleChangeInput = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleSubmit = () => {
        console.log({ id: checked });
    };

    return (
        <div className="App">
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        // value={value} default
                        checked={checked === course.id} // radio
                        checked={checked.includes(course.id)} // checkbox
                        id={course.id}
                        onChange={() => handleChangeInput(course.id)}
                    />
                    <label htmlFor={course.id}>{course.name}</label>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default App;
```

```js title='TodoList'
import { useState } from "react";

function App() {
    const [jobs, setJobs] = useState(() => {
        const storegeJobs = JSON.parse(localStorage.getItem("jobs")) ?? [];
        return storegeJobs;
    });
    const [job, setJob] = useState("");
    const [indexEdit, setIndexEdit] = useState(null);

    const handleSubmit = (job) => {
        setJobs((prev) => {
            if (indexEdit === 0 || indexEdit > 0) {
                prev.splice(indexEdit, 1, job);

                return prev;
            } else {
                const newJobs = [...prev, job];

                const jsonJobs = JSON.stringify(newJobs);

                localStorage.setItem("jobs", jsonJobs);

                return newJobs;
            }
        });

        setJob("");
        setIndexEdit(null);
    };

    const handleEdit = (index) => {
        setJob(jobs[index]);
        setIndexEdit(index);
    };

    const handleDelete = (index) => {
        const newJobs = [...jobs];
        newJobs.splice(index, 1);
        setJobs(newJobs);
    };

    return (
        <div className="App" style={{ padding: 32 }}>
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={() => handleSubmit(job)}>
                {indexEdit === 0 || indexEdit > 0 ? "Edit" : "Add"}
            </button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
```

## useEffect()

```title='Cú Pháp'
1. useEffect(callback);
- Gọi callback mỗi khi component re-render.
- Gọi callback sau khi component thêm element vào DOM.
2. useEffect(callback, []);
- Chỉ gọi callback 1 lần sau khi component mounted.
3. useEffect(callback, [dependencies]);
- dependencies: là 1 biến chứa dữ liệu.
- Callback sẽ được gọi lại mỗi khi dependencies thay đổi.
----- Lưu ý --------
- Callback luôn được gọi sau khi component mounted.
- Cleanup function là 1 callback function optional ở cuối của useEffect với cú pháp return (callback).
- Cleanup function luôn được gọi trước khi component unmount.
- Cleanup function luôn được gọi trước khi callback được gọi (trừ lần đầu tiên(mounted)).
- Sử dụng khi removeEventListener và Clear Time.
```

```js title='Ví dụ'
import React, { useEffect, useState } from "react";

function Content() {
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [countdown, setCountdown] = useState(180);
    const [avatar, setAvatar] = useState();

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    };

    useEffect(() => {
        // cleanup
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        };

        window.addEventListener("scroll", handleScroll);
        console.log("Add");

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown((prevState) => prevState - 1);
        }, 1000);

        // setTimeout(() => {
        //     setCountdown(countdown - 1);
        // }, 1000);

        return () => clearInterval(timerId);
    }, []); //[countdown]

    return (
        <>
            <h1>{countdown}</h1>

            {showGoToTop && (
                <button style={{ position: "fixed", right: 20, bottom: 20 }}>
                    Go To Top
                </button>
            )}

            <input type="file" onChange={handlePreviewAvatar} />

            {avatar && <img src={avatar.preview} alt="" width="80%" />}
        </>
    );
}

export default Content;
```

## useLayoutEffect()

```
- Giống useEffect chỉ khác thứ tự thực hiện công việc.
- Sử dụng khi setState rồi lại check điều kiện state đó ở useEffect và đi set lại state đó.
- useEffect:
1. Cập nhật lại state.
2. Cập nhật lại DOM (mutated).
3. Render lại UI.
4. Gọi cleanup nếu dependencies thay đổi.
5. Gọi useEffect callback.

- useLayoutEffect
1. Cập nhật lại state.
2. Cập nhật lại DOM (mutated).
3. Gọi cleanup nếu dependencies thay đổi (sync).
4. Gọi useLayoutEffect callback (sync).
5. Render lại UI.
```

```js title='Ví dụ'
import React, { useEffect, useLayoutEffect, useState } from "react";

function Content() {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3) setCount(0);
    }, [count]);
    // Sử dụng useEffect ở đây sẽ làm giao diện cập nhật sai giá trị mong muốn gây khó chịu.
    //useLayoutEffect sẽ khắc phục điều đó.

    const handleRun = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleRun}>RUN</button>
        </>
    );
}

export default Content;
```

## useRef()

```
- Cú pháp: useRef(initialValue).
- initialValue default là undefined.
- useRef return về 1 object có key là current.
VD: const ref = useRef(10)
    console.log(ref) // output: { current: 10}
- Sử dụng để lưu các giá trị qua một tham chiếu bên ngoài.
- Khi component re-render sẽ tạo ra 1 phạm vi mới nên sử dụng useRef để giá trị của biến sẽ không bị ảnh hưởng.
- Có sử dụng để lấy giá trị DOM element bằng cách gán từ khóa ref={useRef()} vào attribute DOM element muốn lấy.
- ref không thể truyền dưới dạng props của 1 Component.
```

```js title='Ví dụ'
import React, { useEffect, useRef, useState } from "react";

function Content() {
    const [count, setCount] = useState(60);

    const timerId = useRef();
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);
    };

    const handleStop = () => {
        clearInterval(timerId.current);
    };

    console.log(count, prevCount);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}

export default Content;
```

### forwardRef()

```
- Sử dụng để truyền props ref cho 1 component.
- Là 1 HOC nên cần phải bọc component được truyền props ref dưới dạng đối số thứ 2.
```

## useImperativeHandle()

```
- Cú pháp: useImperativeHandle(ref, createHandle);
ref: ref truyền vào.
createHandle: hàm tạo để public các method.
- Sử dụng để tùy chỉnh các method được hiển thị với component cha
khi sử dụng ref, để bảo toàn dữ liệu.
- Hook bắt buộc nhận ref nên trong hầu hết trường hợp nên sử dụng với forwardRef()
```

```js title='Ví dụ'
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);

// Trong ví dụ này, component cha render <FancyInput ref={inputRef} />
// chỉ có thể sử dụng inputRef.current.focus().
```

## React.memo()

```
- Là 1 Higher-Order Functions (HOC) bọc component.
- React.memo tương tự PureComponent của ClassComponent.
- Sử dụng để tối ưu performance,
khi component cha dùng nhiều component con và state của component cha không ảnh hưởng đến component con
thì nên sử dụng memo cho các component con đó.
- memo hoạt động theo cách so sánh các props sau có khác props trước không thì mới
thực hiện re-render lại component.
VD: export default React.memo(App)
```

## useCallback()

```
- Cú pháp: useCallback(callback, dependencies). callback là hàm truyền vào.
dependencies là biến truyền vào sử dụng như là useEffect
khi biến thay đổi thì nó sẽ chạy callback trả về function tham chiếu thay đổi theo biến,
mặc định sẽ là [] thì sẽ không tạo tham chiếu mới.
- Chỉ sử dụng useCallback() khi dùng React.memo() để giúp memo hoạt động đúng.
- Khi truyền 1 props là 1 function thì
mỗi khi re-render nó sẽ tạo ra 1 tham chiếu mới dù giá trị có thay đổi hay không
nên React.memo trong TH này sẽ không hoạt động đúng.
- useCallback sẽ sẽ trả về 1 callback không nằm trong phạm vi hàm
để khi re-render component nó vẫn trả về tham chiếu của callback đó,
nên React.memo sẽ hoạt động đúng.
```

## useMemo()

```
- Cú pháp: useMemo(callback, dependencies).
- dependencies là biến truyền vào sử dụng như là useEffect,
khi biến thay đổi thì useMemo sẽ chạy callback, mặc định là [].
- Sử dụng khi muốn tránh thực hiện 1 đoạn logic nào đó không cần thiết,
đoạn logic đó sẽ truyền vào callback.
- callback trả về 1 giá trị (return value).
- Là hook sử dụng trong component, khác với React.memo là HOC sử dụng để bọc component.
```

```js title='Ví dụ'
import { useMemo, useRef, useState } from "react";
import Content from "./Content";

function App() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([
            ...products,
            {
                name,
                price: +price,
            },
        ]);

        setPrice("");
        setName("");

        nameRef.current.focus();
    };

    // dùng useMemo thì khi gõ input callback sẽ không chạy
    // chỉ chạy khi products thay đổi
    const total = useMemo(() => {
        const result = products.reduce((result, product) => {
            console.log(1);
            return result + product.price;
        }, 0);

        return result;
    }, [products]);

    return (
        <div style={{ padding: 30 }}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
```

## useReducer()

```title='Cú pháp'
- const [state, dispatch] = useReducer(reducer, initialState);
- state: state hiện tại.
- dispatch: 1 hàm nhận vào 1 action rồi gọi hàm reducer để xử lý.
- reducer: 1 hàm nhận state và action làm tham số.
thường sử dụng switch case để lọc các action khác nhau để xử lý.
- action: chứa các key để reducer xử lý.
- initialState: giá trị khởi tạo state.

```

```

-   Cung cấp thêm 1 sử lựa chọn sử dụng state cho function component (thay thế useState).
-   Phù hợp hơn cho tình huống state phức tạp hơn.

```

## useContext()

```
- Cú pháp: useContext(MyContext).
MyContext là object được tạo ra từ hàm React.createContext.
Hàm trả về giá trị được truyền vào prop value của Component MyContext.Provider
ở trên để truy cập từ những component con.
VD: <MyContext.Provider value={value}>
    <Vidu>
        <Vidu2 />
    </Vidu>
</MyContext.Provider>
Truy cập value từ component Vidu2.
- Đơn giản hóa truyền dữ liệu từ component cha xuống component con
mà không cần dùng props thủ công.
- Có thể truyền nhiều dữ liệu bằng cách sử dụng object.


```

### React.createContext()

```
- Khởi tạo giá trị ban đầu cho Context API bằng React.createContext(), hàm này trả về
một object bao gồm là Provider và Consumer.
- Khi một component đăng ký sử dụng Context này thì nó sẽ đọc giá trị
context từ Provider gần nhất
Context.Provider:

- Provider là một HOC, truyền vào giá trị qua prop ( value – giá trị của Context).
- Khi value thay đổi (state thay đổi), thành phần bên trong Provider này sẽ bị re-render.

- Context.Consumer:
Có thể sử dụng ở bất cứ đâu bên dưới Provider.
- Consumer get được giá trị của prop value của Provider thông qua prop children để sử dụng trong component.
-Ngoài ra còn có thể sử dụng Class.contextType để truy cập vào giá trị context này nữa.
```

### Redux vs React Context

```title='Khác nhau'
- Redux dễ dàng debugging hơn (React debug).
- Redux cung cấp sẵn kiến trúc Middlaware hơn Context (logger, saga, persist...).
- Redux dễ dàng mở rộng hơn.
- Redux cross-platfrom (đa nền tảng) không phụ thuộc vào React như Context.
- Dễ dàng cấu hình hơn Context.
- Performance hơn hẳn Context: Redux chỉ re-render component có state bị thay đổi,
còn Context re-render tất cả component nằm trong Provider.
```

```title='Khi nào dùng'
- Dùng context cho ứng dụng vừa nhỏ và trường hợp setState không nhiều (hành vi ít dùng). VD: thay đổi sáng tối...
- Dùng redux cho ứng dụng lớn hơn và trường hợp state thay đổi nhiều lần.

```

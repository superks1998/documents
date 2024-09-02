---
sidebar_position: 2
---

# Value types & Reference types (Tham trị và tham chiếu)

## Phân loại các kiểu dữ liệu

### Value types (Primitive data types: Kiểu dữ liệu nguyên thủy(tham trị))

```
- String
- Number
- Boolean
- BigInt
- Symbol
- undefined
- null
```

### Reference types (Non-primitive data types: Kiểu tham chiếu)

```
- Object
- Array
- Function
```

## Value types

```js title='Ví dụ'
let a = 1; // Tạo ra biến a, cấp 1 ô nhớ, lưu 1 vào ô nhớ
let b = a; // Tạo 1 biến b, cấp 1 ô nhớ khác, sao chép giá trị của a(là 1) vào ô nhớ mới
a = 2; // Sửa giá trị trong ô nhớ của a thành 2. ô nhớ của b vẫn là 1
console.log(b); // Output: 1
```

## Reference types

```js title='Ví dụ'
const a = {
    name: "Mercedes",
};
// Tạo biến a, cấp 1 ô nhớ, lưu {name: 'Mercedes'} của a vào ô nhớ, trả về địa chỉ ô nhớ đã lưu
// Khi truy cập vào biến a JS sẽ đọc địa chỉ và truy xuất vào ô nhớ đang lưu Object đó
// Biến a: (Địa chỉ: #001, Giá trị: #001, ô nhớ {name: 'Mercedes'})

const b = a;
// Tạo biến b, trỏ biến b tới cùng địa chỉ ô nhớ của biến a hay nói
// cách khác là nó gán địa chỉ của biến a vào giá trị của biến b
// Biến b: (Gía trị: #001)

a.name = "BMW";
// Sửa giá trị key name trong ô nhớ thành 'BMW'

console.log(b.name); //Output: 'BMW'
// Vì 2 biến a và b cùng 1 ô nhớ nên khi sửa Object thông qua biến a và b là như nhau
```

```
- Mỗi object mới hay array mới sẽ là 1 vùng nhớ được tạo ra.
```

```js title='Ví dụ'
const student = {
    name: "Oanh Ha",
    profile: {
        firstName: "Oanh",
        lastName: "Ha",
        introduction: "Girl",
    },
};
// Biến student (Địa chỉ: #001, Ô nhớ: {
//         firstName: "Oanh",
//         lastName: "Ha",
//         introduction: "Girl",
//     },
// Giá trị: #002, Địa chỉ: #002, {name: 'Oanh Ha', profile: #001})
```

## Lưu ý

```
- Không nên sửa 1 object là tham số trực tiếp trong 1 function vì nó
có thể thay đổi đối số là object khác ở bên ngoài function. (Side effect).
- Cách giải quyết là copy object tham số trước khi sửa ( Sử dụng toán tử spread)
```

```js title='So sánh 2 Object'
const a = {
    name: "BMW",
};
const b = {
    name: "BMW",
};
const a = c;
console.log(a === b); // Output: false
// Khác địa chỉ vùng nhớ ( 2 Object khác nhau)
console.log(a === c); // Output: true
// Cùng địa chỉ vùng nhớ
```

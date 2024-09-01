# This, bind(), call()

## Object

```
- Trong 1 phương thức(method) của 1 Object VD:
const iPhone7 = {
    name: 'iPhone7',
    color: 'Pink,


    takePhoto() {
        console.log(this)
    } // method
}
- This tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
VD: iPhone7.takePhoto() // This = iPhone7;
```

## Function

```
- Đứng ngoài phương thức của Object (VD: trong 1 function). This tham chiếu tới đối tượng global (Windown);
- This trong hàm tạo (Constructor function), this trong hàm tạo đại diện cho đối tượng sẽ tạo.
- This trong 1 hàm là undefined khi ở strict mode
- Mỗi 1 function đều có Context (Ngữ cảnh để chạy hàm) riêng của nó.
- Nghĩa là mỗi 1 function đều có this riêng của nó.
- Ngoại trừ Arrow function không có Context. Nên nó sẽ không có this.
- Arrow function sẽ lấy this ở phạm vi bên ngoài của nó (hàm gần nhất chứa nó)

```

## Method bind()

Sử dụng khi mong muốn từ khóa this rằng buộc với 1 đối tượng nào đó.

```
- Phương thức bind() cho phép ràng buộc this cho 1 phương thức (function).
- Phương thức bind() sẽ trả về 1 hàm mới với context được bind.
- Hàm được trả về từ bind() vẫn có thể nhận các đối số của hàm gốc (từ đối số thứ 2 trở đi).

VD: const $ = document.querySelector.bind(document);

    $('h1');
    Nếu không sử dụng bind thì sẽ bị lỗi vì method querySelector sử dụng từ khóa this
    mà mình gán 1 biến cho đoạn code trên thì this sẽ trỏ về đối tượng window
    chứ không phải đối tượng document có method querySelector;

```

## Phương thức call() và apply()

```
- Khác với bind(), phương thức call() và apply() để gọi thực thi một hàm với
một ngữ cảnh chỉ định thông qua tham số thisArg và các tham số đầu vào của hàm tương ứng.
- Sự khác nhau giữa chúng là call() sẽ nhận tham số hàm qua từng biến đầu vào
riêng biệt còn apply() thì lại nhận các tham số hàm qua một mảng chứa các biến đầu vào.

VD:
var obj = {
    firstName: "Vô",
    lastName : "Danh",

    mMethod: function(firstName, lastName) {
        var firstName = firstName || this.firstName
        var lastName = lastName || this.lastName
        console.log("Hello " + firstName + " " + lastName)
    }
}

var obj1 = {
    firstName: "Ông",
    lastName : "Ké"
};

obj.mMethod() // Hello Vô Danh

obj.mMethod.call(obj1) // Hello Ông Ké

obj.mMethod.apply(obj1) // Hello Ông Ké

obj.mMethod.call(obj1, "Thị", "Nở") // Hello Thị Nở

obj.mMethod.apply(obj1, ["Chí", "Phèo"]) // Hello Chí Phèo
```

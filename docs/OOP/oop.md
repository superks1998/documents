---
sidebar_position: 6
---

# Lập trình hướng đối tượng (OOP)

## 4 tính chất

### Trừu tượng hóa

```
- Là việc xác định thuộc tính và phương thức cho 1 chương trình (1 Class), là tính chất đầu tiên.
```

### Thừa kế

```
- Lớp này có thể kế thừa các phương tính và thuộc tính của thuộc tính khác (Extend).

```

### Đa hình

```
- Viết lại các thuộc tính và phương thức của lớp khác
```

### Đóng gói

```
- Cho phép người dùng hay đối tượng khác truy xuất hoặc thay đổi dữ liệu của đối tượng hiện tại hay không.
```

## instace, static

```
- Instance là đối tượng được tạo từ 1 Class.
- Cần phải tạo Instance bằng từ khóa new Class thì mới có thể truy xuất thuộc tính và phương thức của Class thông qua Instance.
- Static cho phép không cần phải tạo instance mà vẫn có thể sử dụng được thuộc tính và phương thức của Class.
```

## Kế thừa (extend), super()

```
- Sử dụng từ khóa extend để kế thừa các phương thức và thuộc tính của Class qua 1 Class mới.
- Muốn sửa đổi thuộc tính và phương thức của class con kế thừa từ class cha thì cần đặt trùng tên để ghi đè.
- Sử dụng super() để dùng lại code trong phương thức của class cha.
- super() nhận thêm đối số ở class con nếu constructor class cha nhận đối số.
```

## Access modifier(truy nhập đối tượng)

```
- Là các từ khóa trạng thái truy cập dữ liệu của class.
- Có 3 từ khóa của access modifier: public, protected, private.
- Public: có thể truy cập: trong class, ngoài class, class con.
- Protected: có thể truy cập: trong class và class con, không được ngoài class.
- Private: có thể truy cập: trong class, ngoài class và class con thì không được.
```

## Accessor

```
- Là phương thức truy cập dữ liệu nhưng vẫn giữ tính bảo mật của class.
- Getter và setter để truy cập và chỉnh sửa vào dữ liệu thông qua hàm.
- Sử dụng cần thêm dấu '_' ở tên dữ liệu.
- Cần định nghĩa hàm getter và setter giống tên dữ liệu nhưng không thêm dấu '_'.
- Sử dụng bằng cách tạo 1 instance và gọi đến tên getter, setter.
- Nếu truy cập là getter, còn chỉnh sửa(gán) là setter.
```

# Abstract

```
- Abstract là 1 bản thiết kế của class.
- Tức là Abstract là 1 bản tóm tắt của class. Mô tả các chứ năng của class mà không phân tán vào chi tiết.
- Abstract class không được dùng để tạo đối tượng mà chỉ đế xem cấu trúc của class.
- Class extend từ abstract.
- Abstract method là bản thiết kế của 1 phương thức.
- Abstract method chỉ để khai báo tên và kiểu trả về của phương thức mà không có code bên trong.
- Phải tự định nghĩa code bên dưới class con.
```

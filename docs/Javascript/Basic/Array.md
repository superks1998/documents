---
sidebar_position: 6
---

# Array Method

## Kiểm tra Array

```
- Array.isArray(argument)
return Boolan
```

## Convert Array to String

```
- toString(): chuyển đổi array sang chuỗi, ngăn cách bởi dấu ','.
- join(argument): giống toString, những có thể chỉ định dấu phân cách ở đối số.
```

## Thêm và xóa phần tử

```
- pop(): xóa phần tử cuối mảng, trả về giá trị bị xóa.
- push(): Thêm 1 hoặc nhiều phần tử vào cuối mảng,
trả về độ dài mới của mảng.
- Có 1 cách thêm nữa là sử dụng length.
VD: array[array.length] = 'newValue';
- shift(): Xóa phần tử ở đầu mảng, trả về giá trị đã xóa.
- unshift(): Thêm 1 hoặc nhiều phần tử vào đầu mảng,
trả về độ dài mới của mảng.
- concat(): Nối 2 mảng. Trả về mảng mới.
VD: array1.concat(array2).
- slice(): Cắt 1 mảng thành 1 mảng mới.
Slice nhận 2 argument, 1 là bắt đầu, 2 là kết thúc.
VD: array.slice(1, 3)
Output nhận được sẽ là phần tử 1 và 2 của mảng.
Chỉ nhập đối số đầu tiên thì sẽ cắt đến hết mảng.
```

## forEach()

- Giống vòng lặp for, không return về gì cả.

## every()

```
- Kiểm tra tất cả các phần tử của mảng phải thỏa mãn điều gì đó.
  Trả về Boolean. true nếu tất cả giá trị thỏa mãn điều kiện.
- Cú pháp: every((element, index) => { DK } )
```

## some()

- Ngược lại với every()
  chỉ cần 1 phần tử thỏa mãn điều kiện thì trả về true luôn.

## find()

```
- Cú pháp: find((element, index) => { ĐK} )
- Hàm tìm kiếm 1 phần tử thỏa mãn điều kiện trong mảng.
  Trả về 1 phần tử thỏa mãn.
```

## filter()

```- Cú pháp: filter((element, index) => { ... } );
- Hàm tìm kiếm 1 danh sách thỏa mãn điều kiện.
- Trả về 1 mảng chứa các giá trị thỏa mãn.
```

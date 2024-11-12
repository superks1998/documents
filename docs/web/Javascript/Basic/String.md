# String and Number Method

## Find index

```indexOf
Syntax
.indexOf(searchValue)
.indexOf(searchValue, fromIndex)
Return value
- Index đầu tiên hoặc -1 nếu không tìm thấy.
```

```search
.search(regexp)
Return value
- Index đầu tiên hoặc -1 nếu không tìm thấy.
```

## Cut string

```slice
.slice(beginIndex)
.slice(beginIndex, endIndex)
Return value
A new string containing the extracted section of the string.
```

## Replace

.replace(substr, newSubstr)

Return value
A new string, with some or all matches of a pattern replaced by a replacement.

## Trim

```
- Loại bỏ khoảng trắng ở 2 đầu chuỗi.
.trim()
```

## Split

```
- Cắt 1 chuỗi thành 1 array.
.split()
.split(separator)
separator: điểm chung cần phân tách.
Return value
- Trả về 1 mảng đã được phân tách.
```

## Get a character by index

```
.charAt(index)
Return value
- Trả về 1 ký tự theo index truyền vào.
nếu nhập index ngoài phạm vi. trả về 1 chuỗi rỗng
.[index]
- giống charAt() nhưng trả về undefined nếu ngoài phạm vi.
```

## Kiểm tra NaN

-   isNaN(number)

## Làm tròn số

````
number.toFixed(argument);
return a string, với số thập phân được chỉ định.
VD: 1230.1231.toFixed(2)
//  Output: 1230.12```
````

## Chuyển đổi biến sang số

```
Có 3 cách:
- Number() : Trả về 1 số, được chuyển đổi từ đối số.
- parseFloat() : chuyển đổi đối số sang số thực.
- parseInt() : chuyển đổi đối số sang số nguyên.
```

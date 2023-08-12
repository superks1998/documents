---
sidebar_position: 2
---

# Spread, Rest Operator and Destructuring

```
- Ký hiệu là dấu (...);
- Rest dùng trong tham số function để lấy tất cả các tham số và sẽ trả lại dưới dạng mảng
(tương tự đối tượng Arguments).
- Rest dùng kết hợp với Destructuring để lấy ra các phần còn lại của mảng và Object.
- Rest ứng dụng để xóa key Object mà không dùng delete
- Spread dùng với Object, Array để lấy ra tất cả các phần tử của Object, Array đó.
- Spread có thể dùng để nối mảng và object.
VD1: const array3 = [...array2, ...array1].
VD2: const object3 = {
    ...object1,
    ...object2
}
- Destructuring dùng với Object phải đúng key name, không sẽ trả về undefined.
```

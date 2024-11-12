---
sidebar_position: 2
---

# Scope - Phạm vi

```text title='Các loại scope'
- Global - Toàn cầu.
- Code block - Khối mã ({}): let, const.
- Local scope - Hàm (Function): var, function.
```

## Nội dung

```
- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo.
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó.
- Cách thức 1 biến được truy cập: ưu tiên từ trong ra ngoài.
```

## Khi nào một biến bị xóa khỏi bộ nhớ?

```
- Biến toàn cầu: Gía trị chỉ xóa khi thoát trang web. Hạn chế dùng.
- Biến trong code block & trong hàm: Khi thoát khỏi code block là bộ nhớ sẽ tự xóa.
- Trường hợp đặc biệt: Biến trong hàm được tham chiếu bởi 1 hàm khác. (Closure)
```

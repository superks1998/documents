# Plugin

## npm & npx & yarn

```title='npm'
- Là 1 kho lưu trữ các thư viện và cung cấp 1 trang web quản lý các thư viện (npmjs).

- cú pháp: npm install react react-dom --save-dev (flag (-D)) => devDependencies
```

```title='npx'
- Npx giúp cài thư viện mà không phải cài vào máy của mình: tải về và xóa đi khi dùng xong. VD: create-react-app.
```

```title='yarn'
- Giống như npm cũng nhưng khác biệt ở performance: npm cài các thư viện tuần tự còn yarn thì cài song song.
- Yarn reinstall các thư viện nhanh hơn bằng cách cache lại ở 1 thư mục nào đó.
- Ưu điểm của yarn là tốc độ nhanh hơn npm và nhược điểm là tốn tài nguyên lưu trữ hơn.
- Yarn có thêm 1 số tính năng mới.
```

```title='package-lock.json'
- File quản lý các thư viện và các thư viện phụ thuộc (Trong thư viện này lại dùng các thư viện khác)

dùng cho dự án và hỗ trợ download các thư viện nhanh hơn.
```

```title='create-react-app'
- Thư viện được tạo ra giúp Install tất cả các thư viện cần dùng để tạo 1 dự án React.
VD: react, react-dom, babel, webpack...
```

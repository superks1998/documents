# API

- API (Application Programming Interface) là một tập hợp các định nghĩa và giao thức cho phép các ứng dụng phần mềm giao tiếp với nhau. Nó giống như một cầu nối giúp các hệ thống phần mềm tương tác mà không cần biết chi tiết bên trong của nhau.

## Khái niệm cơ bản

- **API là gì?**
    - API là một giao diện cho phép các thành phần phần mềm (ứng dụng hoặc dịch vụ) giao tiếp và trao đổi dữ liệu với nhau.

- **Tại sao cần API?**
    - API giúp:
        - Kết nối các hệ thống và ứng dụng khác nhau.
        - Tăng hiệu quả phát triển phần mềm nhờ khả năng tái sử dụng.
        - Đảm bảo bảo mật khi chỉ cung cấp quyền truy cập cần thiết.

- **Các loại API phổ biến:**
  - **API hệ điều hành (OS API):** Cho phép các ứng dụng tương tác với hệ điều hành, ví dụ: API của Windows, Linux.
  - **API thư viện (Library API):** Cung cấp các hàm hoặc phương thức để sử dụng một thư viện phần mềm, ví dụ: API của thư viện đồ họa OpenGL.
  - **API web (Web API):** Cung cấp giao tiếp qua giao thức HTTP(S), thường được dùng trong các ứng dụng web và di động, ví dụ: RESTful API, GraphQL.

## Cách hoạt động của API

**API hoạt động dựa trên**:
1. **Request (Yêu cầu):** Một ứng dụng gửi yêu cầu đến API, thường qua HTTP.
2. **Processing (Xử lý):** API tiếp nhận yêu cầu, xử lý và lấy dữ liệu từ hệ thống liên quan.
3. **Response (Phản hồi):** API trả về dữ liệu hoặc kết quả xử lý cho ứng dụng yêu cầu.

### Ví dụ minh họa API Web

**Tình huống:** Bạn muốn hiển thị thông tin thời tiết trong ứng dụng của mình. Thay vì tự thu thập dữ liệu thời tiết, bạn có thể sử dụng API của một dịch vụ thời tiết như OpenWeatherMap.

1. **Request:** Ứng dụng của bạn gửi yêu cầu:

    ```javascript
        GET https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=YOUR_API_KEY
    ```


2. **Response:** API trả về dữ liệu thời tiết:
```json
{
    "weather": [
        {
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "main": {
        "temp": 298.15,
        "humidity": 78
    },
    "name": "Hanoi"
}
```
3. **Ứng dụng**: Hiển thị thông tin thời tiết:
```less
Hà Nội: Trời quang, Nhiệt độ: 25°C, Độ ẩm: 78%
```

## Ưu điểm và hạn chế của API

- **Ưu điểm**:

    - **Kết nối dễ dàng**: Cho phép các ứng dụng giao tiếp mà không cần biết chi tiết nội bộ của nhau.
    
    - **Tăng tốc phát triển**: Tận dụng các chức năng có sẵn thay vì xây dựng lại từ đầu.
    
    - **Khả năng mở rộng**: Hỗ trợ tích hợp nhiều hệ thống, dịch vụ.

- **Hạn chế**:
    - **Phụ thuộc**: Ứng dụng phụ thuộc vào dịch vụ API của bên thứ ba.
    - **Bảo mật**: Dữ liệu truyền qua API có thể bị tấn công nếu không bảo mật đúng cách.
    - **Giới hạn sử dụng**: Một số API có giới hạn số lượng yêu cầu hoặc yêu cầu trả phí.


- **Các kiểu API Web phổ biến**

| Kiểu API    | Mô tả | Ưu điểm | Hạn chế |
|-------|-----------------------|--------------|--------------------|
| **RESTful API** | Thiết kế đơn giản, dựa trên các nguyên tắc HTTP.                   | Dễ hiểu, phổ biến, tương thích nhiều nền tảng.           | Không hỗ trợ tốt cho các truy vấn phức tạp.                 | 
| **GraphQL** | Cho phép client xác định dữ liệu cụ thể cần lấy.                  | Linh hoạt, tối ưu dữ liệu truyền tải. | Phức tạp hơn REST, cần học thêm. | 
| **SOAP**   | Dựa trên XML, thường dùng trong các hệ thống doanh nghiệp.               | Bảo mật cao, hỗ trợ giao dịch phức tạp.         | Phức tạp, nặng nề hơn so với REST/GraphQL.      | 

## Ví dụ thực tế
- **Tích hợp API RESTful**
    - **Yêu cầu**: Tích hợp API RESTful của một dịch vụ sách (Book API) để lấy danh sách sách.

        - **Request**:
            ```javascript
                GET https://example.com/api/books
            ```

        - **Response**:

            ```json
            [
                {
                    "id": 1,
                    "title": "Lập trình cơ bản",
                    "author": "Nguyễn Văn A"
                },
                {
                    "id": 2,
                    "title": "Lập trình nâng cao",
                    "author": "Trần Thị B"
                }
            ]
            ```

        - **Hiển thị kết quả**:

            ``` Danh sách sách:
            1. Lập trình cơ bản - Nguyễn Văn A
            2. Lập trình nâng cao - Trần Thị B
            ```

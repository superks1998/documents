# RESTful API

- RESTful API là một kiểu kiến trúc API phổ biến dựa trên các nguyên tắc của REST (Representational State Transfer). 
- REST được thiết kế để tận dụng tối đa các tính năng của giao thức HTTP và giúp các hệ thống giao tiếp với nhau một cách hiệu quả, dễ mở rộng và dễ bảo trì.

## Khái niệm cơ bản

    <!-- ![API restFul](/img/images/api-restful.png) -->


- **REST là gì?**
    - REST là một kiến trúc cho phép giao tiếp giữa các hệ thống qua HTTP. 
    - RESTful API là một triển khai thực tế của REST trong API.

- **Các nguyên tắc cơ bản của REST:**
  1. **Stateless (Không trạng thái):** Mỗi yêu cầu từ client tới server phải độc lập và chứa đủ thông tin để xử lý.
  2. **Client-Server:** Tách biệt hoàn toàn giữa client (gửi yêu cầu) và server (xử lý và phản hồi).
  3. **Cacheable (Có thể lưu cache):** Dữ liệu từ API có thể được lưu trữ để cải thiện hiệu năng.
  4. **Layered System:** Hệ thống có thể được thiết kế theo nhiều lớp, đảm bảo tính mở rộng và bảo mật.
  5. **Uniform Interface (Giao diện đồng nhất):** Sử dụng các phương thức HTTP tiêu chuẩn (GET, POST, PUT, DELETE, ...).
  6. **Resource Representation:** Tài nguyên được biểu diễn dưới dạng JSON, XML hoặc các định dạng dễ đọc khác.

## Đặc điểm của RESTful API

### 1. **Resource (Tài nguyên):**
- RESTful API làm việc với các tài nguyên (resources) như: người dùng, bài viết, sản phẩm.
- Mỗi tài nguyên được biểu diễn dưới dạng URL.

- **Ví dụ**:

    ``` 
        GET https://example.com/api/users
    ```

### 2. **HTTP Methods:**
- RESTful API sử dụng các phương thức HTTP để thao tác với tài nguyên:

    | Method  | Mô tả                        | Ví dụ                          |
    |---------|-------------------------------|---------------------------------|
    | **GET** | Lấy dữ liệu tài nguyên       | `GET /api/users`               |
    | **POST**| Tạo mới một tài nguyên       | `POST /api/users`              |
    | **PUT** | Cập nhật toàn bộ tài nguyên  | `PUT /api/users/1`             |
    | **PATCH**| Cập nhật một phần tài nguyên| `PATCH /api/users/1`           |
    | **DELETE** | Xóa một tài nguyên        | `DELETE /api/users/1`          |

### 3. **Status Codes (Mã trạng thái):**
- RESTful API phản hồi bằng mã trạng thái HTTP để thông báo kết quả.

    | Mã trạng thái | Ý nghĩa                              | Ví dụ                   |
    |---------------|---------------------------------------|-------------------------|
    | **200**       | OK - Yêu cầu thành công              | Lấy danh sách người dùng|
    | **201**       | Created - Tạo mới thành công         | Tạo một người dùng mới  |
    | **400**       | Bad Request - Yêu cầu không hợp lệ   | Thiếu tham số cần thiết |
    | **401**       | Unauthorized - Không có quyền truy cập| Token không hợp lệ      |
    | **404**       | Not Found - Không tìm thấy tài nguyên| Tài nguyên không tồn tại|
    | **500**       | Internal Server Error - Lỗi server   | Server bị lỗi           |

### 4. **Representation (Biểu diễn tài nguyên):**
- Tài nguyên được biểu diễn qua các định dạng:
- **JSON (phổ biến nhất):**

  ```json
  {
      "id": 1,
      "name": "Nguyễn Văn A",
      "email": "nguyenvana@example.com"
  }
  ```
- **XML:**
  ```xml
  <user>
      <id>1</id>
      <name>Nguyễn Văn A</name>
      <email>nguyenvana@example.com</email>
  </user>
  ```

## Cách hoạt động của RESTful API

1. **Client gửi yêu cầu:** 
 - Yêu cầu được gửi qua HTTP đến server.
2. **Server xử lý yêu cầu:** 
 - Server kiểm tra yêu cầu, xử lý và lấy dữ liệu tài nguyên.
3. **Server trả phản hồi:**
 - Server trả về dữ liệu hoặc mã trạng thái.

---

## Ví dụ RESTful API

#### 1. Lấy danh sách người dùng
- **Request:**

    ```javascript
    GET https://example.com/api/users
    ```
- **Response**:

    ```json
    [
        {
            "id": 1,
            "name": "Nguyễn Văn A"
        },
        {
            "id": 2,
            "name": "Trần Thị B"
        }
    ]
    ```

#### 2. Thêm một người dùng mới
- **Request**:

    ```javascript
    POST https://example.com/api/users
    Content-Type: application/json

    {
        "name": "Lê Văn C",
        "email": "levanc@example.com"
    }
    ```

- **Response**:

    ```json
    {
        "id": 3,
        "name": "Lê Văn C",
        "email": "levanc@example.com"
    }
    ```

#### 3. Cập nhật thông tin người dùng

- **Request**:

    ```javascript
    PUT https://example.com/api/users/3
    Content-Type: application/json

    {
        "name": "Lê Văn D",
        "email": "levand@example.com"
    }
    ```

- **Response**:

    ```json
    {
        "id": 3,
        "name": "Lê Văn D",
        "email": "levand@example.com"
    }
    ```

#### 4. Xóa người dùng
- **Request**:

    ```javascript
        DELETE https://example.com/api/users/3
    ```
- **Response**:

    ```json
    {
        "message": "Người dùng đã được xóa thành công."
    }
    ```
## Ưu điểm và nhược điểm của RESTful API
#### Ưu điểm:
    - **Đơn giản**: Dựa trên HTTP, dễ hiểu và triển khai.
    - **Khả năng mở rộng**: Hỗ trợ nhiều client và dễ tích hợp.
    - **Độc lập**: Client và server độc lập, dễ bảo trì.
#### Nhược điểm:
- **Hạn chế hiệu năng**: Dữ liệu không được tối ưu trong một số trường hợp phức tạp.
- **Không hỗ trợ tốt realtime**: Không phù hợp cho các ứng dụng yêu cầu dữ liệu thời gian thực.

## CRUD

- CRUD là viết tắt của **Create**, **Read**, **Update**, và **Delete** – bốn thao tác cơ bản được sử dụng để quản lý dữ liệu trong các hệ thống phần mềm, đặc biệt là cơ sở dữ liệu hoặc API. 
- CRUD đại diện cho cách mà một ứng dụng tương tác với dữ liệu để thực hiện các chức năng cơ bản nhất.

#### Các thành phần chính của CRUD

| Chức năng  | Phương thức HTTP    | Ví dụ API                   | Body | Mô tả     
|------------|----------------------------------|---------------------|-----------------------------| ---------------------- |
| **Create** | `POST`              | `POST /api/users`           | Dữ liệu của tài nguyên | Tạo một tài nguyên mới. |
| **Read**           | `GET`               | `GET /api/users`            | Không |	Lấy danh sách tài nguyên. |
|        | `GET`               | `GET /api/users/1`            | Không |	Lấy thông tin tài nguyên cụ thể. |
| **Update**   | `PUT`  | `PUT /api/users/1`          | Dữ liệu đầy đủ của 1 tài nguyên |	Cập nhật toàn bộ dữ liệu 1 tài nguyên. |
| | `PATCH`  | `PATCH /api/users/1`          | Dữ liệu một phần của 1 tài nguyên |	Cập nhật một phần dữ liệu 1 tài nguyên. |
| **Delete**                   | `DELETE`            | `DELETE /api/users/1`       | Không	| Xóa tài nguyên. |

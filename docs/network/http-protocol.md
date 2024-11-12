# HTTP Protocols

## Introduction
- HTTP (Hypertext Transfer Protocol) là giao thức truyền tải siêu văn bản, cho phép client và server giao tiếp, chủ yếu dùng cho việc truyền tải dữ liệu web. 
- HTTP được thiết kế để thực hiện các yêu cầu và phản hồi qua mạng Internet, cho phép các trang web, hình ảnh, và các tài liệu đa phương tiện được truy cập và hiển thị trên các trình duyệt web.

## Key Concepts
- **Client-Server Model**: HTTP hoạt động theo mô hình client-server, nơi client gửi yêu cầu (request) và server phản hồi (response).
- **Stateless Protocol**: HTTP là giao thức không lưu trạng thái, nghĩa là mỗi yêu cầu là độc lập và server không giữ thông tin về các yêu cầu trước.
- **Methods (Phương thức)**: Các phương thức HTTP như `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, v.v., xác định hành động của client khi yêu cầu tài nguyên từ server.
- **HTTP Versions**: HTTP có nhiều phiên bản như HTTP/1.0, HTTP/1.1, HTTP/2, và HTTP/3 với các tính năng cải thiện hiệu suất và bảo mật.

## HTTP Versions

- HTTP đã trải qua nhiều phiên bản phát triển nhằm cải thiện hiệu suất, độ tin cậy và bảo mật. Dưới đây là các phiên bản chính của HTTP và những cải tiến từng phiên bản mang lại:

- ***HTTP/1.0***
    - **Introduction**: HTTP/1.0 là phiên bản đầu tiên chính thức được công bố vào năm 1996.
    - **Key Characteristics**:
    - **Kết nối ngắt quãng (Non-persistent)**: Mỗi yêu cầu HTTP mở một kết nối riêng với server và đóng ngay sau khi nhận được phản hồi.
    - **Không hỗ trợ bộ nhớ đệm (Cache)**: HTTP/1.0 không có quy tắc bộ nhớ đệm chuẩn, gây ảnh hưởng đến hiệu suất và tốc độ truy cập.
    - **Limitations**:
    - Tốc độ chậm vì tạo kết nối mới cho mỗi yêu cầu.
    - Gây lãng phí tài nguyên mạng, đặc biệt khi truy cập nhiều tệp (ví dụ: hình ảnh) trên cùng một trang.

- ***HTTP/1.1***
    - **Introduction**: HTTP/1.1, ra đời năm 1997, là phiên bản được sử dụng rộng rãi nhất và vẫn được dùng đến ngày nay.
    - **Key Characteristics**:
    - **Kết nối liên tục (Persistent Connections)**: Cho phép giữ kết nối mở cho nhiều yêu cầu, giảm độ trễ và tăng hiệu suất.
    - **Bộ nhớ đệm (Cache)**: HTTP/1.1 bổ sung các header như `Cache-Control`, `ETag`, giúp kiểm soát và tăng cường tính năng bộ nhớ đệm.
    - **Nén nội dung (Content Compression)**: Hỗ trợ các loại mã hóa nội dung như `gzip`, giúp giảm kích thước tệp.
    - **Pipeline Requests**: Cho phép gửi nhiều yêu cầu cùng lúc mà không cần chờ phản hồi từ server, nhưng có hạn chế vì không xử lý song song tốt như HTTP/2.
    - **Limitations**:
    - Vẫn tồn tại hiện tượng "head-of-line blocking" (tắc nghẽn tại đầu hàng), làm chậm toàn bộ hàng đợi khi có yêu cầu nào đó bị trì hoãn.

- ***HTTP/2***
    - **Introduction**: HTTP/2 ra mắt năm 2015, nhằm tối ưu hóa hiệu suất dựa trên nền tảng HTTP/1.1.
    - **Key Characteristics**:
    - **Nén header (Header Compression)**: Dùng thuật toán `HPACK` để nén header, giảm kích thước yêu cầu và phản hồi.
    - **Multiplexing**: Cho phép gửi nhiều yêu cầu và nhận nhiều phản hồi cùng lúc trên cùng một kết nối TCP mà không gây tắc nghẽn hàng chờ.
    - **Server Push**: Cho phép server gửi tài nguyên bổ sung trước khi client yêu cầu (ví dụ: CSS, JavaScript), giảm độ trễ và tăng tốc tải trang.
    - **Binary Framing**: HTTP/2 chuyển từ định dạng văn bản sang nhị phân, giúp đọc và phân tích yêu cầu nhanh hơn.
    - **Limitations**:
    - Vẫn sử dụng TCP làm giao thức nền, dẫn đến tình trạng "head-of-line blocking" ở mức TCP khi có gói tin bị mất.

- ***HTTP/3***
    - **Introduction**: HTTP/3 là phiên bản mới nhất, phát triển dựa trên giao thức QUIC của Google, ra mắt năm 2020.
    - **Key Characteristics**:
    - **Sử dụng giao thức QUIC (UDP-based)**: HTTP/3 hoạt động trên giao thức QUIC, dựa trên UDP thay vì TCP, giúp giảm thiểu tình trạng "head-of-line blocking".
    - **Kết nối nhanh hơn**: Tăng tốc độ kết nối và độ tin cậy cho các yêu cầu web, đặc biệt khi truyền tải dữ liệu qua các mạng không ổn định.
    - **Cải thiện bảo mật**: QUIC tích hợp sẵn mã hóa TLS 1.3, bảo mật ngay từ đầu mà không cần quá trình bắt tay (handshake) lâu như các phiên bản trước.
    - **Stream-level Multiplexing**: HTTP/3 cho phép xử lý nhiều luồng dữ liệu song song trên cùng một kết nối, giúp giảm độ trễ.

### Comparison of HTTP Versions

| Version    | Persistent Connection | Multiplexing | Header Compression | Transport Protocol | Server Push | Security    |
|------------|-----------------------|--------------|--------------------|--------------------|-------------|-------------|
| **HTTP/1.0** | No                    | No           | No                 | TCP                | No          | Basic (unencrypted) |
| **HTTP/1.1** | Yes                   | Limited (Pipeline) | Limited (`gzip`) | TCP                | No          | Improved with TLS |
| **HTTP/2**   | Yes                   | Yes          | Yes (`HPACK`)      | TCP                | Yes         | Enhanced with TLS |
| **HTTP/3**   | Yes                   | Yes          | Yes                | QUIC (UDP-based)   | Yes         | Built-in with QUIC |

---

## How HTTP Works
- HTTP hoạt động bằng cách thiết lập một kết nối giữa client và server. 
- Client gửi yêu cầu bằng các phương thức HTTP và server xử lý yêu cầu, sau đó gửi phản hồi chứa dữ liệu và mã trạng thái HTTP (HTTP status code) để xác định kết quả của yêu cầu.

---

## HTTP Request

- ***Request Line***
    - **Method**: Phương thức HTTP xác định hành động, ví dụ: `GET`, `POST`, `DELETE`.
    - **Request-URI**: Đường dẫn hoặc tài nguyên client muốn truy cập.
    - **HTTP Version**: Phiên bản HTTP đang sử dụng (vd: `HTTP/1.1`, `HTTP/2`).
    - **Ví dụ**: `GET /home HTTP/1.1`

- ***Request Headers***
    - Các header trong HTTP request cung cấp thông tin về client và yêu cầu. Bao gồm:
        - **General Headers**:
            - **Cache-Control**: Quy định bộ nhớ đệm (cache) cho yêu cầu, như `no-cache`.
            - **Connection**: Kiểm soát kết nối (vd: `keep-alive` để duy trì kết nối lâu hơn).

        
        - **Request Headers**:

            - `Host`: Tên miền của server (vd: `Host: example.com`).
            - `User-Agent`: Thông tin về client (trình duyệt, thiết bị).
            - `Accept`: Định dạng mong muốn từ server, như `application/json`.
            - `Accept-Language`: Ngôn ngữ ưu tiên của client.
            - `Accept-Encoding`: Phương pháp mã hóa mà client hỗ trợ.
            - `Referer`: URL dẫn đến yêu cầu hiện tại.
            - `Authorization`: Thông tin xác thực của client để đăng nhập.
            - `Cookie`: Dữ liệu phiên làm việc của client gửi kèm với mỗi request.

        
        - **Entity Headers**:

            - Thông tin về nội dung của request khi có dữ liệu đi kèm, chẳng hạn với `POST`, `PUT`:

                - `Content-Type`: Định dạng của dữ liệu (vd: `application/json`).

                - `Content-Length`: Độ dài dữ liệu tính bằng byte.

                - `Content-Encoding`: Kiểu mã hóa nội dung.

                - `Content-Language`: Ngôn ngữ nội dung.

                - `Content-MD5`: Hash MD5 của nội dung để xác nhận tính toàn vẹn dữ liệu.
                

- ***Request Body***
    - Dữ liệu chính được gửi đi trong body, thường là với các phương thức `POST`, `PUT`, và `PATCH`.
    - Có thể bao gồm JSON, XML, tệp tải lên, văn bản, hoặc các loại dữ liệu khác.

- ***Cookie (Dữ liệu Cookie)***
    - Client gửi các cookie đã nhận từ server trong các yêu cầu tiếp theo để duy trì phiên làm việc, chứa các thông tin như:

        - `sessionId`: Mã định danh phiên.

        - `Expires`: Ngày hết hạn của cookie.

        - `Domain`: Phạm vi mà cookie áp dụng.

        - `Path`: Đường dẫn mà cookie được gửi kèm.

        - `Secure`: Cookie chỉ gửi qua HTTPS.

        - `HttpOnly`: Cookie không thể truy cập từ JavaScript.


- ***Example HTTP request***:
```
GET /api/data HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: application/json
Accept-Language: en-US
Accept-Encoding: gzip, deflate
Authorization: Bearer eyJhbGciOi...
Cookie: sessionId=abc123; Path=/; Secure
```

---

## HTTP Response

- ***Status Line***
    - Dòng đầu tiên của HTTP response chứa:

        - **HTTP Version**: Phiên bản HTTP server sử dụng, như `HTTP/1.1`.

        - **Status Code**: Mã trạng thái thể hiện kết quả của yêu cầu HTTP từ client. Các loại phổ biến:

            - `1xx`: Thông tin (`Informational`) - Yêu cầu đã được tiếp nhận, cần thực hiện thêm các hành động.

            - `2xx`: Thành công (`Success`) - Yêu cầu đã được xử lý thành công (ví dụ: `200 OK`).

            - `3xx`: Chuyển hướng (`Redirection`) - Cần thêm các bước để hoàn tất yêu cầu (ví dụ: `301 Moved Permanently`).

            - `4xx`: Lỗi từ phía client (`Client Error`) - Yêu cầu có lỗi từ phía client (ví dụ: `404 Not Found`).

            - `5xx`: Lỗi từ phía server (`Server Error`) - Server gặp sự cố trong khi xử lý yêu cầu (ví dụ: `500 Internal Server Error`).
            
        - **Reason Phrase**: Mô tả ngắn gọn về mã trạng thái (ví dụ: `OK`, `Not Found`, `Internal Server Error`)**Ví dụ**: `HTTP/1.1 200 OK`



- ***Response Headers***
    - Các header chứa thông tin về server và dữ liệu phản hồi:

        - **General Headers**
            - **Cache-Control**: Xác định cách response được lưu trữ cache (ví dụ: `Cache-Control: no-cache`).
            
            - **Connection**: Quản lý kết nối (ví dụ: `keep-alive` để duy trì kết nối).

        - **Response Headers**

            - **Server**: Thông tin về server xử lý yêu cầu (vd: `Apache/2.4.1`).

            - **Date**: Thời gian server tạo ra response.

            - **Set-Cookie**: Cài đặt cookie để lưu trữ dữ liệu tạm thời hoặc thông tin phiên làm việc.


        - **Entity Headers**

            - Thông tin về nội dung của response:

                - `Content-Type`: Định dạng của nội dung (ví dụ: `text/html`, `application/json`).

                - `Content-Length`: Độ dài của nội dung tính bằng byte.

                - `Content-Encoding`: Mã hóa nội dung (ví dụ: gzip để nén dữ liệu).

                - `Content-Language`: Ngôn ngữ của nội dung (ví dụ: `en-US`).

                - `Last-Modified`: Ngày nội dung được sửa đổi lần cuối, hỗ trợ cache.

                - `ETag`: Chuỗi để định danh phiên bản nội dung, giúp phát hiện thay đổi dữ liệu.

                - `Expires`: Thời điểm hết hạn của response, giúp xác định thời điểm không còn hợp lệ.



        - **HTTP Headers for Security**

            - `Strict-Transport-Security`: Áp dụng cho HTTPS để ngăn chặn việc chuyển hướng đến HTTP.

            - `Content-Security-Policy`: Giới hạn nguồn tài nguyên mà trình duyệt có thể tải về.

            - `X-Frame-Options`: Ngăn chặn clickjacking (ví dụ: `DENY`, `SAMEORIGIN`).

            - `X-XSS-Protection`: Bảo vệ chống lại tấn công XSS (ví dụ: `1; mode=block`).


- ***Response Body***
    - Body là phần dữ liệu mà server trả về cho client và có thể chứa:

        - HTML của trang web

        - JSON hoặc XML cho dữ liệu API

        - File hoặc tài liệu (PDF, hình ảnh, v.v.)

        - Nội dung nhị phân như âm thanh hoặc video

- Tùy vào loại nội dung mà các tiêu đề (header) như Content-Type, Content-Encoding sẽ quyết định cách dữ liệu được xử lý.

- ***Cookie (Dữ liệu Cookie)***

    - Các cookie được cài đặt trong header Set-Cookie của response, chứa thông tin như:

        - Tên và giá trị cookie (ví dụ: `sessionId=abc123`).

        - `Expires` hoặc `Max-Age`: Thời hạn sống của cookie.

        - `Domain`: Tên miền mà cookie áp dụng.

        - `Path`: Đường dẫn của cookie.

        - `Secure`: Cookie chỉ được truyền qua HTTPS.
        
        - `HttpOnly`: Cookie không thể truy cập từ JavaScript, giúp bảo vệ chống XSS.

- ***Example HTTP response***:
```javascript
HTTP/1.1 200 OK
Date: Wed, 01 Nov 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 305
Set-Cookie: sessionId=abc123; Path=/; HttpOnly
Cache-Control: no-cache
Expires: Wed, 01 Nov 2024 13:00:00 GMT

<html>
  <head><title>Example Page</title></head>
  <body>
    <h1>Welcome to the Example Page</h1>
    <p>This is a sample HTTP response.</p>
  </body>
</html>
```

---

## Advantages
- **Phổ biến và dễ sử dụng**: HTTP là nền tảng của hầu hết các trang web và ứng dụng.
- **Dễ mở rộng**: HTTP hỗ trợ nhiều định dạng dữ liệu và phương thức mở rộng.
- **Tương thích đa nền tảng**: HTTP hoạt động trên mọi hệ điều hành và thiết bị có kết nối Internet.

---

## Disadvantages
  - **Không bảo mật**: HTTP không mã hóa dữ liệu, khiến dữ liệu có thể bị đánh cắp hoặc thay đổi nếu không sử dụng HTTPS.
  - **Hiệu suất thấp**: Với HTTP/1.1, client phải thiết lập và ngắt kết nối liên tục, ảnh hưởng đến hiệu suất. HTTP/2 và HTTP/3 đã cải thiện vấn đề này nhưng vẫn còn hạn chế trong một số trường hợp.
  - **Không lưu trạng thái**: Do HTTP là stateless, mỗi request cần gửi đủ thông tin mà không dựa vào thông tin từ các request trước.
---

## Applications of HTTP  
  HTTP là giao thức chính cho các ứng dụng web hiện đại, được sử dụng trong:
  - Truy cập trang web, tải nội dung như văn bản, hình ảnh, video từ server về client.
  - Trao đổi dữ liệu qua API, sử dụng các định dạng JSON hoặc XML.
  - Các ứng dụng truyền thông, tải file, và sử dụng các dịch vụ dựa trên mạng.

---

## Security with HTTPS  
  **HTTPS** là phiên bản bảo mật của HTTP, sử dụng SSL/TLS để mã hóa dữ liệu, giúp bảo vệ dữ liệu khỏi sự can thiệp của bên thứ ba. HTTPS được khuyến khích cho mọi trang web, đặc biệt là trang web liên quan đến bảo mật như ngân hàng và thanh toán trực tuyến.


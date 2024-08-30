# Concept

## Computer Network

- Mạng máy tính (Computer network) hay mạng viễn thông kỹ thuật số là 1 chỉnh thể bao gồm nhiều máy tính và những thiết bị khác nhau được liên kết bởi đường truyền vật lý theo 1 kiến trúc nhằm chia sẽ tài nguyên hoặc dữ liệu cho những người dùng sử dụng.
- Mạng máy tính có thể là mô hình nhiều máy tính kết nối với nhau và máy chủ trong một toà nhà, một căn phòng làm việc, một thành phố và rộng hơn là trên phạm vi toàn cầu.

## LAN

- LAN (Local Area Network) - Mạng cục bộ là một hệ thống mạng dùng để kết nối các máy tính trong một phạm vi nhỏ.
- Các máy tính trong LAN có thể chia sẻ tài nguyên với nhau, như chia sẻ tập tin, máy in, máy quét…

## WAN

- WAN (Wide Area Network) - Mạng diện rộng là hệ thống mạng cho phép truy cập internet trên phạm vi rộng lớn như vượt biên giới quốc gia, quốc tế.
- Bất kỳ nhóm mạng nào không nằm trong phạm vi gần nhau cục bộ đều tạo thành mạng WAN (Internet sử dụng hàng ngày cũng là WAN)

## MAN

- MAN (Metropolitan Area Network) là các mạng Lan kết nối lại với nhau thông qua dây cáp hoặc các phương tiện truyền dẫn khác.
- MAN thường dùng cho doanh nghiệp với nhiều chi nhanh khác nhau trong một thành phố.

## cURL

- cURL viết tắt của Client URL là một công cụ dòng lệnh (command line tool) dùng để kiểm tra kết nối từ URL và cho phép truyền dữ liệu.
- Có thể sử dụng lệnh cURL để upload và tải xuống nội dung từ internet.

## IP

- IP (Internet Protocol) là giao thức để định tuyến và xử lý gói dữ liệu để chúng có thể di chuyển qua các mạng máy tính và đến đích chính xác.
- Dữ liệu truyền qua Internet được chia thành các phần nhỏ hơn được gọi là các gói.
- Thông tin IP được đính kèm vào mỗi gói và thông tin này giúp các bộ định tuyến gửi các gói đến đúng nơi.

## Internet Protocol Address

- Địa chỉ IP là một mã định danh duy nhất được gán cho 1 thiết bị hoặc miền kết nối với Internet.
- Mỗi địa chỉ IP là 1 chuỗi ký tự, chẳng hạn ’192.168.1.1’
- Thông qua các bộ phân giải DNS, dịch các tên miền có thể đọc được của con người thành địa chỉ IP, nên sẽ truy cập được trang web mà không cần nhớ chuỗi ký tự phức tạp này.

## HTTP protocol

- Giao thức HTTP (Hypertext Transfer Protocol) còn là 1 giao thức Yêu cầu – Phản hồi dựa trên cấu trúc Client – Server.

## SSL

- SSL (Secure Sockets Layer) là tiêu chuẩn của công nghệ bảo mật, truyền thông mã hoá giữa máy chủ Web server và client.

## TSL

- TSL (Transport Layer Security) là giao thực mật mã cung cấp bảo mật đầu cuối cho data được gửi giữa các ứng dụng qua internet.
- TSL phát triển từ SSL.

## HTTPS

- Là giao thức HTTP nhưng sử dụng thêm các chứng chỉ SSL giúp mã hoá dữ liệu truyền tải nhằm bảo mật giữa Web sever đến các trình duyệt web, an toàn hơn, bảo mật hơn HTTP.

## XSS

- XSS (Cross-site scripting). Đây là một hình thức tấn công bằng mã độc phổ biến, lợi dụng lỗ hổng bảo mật web để chèn các mã script, sau đó gửi cho người dùng để truy cập và mạo danh người dùng.
- Tấn công XSS nghĩa là gửi chèn lệnh và script độc hại thường được viết bằng các ngôn ngữ khác nhau nhưng hầu hết là Javascript và HTML.

## TCP

- TCP (Transmission Control Protocol) là 1 giao thức mạng được sử dụng để truyền dữ liệu qua một mạng nào đó.
- TCP thường kết hợp với IP(giao thức Internet) để gọi theo cặp là TCP/IP.
- IP sẽ xử lý việc gán địa chỉ và chuyển tiếp các gói tin từ nguồn đến đích trong khi TCP kiểm soát độ tin cậy của truyền dẫn.

## DNS

- TCP (Transmission Control Protocol) là 1 giao thức mạng được sử dụng để truyền dữ liệu qua một mạng nào đó.
- TCP thường kết hợp với IP(giao thức Internet) để gọi theo cặp là TCP/IP.
- IP sẽ xử lý việc gán địa chỉ và chuyển tiếp các gói tin từ nguồn đến đích trong khi TCP kiểm soát độ tin cậy của truyền dẫn.

## UDP

- UDP (User Datagram Protocol) là một giao thức truyền tải được sử dụng rộng rãi.
- UDP nhanh hơn TCP, nhưng cũng kém tin cậy hơn.
- UDP không đảm bảo tất cả các gói được phân phối và theo thứ tự và nó không thiết lập kết nối trước khi bắt đầu nhận hoặc truyền.
- UDP/IP thường được sử dụng để truyền phát âm thanh hoặc video.

## Port

- Port là một khái niệm được sử dụng để xác định một kênh hoặc một điểm kết nối trên thiết bị mạng.
- Port là một số nguyên dương trong khoảng từ 0 đến 65535.
- Port 80 thường được sử dụng cho HTTP, port 443 thường được sử dụng trong HTTPS.

## Status Code

- Status code(Mã hoá trạng thái) là một số nguyên có 3 ký tự, trong đó ký tự đầu tiên của mã hoá trạng thái định nghĩa hạng(loại) phản hồi:
  - 1xx: Thông tin:
    - Nghĩa là yêu cầu đã được nhận và tiến trình đang tiếp tục.
  - 2xx: Thành công:
    - Nghĩa là hoạt động đã được nhận, được hiểu, và được chấp nhận một cách thành công.
  - 3xx: Sự điều hướng lại:
    - Nghĩa là hoạt động phải được thực hiển để hoàn thành yêu cầu.
  - 4xx: Lỗi client:
    - Nghĩa là yêu cầu chứa cú pháp không chính xác hoặc không được thực hiện.
  - 5xx: Lỗi server:
    - Nghĩa là Server thất bại với việc thực hiện một yêu cầu nhìn như có vẻ khả thi.

## FTP

## SMTP

## IoT

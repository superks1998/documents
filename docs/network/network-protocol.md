# Network Protocols

## Intro
- **Concept**:  
  - Giao thức mạng (Network Protocol) là tập hợp các quy tắc, tiêu chuẩn và thủ tục giúp cho các thiết bị mạng có thể giao tiếp và truyền dữ liệu với nhau một cách hiệu quả và an toàn.
  - Giao thức mạng quy định cách thức dữ liệu được đóng gói, truyền tải, nhận và xử lý giữa các thiết bị trên mạng.

- **Functionality**:  
  - Giao thức mạng chịu trách nhiệm chia nhỏ dữ liệu thành các gói (packet), định tuyến chúng qua mạng và đảm bảo chúng đến đích chính xác. Ngoài ra, giao thức mạng còn bao gồm các cơ chế để phát hiện và xử lý lỗi trong quá trình truyền dữ liệu, đảm bảo tính toàn vẹn và bảo mật của thông tin.
  
- **Common Protocols**:
  - **HTTP/HTTPS**: Giao thức truyền tải siêu văn bản, chủ yếu dùng trong việc truy cập các trang web. HTTPS là phiên bản bảo mật của HTTP, sử dụng mã hóa để bảo vệ dữ liệu.
  - **TCP/IP**: Giao thức kiểm soát truyền tải và giao thức Internet, là nền tảng của Internet. TCP/IP chia dữ liệu thành các gói và quản lý địa chỉ đích của chúng, đảm bảo dữ liệu đến nơi an toàn và đầy đủ.
  - **FTP**: Giao thức truyền tải tệp, được sử dụng để trao đổi tệp tin qua mạng.
  - **SMTP**: Giao thức truyền tải thư điện tử, cho phép gửi và nhận email.
  - **DNS**: Hệ thống tên miền, chuyển đổi địa chỉ IP sang tên miền và ngược lại.

- **Application**:  
  - Các giao thức mạng là nền tảng cho nhiều ứng dụng và dịch vụ trên Internet, bao gồm duyệt web, email, truyền tệp, truyền phát trực tuyến và trò chuyện trực tuyến. Chúng đảm bảo dữ liệu được truyền tải đúng cách và đến đúng địa chỉ.
  - `VD`: Khi người dùng truy cập một trang web, trình duyệt sử dụng giao thức HTTPS để yêu cầu dữ liệu từ máy chủ của trang web đó, giúp đảm bảo an toàn và bảo mật cho người dùng.

- **Security**:  
  - Các giao thức mạng đóng vai trò quan trọng trong bảo mật dữ liệu, đặc biệt là các giao thức có mã hóa như HTTPS và VPN. Giao thức bảo mật SSL/TLS cũng được tích hợp trong các giao thức khác để đảm bảo tính riêng tư và xác thực thông tin trong quá trình truyền tải.
  - `VD`: HTTPS sử dụng mã hóa SSL/TLS để bảo mật các thông tin nhạy cảm khi người dùng nhập mật khẩu hoặc thông tin thẻ tín dụng trên các trang web.

- **Importance**:  
  - Giao thức mạng đảm bảo sự ổn định, tính tương thích và hiệu quả trong việc kết nối giữa các thiết bị và mạng khác nhau. Các giao thức được thiết kế để hoạt động đa nền tảng, cho phép các thiết bị từ nhiều hãng khác nhau có thể giao tiếp với nhau.
  - `VD`: Trong một doanh nghiệp, các máy tính chạy các hệ điều hành khác nhau vẫn có thể trao đổi dữ liệu qua mạng nhờ các giao thức chung như TCP/IP.

## Common Protocols

### TCP/IP
  - **Concept**:  
    - TCP/IP (Transmission Control Protocol/Internet Protocol) là bộ giao thức chính cho phép các thiết bị mạng kết nối và giao tiếp qua Internet. TCP đảm bảo truyền tải dữ liệu ổn định, trong khi IP quản lý định tuyến các gói tin tới đúng địa chỉ đích.
  - **How it works**:  
    - **TCP** chia dữ liệu thành các gói nhỏ (packets), gửi chúng đi và đảm bảo tất cả gói được nhận đủ và đúng thứ tự. Nếu gói tin nào bị mất, TCP sẽ yêu cầu gửi lại.
    - **IP** sử dụng địa chỉ IP của nguồn và đích để định tuyến các gói tin, chọn tuyến đường tốt nhất dựa trên trạng thái mạng.
  - **Application**:  
    - Sử dụng để duyệt web, gửi email, truyền tải dữ liệu trong mạng nội bộ và trên Internet.
  - **Example**:  
    - Khi bạn truy cập một trang web, các gói dữ liệu được gửi qua giao thức TCP/IP từ máy chủ đến trình duyệt của bạn, giúp hiển thị nội dung website.

### HTTP/HTTPS
  - **Concept**:  
    - HTTP (Hypertext Transfer Protocol) là giao thức truyền tải dữ liệu không bảo mật, còn HTTPS (Hypertext Transfer Protocol Secure) là phiên bản bảo mật, mã hóa dữ liệu để bảo vệ người dùng khi trao đổi thông tin nhạy cảm.
  - **How it works**:  
    - **HTTP** gửi yêu cầu từ trình duyệt đến máy chủ web để lấy dữ liệu, sau đó trả về dữ liệu trang web.
    - **HTTPS** mã hóa yêu cầu và dữ liệu phản hồi, sử dụng SSL/TLS để đảm bảo chỉ người nhận hợp pháp mới giải mã được thông tin.
  - **Application**:  
    - Truy cập và tải trang web, đảm bảo bảo mật khi truy cập các trang yêu cầu thông tin nhạy cảm như thanh toán.
  - **Example**:  
    - Truy cập trang web thương mại điện tử qua HTTPS giúp bảo vệ thông tin thanh toán của bạn.

### FTP
  - **Concept**:  
    - FTP (File Transfer Protocol) là giao thức truyền tệp giữa các máy tính, thường được dùng để tải lên và tải xuống tệp từ máy chủ.
  - **How it works**:  
    - FTP kết nối hai máy tính (client và server) qua một kênh dữ liệu. Client có thể tải lên, tải xuống và quản lý tệp trên server nếu có quyền truy cập.
  - **Application**:  
    - Dùng để chia sẻ tệp lớn, sao lưu dữ liệu hoặc cập nhật tệp trên máy chủ.
  - **Example**:  
    - Một công ty sử dụng FTP để lưu trữ các bản sao lưu hoặc tài liệu quan trọng trên máy chủ.

### DNS
  - **Concept**:  
    - DNS (Domain Name System) chuyển đổi tên miền thành địa chỉ IP giúp dễ dàng truy cập trang web.
  - **How it works**:  
    - Khi bạn nhập một tên miền, trình duyệt sẽ gửi yêu cầu tới DNS server để nhận địa chỉ IP tương ứng. Sau đó trình duyệt kết nối đến địa chỉ IP này.
  - **Application**:  
    - Dùng để truy cập các trang web bằng cách nhập tên miền dễ nhớ thay vì địa chỉ IP.
  - **Example**:  
    - Nhập "www.google.com," DNS sẽ chuyển đổi thành địa chỉ IP của máy chủ Google.

### DHCP
  - **Concept**:  
    - DHCP (Dynamic Host Configuration Protocol) tự động cấp phát địa chỉ IP cho các thiết bị khi chúng kết nối vào mạng.
  - **How it works**:  
    - Khi thiết bị kết nối vào mạng, nó gửi yêu cầu tới máy chủ DHCP. Máy chủ sẽ cấp một địa chỉ IP chưa sử dụng cùng các thông số mạng khác.
  - **Application**:  
    - Quản lý và cấp phát địa chỉ IP động, giúp tiết kiệm thời gian và giảm thiểu lỗi cấu hình thủ công.
  - **Example**:  
    - Khi bạn kết nối vào Wi-Fi công cộng, DHCP cấp cho thiết bị của bạn một địa chỉ IP tạm thời để truy cập mạng.

### SSH
  - **Concept**:  
    - SSH (Secure Shell) là giao thức bảo mật cho phép quản trị viên kết nối và quản lý thiết bị từ xa qua mạng an toàn.
  - **How it works**:  
    - SSH tạo một kết nối mã hóa, sử dụng mã hóa công khai để xác thực người dùng và bảo vệ dữ liệu truyền tải.
  - **Application**:  
    - Quản trị hệ thống từ xa, đảm bảo bảo mật khi truy cập vào các máy chủ qua Internet.
  - **Example**:  
    - Quản trị viên dùng SSH để điều khiển máy chủ từ xa mà không lo về bảo mật.

### VPN
  - **Concept**:  
    - VPN (Virtual Private Network) tạo một kết nối an toàn trên Internet để truy cập vào các mạng riêng.
  - **How it works**:  
    - VPN mã hóa toàn bộ dữ liệu gửi đi qua Internet, cho phép truy cập mạng riêng từ xa an toàn.
  - **Application**:  
    - Duyệt web an toàn hoặc kết nối vào mạng doanh nghiệp từ xa.
  - **Example**:  
    - Nhân viên làm việc từ xa sử dụng VPN để truy cập mạng công ty bảo mật từ bên ngoài.

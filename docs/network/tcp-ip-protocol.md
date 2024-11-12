# TCP/IP Protocols

## Intro

    ![TCP/IP protocols suite](/img/network/tcp-ip-protocol.webp)

  - **TCP/IP** (Transmission Control Protocol/Internet Protocol) là bộ giao thức mạng cơ bản và phổ biến nhất được sử dụng để kết nối các thiết bị trên mạng và trên Internet. 
  - Nó được phát triển với mục tiêu tạo ra một hệ thống giao tiếp tin cậy giữa các máy tính khác nhau, từ mạng nội bộ (LAN) đến Internet toàn cầu.
  - Bộ giao thức này gồm hai phần chính:
    - **TCP (Transmission Control Protocol)**: Đảm bảo việc truyền dữ liệu một cách chính xác và tin cậy, chia nhỏ dữ liệu thành các gói tin (packets) và gửi đi, sau đó xác nhận từng gói tin đã đến đích an toàn.
    - **IP (Internet Protocol)**: Định tuyến các gói tin đến đúng đích thông qua các địa chỉ IP, quyết định đường đi tối ưu để chuyển dữ liệu qua nhiều mạng khác nhau.

## Structure

    ![TCP/IP protocols suite](/img/network/tcp-ip-structure.png)

  - **`TCP/IP`** hoạt động trên một kiến trúc gồm 4 lớp:
    1. **Lớp liên kết (Network access Layer)**: Chịu trách nhiệm kết nối phần cứng, truyền tải dữ liệu qua các kết nối vật lý như Ethernet hoặc Wi-Fi.
    2. **Lớp Internet (Internet Layer)**: Chịu trách nhiệm định tuyến và định danh thiết bị qua các địa chỉ IP.
    3. **Lớp vận chuyển (Transport Layer)**: Quản lý việc truyền dữ liệu giữa các thiết bị. TCP và UDP là hai giao thức chính của lớp này.
    4. **Lớp ứng dụng (Application Layer)**: Cung cấp giao diện cho các ứng dụng người dùng, ví dụ: HTTP/HTTPS, FTP, và DNS.

## Advantage
  - **Tin cậy và hiệu quả**: TCP/IP đảm bảo dữ liệu đến nơi an toàn và chính xác qua TCP, trong khi IP hỗ trợ định tuyến tối ưu.
  - **Tính mở và chuẩn hóa**: TCP/IP là một chuẩn mở và có thể hoạt động trên nhiều loại mạng và hệ điều hành khác nhau, giúp nó trở thành xương sống của Internet.
  - **Khả năng mở rộng cao**: TCP/IP có thể hoạt động từ mạng nhỏ đến mạng rất lớn như Internet.

## Application
  - **Truy cập Internet**: TCP/IP là nền tảng của việc truy cập và trao đổi thông tin trên Internet.
  - **Gửi email và truyền dữ liệu**: Hầu hết các dịch vụ email và truyền tải tệp đều sử dụng TCP/IP làm giao thức chính để gửi dữ liệu một cách tin cậy.
  - **Các dịch vụ mạng và máy chủ**: Hầu hết các máy chủ web, máy chủ tệp, và dịch vụ mạng đều chạy trên TCP/IP.

## Usage example
  - Khi người dùng truy cập vào một trang web, máy tính của họ sử dụng TCP/IP để gửi yêu cầu đến máy chủ web 
    - => TCP chia yêu cầu này thành các gói tin, gửi chúng qua IP đến máy chủ 
        - => Khi nhận được, máy chủ trả về dữ liệu của trang web, và TCP/IP sẽ đảm bảo các gói tin này đến đúng thứ tự để hiển thị trang web hoàn chỉnh.

## How it works

    ![TCP/IP how it works](/img/network/tcp-ip-how-works.png)

  - Khi dữ liệu cần được truyền từ một thiết bị này sang thiết bị khác qua mạng, **TCP** sẽ chia dữ liệu thành các gói tin nhỏ, gửi qua **IP** đến đích. Tại đích, **TCP** của thiết bị nhận sẽ sắp xếp lại các gói tin này theo đúng thứ tự và gửi lại cho ứng dụng yêu cầu.
  - **IP** giúp định tuyến các gói tin qua các router và mạng trung gian để tìm ra đường đi hiệu quả nhất từ thiết bị nguồn đến thiết bị đích.

## Protocols in the TCP/IP suite

    ![TCP/IP protocols suite](/img/network/tcp-ip-protocol-suite.png)

  - **IP** (Internet Protocol): Định tuyến và định danh thiết bị với địa chỉ IP.
  - **TCP** (Transmission Control Protocol): Truyền dữ liệu tin cậy, chia gói và xác nhận dữ liệu đã đến.
  - **UDP** (User Datagram Protocol): Truyền dữ liệu nhanh, không đảm bảo, phù hợp cho truyền phát trực tiếp.
  - **HTTP/HTTPS** (Hypertext Transfer Protocol/Secure): Truy cập và trao đổi dữ liệu trên web.
  - **FTP** (File Transfer Protocol): Truyền tệp qua mạng.
  - **SMTP** (Simple Mail Transfer Protocol): Gửi email.
  - **DNS** (Domain Name System): Chuyển đổi tên miền thành địa chỉ IP.

### TCP

- **Intro**
  - **TCP (Transmission Control Protocol)** là một trong những giao thức chính trong bộ TCP/IP, chuyên về truyền tải dữ liệu một cách tin cậy qua mạng. 
  - TCP đảm bảo rằng dữ liệu gửi đi được chia thành các gói tin nhỏ, được đánh số, truyền qua mạng, và được sắp xếp lại đúng thứ tự khi đến đích. 
  - TCP giúp phát hiện và xử lý các lỗi truyền tải bằng cách yêu cầu gửi lại những gói tin bị thất lạc.

- **How it works**

    ![TCP action](/img/network/tcp-action.jpg)


  - **`TCP`** sử dụng quá trình gọi là **three-way handshake** để thiết lập kết nối trước khi truyền dữ liệu, đảm bảo rằng cả hai thiết bị đều sẵn sàng và đã nhận diện được nhau.
    - **Bước 1**: Thiết bị gửi yêu cầu **SYN** (synchronize) đến thiết bị nhận để bắt đầu kết nối.
    - **Bước 2**: Thiết bị nhận phản hồi bằng một gói **SYN-ACK** (synchronize acknowledgment) để chấp nhận yêu cầu.
    - **Bước 3**: Thiết bị gửi hoàn tất bằng một gói **ACK** (acknowledgment) để xác nhận kết nối đã thiết lập thành công.
  - Sau khi thiết lập kết nối, dữ liệu được chia thành các gói nhỏ, đánh số, và gửi đi. Mỗi gói đều có phần kiểm tra lỗi, và thiết bị nhận sẽ gửi lại thông báo xác nhận cho từng gói nhận thành công. Nếu một gói bị mất hoặc có lỗi, TCP sẽ yêu cầu gửi lại gói đó.

- **Advantage**
  - **Đảm bảo độ tin cậy**: TCP đảm bảo rằng dữ liệu đến đúng đích mà không bị mất gói, thiếu dữ liệu, hoặc lộn xộn.
  - **Kiểm soát lỗi**: TCP tự động phát hiện lỗi và yêu cầu gửi lại gói tin nếu cần thiết.
  - **Quản lý lưu lượng**: Điều chỉnh tốc độ truyền dữ liệu tùy theo tình trạng của mạng, giúp giảm tình trạng quá tải.

- **Application**
  - **Duyệt web**: Các trình duyệt web sử dụng TCP để kết nối và tải nội dung từ máy chủ một cách đáng tin cậy.
  - **Email**: Hầu hết các dịch vụ email sử dụng TCP để truyền tải email một cách an toàn và không mất mát.
  - **Truyền tệp và tải lên/tải xuống**: TCP đảm bảo dữ liệu tệp được truyền tải đúng thứ tự và đầy đủ.

- **Usage example**
  - Khi người dùng tải một trang web, TCP chia dữ liệu của trang thành nhiều gói tin và gửi từng gói theo thứ tự. Nếu bất kỳ gói tin nào gặp lỗi, TCP sẽ yêu cầu gửi lại gói đó cho đến khi trang web được tải đầy đủ và hiển thị chính xác.

- **Configuration and Usage**
  - **Cấu hình trên server và client**: TCP thường được cấu hình mặc định trên cả server và client trong các giao thức truyền tải tin cậy, như HTTP, FTP, và SMTP.
  - **Không cần cấu hình thêm**: Hầu hết các dịch vụ và ứng dụng mặc định sử dụng TCP nếu yêu cầu độ tin cậy và thứ tự, do đó thường không cần cấu hình thêm khi sử dụng.

### UDP

- **Intro**  
  - **UDP (User Datagram Protocol)** là một giao thức truyền tải trong bộ TCP/IP, được thiết kế để truyền dữ liệu nhanh chóng mà không cần đảm bảo độ tin cậy hoặc thứ tự. 
  - Khác với TCP, UDP không thiết lập kết nối trước khi truyền và không yêu cầu xác nhận từ phía nhận. 
  - Điều này giúp UDP phù hợp với các ứng dụng ưu tiên tốc độ truyền tải hơn độ tin cậy và thứ tự dữ liệu.

- **How It Works**  

    ![UDP how works](/img/network/udp-how-works.png)


  - UDP gửi các gói dữ liệu (**datagrams**) trực tiếp đến đích mà không cần thực hiện quá trình **three-way handshake** như TCP. 
  - Các gói tin được truyền độc lập, không có xác nhận từ phía nhận, và không kiểm tra hoặc sửa lỗi từng gói. 
  - Nếu một gói tin bị mất hoặc lỗi, nó sẽ không được gửi lại.

- **Advantages**  
  - **High-Speed Transmission**: UDP ít tốn thời gian hơn do không cần thiết lập kết nối hoặc kiểm tra lỗi.
  - **Lower Bandwidth Usage**: Không yêu cầu xác nhận từng gói, giúp giảm băng thông.
  - **Real-Time Data**: UDP thích hợp cho truyền tải dữ liệu thời gian thực, như video streaming hoặc trò chơi trực tuyến, nơi mất một vài gói tin không làm gián đoạn đáng kể trải nghiệm người dùng.

- **Applications**  
  - **Video and Audio Streaming**: Các dịch vụ phát trực tuyến yêu cầu truyền tải nhanh chóng và liên tục, ví dụ như YouTube Live hoặc các ứng dụng truyền hình trực tiếp.
  - **Online Gaming**: Các trò chơi yêu cầu phản hồi nhanh như bắn súng hoặc đua xe sử dụng UDP để giảm độ trễ.
  - **DNS (Domain Name System)**: DNS sử dụng UDP để gửi truy vấn tên miền, giúp tiết kiệm thời gian tra cứu địa chỉ IP.

- **Example of Use**  
  - Khi người dùng xem một buổi phát trực tiếp, UDP truyền dữ liệu video liên tục và nếu có một vài gói bị mất, dữ liệu sẽ không được gửi lại, giúp giảm độ trễ.

- **Configuration and Usage**  
  - **Using UDP in Applications**: Để sử dụng UDP, cả client và server phải hỗ trợ UDP, và ứng dụng cần được thiết kế để sử dụng giao thức này cho truyền tải dữ liệu không yêu cầu độ tin cậy cao.
  - **Socket Programming**: UDP được sử dụng qua các socket UDP bằng cách chỉ định giao thức là UDP khi tạo socket truyền tải.

- **Comparison with TCP**  

    ![TCP vs DCP](/img/network/tcp-vs-udp.svg)

  - **Reliability**: TCP có khả năng kiểm tra lỗi và yêu cầu gửi lại gói tin, trong khi UDP thì không, vì vậy TCP thích hợp cho các ứng dụng yêu cầu độ tin cậy cao (như tải file), còn UDP ưu tiên tốc độ và hiệu quả trong các ứng dụng không cần tính toàn vẹn của tất cả dữ liệu.
  - **Connection**: TCP là giao thức hướng kết nối (connection-oriented), trong khi UDP là giao thức không kết nối (connectionless).
  - **Performance**: UDP thường nhanh hơn TCP vì không phải thực hiện các bước thiết lập kết nối và xác nhận gói tin.

- **Broadcast, Unicast, and Multicast**  
  - **Broadcast**: UDP hỗ trợ broadcast, cho phép gửi gói dữ liệu đến tất cả các thiết bị trong mạng cùng một lúc. Điều này hữu ích trong các mạng LAN khi cần gửi thông tin tới tất cả thiết bị.
  - **Unicast**: Là cách truyền dữ liệu đến một địa chỉ IP cụ thể, áp dụng cho cả UDP và TCP, để đảm bảo dữ liệu chỉ gửi đến một thiết bị nhất định.
  - **Multicast**: UDP có thể sử dụng multicast để gửi dữ liệu đến một nhóm thiết bị trong mạng, tiết kiệm băng thông hơn broadcast trong các ứng dụng yêu cầu truyền tải cho nhiều người nhận.


### IP

- **Introduction**

    ![IP intro](/img/network/ip-intro.jpeg)

    - **IP Protocol** (Internet Protocol) là giao thức chịu trách nhiệm định tuyến các gói dữ liệu từ nguồn đến đích trong mạng. Là phần cốt lõi của bộ giao thức TCP/IP, IP đóng vai trò là nền tảng cho việc truyền tải dữ liệu qua Internet.
    - Trong **`IP`**, mỗi thiết bị được gán một **địa chỉ IP** duy nhất giúp xác định vị trí của nó trong mạng, giúp các gói dữ liệu đến đúng đích.

- **Scope**
    - **IP** hoạt động trong lớp Network của mô hình TCP/IP, chịu trách nhiệm chính trong việc định tuyến và giao nhận dữ liệu trên các mạng cục bộ (LAN) hoặc mạng diện rộng (WAN).

- **How It Works**
    - **Chia nhỏ dữ liệu thành các gói tin**: Dữ liệu được chia thành các gói nhỏ gọi là packet. Mỗi packet chứa địa chỉ IP nguồn và địa chỉ IP đích.
    - **Định tuyến các gói tin**: Các router trong mạng sử dụng địa chỉ IP để xác định đường đi tối ưu cho mỗi packet, giúp packet đến đích một cách hiệu quả.
    - **Lắp ráp lại dữ liệu**: Khi các packet đến đích, chúng được lắp ráp lại thành dữ liệu gốc để phục vụ cho các ứng dụng.

- **Versions**
    1. **IPv4**: Phiên bản IP đầu tiên và vẫn phổ biến, sử dụng địa chỉ 32-bit (có dạng `192.168.1.1`), cho phép tối đa khoảng 4.3 tỷ địa chỉ IP.
    2. **IPv6**: Được phát triển để thay thế IPv4 do giới hạn địa chỉ, IPv6 sử dụng địa chỉ 128-bit (có dạng `2001:0db8:85a3:0000:0000:8a2e:0370:7334`), cho phép số lượng địa chỉ lớn hơn nhiều.

- **Features**
    - **Connectionless**: IP không yêu cầu thiết lập kết nối trước khi gửi dữ liệu, giúp giảm độ trễ.
    - **Không đảm bảo**: IP không đảm bảo rằng các gói tin sẽ đến đích hoặc sẽ đến theo đúng thứ tự. Các dịch vụ như TCP sẽ bổ sung tính năng kiểm soát lỗi và đảm bảo thứ tự khi cần.

- **Advantage**
    - **Khả năng mở rộng**: IP có khả năng định tuyến cho hàng triệu thiết bị trên toàn cầu.
    - **Tối ưu hóa**: IP kết hợp với các giao thức khác để tối ưu hóa việc truyền tải dữ liệu.

- **Disadvantage**
    - **Không đảm bảo**: IP không cung cấp cơ chế xác nhận hoặc phục hồi lỗi, nên không đảm bảo dữ liệu sẽ đến đích đầy đủ hoặc không bị lỗi.
    - **Bị giới hạn địa chỉ trong IPv4**: IPv4 chỉ cung cấp một lượng địa chỉ IP hữu hạn, dẫn đến việc phải chuyển sang IPv6 để hỗ trợ nhu cầu ngày càng tăng.

- **Application**

    ![IP example](/img/network/ip-example.png)

    - **Internet Communication**: IP là nền tảng để truyền tải dữ liệu trên Internet, cho phép các ứng dụng và dịch vụ trực tuyến giao tiếp với nhau.
    - **Mạng nội bộ (LAN)**: Địa chỉ IP cũng được sử dụng trong các mạng cục bộ để định danh và giao tiếp giữa các thiết bị trong cùng một mạng.

- **Example**
    - Khi một người dùng truy cập trang web, IP định tuyến các gói tin từ máy tính của người dùng đến máy chủ chứa trang web đó và ngược lại, đảm bảo dữ liệu truyền tải đến đúng địa chỉ đích.


### FTP

- **Introduction**

    ![FTP intro](/img/network/ftp-intro.png)

    - **FTP** (File Transfer Protocol) là một giao thức mạng tiêu chuẩn được thiết kế để truyền tải các tệp (files) từ máy chủ (server) đến máy khách (client) hoặc ngược lại qua mạng TCP/IP. 
    - **FTP** là một trong những giao thức truyền tải file lâu đời và phổ biến nhất, được sử dụng rộng rãi cho việc chia sẻ và quản lý dữ liệu giữa các thiết bị trong mạng.

- **Scope**
    - **FTP** hoạt động ở lớp ứng dụng trong mô hình TCP/IP và thường được dùng để trao đổi dữ liệu trong nội bộ công ty, chia sẻ tệp giữa các nhân viên hoặc để khách hàng tải về các file từ máy chủ công cộng.

- **How It Works**

    ![FTP action](/img/network/ftp-action.png)

    1. **Kết nối điều khiển và truyền tải dữ liệu**: 
        - FTP thiết lập hai kết nối riêng biệt: một kết nối điều khiển (control connection) để quản lý phiên làm việc và một kết nối truyền tải (data connection) để truyền tải dữ liệu.
    2. **Tương tác giữa client và server**: 
        - Client gửi yêu cầu đến server, sau đó server phản hồi và thực hiện các lệnh như tải lên (upload) hoặc tải xuống (download).
    3. **Chế độ truyền tải**: 
        - FTP có hai chế độ truyền tải là chế độ chủ động (active mode) và chế độ bị động (passive mode). 
            - Trong chế độ chủ động, server mở một cổng và chờ client kết nối. 
            - Trong chế độ bị động, client mở cổng và server kết nối lại, giúp tránh các vấn đề bảo mật với tường lửa.

- **Features**
    - **Authentication**: FTP có cơ chế xác thực người dùng bằng cách yêu cầu tên người dùng (username) và mật khẩu (password).
    - **Đa dạng phương thức truyền tải**: Hỗ trợ tải lên và tải xuống nhiều loại tệp, cũng như quản lý thư mục từ xa (remote directory management).
    - **Khả năng tiếp tục truyền tải**: Cho phép tiếp tục truyền tải từ vị trí dừng trước đó khi bị ngắt kết nối.

- **Advantage**
    - **Dễ sử dụng**: FTP hỗ trợ giao diện thân thiện với người dùng, giúp việc tải lên và tải xuống dễ dàng.
    - **Quản lý thư mục từ xa**: Người dùng có thể truy cập, sửa đổi, hoặc xóa tệp/thư mục trên server từ xa.

- **Disadvantage**
    - **Bảo mật kém**: FTP không mã hóa dữ liệu, bao gồm cả tên người dùng và mật khẩu, khiến nó dễ bị đánh cắp thông tin. SFTP hoặc FTPS có thể được dùng để tăng tính bảo mật.
    - **Phụ thuộc vào cấu hình mạng**: Chế độ chủ động FTP có thể bị chặn bởi tường lửa, gây khó khăn khi truyền tải qua các hệ thống bảo mật nghiêm ngặt.

- **Application**
    - **Truyền tải và sao lưu dữ liệu**: Dùng để sao lưu dữ liệu giữa các máy chủ, tải lên các bản cập nhật phần mềm và lưu trữ dữ liệu.
    - **Website Hosting**: Sử dụng để tải lên và quản lý các tệp website trên các máy chủ lưu trữ web.
    - **Chia sẻ tệp nội bộ**: Được sử dụng trong các tổ chức để chia sẻ tệp qua mạng nội bộ hoặc giữa các văn phòng.

- **Example**
    - Khi một nhà phát triển web cập nhật website, họ sử dụng FTP để tải lên các file mới từ máy tính cá nhân lên máy chủ web.
    - Các công ty có thể sử dụng FTP để lưu trữ các tài liệu quan trọng trên máy chủ công ty, giúp nhân viên truy cập từ xa một cách dễ dàng.

### SMTP

- **Introduction**

    ![SMTP intro](/img/network/smtp-intro.webp)

    - **SMTP** (Simple Mail Transfer Protocol) là giao thức tiêu chuẩn để gửi email qua mạng Internet. SMTP chịu trách nhiệm chuyển email từ máy gửi đến máy chủ email và sau đó tới máy chủ nhận. Giao thức này hỗ trợ gửi email theo các tiêu chuẩn để đảm bảo tính chính xác và an toàn của quá trình truyền tải.

- **Scope**
    - SMTP được sử dụng rộng rãi bởi các dịch vụ email, doanh nghiệp, và tổ chức để truyền tải email. Nó là thành phần cơ bản trong hệ thống email và hoạt động chủ yếu trong môi trường Internet và mạng nội bộ.

- **How It Works**

    ![SMTP action](/img/network/smtp-action.png)

    - SMTP thiết lập kết nối giữa máy gửi và máy nhận thông qua các lệnh chuẩn, bao gồm xác thực người gửi, gửi nội dung email, và xử lý các yêu cầu phản hồi.
    - Quá trình bắt đầu từ máy gửi (SMTP client) gửi yêu cầu đến máy chủ SMTP (SMTP server), sau đó server xác nhận và chuyển tiếp email đến server đích hoặc tiếp tục chuyển đến một server trung gian nếu cần.
    - Các máy chủ đích sẽ nhận email và lưu trữ để người nhận có thể truy cập thông qua các giao thức như IMAP hoặc POP3.

- **Features**
    - **Gửi email**: SMTP cung cấp khả năng gửi email từ người gửi đến người nhận qua các mạng khác nhau.
    - **Xác thực**: SMTP hỗ trợ xác thực người gửi để đảm bảo rằng chỉ những người dùng hợp lệ mới có thể gửi email.
    - **Chuyển tiếp và định tuyến**: SMTP có thể chuyển tiếp email thông qua các server trung gian khi cần thiết, giúp chuyển phát email đến đích cuối cùng.

- **Advantage**
    - **Khả năng truyền tải nhanh chóng**: SMTP cho phép gửi email đến người nhận gần như ngay lập tức qua các mạng.
    - **Dễ sử dụng và triển khai**: SMTP là giao thức phổ biến, dễ tích hợp vào các ứng dụng email.
    - **Tính năng xác thực**: Đảm bảo chỉ những người dùng hợp lệ mới có thể gửi email, giúp tăng cường bảo mật.

- **Disadvantage**
    - **Bảo mật hạn chế**: SMTP không mã hóa dữ liệu theo mặc định, làm cho thông tin email có thể bị xem trộm nếu không bảo vệ.
    - **Không hỗ trợ tệp đính kèm lớn**: SMTP có giới hạn về kích thước email, điều này gây khó khăn khi gửi các tệp lớn.
    - **Khả năng bị spam**: SMTP có thể bị lạm dụng để gửi spam nếu không có biện pháp bảo mật hiệu quả.

- **Application**
    - **Dịch vụ email**: SMTP được sử dụng bởi các nhà cung cấp dịch vụ email như Gmail, Yahoo Mail, Outlook để gửi email.
    - **Hệ thống doanh nghiệp**: SMTP được dùng để gửi các thông báo, cảnh báo, và cập nhật nội bộ trong các tổ chức.
    - **Ứng dụng web**: Các ứng dụng web thường sử dụng SMTP để gửi email xác thực, khôi phục mật khẩu, và các thông báo đến người dùng.

- **Example**
    - Khi một người dùng gửi email qua Gmail, SMTP chuyển email từ máy tính của người gửi đến máy chủ Gmail và sau đó đến máy chủ của người nhận, nơi người nhận có thể đọc email.
    - Một hệ thống quản lý khách hàng (CRM) có thể sử dụng SMTP để gửi các bản tin tự động cho khách hàng về sản phẩm mới.

### DNS

- **Introduction**

    ![DNS intro](/img/network/dns-intro.jpg)

  - **DNS** (Domain Name System) là hệ thống phân giải tên miền, đóng vai trò chuyển đổi tên miền dễ nhớ (ví dụ: www.example.com) thành địa chỉ IP của máy chủ chứa nội dung website. Nhờ đó, người dùng có thể truy cập các trang web bằng tên miền thay vì phải nhớ các chuỗi số địa chỉ IP.

- **Scope**
  - DNS là một phần thiết yếu của Internet và mạng nội bộ, cho phép việc truy cập các tài nguyên mạng dễ dàng hơn. Nó hoạt động trên quy mô toàn cầu, hỗ trợ mọi thiết bị có khả năng kết nối mạng.

- **How It Works**

    ![DNS action](/img/network/dns-action.png)


  - Khi người dùng nhập một tên miền vào trình duyệt, DNS sẽ bắt đầu quá trình tìm kiếm địa chỉ IP tương ứng.
    - **Truy vấn DNS**: Trình duyệt gửi truy vấn đến máy chủ DNS gần nhất để yêu cầu địa chỉ IP của tên miền.
    - **Phân giải**: Máy chủ DNS sẽ tìm kiếm địa chỉ IP thông qua các máy chủ khác nhau (máy chủ gốc, máy chủ TLD, và máy chủ có thẩm quyền) cho đến khi tìm được địa chỉ IP cần thiết.
    - **Phản hồi**: Máy chủ DNS gửi lại địa chỉ IP cho trình duyệt, và từ đó trình duyệt kết nối đến máy chủ đích để tải nội dung website.

- **Features**
  - **Phân giải tên miền**: Chuyển đổi tên miền thành địa chỉ IP, giúp việc truy cập Internet dễ dàng hơn.
  - **Phân cấp hệ thống**: DNS được xây dựng theo cấu trúc phân cấp, với các máy chủ gốc, máy chủ TLD, và máy chủ có thẩm quyền để tối ưu hóa quá trình tìm kiếm.
  - **Lưu trữ và bộ nhớ đệm**: Máy chủ DNS có thể lưu trữ các bản ghi để cải thiện tốc độ phân giải và giảm tải cho các máy chủ khác.

- **Advantage**
  - **Dễ dàng sử dụng**: Người dùng chỉ cần nhớ tên miền thay vì địa chỉ IP phức tạp.
  - **Tăng hiệu suất**: Bộ nhớ đệm giúp giảm thời gian truy vấn và tăng tốc độ truy cập.
  - **Phân cấp rõ ràng**: Hệ thống phân cấp giúp DNS hoạt động hiệu quả và giảm tải cho các máy chủ.

- **Disadvantage**
  - **Khả năng bị tấn công**: DNS dễ bị tấn công DDoS, DNS spoofing, và cache poisoning.
  - **Phụ thuộc vào máy chủ**: Nếu máy chủ DNS gặp sự cố, truy cập Internet sẽ bị gián đoạn.
  - **Độ trễ**: Đôi khi có thể xảy ra độ trễ khi phân giải tên miền, đặc biệt là với tên miền mới hoặc chưa được lưu trữ trong bộ nhớ đệm.

- **Application**
  - **Truy cập website**: DNS là thành phần thiết yếu để truy cập các trang web.
  - **Dịch vụ mạng nội bộ**: DNS hỗ trợ phân giải tên trong mạng nội bộ của doanh nghiệp.
  - **Ứng dụng IoT**: Các thiết bị IoT sử dụng DNS để kết nối và giao tiếp trên mạng.

- **Example**
  - Khi người dùng truy cập "www.google.com", trình duyệt sẽ gửi truy vấn DNS để tìm địa chỉ IP của Google. Sau khi nhận được phản hồi, trình duyệt có thể kết nối đến máy chủ của Google để hiển thị nội dung trang web.
  - Một công ty sử dụng DNS nội bộ để phân giải các tên miền trong mạng cục bộ, giúp nhân viên truy cập dễ dàng các tài nguyên nội bộ như file server và máy chủ ứng dụng.
## Hướng dẫn phần tính toán ngày tháng

Giả sử, bạn sinh nhật vào __ngày 29 tháng 2__. Bạn muốn thêm sự kiện nhắc sinh nhật vào __ngày cuối của tháng 2__ bởi vì năm nhuận thì tháng 2 mới có __29 ngày__. Bạn muốn sinh nhật của mình sẽ rơi vào __ngày 28 của tháng 2 năm không nhuận__ và __ngày 29 của tháng 2 năm nhuận__ nhưng các ứng dụng lịch khác không làm được.

Từ những vấn đề đó, ứng dụng của mình đã cung cấp giải pháp dành cho bạn. Ở mục __"Ngày bắt đầu"__, __"Ngày kết thúc"__, có phần __[ + 00 ngày ]__, __"+ 01 ngày"__. Nếu bạn muốn sự kiện sẽ __xảy ra vào ngày cuối cùng của tháng 2__ thì bạn hãy nhập vào như sau: __[ Ngày 01 | Tháng 03 ]__ __[- 01 Ngày ]__ thì sự kiện sẽ rơi vào ngày cuối cùng của tháng trước.

Tương tự với __"đêm giao thừa"__, đâu phải năm nào giao thừa cũng rơi vào __[ Ngày 30 | Tháng 12 ]__ phải không nào? Vậy nên, ta có thể nhập vào là: __[ Ngày 01 | Tháng 01 ]__  __[ - 01 Ngày ]__, dịch ra có nghĩa là __ngày 01 tháng 01__ tết âm __trừ đi 1 ngày__.

## Các trường hợp khác

- Âm lịch thì chỉ có 29 hoặc 30 ngày cho một tháng. Vậy nên, nếu bạn nhập vào ngày 31 cho sự kiện âm lịch thì cũng không sao, ứng dụng sẽ tự động tính toán và loại bỏ sự kiện đó và không gây ra lỗi tính toán.

- Nếu dương lịch bạn nhập thời gian bắt đầu lớn hơn thời gian kết thúc thì ứng dụng sẽ ngầm hiểu là sự kiện bắt đầu từ năm nay và __kết thúc vào năm sau__. Ví dụ bạn nhập vào:
  - Bắt đầu:  __01/12 + 00 ngày__.
  - Kết thúc: __10/01 + 00 ngày__.
  - __=>__ Ứng dụng sẽ hiểu là sự kiện bắt đầu ngày __01/12/2024__ và kết thúc ngày __10/01/2025__ (Tương tự với các năm khác).

- Nếu bạn nhập vào:
  - Bắt đầu: __15/02 + 00 ngày__
  - Kết thúc: __16/02 - 05 ngày__
  - __=>__ Sự kiện này sẽ không bao giờ xảy ra được bởi vì thời gian sau khi sự kiện được tính toán là __15/02 + 00 ngày = 12/02__ lớn hơn ngày kết thúc là __16/02 - 05 ngày = 11/01__ (__12/02 > 11/01__).

  
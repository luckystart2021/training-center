import headerTitle from "../../src/components/headerTitle";
import UserTemplate from "../../src/containers/UserTemplate";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
const headerData = {
  title: "Tin Tức",
};
const popularPosts = [
  {
    id: "1",
    idUser: "1",
    categories: "1",
    title: "Bỏ túi những lưu ý cần thiết khi thi bằng lái xe ô tô B2 năm 2021",
    description:
      "Không quá khó để tìm kiếm cho mình một địa chỉ học bằng lái xe ô tô B2 phù hợp mà điều quan trọng là làm thế nào có được kết quả thi tốt khi học lái xe ô tô B2. Để giúp cho các học viên có được kết quả tốt khi thi Trung tâm Hoàng Gia xin chia sẻ đến bạn bài viết sau đây. Theo dõi ngay để biết được những lưu ý đó là gì nhé.",
    details: `<div class="content-post">
        <p>&nbsp;</p>
    
    <p><meta charset="utf-8"></p>
    
    <h2 dir="ltr" style="text-align: justify;"><strong>Tuân thủ theo những hướng dẫn của giáo viên</strong></h2>
    
    <p dir="ltr" style="text-align: justify;">Để có được kết quả học tập tốt và tỷ lệ thi đỗ bằng lái xe ô tô B2 thì trước tiên bạn phải tuân thủ nghiêm túc những bước hướng dẫn của giảng viên. Bởi họ là những người có kinh nghiệm nên những mẹo tránh bị trượt, những lỗi sai cần quan tâm đều rất hữu ích trong suốt quá trình học lái xe ô tô của bạn.&nbsp;</p>
    
    <h2 dir="ltr" style="text-align: justify;"><strong>Không đóng thêm bất cứ khoản phí nào cho giáo viên</strong></h2>
    
    <p dir="ltr" style="text-align: justify;">Những cơ sở đào tạo không uy tín thường thuê những giáo viên không có nhiều kinh nghiệm và đôi khi những giáo viên đó còn có hiện tượng vòi tiền của học viên khi giảng dạy.&nbsp;</p>
    
    <p dir="ltr" style="text-align: justify;">Trong quá trình học lái xe ô tô B2, một số chi phí giáo viên đề nghị như xăng xe, thuê xe, thuê sân tập không đúng với đề nghị mà bạn đã trao đổi với trung tâm thì không nên đóng. Những lúc thế này hãy liên hệ ngay với trung tâm đăng ký để tránh bị mất tiền không đáng.&nbsp;</p>
    
    <h2 dir="ltr" style="text-align: justify;"><strong>Khi đi học trang phục phải gọn gàng</strong></h2>
    
    <p dir="ltr" style="text-align: justify;">Khi đi thi hay đi học thực hành bằng lái xe ô tô B2 bạn cần chú ý lựa chọn những trang phục gọn gàng để tránh gặp phải nguy hiểm hoặc cản trở khi điều khiển xe. Đặc biệt, học viên đi giày dép bệt để học lái xe đảm bảo an toàn và hiệu quả, tránh đi giày cao gót nhé.</p>
    
    <h2 dir="ltr" style="text-align: justify;"><strong>Cảnh giác những quảng cáo hấp dẫn giá rẻ</strong></h2>
    
    <p dir="ltr" style="text-align: justify;">Rất nhiều đơn vị đào tạo thi bằng lái xe ô tô B2 thu hút học viên bằng cách tung ra các chiêu trò quảng cáo với những nội dung vô cùng hấp dẫn, không có thật trong các khóa học hoặc nếu có thì học viên phải đóng thêm tiền học.&nbsp;</p>
    
    <p dir="ltr" style="text-align: justify;">Vì thế trước những quảng cáo hấp dẫn giá rẻ bạn cần hết sức tỉnh táo tránh được tình trạng “tiền mất tật mang”. Với một khóa học lái xe ô tô bằng B2 từ 7 - 9 triệu không thể đáp ứng được đầy đủ điều kiện học tập cũng như chất lượng vì thế đừng vội tin mà hãy cảnh giác và tìm hiểu thật kỹ.&nbsp;</p>
    
    <h2 dir="ltr" style="text-align: justify;"><strong>Đọc kỹ hợp đồng trước khi đặt bút ký</strong></h2>
    
    <p dir="ltr" style="text-align: justify;">Nhằm tránh những tổn thất hoặc những chiêu trò của các cơ sở đào tạo dạy lái xe không uy tín, bạn nên trao đổi và tìm hiểu kỹ về chất lượng của trung tâm đó. Ngoài ra, bạn cũng phải đọc kỹ các cam kết trong hợp đồng rồi mới đặt bút ký. Đây cũng chính là cách mà bạn bảo vệ quyền lợi cho mình.</p>
    
    <p dir="ltr" style="text-align: justify;">Trung tâm Hoàng Gia địa chỉ thi sát hạch lái xe ô tô uy tín, chất lượng tại TP. Hồ Chí Minh nơi tin cậy giúp bạn có được GPLX chất lượng, đạt kết quả cao. Liên hệ ngay với chúng tôi theo số hotline <strong>(028) 38305555 - (028) 38306666</strong> để được tư vấn chi tiết hơn về khóa học lái xe ô tô B2.</p>
          
    </div>`,
    image:
      "https://trungtamhoanggia.com/Images/News/trungtamhoanggia_bo-tui-nhung-luu-y-can-thiet-khi-thi-bang-lai-xe-o-to-b2-nam-2021_full_16042021_110434.png",
    meta_url:
      "bo-tui-nhung-luu-y-can-thiet-khi-thi-bang-lai-xe-o-to-b2-nam-2021",
    keywordSEO:
      "chi phí thi bằng lái xe B2,chi phí thi bằng lái xe,học lái xe ô tô,thi bằng lái xe,thi bằng b2,trung tâm hoàng gia,trường dạy lái xe,đào tạo lái xe,đào tạo lái xe B1,đào tạo lái xe B2",
    view: "10000",
    tags: ["B2", "Lái Xe", "Luật"],
    create_by: "Pham Dong",
    create_date: "Wed Feb 10 2021",
    modify_by: "",
    modify_date: "",
    status: false,
    isDeleted: false,
  },
  {
    id: "2",
    idUser: "1",
    categories: "1",
    title: "CÁC KHOẢN PHÍ CẦN NỘP KHI THI BẰNG LÁI XE B1 NĂM 2021",
    description:
      "Khi học bằng lái xe ô tô B1 học viên cần nộp những khoản phí nào? Hãy cùng Trung tâm Hoàng Gia điểm nhanh qua bài viết sau đây để trả lời thắc mắc này của bạn nhé.",
    details: `<div class="content-post">
    <p>&nbsp;</p>

<p><meta charset="utf-8"></p>

<h2 dir="ltr" style="text-align: justify;"><strong>Các khoản phí phải nộp khi thi bằng B1</strong></h2>

<p dir="ltr" style="text-align: justify;">Khi đóng tiền học lái xe ô tô B1 năm 2021 bạn cần nắm rõ những khoản phí mà mình cần phải nộp là gì? Và cụ thể là bao nhiêu? Sau đây là các khoản phí phải nộp khi thi bằng lái xe ô tô B1.</p>

<ul>
<li aria-level="1" dir="ltr">
<p dir="ltr" role="presentation" style="text-align: justify;">Phí hồ sơ đăng ký học và thi sát hạch lái xe ô tô hạng B1</p>
</li>
<li aria-level="1" dir="ltr">
<p dir="ltr" role="presentation" style="text-align: justify;">Phí khám sức khỏe (giấy khám sức khoẻ phải được thực hiện tại cơ quan y tế cấp huyện trở lên)</p>
</li>
<li aria-level="1" dir="ltr">
<p dir="ltr" role="presentation" style="text-align: justify;">Học phí học lý thuyết lái xe ô tô B1 (bao gồm cả tài liệu và phần mềm học)</p>
</li>
<li aria-level="1" dir="ltr">
<p dir="ltr" role="presentation" style="text-align: justify;">Học phí học thực hành lái xe ô tô B1 (học tại sân tập và học đường trường)</p>
</li>
<li aria-level="1" dir="ltr">
<p dir="ltr" role="presentation" style="text-align: justify;">Lệ phí thi chứng chỉ và thi sát hạch lái xe ô tô đường bộ hạng B1.</p>
</li>
</ul>

<p dir="ltr" style="text-align: justify;">Thông thường khi đăng ký học thi bằng lái xe ô tô B1 tại các cơ sở đào tạo bạn sẽ đóng học phí 1 lần khi đăng ký học. Vậy nên để tránh tình trạng phát sinh chi phí trong quá trình học bạn cần lựa chọn các khóa học và thi trọn gói, cam kết không phát sinh chi phí trong quá trình học.&nbsp;</p>

<h2 dir="ltr" style="text-align: justify;"><strong>Một số lưu ý khi đăng ký học lái xe ô tô B1 năm 2021</strong></h2>

<p dir="ltr" style="text-align: justify;">Mặc dù chi phí học thi bằng lái xe ô tô B1 không có thay đổi so với trước nhưng khi đăng ký học bạn vẫn nên tìm hiểu trước bảng giá chi tiết như thế nào. Điều này sẽ giúp bạn tránh được tình trạng mất tiền oan tại những cơ sở đào tạo không uy tín.</p>

<p dir="ltr" style="text-align: justify;">Tham khảo những địa chỉ đào tạo học lái xe ô tô B1 uy tín, có đăng ký sát hạch rõ ràng. Điều này để đảm bảo hồ sơ của bạn được nộp thẳng lên Sở Giao thông vận tải, được tổ chức học và thi sát hạch lái xe ô tô đúng lịch.</p>

<p dir="ltr" style="text-align: justify;">Nếu không may chọn nơi đào tạo không uy tín, chưa đăng ký sát hạch thì hồ sơ của bạn có thể bị bán cho bên thứ 3, lúc này bạn sẽ mất thêm tiền để làm nhiều thủ tục và chờ đợi một thời gian mới được thi và học.&nbsp;</p>

<p dir="ltr" style="text-align: justify;">Vì thế để đảm bảo bạn nên tìm hiểu những địa chỉ đào tạo dạy lái xe ô tô B1 uy tín, chất lượng để có được GPLX nhanh chóng, đúng với yêu cầu của Bộ GTVT mà không phải mất tiền oan.&nbsp;</p>

<p dir="ltr" style="text-align: justify;">Trên đây là những khoản phí cần nộp khi thi bằng lái xe ô tô B1 mà Trung Tâm Hoàng Gia muốn chia sẻ đến bạn. Nếu có gì thắc mắc hãy liên hệ ngay với chúng tôi theo số hotline <strong>(028) 38305555 - (028) 38306666</strong> để được tư vấn chi tiết hơn về khóa học lái xe ô tô B1 năm 2021.</p>
      
</div>`,
    image:
      "https://trungtamhoanggia.com/Images/News/trungtamhoanggia_cac-khoan-phi-can-nop-khi-thi-bang-lai-xe-b1-nam-2021_full_16022021_110237.jpg",
    meta_url: "cac-khoan-phi-can-nop-khi-thi-bang-lai-xe-b1-nam-2021",
    keywordSEO:
      "thi sát hạch lái xe,chi phí thi bằng lái xe B2,chi phí thi bằng lái xe,học lái xe ô tô,thi bằng lái xe,thi bằng b2,trung tâm hoàng gia,trường dạy lái xe,đào tạo lái xe,đào tạo lái xe B1,đào tạo lái xe B2",
    view: "12312",
    tags: ["B2", "Lái Xe", "Luật", "B1"],
    create_by: "Pham Dong",
    create_date: "Wed Feb 10 2021",
    modify_by: "",
    modify_date: "",
    status: false,
    isDeleted: false,
  },
  {
    id: "3",
    idUser: "1",
    categories: "1",
    title: "QUY TRÌNH THI SÁT HẠCH LÁI XE Ô TÔ NĂM 2021 CÓ NHỮNG THAY ĐỔI GÌ?",
    description:
      "Nếu bạn đang có ý định đăng ký sát hạch lái xe ô tô trong năm 2021 thì đừng bỏ qua bài viết sau đây mà Trung tâm Hoàng Gia chia sẻ. Bài viết này chúng tôi sẽ cập nhật những thay đổi mới nhất về sát hạch lái xe ô tô trong năm 2021. Theo dõi ngay để biết được quy trình thi sát hạch lái xe ô tô năm 2021 thay đổi như thế nào nhé.",
    details: `<div class="content-post">
    <h2 style="text-align: justify;"><meta charset="utf-8"><strong>Quá trình đào tạo lái xe ô tô được giám sát chặt chẽ hơn&nbsp;</strong></h2>

<p dir="ltr" style="text-align: justify;">Theo quy định mới nhất của Bộ GTVT tất cả các trung tâm đào tạo sát hạch lái xe ô tô đều phải lắp đặt thiết bị giám sát. Và học viên khi đến học bắt buộc phải chấm vân tay, cách làm này nhằm đảm bảo học viên tham gia đầy đủ các buổi học lý thuyết và số giờ học thực hành mới được tham gia thi sát hạch.</p>

<p dir="ltr" style="text-align: justify;">Tất cả các buổi học thực hành đều được ghi lại, khi có vấn đề sẽ được đưa ra để kiểm tra, các cán bộ kiểm soát sẽ kiểm tra lại thời lượng học trước đó để đảm bảo tính minh bạch.&nbsp;</p>

<h2 dir="ltr" style="text-align: justify;"><strong>Áp dụng thiết bị ảo vào đào tạo lái xe ô tô&nbsp;</strong></h2>

<p dir="ltr" style="text-align: justify;">Vào năm 2021 nhiều cơ sở đào tạo và sát hạch lái xe ô tô sẽ đưa thiết bị thực tế ảo vào quá trình giảng dạy. Theo dự kiến thời gian học trên thiết bị thực tế ảo, mô phỏng khoảng 3 giờ/khóa học.</p>

<p dir="ltr" style="text-align: justify;">Việc đưa thiết bị thực tế ảo vào quá trình giảng dạy sẽ giúp cho các học viên thực hàng tốt hơn các bài thi sa hình. Và dự kiến học viên cũng sẽ thi trên thiết bị thực tế ảo sau khi thi xong phần lý thuyết.</p>

<h2 dir="ltr" style="text-align: justify;"><strong>Bằng lái xe ô tô được tích hợp mã QR</strong></h2>

<p dir="ltr" style="text-align: justify;">Để thuận tiện trong việc kiểm tra, tra cứu thông tin từ giấy phép lái xe, kể từ tháng 6 năm 2020 trở đi GPLX sẽ được tích hợp thêm mã QR. Thông qua mã QR các cơ quản quản lý có thẩm quyền sẽ được GPLX do cơ sở nào đào tạo.</p>

<h2 dir="ltr" style="text-align: justify;"><strong>Thi sát hạch lái xe được giám sát trực tuyến</strong></h2>

<p dir="ltr" style="text-align: justify;">Trước đây khi thi thực hành học viên sẽ được giám sát bởi giám thị ngồi cùng trên xe, nhưng giờ đây các xe thi thực hành đều được gắn thiết bị cảm biến giúp theo dõi quá trình thi và ghi nhận lỗi mà thí sinh mắc phải khi thi.</p>

<p dir="ltr" style="text-align: justify;">Trong suốt buổi thi sát hạch lái xe ô tô hình ảnh học viên tham gia thi sẽ được giám sát thông quan hệ thống camera trên sân thi. Đồng thời dữ liệu này cũng được lưu trữ tại cơ sở giao thông vận tải hoặc cơ quan quản lý có thẩm quyền.&nbsp;&nbsp;</p>

<h2 dir="ltr" style="text-align: justify;"><strong>Lượng kiến thức thi lý thuyết lái xe ô tô nhiều hơn</strong></h2>

<p dir="ltr" style="text-align: justify;">Trước đây học lý thuyết chỉ dựa trên bộ 450 câu hỏi nhưng hiện nay để đảm bảo học viên nắm chắc luật GTĐB hơn thì số lượng câu hỏi đã tăng lên 600 câu.</p>

<p dir="ltr" style="text-align: justify;">Trong tổng số các câu hỏi trong phần thi lý thuyết, sẽ có 50 câu hỏi bắt buộc thí sinh phải trả lời đúng. Đặc biệt, trong mỗi bài thi sẽ có từ 1 – 3 câu bắt buộc phải trả lời đúng, nếu sai 1 câu bắt buộc này, thí sinh bị đánh trượt.</p>

<p dir="ltr" style="text-align: justify;">So với năm 2020 thì quy trình thi sát hạch lái xe ô tô năm 2021 có nhiều nội dung thay đổi. Vì thế học viên cần nắm bắt kịp thời thông tin này để có được kế hoạch học lái xe đầu đủ, chất lượng.</p>
      
</div>`,
    image:
      "https://trungtamhoanggia.com/Images/News/trungtamhoanggia_quy-trinh-thi-sat-hach-lai-xe-o-to-nam-2021-co-nhung-thay-doi-gi_full_16562021_105649.jpg",
    meta_url:
      "quy-trinh-thi-sat-hach-lai-xe-o-to-nam-2021-co-nhung-thay-doi-gi",
    keywordSEO:
      "chi phí thi bằng lái xe B2,chi phí thi bằng lái xe,học lái xe ô tô,thi bằng lái xe,thi bằng b2,trung tâm hoàng gia,trường dạy lái xe,đào tạo lái xe,đào tạo lái xe B1,đào tạo lái xe B2",
    view: "10000",
    tags: ["B2", "Lái Xe", "Luật"],
    create_by: "Pham Dong",
    create_date: "Wed Feb 10 2021",
    modify_by: "",
    modify_date: "",
    status: false,
    isDeleted: false,
  },
  {
    id: "4",
    idUser: "1",
    categories: "1",
    title: "Một số câu hỏi thường gặp khi thi trượt bằng lái xe ô tô B2",
    description:
      "Rất nhiều người khi thi bằng lái xe ô tô B2 lần đầu bị trượt nhất là đối với phần thi thực hành. Bởi vậy mà không ít câu hỏi đặt ra là khi thi bằng lái xe B2 như sau bao lâu thì được thi lại? Thi lại bằng B2 được bao nhiêu lần? Nếu trượt thực hành có phải thi lại lý thuyết hay không?... Để giúp bạn trả lời những thắc mắc này Trung tâm Hoàng Gia xin đưa ra bài viết sau đây.",
    details: `<div class="content-post">
    <p>&nbsp;</p>

<p><meta charset="utf-8"></p>

<h2 dir="ltr" style="text-align: justify;"><strong>1. Sau bao lâu thì được thi lại bằng B2?</strong></h2>

<p dir="ltr" style="text-align: justify;">Thi sát hạch bằng lái xe ô tô hạng B2 sẽ bao gồm 3 nội dung chính: thi lý thuyết, thi thực hành và thi lái xe đường trường. Thông thường những thí sinh khi thi thực hành bằng lái xe ô tô hầu hết đều bị trượt ở phần thi thực hàng 11 bài sa hình.&nbsp;</p>

<p dir="ltr" style="text-align: justify;">Theo thông báo mới nhất, kể từ năm 2021 thi bằng lái xe ô tô sẽ có nhiều thay đổi, nâng cao độ khó lý thuyết và thực hành vì thế mà những người có tay lái yếu tỷ lệ trượt sẽ cao hơn.&nbsp;</p>

<p dir="ltr" style="text-align: justify;">Về câu hỏi sau bao lâu thì được thi lại bằng lái xe ô tô B2, theo quy định của luật giao thông đường bộ hiện hành, bạn sẽ được thi lại cùng khóa tiếp theo. Thời gian chờ khóa thi mới sẽ nằm trong khoảng từ 15 - 30 ngày làm việc (không kể thứ 7, chủ nhật và ngày lễ tết)</p>

<h2 dir="ltr" style="text-align: justify;"><strong>2. Thi trượt thực hành lái xe B2 được thi lại bao nhiêu lâu?</strong></h2>

<p dir="ltr" style="text-align: justify;">Hiện chưa có quy định nào về việc thi lại bằng lái xe ô tô B2 được bao nhiêu lần. Thường để thi lại bằng lái bạn chỉ cần đến trung tâm đào tạo lái xe để đăng ký thi lại, thủ tục thực hiện rất đơn giản, bạn chỉ cần đóng học phí thi lại là được.&nbsp;</p>

<p dir="ltr" style="text-align: justify;">Để tránh tình trạng chi quá nhiều tiền để thi lại bằng lái xe bạn cần cân nhắc và học thực hành một cách cẩn thận. Bởi theo quy định nếu thi lại lần đầu tiên bạn phải đóng mức học phí 300.000đ còn với những lần thi sau mức học phí thi thực hành là 585.000đ.&nbsp;</p>

<h2 dir="ltr" style="text-align: justify;"><strong>3. Thi lại thực hành có phải thi lại lý thuyết không?</strong></h2>

<p dir="ltr" style="text-align: justify;">Đây là câu hỏi rất nhiều học viên thắc mắc. Khi thi bằng lái xe ô tô B2 phần thi lý thuyết sẽ được thi trước, thi sa hình và thi đường trường sau. Vì thế bạn phải đỗ lý thuyết đã mới có thể thực hiện các phần thi còn lại.&nbsp;</p>

<p dir="ltr" style="text-align: justify;">Vậy nên, nếu thi lại thực hành bằng lái xe ô tô B2 bạn không cần phải thi lại lý thuyết vì phần thi lý thuyết trước đó đã được bảo lưu và không bị ảnh hưởng.&nbsp;</p>

<h2 dir="ltr" style="text-align: justify;"><strong>4. Làm thế nào để tránh thi lại bằng lái xe ô tô B2?</strong></h2>

<p dir="ltr" style="text-align: justify;">Để có thể đạt kết quả tốt nhất trong lần thi bằng lái xe ô tô B2 và tránh tình trạng thi lại chỉ còn cách là phải học thật tốt và cẩn thận.&nbsp;</p>

<p dir="ltr" style="text-align: justify;">Với phần thi lý thuyết nên học kỹ 100 câu điểm liệt trong bộ 600 câu hỏi thi sát hạch. Mặc dù phần thi lý thuyết chỉ có 35 câu nhưng nếu trả lời sai một câu điểm liệt thì phần thi của bạn bị tính là trượt..</p>

<p dir="ltr" style="text-align: justify;">Với phần thi thực hành, bí quyết duy nhất là tham gia đầy đủ các buổi học thực hành trên lớp để nắm bắt được các kỹ thuật lái xe cơ bản. Đồng thời thực hiện 11 bài thi sa hình và cách xử lý tình huống nguy hiểm.&nbsp;</p>

<p dir="ltr" style="text-align: justify;">Trên đây là một số câu hỏi thường gặp khi thi trượt bằng lái xe ô tô B2 mà Trung tâm Hoàng Gia muốn chia sẻ đến bạn. Nếu có điều gì thắc mắc trong quá trình đăng ký học bằng lái xe ô tô B2 hãy liên hệ ngay với Trung tâm Hoàng Gia theo số hotline <strong>(028) 38305555 - (028) 38306666</strong> để được chúng tôi tư vấn, hỗ trợ nhanh chóng.&nbsp;</p>
      
</div>`,
    image:
      "https://trungtamhoanggia.com/Images/News/trungtamhoanggia_mot-so-cau-hoi-thuong-gap-khi-thi-truot-bang-lai-xe-o-to-b2_full_16502021_105003.jpg",
    meta_url: "mot-so-cau-hoi-thuong-gap-khi-thi-truot-bang-lai-xe-o-to-b2",
    keywordSEO:
      "chi phí thi bằng lái xe B2,chi phí thi bằng lái xe,học lái xe ô tô,thi bằng lái xe,thi bằng b2,trung tâm hoàng gia,trường dạy lái xe,đào tạo lái xe,đào tạo lái xe B1,đào tạo lái xe B2",
    view: "10000",
    tags: ["B2", "Lái Xe", "Luật"],
    create_by: "Pham Dong",
    create_date: "Wed Feb 10 2021",
    modify_by: "",
    modify_date: "",
    status: false,
    isDeleted: false,
  },
];
const listCategoris = [
  {
    id: "1",
    title: "Tin Tức",
    meta_url: "tin-tuc",
    subCategories: [
      {
        id: "1",
        title: "Hoạt Động",
        meta_url: "hoat-dong",
      },
      {
        id: "2",
        title: "Những lưu ý khi thi GPLX",
        meta_url: "nhung-luu-y-khi-thi-gplx",
      },
      {
        id: "3",
        title: "An toàn giao thông",
        meta_url: "an-toan-giao-thong",
      },
      {
        id: "4",
        title: "Kinh nghiệm",
        meta_url: "kinh-nghiem",
      },
    ],
  },
  {
    id: "2",
    title: "Thông Tin",
    meta_url: "thong-tin",
    subCategories: [
      {
        id: "1",
        title: "Thông báo",
        meta_url: "hoat-dong",
      },
      {
        id: "2",
        title: "Thông báo - Chiêu Sinh",
        meta_url: "thong-bao-chieu-sinh",
      },
      {
        id: "3",
        title: "Thông tin liên quan đến GPLX",
        meta_url: "thong-tin-lien-quan-den-gplx",
      },
    ],
  },
];

const listTags = [
  { title: "Tag 1", meta_url: "tag-1", total: 1 },
  { title: "Tag 2", meta_url: "tag-2", total: 3 },
  { title: "Tag 3", meta_url: "tag-3", total: 2 },
  { title: "Tag 4", meta_url: "tag-4", total: 1 },
  { title: "Tag 5", meta_url: "tag-5", total: 4 },
  { title: "Tag 6", meta_url: "tag-6", total: 9 },
];

const subString = (string: string, length: number): string =>
  string.length < length ? string : string.substring(0, length) + "...";

NewsPage.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(
      "https://600fdd7a6c21e1001704f836.mockapi.io/news"
    );
    const listNews = res.data;
    return { listNews };
  } catch (error) {
    return { error };
  }
};

export default function NewsPage({ listNews, error }) {
  console.log(listNews);
  const router = useRouter();
  const baseUrlMeta = (meta_url: string, id: string) =>
    `tin-tuc/${meta_url}?id=${id}`;
  const renderListNews = (listNews) => {
    const firstNews = listNews[0];
    const renderNews1st = (item) => {
      return (
        <div className="col-lg-12 col-md-12">
          <div className="single-blog-post">
            <div className="entry-thumbnail">
              <Link href={baseUrlMeta(item.meta_url, item.id)}>
                <a>
                  {/* <img
                    style={{ height: "auto" }}
                    src={item.image}
                    alt="image"
                  /> */}
                </a>
              </Link>
            </div>
            <div className="entry-post-content">
              <div className="entry-meta">
                <ul>
                  <li>
                    <Link href="#">
                      <a>{item.create_by}</a>
                    </Link>
                  </li>
                  <li>{item.create_date}</li>
                </ul>
              </div>
              <h3>
                <Link href={baseUrlMeta(item.meta_url, item.id)}>
                  <a>{item.title}</a>
                </Link>
              </h3>
              <p>{item.description.length}</p>
              <Link href={baseUrlMeta(item.meta_url, item.id)}>
                <a className="read-more-btn">
                  Xem thêm <i className="flaticon-add-1"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      );
    };

    const renderNewOrther = (listNews) => {
      return listNews.map((item, index) => {
        if (item.id != 1) {
          return (
            <div className="col-lg-6 col-md-6" key={index}>
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href={baseUrlMeta(item.meta_url, item.id)}>
                    <a>{/* <img src={item.image} alt="image" /> */}</a>
                  </Link>
                </div>
                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">
                          <a>{item.create_by}</a>
                        </Link>
                      </li>
                      <li>{item.create_date}</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href={baseUrlMeta(item.meta_url, item.id)}>
                      <a>{item.title}</a>
                    </Link>
                  </h3>
                  <p>{subString(item.description, 200)}</p>
                  <Link href={baseUrlMeta(item.meta_url, item.id)}>
                    <a className="read-more-btn">
                      Xem thêm <i className="flaticon-add-1"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      });
    };

    const renderPageNumber = () => {
      return (
        <div className="col-lg-12 col-md-12">
          <div className="pagination-area">
            <a href="#" className="prev page-numbers">
              <i className="fas fa-angle-double-left"></i>
            </a>
            <a href="#" className="page-numbers">
              1
            </a>
            <span className="page-numbers current" aria-current="page">
              2
            </span>
            <a href="#" className="page-numbers">
              3
            </a>
            <a href="#" className="page-numbers">
              4
            </a>
            <a href="#" className="next page-numbers">
              <i className="fas fa-angle-double-right"></i>
            </a>
          </div>
        </div>
      );
    };

    const renderPopularPosts = (popularPosts) => {
      const renderItem = (popularPosts) => {
        return popularPosts.map((item, index) => {
          return (
            <article className="item" key={index}>
              <Link href={baseUrlMeta(item.meta_url, item.id)}>
                <a className="thumb">
                  <span
                    style={{ backgroundImage: "url(" + item.image + ")" }}
                    className="fullimage cover bg1"
                    role="img"
                  ></span>
                </a>
              </Link>

              <div className="info">
                <time dateTime="2019-06-30">{item.create_date}</time>
                <h4 className="title usmall">
                  <Link href={baseUrlMeta(item.meta_url, item.id)}>
                    <a>{item.title}</a>
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </article>
          );
        });
      };

      return (
        <section className="widget widget_evolta_posts_thumb">
          <h3 className="widget-title">TIN XEM NHIỀU</h3>
          {renderItem(popularPosts)}
        </section>
      );
    };

    const renderRecentComments = () => {
      return (
        <section className="widget widget_recent_comments">
          <h3 className="widget-title">Recent Comments</h3>
          <ul>
            <li>
              <span className="comment-author-link">
                <a href="#">A WordPress Commenter</a>
              </span>
              on
              <a href="#">Hello world!</a>
            </li>
            <li>
              <span className="comment-author-link">
                <a href="#">Evolta</a>
              </span>
              on
              <a href="#">Hello world!</a>
            </li>
            <li>
              <span className="comment-author-link">
                <a href="#">Wordpress</a>
              </span>
              on
              <a href="#">Hello world!</a>
            </li>
            <li>
              <span className="comment-author-link">
                <a href="#">A WordPress Commenter</a>
              </span>
              on
              <a href="#">Hello world!</a>
            </li>
            <li>
              <span className="comment-author-link">
                <a href="#">Evolta</a>
              </span>
              on
              <a href="#">Hello world!</a>
            </li>
          </ul>
        </section>
      );
    };

    const renderSubCategories = (subCategories) => {
      const renderItem = (subCategories) => {
        return subCategories.map((item, index) => {
          return (
            <li key={index}>
              <Link href={baseUrlMeta(item.meta_url, item.id)}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        });
      };

      return (
        <section className="widget widget_recent_entries">
          <h3 className="widget-title">TIN TỨC</h3>
          <ul>{renderItem(subCategories)}</ul>
        </section>
      );
    };

    const renderCategoris = (listCategoris) => {
      const renderItem = (listCategoris) => {
        return listCategoris.map((item, index) => {
          return (
            <li key={index}>
              <Link href={baseUrlMeta(item.meta_url, item.id)}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        });
      };
      return (
        <section className="widget widget_categories">
          <h3 className="widget-title">DANH MỤC</h3>
          <ul>{renderItem(listCategoris)}</ul>
        </section>
      );
    };

    const renderListTags = (listTags) => {
      const renderItem = (listTags) => {
        return listTags.map((item, index) => {
          return (
            <Link href={baseUrlMeta(item.meta_url, item.id)}>
              <a key={index}>
                {item.title}{" "}
                <span className="tag-link-count"> ({item.total})</span>
              </a>
            </Link>
          );
        });
      };
      return (
        <section className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>
          <div className="tagcloud">{renderItem(listTags)}</div>
        </section>
      );
    };
    return (
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {renderNews1st(firstNews)}
                {renderNewOrther(listNews)}
                {renderPageNumber()}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <aside className="widget-area" id="secondary">
                <section className="widget widget_search">
                  <form className="search-form">
                    <label>
                      <span className="screen-reader-text">Search for:</span>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search..."
                      />
                    </label>
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </section>
                {renderPopularPosts(popularPosts)}
                {/* {renderRecentComments()} */}
                {renderSubCategories(listCategoris[0].subCategories)}
                {renderCategoris(listCategoris)}
                {renderListTags(listTags)}
              </aside>
            </div>
          </div>
        </div>
        <div className="shape13">
          <img src="assets/img/shape/13.svg" alt="image" />
        </div>
        <div className="shape14">
          <img src="assets/img/shape/13.svg" alt="image" />
        </div>
      </section>
    );
  };
  if (error) {
    console.log(error);
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <UserTemplate title="Chi tiết bài viết">
      <Head>
        <title>{headerData.title}</title>
      </Head>
      {headerTitle(headerData)}
      {renderListNews(listNews)}
    </UserTemplate>
  );
}

// Thay đổi nội dung búc thư ở đây
var letterContent = "Xin chào bạn Lý Khánh Linh, nhằm tri ân những đóng góp của bạn, cũng như mong bạn không ngừng cố gắng để cùng minh xây dựng và vun đắp chuyện tình này. \n Thay cho lời cảm ơn chân thành nhất, trân trọng gửi lời mới bạn tham gia buổi hẹn này \n \n                          ...Cảm ơn em vì đã, đang, và sẽ cùng anh đi tiếp chặng đường này. Yêu em"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ
// Đầu tiên, ẩn nút "Xem chi tiết" khi trang được tải
document.querySelector(".detailBtn").style.display = "none";

// Hiệu ứng gõ chữ
function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    letterContentSplited = letterContent.split("");

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val;

            // Nếu đã hiển thị hết nội dung letterContent
            if (index === letterContentSplited.length - 1) {
                // Hiển thị nút "Xem chi tiết"
                document.querySelector(".detailBtn").style.display = "block";
            }
        }, durationWrite * index);
    });
}

function viewDetails() {
    // Mở trang mới để hiển thị hình ảnh
    window.open("image.html", "_blank");
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Ẩn tất cả các slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;

  // Nếu slideIndex vượt quá số lượng slide, quay về slide đầu tiên
  if (slideIndex > slides.length) { 
    slideIndex = 1; 
  }

  // Bỏ kích hoạt tất cả các dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Hiển thị slide hiện tại và kích hoạt dot tương ứng
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";

  // Chuyển đổi slide sau 2 giây
  setTimeout(showSlides, 2000); 
}

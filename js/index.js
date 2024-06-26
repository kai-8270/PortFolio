document.addEventListener('DOMContentLoaded', function() {
// スクロール量が一定値を超えたらボタンを表示する
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollTopBtn").style.display = "none";
    }
  }
  
  // ボタンをクリックしたらスムーススクロールでトップへ移動する
  document.getElementById("scrollTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

});


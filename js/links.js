document.addEventListener("DOMContentLoaded", function () {
  const iosLink = "https://apps.apple.com/app/idXXXXXXXXX";
  const androidLink = "https://play.google.com/store/apps/details?id=XXXXXXXXX";
  const btn = document.querySelector("#btnDownload a");

  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  function isAndroid() {
    return /Android/.test(navigator.userAgent);
  }

  if (isIOS()) {
    btn.href = iosLink;
    btn.querySelector(".text").textContent = "Download for iOS";
  } else if (isAndroid()) {
    btn.href = androidLink;
    btn.querySelector(".text").textContent = "Download for Android";
  } else {
    btn.href = "#";
    btn.querySelector(".text").textContent = "Download";
  }
});

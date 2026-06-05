document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop default submit

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let status = document.getElementById("statusMessage");

  if (name === "" || email === "" || message === "") {
    status.style.color = "red";
    status.textContent = "必須項目を入力してください。";
    return;
  }

  status.style.color = "lightgreen";
  status.textContent = "送信が完了しました！ありがとうございます。";

  // Clear fields
  document.getElementById("contactForm").reset();
});

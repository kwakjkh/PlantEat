window.addEventListener("load", function () {
  // 로그인 버튼 클릭 시 실행되는 함수
  const login = document.querySelector(".log-in button")
  login.addEventListener("click",function(){
    const idInput = document.querySelector(".id"); // 아이디 입력 필드
    const pwInput = document.querySelector(".pw"); // 비밀번호 입력 필드
  
    const idValue = idInput.value.trim(); // 아이디 값 가져오기 (공백 제거)
    const pwValue = pwInput.value.trim(); // 비밀번호 값 가져오기 (공백 제거)
  
    if (!idValue && !pwValue) {
      alert("아이디와 비밀번호를 입력해주세요.");
    } else if (!idValue) {
      alert("아이디를 입력해주세요.");
    } else if (!pwValue) {
      alert("비밀번호를 입력해주세요.");
    } else {
      // 아이디와 비밀번호가 모두 입력된 경우
      alert("로그인 되었습니다");
      window.location.href = "../index.html"
      // 실제 로그인 처리를 여기서 할 수 있음 (폼 전송 등)
    }

  })
});

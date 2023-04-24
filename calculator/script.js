function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  n1 = Number(n1);
  n2 = Number(n2);

  if (operator === "+") result = n1 + n2;
  else if (operator === "-") result = n1 - n2;
  else if (operator === "*") result = n1 * n2;
  else if (operator === "/") result = n1 / n2;

  return String(result);
}

let display = document.querySelector(".formula-text"); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = document.querySelector(".buttons");
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener("click", function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  console.log(buttonContent);
  console.log(display.textContent);

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches(".button > div")) {
    if (action === "number") {
        if(firstNum === '0')
        {
            display.textContent += String(buttonContent);
        }
    }
    if (action === "operator") {
    }
    if (action === "decimal") {
    }
    if (action === "clear") {
    }
    if (action === "calculate") {
    }
  }

  
});

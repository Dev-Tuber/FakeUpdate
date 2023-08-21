document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelector(".progress");
    const updateFooter = document.querySelector(".update-footer p");
    const totalSteps = 800; // 총 진행 단계 수
    let currentStep = 0; // 현재 진행 단계
  
    function updateProgress() {
      currentStep++;
      const progressPercentage = (currentStep / totalSteps) * 100;
      progressBar.style.width = `${progressPercentage}%`;
    
  
      if (currentStep === totalSteps) {
        clearInterval(progressInterval);
        updateFooter.textContent = "업데이트가 완료되었습니다.";
      }
    }
  
    const progressInterval = setInterval(updateProgress, 1000); // 1초마다 진행 상황 업데이트
  });
  
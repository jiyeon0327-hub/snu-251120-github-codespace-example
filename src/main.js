
import './style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <main class="intro-container">
    <section class="profile-section">
      <div class="profile-img">
        <!-- 구글 Noto Emoji SVG (예시: 😀) -->
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.svg" alt="프로필 이모지" width="88" height="88" />
      </div>
      <h1 class="name">홍길동</h1>
      <p class="bio">안녕하세요! 저는 웹 프론트엔드 개발자 홍길동입니다.<br>사용자 경험과 깔끔한 UI/UX에 관심이 많습니다.</p>
    </section>
    <section class="career-section">
      <h2>경력</h2>
      <div class="career-form">
        <input type="text" class="career-input" placeholder="근무 기간 (예: 2023.03 ~ 현재)" />
        <input type="text" class="career-input" placeholder="회사 및 직무 (예: ABC Tech - 프론트엔드 개발자)" />
        <button class="career-add-btn">추가</button>
      </div>
      <ul class="career-list">
        <li>
          <span class="career-period">2023.03 ~ 현재</span>
          <span class="career-detail">ABC Tech - 프론트엔드 개발자</span>
        </li>
        <li>
          <span class="career-period">2021.01 ~ 2023.02</span>
          <span class="career-detail">XYZ Studio - UI/UX 디자이너</span>
        </li>
      </ul>
    </section>
  </main>
`;

// 경력 추가 기능 (간단한 JS)
const addBtn = document.querySelector('.career-add-btn');
const periodInput = document.querySelectorAll('.career-input')[0];
const detailInput = document.querySelectorAll('.career-input')[1];
const list = document.querySelector('.career-list');
addBtn.addEventListener('click', () => {
  const period = periodInput.value.trim();
  const detail = detailInput.value.trim();
  if (period && detail) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="career-period">${period}</span><span class="career-detail">${detail}</span>`;
    list.prepend(li);
    periodInput.value = '';
    detailInput.value = '';
  }
});

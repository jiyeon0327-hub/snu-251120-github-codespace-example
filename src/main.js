
import './style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <main class="intro-container">
    <section class="profile-section">
      <h1 class="name">홍길동</h1>
      <p class="bio">안녕하세요! 저는 웹 프론트엔드 개발자 홍길동입니다.<br>사용자 경험과 깔끔한 UI/UX에 관심이 많습니다.</p>
    </section>
    <section class="career-section">
      <h2>경력</h2>
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

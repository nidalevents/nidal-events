import { useState } from 'react'
import './App.css'
import weddingImage from './assets/wedding.jpeg'
import engagementImage from './assets/engagement.jpeg'
import eventsImage from './assets/events.jpeg'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main dir="rtl">
      <header className="navbar">
    <div className="brand">
  <img src="/logo.png" alt="Nidal Events" className="brand-logo" />
</div><button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
      <nav className={menuOpen ? 'nav-open' : ''}>
          <a href="#home" onClick={() => setMenuOpen(false)}>الرئيسية</a>
<a href="#services" onClick={() => setMenuOpen(false)}>خدماتنا</a>
<a href="#gallery" onClick={() => setMenuOpen(false)}>أعمالنا</a>
<a href="#about" onClick={() => setMenuOpen(false)}>من نحن</a>
        </nav>

        <a className="nav-button" href="https://wa.me/970599640004">
          احجز الآن
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="eyebrow">أكثر من 20 عاماً من الخبرة</span>

          <h1>
            نحوّل مناسبتك إلى
            <span> ذكرى لا تُنسى</span>
          </h1>

          <p>
            تنسيق وتنفيذ المناسبات وبيع مستلزماتها
            <br />
            بخبرة وإبداع في جميع محافظات الضفة الغربية
          </p>

          <div className="hero-buttons">
            <a className="gold-button" href="https://wa.me/970599640004">
              احجز عبر واتساب
            </a>

            <a className="outline-button" href="#gallery">
              استعرض أعمالنا
            </a>
          </div>
        </div>

        <div className="stats">
          <div>
            <strong>+20</strong>
            <span>عاماً من الخبرة</span>
          </div>

          <div>
            <strong>7 أيام</strong>
            <span>في خدمتكم</span>
          </div>

          <div>
            <strong>كل الضفة</strong>
            <span>نصل إلى مناسبتك</span>
          </div>
        </div>
      </section>

      <section className="services" id="services">
  <div className="services-header">
    <span>ما نقدمه لك</span>
    <h2>خدماتنا</h2>
    <p>نحوّل مناسبتك إلى تجربة متكاملة ونهتم بكل التفاصيل من البداية إلى النهاية</p>
  </div>

  <div className="services-grid">
    <div className="service-card">
      <h3>تنسيق المناسبات</h3>
      <p>تنسيق متكامل للمناسبات بأناقة واهتمام بأدق التفاصيل.</p>
    </div>

    <div className="service-card">
      <h3>تجهيز مستلزمات الحفلات</h3>
      <p>توفير وتجهيز جميع المستلزمات التي تحتاجها مناسبتك.</p>
    </div>

    <div className="service-card">
      <h3>تنظيم وتنفيذ المناسبات</h3>
      <p>نتولى التخطيط والتنفيذ لتستمتع بمناسبتك بكل راحة.</p>
    </div>
  </div>
</section>

<section className="gallery" id="gallery">
  <div className="gallery-header">
    <span>من أعمالنا</span>
    <h2>لحظات صنعناها بحب</h2>
    <p>نماذج من مناسبات قمنا بتنسيقها وتنفيذها بأدق التفاصيل</p>
  </div>

  <div className="gallery-grid">
    <div className="gallery-card">
      <img
  src={weddingImage}
  alt="حفلات الزفاف"
  className="gallery-image"
/>
      <h3>حفلات الزفاف</h3>
    </div>

    <div className="gallery-card">
    <img
  src={engagementImage}
  alt="حفلات الخطوبة"
  className="gallery-image"
/>
      <h3>حفلات الخطوبة</h3>
    </div>

    <div className="gallery-card">
   <img
  src={eventsImage}
  alt="المناسبات الخاصة"
  className="gallery-image"
/> 
      <h3>المناسبات الخاصة</h3>
    </div>
  </div>
</section><section className="about" id="about">
  <div className="about-content">
    <span className="about-eyebrow">من نحن</span>

    <h2>خبرة تصنع مناسبتك بكل حب</h2>

    <p>
      نضال للمناسبات بخبرة تزيد عن 20 عامًا في تنسيق وتنفيذ
      المناسبات وتجهيز جميع مستلزماتها في محافظات الضفة الغربية.
    </p>

    <p>
      نهتم بكل التفاصيل من الفكرة الأولى وحتى اكتمال مناسبتك،
      لنصنع لك لحظات جميلة لا تُنسى.
    </p>

    <a
      className="about-button"
      href="https://wa.me/970599640004"
    >
      تواصل معنا
    </a>
  </div>
</section>
<footer className="footer">
  <div className="footer-content">
    <img
      src="/logo.png"
      alt="Nidal Events"
      className="footer-logo"
    />

    <p>نصنع مناسباتكم بكل حب ونهتم بأدق التفاصيل</p>

    <a
      href="https://wa.me/970599640004"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-whatsapp"
    >
      تواصل معنا عبر واتساب
    </a>

    <div className="footer-bottom">
      © 2026 Nidal Events - جميع الحقوق محفوظة
    </div>
  </div>
</footer>
    </main>
  )
}

export default App
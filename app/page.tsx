export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="nav">
        <div className="nav-inner">
          <strong>Bedia Berra Doğruer</strong>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#hakkimda">Hakkımda</a>
            <a href="#projeler">Projeler</a>
            <a href="#yetenekler">Yetenekler</a>
            <a href="#galeri">Galeri</a>
            <a href="#iletisim">İletişim</a>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* ===== HERO ===== */}
        <section className="section" id="top">
          <div className="hero">
            <div>
              <h1 className="hero-title">Bilgisayar Mühendisliği Öğrencisi & Web Geliştirici</h1>
              <p className="muted">
                3. sınıf öğrencisi • Erasmus (Polonya) • Web geliştirme ve algoritmalarla üretmeyi seviyorum.
              </p>
              <div className="btns">
                <a className="btn" href="#projeler">Projelerimi Gör</a>
                <a className="btn secondary" href="#iletisim">İletişim</a>
              </div>
              <div className="stats">
                <div className="stat"><b>1 Dönem</b><div>Erasmus (Polonya)</div></div>
                <div className="stat"><b>10+</b><div>Mini Proje/Çalışma</div></div>
                <div className="stat"><b>3. Sınıf</b><div>Bilgisayar Müh.</div></div>
              </div>
            </div>

            <div className="hero-card">
              <h3 style={{marginTop:0}}>Kısa Özet</h3>
              <p>
                Web sitesi geliştirmek ilgi alanlarımın merkezinde. Genel olarak yazılım üzerinde
                <b> algoritmalar kurmayı</b> ve gerçek problemleri çözecek arayüzler geliştirmeyi seviyorum.
              </p>
              <div className="chips">
                <a className="chip" href="#yetenekler">HTML/CSS</a>
                <a className="chip" href="#yetenekler">JavaScript</a>
                <a className="chip" href="#yetenekler">React/Next</a>
                <a className="chip" href="#projeler">Full-Stack</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HAKKIMDA ===== */}
        <section id="hakkimda" className="section">
          <h2>Hakkımda</h2>
          <p><b>Ad:</b> Bedia Berra Doğruer</p>
          <p>
            Bilgisayar mühendisliği 3. sınıf öğrencisiyim. 1 dönem boyunca Erasmus ile Polonya’da
            eğitim gördüm. Orada gördüğüm ve edindiğim tecrübelerimle birçok alan hakkında daha
            ayrıntılı ve kendimi geliştirme adına yararlı bilgiler edindim.Eğitim dışında farklı ülkeleri gezme ve farklı kültürden insanlarla tanışma fırsatım oldu.
          </p>
          <p>
            İlgilendiğim alanlar arasında <b>web sitesi geliştirmek</b> önemli bir yer ediniyor.
            Genel olarak yazılım üzerinde <b>algoritmalar kurmayı</b> seviyorum.
          </p>

          <div className="chips">
            <a className="chip" href="#projeler">Web Geliştirme</a>
            <a className="chip" href="#yetenekler">UI/UX</a>
            <a className="chip" href="#projeler">Full-Stack</a>
            <a className="chip" href="#iletisim">İletişim</a>
          </div>

          <div className="grid" style={{ alignItems: "start", marginTop: 18 }}>
            <div>
              {/* Profil foto */}
              <img src="/berra-colosseum.jpg" alt="Profil" width={900} height={600} className="img" style={{ borderRadius: 12 }} />
            </div>

            <div className="card">
              <h3>Öne Çıkan İlgi Alanları</h3>
              <ul>
                <li>Web sitesi geliştirme</li>
                <li>Algoritma tasarımı ve problem çözme</li>
                <li>Full-stack denemeler (frontend/backend)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== YETENEKLER ===== */}
        <section id="yetenekler" className="section">
          <h2>Yetenekler</h2>
          <div className="grid">
            <div className="card">
              <div className="skill">
                <h4>HTML &amp; CSS</h4>
                <div className="progress"><span style={{ width: "90%" }}></span></div>
              </div>
              <div className="skill">
                <h4>JavaScript</h4>
                <div className="progress"><span style={{ width: "80%" }}></span></div>
              </div>
              <div className="skill">
                <h4>React / Next</h4>
                <div className="progress"><span style={{ width: "70%" }}></span></div>
              </div>
            </div>

            <div className="card">
              <div className="skill">
                <h4>Java / Spring Boot</h4>
                <div className="progress"><span style={{ width: "65%" }}></span></div>
              </div>
              <div className="skill">
                <h4>SQL / PostgreSQL</h4>
                <div className="progress"><span style={{ width: "60%" }}></span></div>
              </div>
              <div className="skill">
                <h4>Python (Veri Analizi)</h4>
                <div className="progress"><span style={{ width: "55%" }}></span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROJELER ===== */}
        <section id="projeler" className="section">
          <h2>Projeler</h2>

          <div className="grid">
            <a className="card card-link" href="https://github.com/KULLANICI_ADIN/university-app" target="_blank" rel="noopener noreferrer" aria-label="UniversityApp GitHub">
              <h3>UniversityApp</h3>
              <p>Spring Boot + Angular ile öğrenci/öğretmen/ders yönetimi.</p>
              <span className="arrow">→</span>
            </a>

            <div className="card">
              <h3>Covid-19 Tracker</h3>
              <p>Ülkelere göre verileri görselleştirme.</p>
            </div>

            <div className="card">
              <h3>Kişisel Blog (Bu site)</h3>
              <p>Vercel üzerinde yayınlanan, animasyonlu degrade ve glass tasarım.</p>
            </div>
          </div>
        </section>

        {/* ===== ZAMAN ÇİZELGESİ ===== */}
        <section className="section">
          <h2>Zaman Çizelgesi</h2>
          <div className="card timeline">
            <div className="timeline-item">
              <b>2025-2026 • 3. Sınıf</b>
              <div>Web teknolojileri, veri yapıları ve sistem programlama odaklı dersler.</div>
            </div>
            <div className="timeline-item">
              <b>2024-2025 Bahar Dönemi • Erasmus – Polonya</b>
              <div>1 dönemlik eğitim; çok disiplinli projeler ve kültürlerarası çalışma tecrübesi.</div>
            </div>
            <div className="timeline-item">
              <b>Öncesi</b>
              <div>Algoritma ve problem çözme temelli bireysel projeler.</div>
            </div>
          </div>
        </section>

        {/* ===== GALERİ + SHORTS VİDEO ===== */}
        <section id="galeri" className="section">
          <h2>Galeri &amp; Video</h2>
          <p>Web geliştirme ile ilgili kısa bir <b>Shorts</b> videosu gömülü olarak oynar.</p>

          {/* Shorts (embed) */}
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: 16 }}>
            <iframe
              src="https://www.youtube.com/embed/a-FJZ1NLjeg?rel=0"
              title="Web geliştirme shorts"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, borderRadius: 12 }}
            />
          </div>

          {/* ==== Yeni Galeri (senin dosya adlarınla) ==== */}
          <h3 style={{marginTop: 12}}>Galeri</h3>
          <p className="muted">Fotoğraflara tıklayarak büyütün.</p>

          <div className="gallery-grid">
            <a className="gallery-item" href="#g1"><img src="/berra-colosseum.jpg" alt="Profil - Kolezyum" loading="lazy" /></a>
            <a className="gallery-item" href="#g2"><img src="/gallery/budapest.jpg"   alt="Budapeşte" loading="lazy" /></a>
            <a className="gallery-item" href="#g3"><img src="/gallery/eyfel.jpg"      alt="Eyfel" loading="lazy" /></a>
            <a className="gallery-item" href="#g4"><img src="/gallery/louvre.jpg"     alt="Louvre" loading="lazy" /></a>
            <a className="gallery-item" href="#g5"><img src="/gallery/pisa.jpg"       alt="Pisa" loading="lazy" /></a>
            <a className="gallery-item" href="#g6"><img src="/gallery/saray.jpg"      alt="Saray" loading="lazy" /></a>
            <a className="gallery-item" href="#g7"><img src="/gallery/viyana.jpg"     alt="Viyana" loading="lazy" /></a>
            <a className="gallery-item" href="#g8"><img src="/gallery/zaandam.jpg"    alt="Zaandam" loading="lazy" /></a>
          </div>

          {/* Lightbox hedefleri */}
          <div id="g1" className="lightbox"><a className="close" href="#" aria-label="Kapat">×</a><img src="/berra-colosseum.jpg"      alt="Profil - Kolezyum" /></div>
          <div id="g2" className="lightbox"><a className="close" href="#" aria-label="Kapat">×</a><img src="/gallery/budapest.jpg"   alt="Budapeşte" /></div>
          <div id="g3" className="lightbox"><a className="close" href="#" aria-label="Kapat">×</a><img src="/gallery/eyfel.jpg"      alt="Eyfel" /></div>
          <div id="g4" className="lightbox"><a className="close" href="#" aria-label="Kapat">×</a><img src="/gallery/louvre.jpg"     alt="Louvre" /></div>
          <div id="g5" className="lightbox"><a className="close" href="#" aria-label="Kapat">×</a><img src="/gallery/pisa.jpg"       alt="Pisa" /></div>
          <div id="g6" className="lightbox"><a className="close" href="#" aria-label="Kapat">×</a><img src="/gallery/saray.jpg"      alt="Saray" /></div>
          <div id="g7" className="lightbox"><a className="close" href="#" aria-label="Kapat">×</a><img src="/gallery/viyana.jpg"     alt="Viyana" /></div>
          <div id="g8" className="lightbox"><a className="close" href="#" aria-label="Kapat">×</a><img src="/gallery/zaandam.jpg"    alt="Zaandam" /></div>
        </section>

        {/* ===== İLETİŞİM ===== */}
        <section id="iletisim" className="section">
          <h2>İletişim</h2>
          <div className="grid">
            <div className="card">
              <ul>
                <li>mail: <a href="mailto:berra0348@gmail.com">berra0348@gmail.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Profilim</a></li>
              </ul>
            </div>
            <div className="card">
              <h3>Hızlı Erişim</h3>
              <div className="chips">
                <a className="chip" href="#projeler">Projeler</a>
                <a className="chip" href="#yetenekler">Yetenekler</a>
                <a className="chip" href="#top">Başa Dön ↑</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
<footer className="site-footer">
  <div className="container footer-top">
    {/* Sol/Marka */}
    <div className="footer-brand">
      <h3>Bedia Berra Doğruer</h3>
      <p className="muted">
        Web geliştirme ve algoritmalarla üretmeyi seven bir bilgisayar mühendisliği öğrencisi.
      </p>

      <div className="footer-social">
        <a href="mailto:berra0348@gmail.com" aria-label="E-posta">
          {/* envelope */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.8"/>
            <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.8"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          {/* linkedin */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.94 8.5V19H3.75V8.5h3.19ZM5.34 7.12a1.85 1.85 0 1 1 0-3.7 1.85 1.85 0 0 1 0 3.7Zm6.96 11.88H9.16V8.5h3.01v1.43h.04c.42-.78 1.46-1.6 3.01-1.6 3.22 0 3.82 2.12 3.82 4.87V19h-3.19v-4.64c0-1.11-.02-2.55-1.56-2.55-1.56 0-1.8 1.22-1.8 2.47V19Z"/>
          </svg>
        </a>
        <a href="#projeler" aria-label="Projeler">
          {/* code <> */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="m9 18-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m15 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>

    {/* Hızlı Bağlantılar */}
    <div>
      <h4 className="footer-title">Hızlı Bağlantılar</h4>
      <ul className="footer-list">
        <li><a href="#hakkimda">Hakkımda</a></li>
        <li><a href="#projeler">Projeler</a></li>
        <li><a href="#yetenekler">Yetenekler</a></li>
        <li><a href="#galeri">Galeri</a></li>
        <li><a href="#iletisim">İletişim</a></li>
      </ul>
    </div>

    {/* İletişim */}
    <div>
      <h4 className="footer-title">İletişim</h4>
      <ul className="footer-list">
        <li>mail: <a href="mailto:berra0348@gmail.com">berra0348@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Profilim</a></li>
      </ul>
    </div>

    {/* Bülten (mailto – JS yok) */}
    <div>
      <h4 className="footer-title">Bülten</h4>
      <p className="muted">Yeni projelerim için e-posta bırakabilirsin.</p>
      <form action="mailto:berra0348@gmail.com" method="POST" encType="text/plain" className="footer-form">
        <input type="email" name="email" placeholder="E-posta adresin" required />
        <button type="submit">Kaydol</button>
      </form>
    </div>
  </div>

  <div className="footer-bottom">
    <div className="container inner">
      <small>© {new Date().getFullYear()} Bedia Berra Doğruer • Öğrenci No: 2211012019</small>
      <a href="#top" className="to-top" aria-label="Başa dön">Başa Dön ↑</a>
    </div>
  </div>
</footer>

    </>
  );
}

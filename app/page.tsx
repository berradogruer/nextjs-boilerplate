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
              <img src="/profile.jpg" alt="Profil" width={900} height={600} className="img" style={{ borderRadius: 12 }} />
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

          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: 16 }}>
            {/* Bir YouTube Shorts linkinden sadece ID'yi al ve aşağıya koy.
               Örn: https://youtube.com/shorts/ABC123  → ID: ABC123  → /embed/ABC123 */}
            <iframe
              src="https://www.youtube.com/shorts/a-FJZ1NLjeg"  /* ← Kendi Shorts ID’n ile değiştir */
              title="Web geliştirme shorts"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, borderRadius: 12 }}
            />
          </div>

          <div className="grid">
            <div><img src="/shot-1.jpg" alt="Çalışma 1" width={900} height={600} className="img" style={{ borderRadius: 12 }}/></div>
            <div><img src="/shot-2.jpg" alt="Çalışma 2" width={900} height={600} className="img" style={{ borderRadius: 12 }}/></div>
          </div>
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
      <footer className="footer">
        © {new Date().getFullYear()} Bedia Berra Doğruer • Öğrenci No: 2211012019
      </footer>
    </>
  );
}

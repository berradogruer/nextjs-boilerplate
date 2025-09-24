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
            <a href="#galeri">Galeri</a>
            <a href="#iletisim">İletişim</a>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* HAKKIMDA */}
        <section id="hakkimda" className="section">
          <h2>Hakkımda</h2>

          <p><b>Ad:</b> Bedia Berra Doğruer</p>
          <p>
            Bilgisayar mühendisliği 3. sınıf öğrencisiyim. 1 dönem boyunca Erasmus ile
            Polonya’da eğitim gördüm. Orada gördüğüm ve edindiğim tecrübelerimle birçok alan
            hakkında daha ayrıntılı ve kendimi geliştirme adına yararlı bilgiler edindim.
          </p>
          <p>
            İlgilendiğim alanlar arasında <b>web sitesi geliştirmek</b> önemli bir yer ediniyor.
            Genel olarak yazılım üzerinde <b>algoritmalar kurmayı</b> seviyorum.
          </p>

          <div className="chips">
            <a className="chip" href="#projeler">Web Geliştirme</a>
            <a className="chip" href="#galeri">UI/UX</a>
            <a className="chip" href="#projeler">Full-Stack</a>
            <a className="chip" href="#iletisim">İletişim</a>
          </div>

          <div className="grid" style={{ alignItems: "start", marginTop: 18 }}>
            <div>
              <img
                src="/profile.jpg"
                alt="Profil"
                width={900}
                height={600}
                className="img"
                style={{ borderRadius: 12 }}
              />
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

        {/* PROJELER */}
        <section id="projeler" className="section">
          <h2>Projeler</h2>

          <div className="grid">
            <a
              className="card card-link"
              href="https://github.com/KULLANICI_ADIN/university-app"
              target="_blank" rel="noopener noreferrer"
              aria-label="UniversityApp GitHub"
            >
              <h3>UniversityApp</h3>
              <p>Spring Boot + Angular ile öğrenci/öğretmen/ders yönetimi.</p>
              <span className="arrow">→</span>
            </a>

            <div className="card">
              <h3>Covid-19 Tracker</h3>
              <p>Ülkelere göre verileri görselleştirme.</p>
            </div>
          </div>
        </section>

        {/* GALERİ + VİDEO */}
        <section id="galeri" className="section">
          <h2>Galeri &amp; Video</h2>
          <p>Video sayfa içinde gömülü olarak oynar.</p>

          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: 16 }}>
            <iframe
              src="https://www.youtube.com/embed/YE7VzlLtp-4"  /* kendi videonla değiştir */
              title="Tanıtım"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, borderRadius: 12 }}
            />
          </div>

          <div className="grid">
            <div>
              <img
                src="/shot-1.jpg" alt="Çalışma 1" width={900} height={600} className="img"
                style={{ borderRadius: 12 }}
              />
            </div>
            <div>
              <img
                src="/shot-2.jpg" alt="Çalışma 2" width={900} height={600} className="img"
                style={{ borderRadius: 12 }}
              />
            </div>
          </div>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim" className="section">
          <h2>İletişim</h2>
          <div className="grid">
            <div className="card">
              <ul>
                <li>
                  mail: <a href="mailto:berra0348@gmail.com">berra0348@gmail.com</a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    Profilim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Bedia Berra Doğruer • Öğrenci No: 905258
      </footer>
    </>
  );
}

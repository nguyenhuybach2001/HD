import "./App.css";

const featuredProjects = [
  {
    type: "MEGA-STORY · 03 KỲ · VĂN HÓA",
    title: "Xẩm - cuộc dịch chuyển của một di sản",
    description:
      "Một mega-story khám phá sự dịch chuyển của Xẩm từ không gian truyền thống đến những hình thức hiện diện mới trong đời sống đương đại.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=90",
  },
  {
    type: "LONGFORM · VĂN HÓA",
    title: "Người Chàng Sơn tái định vị di sản quạt trăm năm",
    description:
      "Longform khai thác câu chuyện về nghề quạt Chàng Sơn và hành trình đưa một sản phẩm thủ công truyền thống tiếp cận đời sống hiện đại.",
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1000&q=90",
  },
  {
    type: "E-MAGAZINE · 03 KỲ · VĂN HÓA",
    title: "Kinh Bắc - Bắc Ninh: mạch chảy văn hóa dân gian trong đời sống (Kỳ 1)",
    description:
      "Series 3 kỳ về Quan họ, bánh phu thê và tranh dân gian Đông Hồ. Khám phá cách những di sản tìm thấy chỗ đứng trong cuộc sống đương đại.",
    image:
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=90",
  },
  {
    type: "E-MAGAZINE · 03 KỲ · VĂN HÓA",
    title: "Kinh Bắc - Bắc Ninh: mạch chảy văn hóa dân gian trong đời sống (Kỳ 2)",
    description: "Dòng chảy dân gian trong không gian văn hóa đương đại.",
    image:
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1000&q=90",
  },
  {
    type: "E-MAGAZINE · 03 KỲ · VĂN HÓA",
    title: "Kinh Bắc - Bắc Ninh: mạch chảy văn hóa dân gian trong đời sống (Kỳ 3)",
    description:
      "Khám phá những sắc màu, dấu ấn và hành trình của văn hóa dân gian trong cuộc sống hôm nay.",
    image:
      "https://images.unsplash.com/photo-1583391733981-84984027e7b2?auto=format&fit=crop&w=1000&q=90",
  },
  {
    type: "INFOGRAPHIC · DỮ LIỆU",
    title: "Top 10 địa phương thu hút du lịch nhất cả nước dịp 30/4 - 1/5",
    description:
      "Biểu đồ dữ liệu trực quan về các điểm đến du lịch phổ biến nhất trong dịp nghỉ lễ.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=90",
  },
];

const pressArticles = [
  [
    "Xung đột Trung Đông và 'cú sốc kép' tới thị trường phân bón",
    "Phân tích tác động của xung đột toàn cầu tới thị trường nông sản Việt Nam.",
  ],
  [
    "Xung đột Trung Đông: Nhật Bản chưa xem xét đưa tàu chiến tới eo biển Hormuz",
    "Cập nhật tin tức nóng hổi từ sự kiện xung đột Trung Đông.",
  ],
  [
    "Nỗi lòng của những người xa quê đón Tết ở Thủ đô",
    "Những câu chuyện nhân vật về việc xa nhà đón những ngày lễ quan trọng.",
  ],
  [
    "Chuyện về căn nhà cổ nằm trên 'đất vàng' ở phố cổ Hà Nội",
    "Khám phá những tòa nhà lịch sử giữa lòng thành phố hiện đại.",
  ],
  [
    "Người dân làng Nhật Tân tiết lộ bí quyết chăm sóc để đào nở đúng dịp Tết",
    "Những kinh nghiệm từ các nông dân lâu năm về nghề trồng đào cảnh.",
  ],
];

const portraits = [
  [
    "Hương vị mùa xuân trong ký ức họa sĩ trẻ",
    "Cuộc phỏng vấn với họa sĩ về cách họ thấy màu sắc của mùa xuân qua các tác phẩm.",
  ],
  [
    "Họa sĩ Noh.A – 10 năm cháy hết mình với nghề vẽ minh họa",
    "Chân dung của một người nghệ sĩ trẻ và hành trình 10 năm học hỏi, khám phá.",
  ],
  [
    "Họa sĩ Thúy Hà: Tâm hồn có hình hài như thế nào?",
    "Phỏng vấn sâu sắc về quá trình sáng tạo và tầm nhìn nghệ thuật của một họa sĩ.",
  ],
];

const otherWorks = [
  [
    "MEDIA · TIN TỨC",
    "Thạch Thất: Nông thôn chuyển mình nhờ chuyển đổi cơ cấu cây trồng, vật nuôi",
    "Câu chuyện nông thôn phát triển bền vững ở ngoại thành Hà Nội.",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=90",
  ],
  [
    "MULTIMEDIA · VĂN HÓA",
    "Giữ lại những thanh âm bản địa",
    "Ghi chép bằng hình ảnh về những không gian văn hóa đang đổi thay.",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1000&q=90",
  ],
];

const skills = [
  ["Viết & biên tập", "Viết tin, bài báo chí · Phỏng vấn · Thu thập và xử lý thông tin · Biên tập nội dung"],
  ["Đa phương tiện", "Chụp ảnh · Quay – dựng video cơ bản · Longform · Kể chuyện bằng hình ảnh"],
  ["Công cụ", "Microsoft Word · Google Docs · Canva · CapCut"],
  ["Học vấn", "Học viện Báo chí và Tuyên truyền — Truyền thông đa phương tiện (2022–2026)"],
];

function ReadButton({ dark = false }) {
  return <button className={dark ? "read-button dark" : "read-button"}>ĐỌC BÀI <span>→</span></button>;
}

function Tick() {
  return <span className="tick" aria-hidden="true">✓</span>;
}

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="portfolio" id="top">
      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Về đầu trang">
          <strong>HẢI</strong>
          <span>ĐƯỜNG</span>
        </button>
        <nav aria-label="Điều hướng chính">
          <button onClick={() => scrollTo("about")}>GIỚI THIỆU</button>
          <button onClick={() => scrollTo("work")}>SẢN<br />PHẨM</button>
          <button onClick={() => scrollTo("experience")}>KINH<br />NGHIỆM</button>
          <button onClick={() => scrollTo("contact")}>LIÊN HỆ</button>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <span className="portfolio-pill">PORTFOLIO / 2026 <b>→</b></span>
          <h1>NGUYỄN THỊ<br />HẢI ĐƯỜNG</h1>
          <p className="hero-role">BÁO CHÍ · BIÊN TẬP · MULTIMEDIA</p>
          <p className="hero-lead">Viết những câu chuyện đáng được kể. Tìm kiếm những chi tiết đáng được nhìn thấy.</p>
        </div>
        <div className="hero-image image-frame" role="img" aria-label="Chân dung Nguyễn Thị Hải Đường" />
      </section>

      <section className="about-section" id="about">
        <div className="about-copy">
          <h2>GIỚI THIỆU</h2>
          <p>
            Tôi tốt nghiệp chuyên ngành Truyền thông đa phương tiện tại Học viện Báo chí và Tuyên truyền. Tôi định hướng phát triển trong lĩnh vực báo chí – truyền thông, tập trung vào viết, biên tập, khai thác và xử lý thông tin. Tôi đặc biệt quan tâm đến những câu chuyện về con người, đời sống và văn hóa, đồng thời mong muốn tiếp tục phát triển khả năng kể chuyện bằng nhiều định dạng nội dung.
          </p>
          <ul className="profile-facts">
            <li><Tick /> <b>CHUYÊN MÔN:</b> Truyền thông đa phương tiện</li>
            <li><Tick /> <b>QUAN TÂM:</b> Báo chí · Văn hóa · Con người · Đời sống</li>
            <li><Tick /> <b>ĐỊNH HƯỚNG:</b> Biên tập · Báo chí · Nội dung đa phương tiện</li>
            <li><Tick /> <b>ĐỊA ĐIỂM:</b> Hà Nội</li>
          </ul>
        </div>
        <div className="about-image image-frame" role="img" aria-label="Hải Đường cùng máy ảnh" />
      </section>

      <section className="contents-section">
        <h2>MỤC LỤC</h2>
        <span className="title-line" />
        <ol>
          <li>01 — SẢN PHẨM TIÊU BIỂU</li>
          <li>02 — BÁO CHÍ</li>
          <li>03 — CHÂN DUNG &amp; PHỎNG VẤN</li>
          <li>04 — MỘT SỐ SẢN PHẨM KHÁC</li>
          <li>05 — KINH NGHIỆM</li>
          <li>06 — KỸ NĂNG</li>
          <li>07 — LIÊN HỆ</li>
        </ol>
      </section>

      <section className="section-block feature-section" id="work">
        <div className="section-title">
          <h2>SẢN PHẨM TIÊU BIỂU</h2>
          <span className="title-line" />
          <p>Một số dự án báo chí, longform và nội dung đa phương tiện tôi đã thực hiện.</p>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article className="feature-card" key={project.title}>
              <div className="feature-image" style={{ backgroundImage: `url(${project.image})` }}>
                <span className="category-badge">{project.type}</span>
                <div className="feature-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
              <ReadButton />
            </article>
          ))}
        </div>
      </section>

      <section className="section-block press-section">
        <div className="section-title">
          <h2>BÁO CHÍ</h2>
          <span className="title-line" />
          <p>Một số tin, bài về thời sự, đời sống, văn hóa và những câu chuyện địa phương.</p>
        </div>
        <div className="article-stack">
          {pressArticles.map(([title, description]) => (
            <article className="article-item" key={title}>
              <Tick />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ReadButton />
            </article>
          ))}
        </div>
      </section>

      <section className="portrait-section">
        <div className="section-title">
          <h2>CHÂN DUNG &amp; PHỎNG VẤN</h2>
          <span className="title-line" />
          <p>Những câu chuyện về con người và các nhân vật ấn tượng.</p>
        </div>
        <div className="portrait-grid">
          {portraits.map(([title, description]) => (
            <article className="portrait-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <ReadButton dark />
            </article>
          ))}
        </div>
      </section>

      <section className="section-block other-section">
        <div className="section-title">
          <h2>MỘT SỐ SẢN PHẨM KHÁC</h2>
          <span className="title-line" />
        </div>
        <div className="other-grid">
          {otherWorks.map(([type, title, description, image]) => (
            <article className="other-card" key={title}>
              <div className="other-image" style={{ backgroundImage: `url(${image})` }}>
                <span className="category-badge">{type}</span>
              </div>
              <div className="other-copy">
                <h3>{title}</h3>
                <p>{description}</p>
                <ReadButton />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-image image-frame" role="img" aria-label="Hải Đường" />
        <div className="experience-copy">
          <h2>KINH NGHIỆM</h2>
          <p>
            Tôi có kinh nghiệm làm việc tại các đơn vị báo chí uy tín, đóng vai trò như cộng tác viên và phóng viên. Quá trình ấy giúp tôi rèn luyện kỹ năng thu thập thông tin, phỏng vấn, và biên tập nội dung trên nhiều nền tảng.
          </p>
          <ul className="experience-list">
            <li><Tick /> BÁO ĐIỆN TỬ DÂN VIỆT — Cộng tác viên</li>
            <li><Tick /> ĐÀI TIẾNG NÓI VIỆT NAM — BAN THỜI SỰ VOV1 · Cộng tác viên</li>
            <li><Tick /> ĐẶC SAN BÁO CHÍ TRẺ — Phóng viên</li>
            <li><Tick /> BÁO CÔNG THƯƠNG — PHÒNG PHÓNG VIÊN · Cộng tác viên</li>
          </ul>
        </div>
      </section>

      <section className="section-block skills-section">
        <div className="section-title">
          <h2>KỸ NĂNG</h2>
          <span className="title-line" />
        </div>
        <div className="skills-grid">
          {skills.map(([title, description]) => (
            <article className="skill-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p>HỢP TÁC CÙNG NHAU</p>
        <h2>MỘT CÂU CHUYỆN ĐÁNG<br />ĐƯỢC KỂ?</h2>
        <span className="title-line" />
        <a href="mailto:hello@haiduong.vn">HELLO@HAIDUONG.VN <b>→</b></a>
      </section>

      <footer>© 2026 NGUYỄN THỊ HẢI ĐƯỜNG · PORTFOLIO</footer>
    </main>
  );
}

export default App;

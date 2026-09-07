import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const featuredProjects = [
  {
    type: "MEGA-STORY · 03 KỲ · VĂN HÓA",
    title: "Xẩm - cuộc dịch chuyển của một di sản",
    description:
      "Một mega-story khám phá sự dịch chuyển của Xẩm từ không gian truyền thống đến những hình thức hiện diện mới trong đời sống đương đại.",
    image: "/7.jpg",
    link: "https://readymag.website/u4079619655/6104481/",
  },
  {
    type: "LONGFORM · VĂN HÓA",
    title: "Người Chàng Sơn tái định vị di sản quạt trăm năm",
    description:
      "Longform khai thác câu chuyện về nghề quạt Chàng Sơn và hành trình đưa một sản phẩm thủ công truyền thống tiếp cận đời sống hiện đại.",
    image: "/6.jpg",
    link: "https://congthuong.vn/longform-nguoi-chang-son-tai-dinh-vi-di-san-quat-tram-nam-450569.html",
  },
  {
    type: "E-MAGAZINE · 03 KỲ · VĂN HÓA",
    title: "Kinh Bắc - Bắc Ninh: mạch chảy văn hóa dân gian trong đời sống (Kỳ 1)",
    description:
      "Series 3 kỳ về Quan họ, bánh phu thê và tranh dân gian Đông Hồ. Khám phá cách những di sản tìm thấy chỗ đứng trong cuộc sống đương đại.",
    image: "/5.jpg",
    link: "https://baobacninhtv.vn/bg/emagazine/kinh-bac-bac-ninh-mach-chay-van-hoa-dan-gian-trong-doi-song-moi-ky-1-hat-de-giu-hoc-de-truyen-postid433825.bbg",
  },
  {
    type: "E-MAGAZINE · 03 KỲ · VĂN HÓA",
    title: "Kinh Bắc - Bắc Ninh: mạch chảy văn hóa dân gian trong đời sống (Kỳ 2)",
    description: "Dòng chảy dân gian trong không gian văn hóa đương đại.",
    image: "/4.jpg",
    link: "https://baobacninhtv.vn/bg/emagazine/kinh-bac-bac-ninh-mach-chay-van-hoa-dan-gian-trong-doi-song-moi-ky-2-banh-phu-the-dong-chay-dan-gian-trong-khong-gian-duong-dai-postid433838.bbg",
  },
  {
    type: "E-MAGAZINE · 03 KỲ · VĂN HÓA",
    title: "Kinh Bắc - Bắc Ninh: mạch chảy văn hóa dân gian trong đời sống (Kỳ 3)",
    description:
      "Khám phá những sắc màu, dấu ấn và hành trình của văn hóa dân gian trong cuộc sống hôm nay.",
    image: "/3.jpg",
    link: "https://baobacninhtv.vn/bg/emagazine/kinh-bac-bac-ninh-mach-chay-van-hoa-dan-gian-trong-doi-song-moi-ky-3-tranh-dan-gian-dong-ho-truyen-sac-mau-noi-mach-giay-do-postid433841.bbg",
  },
  {
    type: "INFOGRAPHIC · DỮ LIỆU",
    title: "Top 10 địa phương thu hút du lịch nhất cả nước dịp 30/4 - 1/5",
    description:
      "Biểu đồ dữ liệu trực quan về các điểm đến du lịch phổ biến nhất trong dịp nghỉ lễ.",
    image: "/2.jpg",
    link: "https://kinhte.congthuong.vn/top-10-dia-phuong-thu-hut-du-lich-nhat-ca-nuoc-dip-30-4-1-5-455141.html",
  },
];

const pressArticles = [
  [
    "Xung đột Trung Đông và 'cú sốc kép' tới thị trường phân bón",
    "Phân tích tác động của xung đột toàn cầu tới thị trường nông sản Việt Nam.",
    "https://congthuong.vn/xung-dot-trung-dong-va-cu-soc-kep-toi-thi-truong-phan-bon-448024.html",
  ],
  [
    "Xung đột Trung Đông: Nhật Bản chưa xem xét đưa tàu chiến tới eo biển Hormuz",
    "Cập nhật tin tức nóng hổi từ sự kiện xung đột Trung Đông",
    "https://congthuong.vn/xung-dot-trung-dong-nhat-ban-chua-xem-xet-dua-tau-chien-toi-eo-bien-hormuz-447287.html",
  ],
  [
    "Nỗi lòng của những người xa quê đón Tết ở Thủ đô",
    "Những câu chuyện nhân vật về việc xa nhà đón những ngày lễ quan trọng.",
    "https://danviet.vn/noi-long-cua-nhung-nguoi-xa-que-don-tet-o-thu-do-20240203135328887-d1143855.html",
  ],
  [
    "Chuyện về căn nhà cổ nằm trên 'đất vàng' ở phố cổ Hà Nội",
    "Khám phá những toà nhà lịch sử giữa lòng thành phố hiện đại.",
    "https://danviet.vn/chuyen-ve-can-nha-co-nam-tren-dat-vang-o-pho-co-ha-noi-20231209081143827-d1133699.html",
  ],
  [
    "Người dân làng Nhật Tân tiết lộ bí quyết chăm sóc để đào nở đúng dịp Tết",
    "Những kinh nghiệm từ các nông dân lâu năm về nghề trồng đào cảnh.",
    "https://danviet.vn/nguoi-dan-lang-nhat-tan-tiet-lo-bi-quyet-cham-soc-de-dao-no-dung-dip-tet-20231225102507896-d1136655.html",
  ],
  [
    "Điều ít biết về ngôi làng cổ độc đáo bậc nhất ở Thủ đô",
    "Hành trình khám phá những làng cổ quanh Hà Nội với lịch sử hàng thế kỷ.",
    "http://danviet.vn/dieu-it-biet-ve-ngoi-lang-co-doc-dao-bac-nhat-o-thu-do-20240217122250687-d1145891.html",
  ],
  [
    "Dàn nhất chi mai 'khủng' lên phố chờ bung hoa dịp Tết",
    "Những chiếc mai lớn nhất được mang lên thành phố cho dịp Tết.",
    "https://danviet.vn/dan-nhat-chi-mai-khung-len-pho-cho-bung-hoa-dip-tet-20240129114318857-d1142818.html",
  ],
];

const portraits = [
  [
    "Hương vị mùa xuân trong ký ức họa sĩ trẻ",
    "Cuộc phỏng vấn với họa sĩ về cách họ thấy màu sắc của mùa xuân qua các tác phẩm.",
    "https://docs.google.com/document/d/1BuyYe1A4OpD1L595DYiLj3fZ3Aeh9gqxFjcbkPKG9Do/edit?tab=t.0",
  ],
  [
    "Họa sĩ Noh.A – 10 năm cháy hết mình với nghề vẽ minh họa",
    "Chân dung của một người nghệ sĩ trẻ và hành trình 10 năm học hỏi, khám phá.",
    "https://docs.google.com/document/d/1oROL7kD2EBEy8KDN0lQ5xiFh9GBMVst2f-COzSX_WUM/edit?tab=t.0",
  ],
  [
    "Họa sĩ Thúy Hà: Tâm hồn có hình hài như thế nào?",
    "Phỏng vấn sâu sắc về quá trình sáng tạo và tầm nhìn nghệ thuật của một họa sĩ.",
    "https://docs.google.com/document/d/14-DcDS916kS2eA96sWhzKja8VCBN4xw3uJimJEoVSow/edit?tab=t.0",
  ],
];

const otherWorks = [
  [
    "MEDIA · TIN TỨC",
    "Thạch Thất: Nông thôn chuyển mình nhờ chuyển đổi cơ cấu cây trồng, vật nuôi",
    "Câu chuyện nông thôn phát triển bền vững ở ngoại thành Hà Nội.",
    "/1.jpg",
    "https://www.facebook.com/reel/1066656718223344"
  ],
];

const socialContent = [
  {
    period: "2023 - 2025",
    title: "FANPAGE BÁO CHÍ TRẺ",
    role: "Quản trị page - Content creator - Biên tập viên",
    bullets: [
      "Lên ý tưởng và triển khai nội dung sáng tạo trên Facebook.",
      "Viết bài, sản xuất nội dung truyền thông (bài đăng, hình ảnh, video) nhằm tăng tương tác và thu hút người xem.",
      "Tham gia cùng đội ngũ thiết kế và media để phát triển nội dung trực quan hấp dẫn.",
      "Nghiên cứu xu hướng, hành vi người dùng để cập nhật chiến lược nội dung phù hợp với thị trường.",
    ],
    summary:
      "Tại đây, tôi đã tích lũy được tư duy nội dung trong môi trường số, độ nhạy với thị hiếu độc giả và khả năng phát triển câu chuyện báo chí thành những định dạng phù hợp với mạng xã hội.",
    image: "/section2.jpg",
  },
  {
    period: "4/2025 - 8/2025",
    title: "Công ty Cổ phần Công nghệ Chatbot Việt Nam",
    role: "Content marketing",
    bullets: [
      "Quản lý và phát triển nội dung cho Fanpage, Tiktok theo yêu cầu khách hàng.",
      "Lên ý tưởng và triển khai nội dung sáng tạo trên Facebook, Tiktok, Instagram.",
      "Sáng tạo nội dung PR, viral trên Facebook nhằm tăng nhận diện thương hiệu và thu hút người dùng/người xem.",
    ],
    summary:
      "Tại đây, tôi cũng có được tư duy marketing và khả năng cân bằng giữa yếu tố sáng tạo, nhu cầu người dùng và mục tiêu truyền thông trong quá trình phát triển nội dung.",
    image: "/section3.jpg",
  },
  {
    period: "4/2026 - 7/2026",
    title: "Công ty TNHH VIC Ecommerce",
    role: "Digital Marketing - Quản trị Page và Group",
    bullets: [
      "Lên ý tưởng và triển khai nội dung sáng tạo trên Facebook, Tiktok, Instagram.",
      "Viết bài, sản xuất nội dung truyền thông (bài đăng, hình ảnh, video) nhằm tăng tương tác và thu hút khách hàng mục tiêu.",
      "Lên kế hoạch và sáng tạo nội dung hàng ngày theo định hướng thương hiệu.",
      "Theo dõi hiệu quả nội dung qua các chỉ số như lượt xem, tương tác, tỷ lệ chuyển đổi, v.vv.. và đưa ra các đề xuất cải thiện.",
    ],
    summary:
      "Tại đây, tôi đã có được khả năng vận hành nội dung đa nền tảng, tư duy tối ưu nội dung theo hiệu quả và sự linh hoạt trong việc thích ứng với nhu cầu thực tế của doanh nghiệp.",
    image: "/section1.jpg",
  },
];

const skills = [
  ["Viết & biên tập", "Viết tin, bài báo chí · Phỏng vấn · Thu thập và xử lý thông tin · Biên tập nội dung"],
  ["Đa phương tiện", "Chụp ảnh · Quay – dựng video cơ bản · Longform · Kể chuyện bằng hình ảnh"],
  ["Công cụ", "Microsoft Word · Google Docs · Canva · CapCut"],
  ["Học vấn", "Học viện Báo chí và Tuyên truyền — Truyền thông đa phương tiện (2022–2026)"],
];

function ReadButton({ href, link, url, dark = false, children, ...props }) {
  const targetHref = href || link || url;
  const className = dark ? "read-button dark" : "read-button";

  if (targetHref) {
    return (
      <a
        href={targetHref}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children || (
          <>
            ĐỌC BÀI <span>→</span>
          </>
        )}
      </a>
    );
  }

  return (
    <button className={className} type="button" {...props}>
      {children || (
        <>
          ĐỌC BÀI <span>→</span>
        </>
      )}
    </button>
  );
}

function Tick() {
  return <span className="tick" aria-hidden="true">✓</span>;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="portfolio" id="top">
      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Về đầu trang">
          <strong>HẢI</strong>
          <span>ĐƯỜNG</span>
        </button>
        <nav aria-label="Điều hướng chính">
          <button onClick={() => scrollTo("about")}>GIỚI THIỆU</button>
          <button onClick={() => scrollTo("work")}>SẢN PHẨM</button>
          <button onClick={() => scrollTo("experience")}>KINH NGHIỆM</button>
          <button onClick={() => scrollTo("contact")}>LIÊN HỆ</button>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy" data-aos="fade-up" data-aos-duration="700">
          <span className="portfolio-pill">PORTFOLIO / 2026 <b>→</b></span>
          <h1>NGUYỄN THỊ<br />HẢI ĐƯỜNG</h1>
          <p className="hero-role">BÁO CHÍ · BIÊN TẬP · MULTIMEDIA</p>
          <p className="hero-lead">Viết những câu chuyện đáng được kể. Tìm kiếm những chi tiết đáng được nhìn thấy.</p>
        </div>
        <div className="hero-image image-frame" data-aos="fade-up" data-aos-delay="100" role="img" aria-label="Chân dung Nguyễn Thị Hải Đường" />
      </section>

      <section className="about-section" id="about">
        <div className="about-copy" data-aos="fade-up">
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
        <div className="about-image image-frame" data-aos="fade-up" data-aos-delay="100" role="img" aria-label="Hải Đường cùng máy ảnh" />
      </section>

      <section className="contents-section" id="toc" data-aos="fade-up">
        <h2>MỤC LỤC</h2>
        <span className="title-line" />
        <ol>
          <li><button type="button" onClick={() => scrollTo("work")}>01 — SẢN PHẨM TIÊU BIỂU</button></li>
          <li><button type="button" onClick={() => scrollTo("press")}>02 — BÁO CHÍ</button></li>
          <li><button type="button" onClick={() => scrollTo("portraits")}>03 — CHÂN DUNG &amp; PHỎNG VẤN</button></li>
          <li><button type="button" onClick={() => scrollTo("social-content")}>04 — SOCIAL CONTENT / MARKETING</button></li>
          <li><button type="button" onClick={() => scrollTo("other-works")}>05 — MỘT SỐ SẢN PHẨM KHÁC</button></li>
          <li><button type="button" onClick={() => scrollTo("experience")}>06 — KINH NGHIỆM</button></li>
          <li><button type="button" onClick={() => scrollTo("skills")}>07 — KỸ NĂNG</button></li>
          <li><button type="button" onClick={() => scrollTo("contact")}>08 — LIÊN HỆ</button></li>
        </ol>
      </section>

      <section className="section-block feature-section" id="work">
        <div className="section-title" data-aos="fade-up">
          <h2>SẢN PHẨM TIÊU BIỂU</h2>
          <span className="title-line" />
          <p>Một số dự án báo chí, longform và nội dung đa phương tiện tôi đã thực hiện.</p>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <article className="feature-card" key={project.title} data-aos="fade-up" data-aos-delay={(index % 3) * 90}>
              <div className="feature-image" style={{ backgroundImage: `url(${project.image})` }}>
                <span className="category-badge">{project.type}</span>
                <div className="feature-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
              <ReadButton href={project.link || project.url || project.href} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-block press-section" id="press">
        <div className="section-title" data-aos="fade-up">
          <h2>BÁO CHÍ</h2>
          <span className="title-line" />
          <p>Một số tin, bài về thời sự, đời sống, văn hóa và những câu chuyện địa phương.</p>
        </div>
        <div className="article-stack">
          {pressArticles.map(([title, description, link], index) => (
            <article className="article-item" key={title} data-aos="fade-up" data-aos-delay={Math.min(index * 60, 240)}>
              <Tick />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ReadButton href={link} />
            </article>
          ))}
        </div>
      </section>

      <section className="portrait-section" id="portraits">
        <div className="section-title" data-aos="fade-up">
          <h2>CHÂN DUNG &amp; PHỎNG VẤN</h2>
          <span className="title-line" />
          <p>Những câu chuyện về con người và các nhân vật ấn tượng.</p>
        </div>
        <div className="portrait-grid">
          {portraits.map(([title, description, link], index) => (
            <article className="portrait-card" key={title} data-aos="fade-up" data-aos-delay={(index % 3) * 90}>
              <h3>{title}</h3>
              <p>{description}</p>
              <ReadButton dark href={link} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-block social-content-section" id="social-content">
        <div className="section-title" data-aos="fade-up">
          <h2>SOCIAL CONTENT / MARKETING</h2>
          <span className="title-line" />
        </div>
        <div className="social-timeline">
          {socialContent.map((entry, index) => (
            <article className="social-entry" key={entry.title} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
              <div className="social-image-col">
                {entry.image ? (
                  <div className="social-image" style={{ backgroundImage: `url(${entry.image})` }} />
                ) : (
                  <div className="social-image social-image-placeholder">
                    <span>{entry.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="social-content-col">
                <span className="social-period">{entry.period}</span>
                <h3>{entry.title}</h3>
                <p className="social-role">Vị trí đảm nhận: {entry.role}</p>
                <ul className="social-bullets">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="social-summary-box">
                  <p>{entry.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block other-section" id="other-works">
        <div className="section-title" data-aos="fade-up">
          <h2>MỘT SỐ SẢN PHẨM KHÁC</h2>
          <span className="title-line" />
        </div>
        <div className="other-grid">
          {otherWorks.map(([type, title, description, image, link], index) => (
            <article className="other-card" key={title} data-aos="fade-up" data-aos-delay={(index % 2) * 90}>
              <div className="other-image" style={{ backgroundImage: `url(${image})` }}>
                <span className="category-badge">{type}</span>
              </div>
              <div className="other-copy">
                <h3>{title}</h3>
                <p>{description}</p>
                <ReadButton href={link} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-image image-frame" data-aos="fade-up" role="img" aria-label="Hải Đường" />
        <div className="experience-copy" data-aos="fade-up" data-aos-delay="100">
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

      <section className="section-block skills-section" id="skills">
        <div className="section-title" data-aos="fade-up">
          <h2>KỸ NĂNG</h2>
          <span className="title-line" />
        </div>
        <div className="skills-grid">
          {skills.map(([title, description], index) => (
            <article className="skill-card" key={title} data-aos="fade-up" data-aos-delay={(index % 2) * 90}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" data-aos="fade-up">
        <h2>MỘT CÂU CHUYỆN ĐÁNG<br />KỂ?</h2>
        <span className="title-line" />
        <p className="contact-lead">Tôi luôn sẵn sàng lắng nghe và khai thác những câu chuyện thú vị</p>
        <a href="mailto:haiduongnguyen8324@gmail.com" className="contact-cta-button">LIÊN HỆ VỚI TÔI</a>
      </section>

      <footer className="site-footer" data-aos="fade-up">
        <div className="footer-brand">
          <strong>NGUYỄN</strong>
          <span>THỊ HẢI ĐƯỜNG</span>
        </div>
        <p className="footer-tagline">PORTFOLIO 2026 · BÁO CHÍ · BIÊN TẬP · MULTIMEDIA</p>
        <ul className="footer-contact-list">
          <li>
            <svg className="footer-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Địa chỉ: Đống Đa - Hà Nội</span>
          </li>
          <li>
            <svg className="footer-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Hotline: <a href="tel:0399568324">0399.568.324</a></span>
          </li>
          <li>
            <svg className="footer-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Email: <a href="mailto:haiduongnguyen8324@gmail.com">haiduongnguyen8324@gmail.com</a></span>
          </li>
        </ul>
        <p className="footer-copyright">© 2026 Nguyễn Thị Hải Đường. Tất cả các quyền được bảo lưu.</p>
      </footer>
    </main>
  );
}

export default App;

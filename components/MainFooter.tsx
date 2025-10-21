const currentYear = new Date().getFullYear();

const MainFooter = () => {
  return (
    <div className="site-footer">
          <div className="footer-content">
            <div className="footer-column footer-brand">
              <p className="footer-heading">Robles Creative Company</p>
              <p className="footer-text">
                Creative agency partnering with founders and small businesses
                to build resonant brands and digital experiences.
              </p>
            </div>
            <div className="footer-column">
              <p className="footer-heading">Services</p>
              <ul className="footer-list">
                <li>Brand strategy</li>
                <li>Photography &amp; video production</li>
                <li>Web development &amp; hosting</li>
              </ul>
            </div>
            <div className="footer-column">
              <p className="footer-heading">Connect</p>
              <a
                href="mailto:edgar@roblescreativeco.com"
                className="footer-link"
              >
                <span className="footer-link-icon" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="4"
                      y="6"
                      width="16"
                      height="12"
                      rx="1.5"
                      fill="none"
                    />
                    <path d="M5 7l7 5.25L19 7" />
                  </svg>
                </span>
                <span>Email</span>
              </a>
              <a
                href="https://instagram.com/roblescreativecompany"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <span className="footer-link-icon" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="4"
                      fill="none"
                    />
                    <circle cx="12" cy="12" r="4" fill="none" />
                    <circle cx="17" cy="7" r="0.9" fill="currentColor" />
                  </svg>
                </span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {currentYear} Robles Creative Company. All rights reserved.
            </span>
            <nav aria-label="Footer secondary navigation">
              Rooted in Milwaukee, Wisconsin.
            </nav>
          </div>
    </div>
  )
}

export default MainFooter
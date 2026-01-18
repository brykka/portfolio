interface FooterProps {
  copyrightText?: string;
  links?: Array<{ href: string; label: string }>;
}

export default function Footer({
  copyrightText = `© ${new Date().getFullYear()} Portfolio. All rights reserved.`,
  links,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-container">
        {links && links.length > 0 && (
          <nav className="footer-nav" aria-label="Footer navigation">
            <ul className="footer-nav-list">
              {links.map((link, index) => (
                <li key={index} className="footer-nav-item">
                  <a href={link.href} className="footer-nav-link" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <p className="footer-copyright">{copyrightText}</p>
      </div>
    </footer>
  );
}

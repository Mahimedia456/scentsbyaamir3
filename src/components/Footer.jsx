import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.glow}></div>

      <div style={styles.container}>
        <div style={styles.grid}>
          <div>
            <img src={logo} alt="Scents By Aamir" style={styles.logo} />

            <p style={styles.description}>
              Luxury inspired fragrances crafted for confidence, identity, and
              everyday elegance. Discover your signature scent with Scents By
              Aamir.
            </p>

            <div style={styles.socialRow}>
              <a href="#" style={styles.social}>IG</a>
              <a href="#" style={styles.social}>FB</a>
              <a href="#" style={styles.social}>TT</a>
              <a href="#" style={styles.social}>WA</a>
            </div>
          </div>

          <FooterCol
            title="Shop"
            links={[
              ["All Perfumes", "/shop"],
              ["Men", "/collections/men"],
              ["Women", "/collections/women"],
              ["Unisex", "/collections/unisex"],
              ["Tester Box", "/collections/tester-box"],
            ]}
          />

          <FooterCol
            title="Brand"
            links={[
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Scent Finder", "/scent-finder"],
              ["Order Tracking", "/order-tracking"],
              ["FAQ", "/faq"],
            ]}
          />

          <FooterCol
            title="Policies"
            links={[
              ["Shipping Policy", "/shipping-policy"],
              ["Refund Policy", "/refund-return-policy"],
              ["Privacy Policy", "/privacy-policy"],
              ["Terms & Conditions", "/terms-of-services"],
            ]}
          />
        </div>

        <div style={styles.contactBox}>
          <div style={styles.contactItem}>
            <span style={styles.contactLabel}>Phone</span>
            <span style={styles.contactText}>+92 300 0000000</span>
          </div>

          <div style={styles.contactItem}>
            <span style={styles.contactLabel}>Email</span>
            <span style={styles.contactText}>info@scentsbyaamir.com</span>
          </div>

          <div style={styles.contactItem}>
            <span style={styles.contactLabel}>Location</span>
            <span style={styles.contactText}>Pakistan</span>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copy}>© {year} Scents By Aamir. All rights reserved.</p>

          <div style={styles.bottomLinks}>
            <Link to="/privacy-policy" style={styles.bottomLink}>Privacy</Link>
            <Link to="/terms-of-services" style={styles.bottomLink}>Terms</Link>
            <Link to="/shipping-policy" style={styles.bottomLink}>Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 style={styles.colTitle}>{title}</h3>

      <div style={styles.linkList}>
        {links.map(([label, path]) => (
          <Link key={label} to={path} style={styles.link}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  footer: {
    position: "relative",
    overflow: "hidden",
    borderTop: "1px solid rgba(255,255,255,0.10)",
    background:
      "linear-gradient(135deg, var(--theme-bg) 0%, var(--theme-bg-card) 45%, var(--theme-accent-deep) 100%)",
    color: "var(--theme-ivory)",
  },

  glow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 0%, rgba(var(--theme-accent-rgb),0.28), transparent 38%), radial-gradient(circle at 90% 30%, rgba(var(--theme-gold-rgb),0.10), transparent 25%)",
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "70px 28px 28px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1.4fr 0.8fr 0.8fr 0.8fr",
    gap: "42px",
  },

  logo: {
    height: "70px",
    width: "auto",
    objectFit: "contain",
    marginBottom: "20px",
  },

  description: {
    maxWidth: "430px",
    margin: 0,
    color: "var(--theme-muted)",
    fontSize: "14px",
    lineHeight: "1.9",
  },

  socialRow: {
    display: "flex",
    gap: "12px",
    marginTop: "26px",
  },

  social: {
    width: "42px",
    height: "42px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    color: "var(--theme-ivory)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: 800,
    textDecoration: "none",
    letterSpacing: "0.08em",
  },

  colTitle: {
    margin: "0 0 20px",
    color: "var(--theme-gold)",
    fontSize: "13px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.25em",
  },

  linkList: {
    display: "flex",
    flexDirection: "column",
    gap: "13px",
  },

  link: {
    color: "var(--theme-muted)",
    fontSize: "14px",
    textDecoration: "none",
  },

  contactBox: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    marginTop: "50px",
    padding: "20px",
    borderRadius: "28px",
    border: "1px solid rgba(var(--theme-gold-rgb),0.16)",
    background: "rgba(0,0,0,0.26)",
    backdropFilter: "blur(18px)",
  },

  contactItem: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  contactLabel: {
    color: "var(--theme-gold)",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
  },

  contactText: {
    color: "var(--theme-ivory)",
    fontSize: "14px",
    fontWeight: 600,
  },

  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px",
    marginTop: "34px",
    paddingTop: "24px",
    borderTop: "1px solid rgba(255,255,255,0.10)",
  },

  copy: {
    margin: 0,
    color: "var(--theme-muted)",
    fontSize: "12px",
  },

  bottomLinks: {
    display: "flex",
    gap: "20px",
  },

  bottomLink: {
    color: "var(--theme-muted)",
    fontSize: "12px",
    textDecoration: "none",
  },
};
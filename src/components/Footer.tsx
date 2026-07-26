/**
 * Footer.tsx
 * Shared footer used on all pages.
 */

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Dorth Arenas. All rights reserved.</p>
      <p style={{ marginTop: 4, opacity: 0.45 }}>
        Always looking forward
      </p>
    </footer>
  );
}

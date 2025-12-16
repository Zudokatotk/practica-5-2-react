function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Grid Games</h1>
        <p>Práctica 5.2 · React + Vite</p>
      </header>

      <main style={styles.main}>
        <section style={styles.card}>
          <h2>Bienvenido</h2>
          <p>
            Esta página fue desarrollada con <strong>React</strong> y desplegada
            en <strong>Vercel</strong> como parte de la Práctica 5.2.
          </p>
        </section>

        <section style={styles.card}>
          <h2>Tecnologías</h2>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>JavaScript</li>
            <li>Vercel</li>
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <small>© 2025 Grid Games</small>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "#0f0f10",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "24px",
    textAlign: "center",
    background: "#18191c",
    borderBottom: "2px solid #ffd000",
  },
  main: {
    flex: 1,
    display: "grid",
    gap: "20px",
    padding: "30px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    background: "#18191c",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #2a2b2f",
  },
  footer: {
    textAlign: "center",
    padding: "16px",
    background: "#18191c",
    borderTop: "1px solid #2a2b2f",
  },
};

export default App;

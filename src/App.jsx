function App() {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      color: "#ffffff",
      fontFamily: "Segoe UI, system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      width: "100%",
      padding: "40px 20px",
      textAlign: "center",
      background: "rgba(0,0,0,0.25)",
      backdropFilter: "blur(6px)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    },
    title: {
      fontSize: "2.6rem",
      margin: 0,
      letterSpacing: "1px",
    },
    subtitle: {
      marginTop: "10px",
      fontSize: "1.1rem",
      opacity: 0.85,
    },
    main: {
      maxWidth: "900px",
      width: "100%",
      padding: "40px 20px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "24px",
    },
    card: {
      background: "rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
      transition: "transform .2s ease",
    },
    footer: {
      marginTop: "auto",
      padding: "16px",
      fontSize: "0.9rem",
      opacity: 0.7,
    },
    badge: {
      display: "inline-block",
      marginTop: "12px",
      padding: "6px 14px",
      borderRadius: "999px",
      background: "#ffd000",
      color: "#111",
      fontWeight: "700",
      fontSize: "0.85rem",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Grid Games</h1>
        <p style={styles.subtitle}>
          Aplicación web desarrollada con tecnologías modernas
        </p>
      </header>

      <main style={styles.main}>
        <section style={styles.card}>
          <h2>Descripción</h2>
          <p>
            Esta página forma parte de la <strong>Práctica 5.2</strong> y
            representa el despliegue de una aplicación web desarrollada en
            <strong> React</strong>, utilizando <strong>Vite</strong> como
            herramienta de construcción.
          </p>
          <span style={styles.badge}>Frontend React</span>
        </section>

        <section style={styles.card}>
          <h2>Tecnologías utilizadas</h2>
          <ul>
            <li>React (Componentes y JSX)</li>
            <li>Vite (Build Tool)</li>
            <li>JavaScript moderno (ES6+)</li>
            <li>Vercel (Despliegue en producción)</li>
          </ul>
          <span style={styles.badge}>Vercel Deploy</span>
        </section>

        <section style={styles.card}>
          <h2>Estado del proyecto</h2>
          <p>
            La aplicación se encuentra correctamente compilada y desplegada en
            un entorno de producción, accesible mediante una URL pública.
          </p>
          <span style={styles.badge}>Producción</span>
        </section>
      </main>

      <footer style={styles.footer}>
        © 2025 — Grid Games | Ingeniería de Sistemas
      </footer>
    </div>
  );
}

export default App;
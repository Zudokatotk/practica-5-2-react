function App() {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #ffd00022, #0b0f14 55%)",
      color: "#fff",
      fontFamily: "Segoe UI, system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      padding: "70px 20px",
      textAlign: "center",
    },
    title: {
      fontSize: "3.2rem",
      margin: 0,
      letterSpacing: "3px",
    },
    subtitle: {
      marginTop: "14px",
      fontSize: "1.25rem",
      opacity: 0.85,
    },
    tag: {
      marginTop: "22px",
      display: "inline-block",
      padding: "10px 22px",
      borderRadius: "999px",
      background: "#ffd000",
      color: "#111",
      fontWeight: "800",
      letterSpacing: "1px",
    },
    section: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "60px 20px",
    },
    sectionTitle: {
      fontSize: "2.1rem",
      marginBottom: "30px",
      borderLeft: "6px solid #ffd000",
      paddingLeft: "14px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "26px",
    },
    card: {
      background: "linear-gradient(160deg, #1b2633, #121a22)",
      borderRadius: "18px",
      padding: "26px",
      boxShadow: "0 12px 32px rgba(0,0,0,.45)",
      transition: "transform .25s ease",
    },
    cardTitle: {
      marginTop: 0,
      marginBottom: "12px",
      color: "#ffd000",
    },
    footer: {
      marginTop: "auto",
      padding: "20px",
      textAlign: "center",
      fontSize: "0.9rem",
      opacity: 0.7,
      borderTop: "1px solid rgba(255,255,255,0.12)",
    },
  };

  return (
    <div style={styles.page}>
      {/* HERO */}
      <header style={styles.header}>
        <h1 style={styles.title}>GRID GAMES</h1>
        <p style={styles.subtitle}>
          Plataforma gamer para la gestión y visualización de juegos
        </p>
        <span style={styles.tag}>React • Vite • Vercel</span>
      </header>

      {/* CATEGORÍAS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎮 Categorías de juegos</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>♟️ Juegos de mesa</h3>
            <p>
              Ajedrez, Ludo, Monopoly y juegos clásicos enfocados en estrategia
              y entretenimiento social.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🧠 Juegos mentales</h3>
            <p>
              Juegos diseñados para estimular la lógica, memoria y pensamiento
              crítico.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🃏 Cartas & accesorios</h3>
            <p>
              Cartas, dados y complementos para experiencias de juego completas.
            </p>
          </div>
        </div>
      </section>

      {/* SISTEMA */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>⚙️ Funcionalidades</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📊 Dashboard</h3>
            <p>
              Visualización de métricas, productos, usuarios y actividad del
              sistema.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🛠️ Administración</h3>
            <p>
              Gestión de productos, stock y usuarios mediante un panel interno.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📨 Contactos</h3>
            <p>
              Recepción y atención de consultas de clientes mediante tickets.
            </p>
          </div>
        </div>
      </section>

      {/* ACADÉMICO */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎓 Contexto académico</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Práctica 5.2</h3>
            <p>
              Aplicación desarrollada en React como parte de la asignatura de
              Desarrollo Web.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Despliegue</h3>
            <p>
              Proyecto compilado con Vite y desplegado en producción mediante
              Vercel.
            </p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2025 Grid Games — Ingeniería de Sistemas · Práctica 5.2
      </footer>
    </div>
  );
}

export default App;

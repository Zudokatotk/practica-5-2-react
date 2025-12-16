function App() {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0b0f14, #141c24, #1f2a36)",
      color: "#ffffff",
      fontFamily: "Segoe UI, system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      padding: "60px 20px",
      textAlign: "center",
      background: "radial-gradient(circle at top, #ffd00033, transparent 60%)",
    },
    title: {
      fontSize: "3rem",
      margin: 0,
      letterSpacing: "2px",
    },
    subtitle: {
      marginTop: "14px",
      fontSize: "1.2rem",
      opacity: 0.85,
    },
    badge: {
      display: "inline-block",
      marginTop: "18px",
      padding: "8px 18px",
      borderRadius: "999px",
      background: "#ffd000",
      color: "#111",
      fontWeight: "700",
      fontSize: "0.9rem",
    },
    section: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "50px 20px",
    },
    sectionTitle: {
      fontSize: "2rem",
      marginBottom: "24px",
      borderLeft: "6px solid #ffd000",
      paddingLeft: "14px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "24px",
    },
    card: {
      background: "rgba(255,255,255,0.06)",
      borderRadius: "16px",
      padding: "22px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      transition: "transform .25s ease",
    },
    cardTitle: {
      marginTop: 0,
      marginBottom: "10px",
    },
    highlight: {
      color: "#ffd000",
      fontWeight: "700",
    },
    footer: {
      marginTop: "auto",
      padding: "20px",
      textAlign: "center",
      fontSize: "0.9rem",
      opacity: 0.65,
      borderTop: "1px solid rgba(255,255,255,0.1)",
    },
  };

  return (
    <div style={styles.page}>
      {/* HERO */}
      <header style={styles.header}>
        <h1 style={styles.title}>Grid Games</h1>
        <p style={styles.subtitle}>
          Plataforma digital orientada a la gestión y visualización de juegos
        </p>
        <span style={styles.badge}>React + Vite + Vercel</span>
      </header>

      {/* CATEGORÍAS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Categorías principales</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🎲 Juegos de mesa</h3>
            <p>
              Gestión de juegos clásicos como ajedrez, ludo, monopoly y juegos
              estratégicos para todo público.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🧠 Juegos mentales</h3>
            <p>
              Sección orientada al desarrollo cognitivo y lógico mediante juegos
              de análisis y pensamiento crítico.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🃏 Cartas y accesorios</h3>
            <p>
              Productos complementarios como cartas, dados y elementos de apoyo
              para distintas dinámicas de juego.
            </p>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Funcionalidades del sistema</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Panel administrativo</h3>
            <p>
              Visualización de productos, usuarios y métricas generales mediante
              un <span style={styles.highlight}>dashboard</span>.
            </p>
          </div>
          <div style={styles.card}>
            <h3>Gestión de productos</h3>
            <p>
              Registro, edición y control de stock de productos utilizando
              almacenamiento local.
            </p>
          </div>
          <div style={styles.card}>
            <h3>Contacto con clientes</h3>
            <p>
              Recepción de consultas mediante formularios y atención de tickets
              desde el panel administrativo.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN TÉCNICA */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Aspectos técnicos</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Arquitectura</h3>
            <p>
              Aplicación desarrollada bajo un enfoque de componentes reutilizables
              usando React y JSX.
            </p>
          </div>
          <div style={styles.card}>
            <h3>Despliegue</h3>
            <p>
              Proyecto compilado con Vite y desplegado en un entorno de producción
              utilizando la plataforma Vercel.
            </p>
          </div>
          <div style={styles.card}>
            <h3>Propósito académico</h3>
            <p>
              Desarrollo realizado como parte de la <strong>Práctica 5.2</strong>{" "}
              de la asignatura de Desarrollo Web.
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

import { useEffect, useMemo, useState } from "react";

function App() {
  // ===== Estado =====
  const [theme, setTheme] = useState(() => localStorage.getItem("gg_theme") || "gold");
  const [mode, setMode] = useState(() => localStorage.getItem("gg_mode") || "dark"); // dark | neon
  const [likes, setLikes] = useState(() => Number(localStorage.getItem("gg_likes") || 0));
  const [visits, setVisits] = useState(() => Number(localStorage.getItem("gg_visits") || 0));
  const [notes, setNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("gg_notes_react") || "[]");
    } catch {
      return [];
    }
  });
  const [noteText, setNoteText] = useState("");

  // ===== Efectos =====
  useEffect(() => {
    // simular visitas (sube 1 cada vez que abres)
    const v = visits + 1;
    setVisits(v);
    localStorage.setItem("gg_visits", String(v));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => localStorage.setItem("gg_theme", theme), [theme]);
  useEffect(() => localStorage.setItem("gg_mode", mode), [mode]);
  useEffect(() => localStorage.setItem("gg_likes", String(likes)), [likes]);
  useEffect(() => localStorage.setItem("gg_notes_react", JSON.stringify(notes)), [notes]);

  const accent = useMemo(() => {
    if (theme === "gold") return "#ffd000";
    if (theme === "blue") return "#35b6ff";
    return "#b56dff"; // purple
  }, [theme]);

  const bg = mode === "neon"
    ? `radial-gradient(circle at top, ${accent}33, #05080c 55%)`
    : `radial-gradient(circle at top, ${accent}22, #0b0f14 55%)`;

  const cardBg = mode === "neon"
    ? "linear-gradient(160deg, #13202c, #0a0f16)"
    : "linear-gradient(160deg, #1b2633, #121a22)";

  // ===== Acciones =====
  const addNote = () => {
    const t = noteText.trim();
    if (!t) return;
    const item = { id: crypto.randomUUID(), text: t, created: Date.now() };
    setNotes((prev) => [item, ...prev].slice(0, 10)); // max 10
    setNoteText("");
  };

  const removeNote = (id) => setNotes((prev) => prev.filter((n) => n.id !== id));

  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("URL copiada ✅");
    } catch {
      alert("No se pudo copiar 😅 (permiso del navegador)");
    }
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ===== Styles =====
  const styles = {
    page: {
      minHeight: "100vh",
      background: bg,
      color: "#fff",
      fontFamily: "Segoe UI, system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
    },
    topBar: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      backdropFilter: "blur(10px)",
      background: "rgba(10, 14, 20, 0.65)",
      borderBottom: "1px solid rgba(255,255,255,0.12)",
    },
    topBarInner: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "14px 20px",
      display: "flex",
      gap: 10,
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    brand: { fontWeight: 900, letterSpacing: 2 },
    pill: {
      padding: "8px 14px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.18)",
      background: "rgba(255,255,255,0.06)",
      color: "#fff",
      cursor: "pointer",
      fontWeight: 700,
    },
    btnAccent: {
      padding: "8px 14px",
      borderRadius: 999,
      border: "1px solid rgba(0,0,0,0.4)",
      background: accent,
      color: "#111",
      cursor: "pointer",
      fontWeight: 900,
    },
    header: { padding: "70px 20px", textAlign: "center" },
    title: { fontSize: "3.2rem", margin: 0, letterSpacing: "3px" },
    subtitle: { marginTop: 14, fontSize: "1.1rem", opacity: 0.85 },
    tag: {
      marginTop: 22,
      display: "inline-block",
      padding: "10px 22px",
      borderRadius: 999,
      background: accent,
      color: "#111",
      fontWeight: 900,
      letterSpacing: 1,
    },
    section: { maxWidth: 1200, margin: "0 auto", padding: "40px 20px" },
    sectionTitle: {
      fontSize: "2rem",
      marginBottom: 22,
      borderLeft: `6px solid ${accent}`,
      paddingLeft: 14,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 18,
    },
    card: {
      background: cardBg,
      borderRadius: 18,
      padding: 22,
      boxShadow: "0 12px 32px rgba(0,0,0,.45)",
      border: "1px solid rgba(255,255,255,0.12)",
    },
    cardTitle: { marginTop: 0, marginBottom: 10, color: accent },
    mini: { opacity: 0.8, fontSize: ".95rem" },
    noteRow: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginTop: 12,
    },
    input: {
      flex: 1,
      padding: "10px 12px",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,0.18)",
      background: "rgba(0,0,0,0.25)",
      color: "#fff",
      outline: "none",
    },
    noteItem: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      alignItems: "center",
      padding: "10px 12px",
      borderRadius: 14,
      border: "1px dashed rgba(255,255,255,0.18)",
      background: "rgba(255,255,255,0.04)",
      marginTop: 10,
    },
    footer: {
      marginTop: "auto",
      padding: 20,
      textAlign: "center",
      fontSize: ".9rem",
      opacity: 0.75,
      borderTop: "1px solid rgba(255,255,255,0.12)",
    },
  };

  return (
    <div style={styles.page}>
      {/* TopBar con botones */}
      <div style={styles.topBar}>
        <div style={styles.topBarInner}>
          <div style={styles.brand}>GRID GAMES</div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button style={styles.pill} onClick={() => setMode((m) => (m === "dark" ? "neon" : "dark"))}>
              {mode === "dark" ? "⚡ Modo Neón" : "🌙 Modo Oscuro"}
            </button>

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              style={{ ...styles.pill, cursor: "pointer" }}
            >
              <option value="gold">🎯 Amarillo</option>
              <option value="blue">💠 Azul</option>
              <option value="purple">🟣 Morado</option>
            </select>

            <button style={styles.btnAccent} onClick={() => setLikes((x) => x + 1)}>
              ❤️ Like ({likes})
            </button>

            <button style={styles.pill} onClick={copyURL}>🔗 Copiar URL</button>
            <button style={styles.pill} onClick={scrollTop}>⬆️ Arriba</button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <header style={styles.header}>
        <h1 style={styles.title}>GRID GAMES</h1>
        <p style={styles.subtitle}>
          Página hecha con <b>React</b> + <b>Vite</b> y desplegada en <b>Vercel</b> (Práctica 5.2)
        </p>
        <span style={styles.tag}>React • Vite • Deploy</span>
        <p style={{ ...styles.mini, marginTop: 14 }}>👀 Visitas simuladas: <b>{visits}</b></p>
      </header>

      {/* Secciones */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎮 Categorías</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>♟️ Juegos de mesa</h3>
            <p>Catálogo con títulos clásicos y competitivos para jugar en grupo.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🧠 Mentales</h3>
            <p>Sección de lógica y desafíos para activar el “modo ingeniero”.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🃏 Cartas y accesorios</h3>
            <p>Barajas, dados y extras. Todo lo que completa la experiencia gamer.</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🧩 Mini panel (demo)</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📌 Novedades</h3>
            <p style={styles.mini}>Agrega notas para que se vea “funcional” sin backend.</p>

            <div style={styles.noteRow}>
              <input
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Ej: Agregar sección de promos…"
                style={styles.input}
              />
              <button style={styles.btnAccent} onClick={addNote}>➕ Agregar</button>
            </div>

            {notes.length === 0 ? (
              <p style={{ ...styles.mini, marginTop: 12 }}>No hay novedades aún.</p>
            ) : (
              notes.map((n) => (
                <div key={n.id} style={styles.noteItem}>
                  <span>{n.text}</span>
                  <button style={styles.pill} onClick={() => removeNote(n.id)}>🗑️</button>
                </div>
              ))
            )}
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🔗 Accesos rápidos</h3>
            <p style={styles.mini}>Botones para que el profe vea “navegación”.</p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <a style={styles.pill} href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>
              <a style={styles.pill} href="https://react.dev" target="_blank" rel="noreferrer">React Docs</a>
              <a style={styles.pill} href="https://vite.dev" target="_blank" rel="noreferrer">Vite Docs</a>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2025 Grid Games · Práctica 5.2 (React + Vite + Vercel)
      </footer>
    </div>
  );
}

export default App;

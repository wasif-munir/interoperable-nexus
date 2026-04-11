import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

// ── Theme tokens ─────────────────────────────────────────────────────
const DARK = {
  bg: "#0A1628", sidebar: "#0F2044", card: "rgba(15,32,68,0.90)",
  glass: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.08)",
  text: "#F8FAFC", textSub: "#94A3B8", textMuted: "#CBD5E1",
  blue: "#1A56DB", cyan: "#06B6D4", teal: "#0D9488",
  green: "#10B981", amber: "#F59E0B", red: "#EF4444",
  navActive: "rgba(26,86,219,0.22)", shadow: "0 4px 24px rgba(0,0,0,0.4)",
};
const LIGHT = {
  bg: "#EEF2FA", sidebar: "#FFFFFF", card: "#FFFFFF",
  glass: "rgba(0,0,0,0.03)", border: "rgba(0,0,0,0.09)",
  text: "#0F172A", textSub: "#64748B", textMuted: "#475569",
  blue: "#1A56DB", cyan: "#0891B2", teal: "#0F766E",
  green: "#059669", amber: "#D97706", red: "#DC2626",
  navActive: "rgba(26,86,219,0.09)", shadow: "0 2px 12px rgba(0,0,0,0.08)",
};

const font = "'DM Sans', system-ui, sans-serif";
const mono = "'JetBrains Mono', monospace";

type Theme = typeof DARK;

// ── Theme toggle ─────────────────────────────────────────────────────
const ThemeToggle = ({ dark, onToggle }: { dark: boolean; onToggle: () => void }) => (
  <button onClick={onToggle} style={{
    display: "flex", alignItems: "center", gap: 8,
    background: dark ? "#1A56DB" : "#0F172A",
    border: "none", borderRadius: 99, padding: "7px 14px 7px 10px",
    cursor: "pointer", transition: "background .25s",
  }}>
    <span style={{ fontSize: 15 }}>{dark ? "🌙" : "☀️"}</span>
    <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", fontFamily: font }}>
      {dark ? "Dark" : "Light"}
    </span>
    <div style={{ width: 34, height: 18, borderRadius: 99, background: "rgba(255,255,255,.18)", position: "relative", flexShrink: 0 }}>
      <div style={{
        position: "absolute", top: 2, width: 14, height: 14, borderRadius: "50%",
        background: "#fff", transition: "left .22s", left: dark ? 18 : 2,
        boxShadow: "0 1px 4px rgba(0,0,0,.3)",
      }} />
    </div>
  </button>
);

// ── Generic UI ───────────────────────────────────────────────────────
const Badge = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <span style={{
    background: color + "22", color, border: `1px solid ${color}44`,
    borderRadius: 6, padding: "2px 10px", fontSize: 11, fontWeight: 700,
    letterSpacing: ".6px", textTransform: "uppercase",
  }}>{children}</span>
);

const Card = ({ children, style = {}, onClick, T }: { children: React.ReactNode; style?: React.CSSProperties; onClick?: () => void; T: Theme }) => (
  <div onClick={onClick} style={{
    background: T.card, border: `1px solid ${T.border}`,
    borderRadius: 16, padding: 20, boxShadow: T.shadow,
    cursor: onClick ? "pointer" : "default", transition: "border-color .2s, box-shadow .2s",
    ...style,
  }}
    onMouseEnter={e => onClick && (e.currentTarget.style.borderColor = T.blue + "99")}
    onMouseLeave={e => onClick && (e.currentTarget.style.borderColor = T.border)}
  >{children}</div>
);

const Pill = ({ label, active, onClick, T }: { label: string; active: boolean; onClick: () => void; T: Theme }) => (
  <button onClick={onClick} style={{
    background: active ? T.blue : T.glass,
    border: `1px solid ${active ? T.blue : T.border}`,
    color: active ? "#fff" : T.textSub,
    borderRadius: 99, padding: "6px 18px", fontSize: 13, fontWeight: 600,
    cursor: "pointer", transition: "all .2s", whiteSpace: "nowrap",
  }}>{label}</button>
);

const Spark = ({ data, color, width = 80, height = 32 }: { data: number[]; color: string; width?: number; height?: number }) => {
  const min = Math.min(...data), max = Math.max(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / (max - min || 1)) * (height - 4) - 2;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      <polyline fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={pts} />
    </svg>
  );
};

const ECGLine = ({ color }: { color: string }) => {
  const [off, setOff] = useState(0);
  useEffect(() => { const id = setInterval(() => setOff(o => (o + 2) % 200), 30); return () => clearInterval(id); }, []);
  const ecg = "M0,16 L10,16 L14,4 L18,28 L22,16 L30,16 L34,10 L38,22 L42,16 L60,16 L64,4 L68,28 L72,16 L80,16";
  return (
    <svg width="160" height="32" style={{ overflow: "hidden" }}>
      <defs><clipPath id="ec"><rect width="160" height="32" /></clipPath></defs>
      <g clipPath="url(#ec)">
        {[80, 280].map(dx => <path key={dx} d={ecg} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" transform={`translate(${-off + dx},0)`} />)}
      </g>
    </svg>
  );
};

const VitalTile = ({ icon, label, value, unit, spark, color, status, T }: { icon: string; label: string; value: string | number; unit: string; spark?: number[]; color: string; status?: string; T: Theme }) => {
  const sc = status === "normal" ? T.green : status === "warn" ? T.amber : T.red;
  return (
    <Card T={T} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 18 }}>{icon}</span>
        {status && <Badge color={sc}>{status}</Badge>}
      </div>
      <div style={{ color: T.textSub, fontSize: 11, fontWeight: 600, letterSpacing: ".5px", textTransform: "uppercase" }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontSize: 26, fontWeight: 800, color: T.text, fontFamily: mono }}>{value}</span>
        <span style={{ fontSize: 12, color: T.textSub }}>{unit}</span>
      </div>
      {spark && <Spark data={spark} color={color} />}
    </Card>
  );
};

const AlertRow = ({ type, msg, time, onDismiss, T }: { type: string; msg: string; time: string; onDismiss: (() => void) | null; T: Theme }) => {
  const color = type === "critical" ? T.red : type === "warn" ? T.amber : T.blue;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, background: color + "11", border: `1px solid ${color}33`, borderRadius: 10, padding: "10px 14px" }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{msg}</div>
        <div style={{ fontSize: 11, color: T.textSub }}>{time}</div>
      </div>
      {onDismiss && <button onClick={onDismiss} style={{ background: "none", border: "none", color: T.textSub, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>}
    </div>
  );
};

// ── Static data ──────────────────────────────────────────────────────
const NAV = [
  { id: "overview", icon: "⚡", label: "Overview" },
  { id: "vitals",   icon: "💓", label: "Vitals" },
  { id: "devices",  icon: "📡", label: "Devices" },
  { id: "alerts",   icon: "🔔", label: "Alerts" },
  { id: "plan",     icon: "📋", label: "Business Plan" },
  { id: "settings", icon: "⚙️", label: "Settings" },
];

const BP = {
  problem: "76M+ Americans over 65 lack continuous health monitoring. Hospital readmission costs $26B/yr. Caregivers are overwhelmed. Current RPM tools are fragmented & siloed.",
  solution: "CareGrid: an AI-powered, sensor-fused home health OS that aggregates wearables, smart home sensors, and clinical data into one unified platform for patients, caregivers & providers.",
  market: [
    { label: "TAM – Global RPM", value: "$175B by 2030" },
    { label: "SAM – US Chronic Care", value: "$42B" },
    { label: "SOM – Year 3 Target", value: "$120M ARR" },
  ],
  mvpScope: [
    "Multi-functional smartwatch vitals (HR, SpO₂, Temp, BP)",
    "Fall-detection sensor integration",
    "AI voice assistant + smart pillbox",
    "Remote caregiver video + alert dashboard",
    "Cloud ML anomaly detection",
    "Emergency SOS one-tap",
  ],
  phases: [
    { phase: "MVP",    time: "0–6 mo",   goal: "500 pilot patients, 3 health systems", cost: "$1.2M" },
    { phase: "Scale",  time: "6–18 mo",  goal: "10K patients, 15 states, CMS billing", cost: "$4.8M" },
    { phase: "Expand", time: "18–36 mo", goal: "100K patients, international, AI Dx",  cost: "$14M"  },
  ],
  revenue: [
    { stream: "Patient SaaS",     model: "$89/mo per patient" },
    { stream: "Provider License", model: "$2,500/mo per clinic" },
    { stream: "CMS RPM Billing",  model: "$120/patient/mo reimbursement" },
    { stream: "Data Insights",    model: "Pharma & payer partnerships" },
  ],
  risks: [
    { risk: "FDA clearance delays",  mit: "Pre-sub meeting Q1; use cleared sensors" },
    { risk: "HIPAA data breach",     mit: "SOC2 Type II, end-to-end encryption" },
    { risk: "Reimbursement cuts",    mit: "Diversify to direct-pay & employer plans" },
    { risk: "Low patient adoption",  mit: "Caregiver-first onboarding, robot pet UX" },
  ],
};

const mkSp = (b: number, n: number, l = 20) => Array.from({ length: l }, () => b + (Math.random() - .5) * n);

interface Patient {
  id: number;
  name: string;
  age: number;
  room: string;
  risk: string;
  hr: number;
  spo2: number;
  bp: string;
  temp: number;
}

const PATIENTS: Patient[] = [
  { id: 1, name: "Eleanor Simmons", age: 72, room: "Rm 4B", risk: "low",  hr: 78,  spo2: 97, bp: "126/82", temp: 37.1 },
  { id: 2, name: "Robert Chen",     age: 68, room: "Home",  risk: "high", hr: 102, spo2: 94, bp: "148/96", temp: 37.8 },
  { id: 3, name: "Martha Williams", age: 81, room: "Home",  risk: "med",  hr: 88,  spo2: 96, bp: "135/88", temp: 37.3 },
  { id: 4, name: "James O'Brien",   age: 75, room: "Home",  risk: "low",  hr: 72,  spo2: 98, bp: "122/78", temp: 36.9 },
];

const DEVS = [
  { name: "Smartwatch",      patient: "Eleanor S.", status: "online",  battery: 82, icon: "⌚" },
  { name: "Smart Patch",     patient: "Robert C.",  status: "online",  battery: 71, icon: "🩹" },
  { name: "Cardiac Monitor", patient: "Robert C.",  status: "online",  battery: 95, icon: "📊" },
  { name: "Fall Sensor",     patient: "Martha W.",  status: "online",  battery: 60, icon: "🚨" },
  { name: "Smart Pillbox",   patient: "Martha W.",  status: "online",  battery: 88, icon: "💊" },
  { name: "AI Voice Asst.",  patient: "James O.",   status: "offline", battery: 0,  icon: "🤖" },
  { name: "Smart Scale",     patient: "Eleanor S.", status: "online",  battery: 55, icon: "⚖️" },
  { name: "Glucose Monitor", patient: "Robert C.",  status: "warn",    battery: 22, icon: "🩸" },
];

// ════════════════════════════════════════════════════════════════════
export default function PortfolioRpmDemo() {
  useSeo({
    title: "CareGrid RPM - Interactive Demo",
    description: "Interactive MVP demo of CareGrid, an AI-powered remote patient monitoring platform with real-time vitals, device management, and clinical alerts.",
    url: "/portfolio/rpm-demo",
    tags: ["RPM", "Healthcare", "Demo", "MVP"],
  });

  const [dark, setDark]     = useState(true);
  const [page, setPage]     = useState("overview");
  const [pt, setPt]         = useState<Patient>(PATIENTS[0]);
  const [alerts, setAlerts] = useState([
    { id: 1, type: "critical", msg: "Robert Chen — SpO₂ dropped to 94% (threshold: 95%)", time: "2 min ago" },
    { id: 2, type: "warn",     msg: "Martha Williams — BP elevated: 148/96 mmHg",          time: "18 min ago" },
    { id: 3, type: "info",     msg: "Eleanor Simmons — Medication reminder acknowledged",   time: "1 hr ago" },
  ]);

  const T = dark ? DARK : LIGHT;
  const rc = (r: string) => r === "high" ? T.red : r === "med" ? T.amber : T.green;
  const dismiss = (id: number) => setAlerts(a => a.filter(x => x.id !== id));

  return (
    <div style={{ fontFamily: font, background: T.bg, minHeight: "100vh", display: "flex", flexDirection: "column", color: T.text, transition: "background .3s, color .3s" }}>

      {/* Back to portfolio bar */}
      <div style={{ background: T.sidebar, borderBottom: `1px solid ${T.border}`, padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/portfolio" style={{ display: "flex", alignItems: "center", gap: 8, color: T.textSub, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Badge color={T.cyan}>INTERACTIVE DEMO</Badge>
          <ThemeToggle dark={dark} onToggle={() => setDark(d => !d)} />
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        {/* ── SIDEBAR ─── */}
        <aside style={{
          width: 224, background: T.sidebar, borderRight: `1px solid ${T.border}`,
          display: "flex", flexDirection: "column", padding: "24px 0", flexShrink: 0,
          position: "sticky", top: 0, height: "calc(100vh - 49px)", transition: "background .3s",
          boxShadow: dark ? "none" : "2px 0 12px rgba(0,0,0,0.06)",
        }}>
          <div style={{ padding: "0 18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 38, height: 38, background: `linear-gradient(135deg,${T.blue},${T.cyan})`, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19 }}>💙</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-.3px", color: T.text }}>CareGrid</div>
                <div style={{ fontSize: 10, color: T.textSub, letterSpacing: ".5px" }}>RPM PLATFORM</div>
              </div>
            </div>
          </div>
          <nav style={{ flex: 1 }}>
            {NAV.map(n => (
              <button key={n.id} onClick={() => setPage(n.id)} style={{
                display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "11px 18px",
                background: page === n.id ? T.navActive : "none", border: "none",
                borderLeft: `3px solid ${page === n.id ? T.blue : "transparent"}`,
                color: page === n.id ? T.text : T.textSub, fontSize: 14, fontWeight: 600,
                cursor: "pointer", textAlign: "left", transition: "all .15s",
              }}>
                <span style={{ fontSize: 16 }}>{n.icon}</span>
                {n.label}
                {n.id === "alerts" && alerts.length > 0 && (
                  <span style={{ marginLeft: "auto", background: T.red, color: "#fff", borderRadius: 99, fontSize: 10, fontWeight: 800, padding: "1px 7px" }}>{alerts.length}</span>
                )}
              </button>
            ))}
          </nav>
          <div style={{ padding: "14px 18px", borderTop: `1px solid ${T.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg,${T.teal},${T.blue})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>👩‍⚕️</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: T.text }}>Dr. Rivera</div>
                <div style={{ fontSize: 10, color: T.green }}>● On Duty</div>
              </div>
            </div>
          </div>
        </aside>

        {/* ── MAIN ─── */}
        <main style={{ flex: 1, padding: 28, overflowY: "auto" }}>

          {/* ══ OVERVIEW ══ */}
          {page === "overview" && (
            <div>
              <h1 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 4px", letterSpacing: "-.5px" }}>Patient Overview</h1>
              <p style={{ color: T.textSub, margin: "0 0 24px", fontSize: 14 }}>
                {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 22 }}>
                {[
                  { icon: "👥", label: "Active Patients", value: "4",         sub: "+1 this week",     color: T.cyan  },
                  { icon: "🚨", label: "Critical Alerts", value: String(alerts.filter(a=>a.type==="critical").length), sub: "Requires attention", color: T.red   },
                  { icon: "📡", label: "Devices Online",  value: `${DEVS.filter(d=>d.status==="online").length}/${DEVS.length}`, sub: "Connected", color: T.green },
                  { icon: "☁️", label: "ML Uptime",       value: "99.2%",      sub: "Last 30 days",     color: T.blue  },
                ].map(k => (
                  <Card key={k.label} T={T}>
                    <div style={{ fontSize: 22 }}>{k.icon}</div>
                    <div style={{ fontSize: 11, color: T.textSub, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".5px", marginTop: 8 }}>{k.label}</div>
                    <div style={{ fontSize: 30, fontWeight: 800, color: k.color, fontFamily: mono }}>{k.value}</div>
                    <div style={{ fontSize: 11, color: T.textSub }}>{k.sub}</div>
                  </Card>
                ))}
              </div>
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Patient Roster</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {PATIENTS.map(p => (
                  <Card key={p.id} T={T} onClick={() => { setPt(p); setPage("vitals"); }} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg,${rc(p.risk)}33,${T.glass})`, border: `2px solid ${rc(p.risk)}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🧓</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: T.text }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: T.textSub }}>Age {p.age} · {p.room}</div>
                    </div>
                    <div style={{ display: "flex", gap: 20 }}>
                      {[{ l: "HR", v: p.hr, u: "bpm", w: p.hr > 100 }, { l: "SpO₂", v: p.spo2, u: "%", w: p.spo2 < 95 }, { l: "Temp", v: p.temp, u: "°C", w: p.temp > 37.5 }].map(v => (
                        <div key={v.l} style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 10, color: T.textSub }}>{v.l}</div>
                          <div style={{ fontFamily: mono, fontWeight: 800, color: v.w ? T.amber : T.text }}>{v.v}</div>
                          <div style={{ fontSize: 10, color: T.textSub }}>{v.u}</div>
                        </div>
                      ))}
                    </div>
                    <Badge color={rc(p.risk)}>{p.risk} risk</Badge>
                    <span style={{ color: T.textSub, fontSize: 18 }}>›</span>
                  </Card>
                ))}
              </div>
              {alerts.length > 0 && (
                <>
                  <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Active Alerts</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {alerts.slice(0, 2).map(a => <AlertRow key={a.id} {...a} T={T} onDismiss={() => dismiss(a.id)} />)}
                  </div>
                </>
              )}
            </div>
          )}

          {/* ══ VITALS ══ */}
          {page === "vitals" && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <button onClick={() => setPage("overview")} style={{ background: T.glass, border: `1px solid ${T.border}`, color: T.textSub, borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>← Back</button>
                <div>
                  <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{pt.name}</h1>
                  <p style={{ color: T.textSub, margin: 0, fontSize: 13 }}>Age {pt.age} · {pt.room} · Live Monitoring</p>
                </div>
                <Badge color={rc(pt.risk)}>{pt.risk} risk</Badge>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
                {PATIENTS.map(p => <Pill key={p.id} T={T} label={p.name.split(" ")[0]} active={pt.id === p.id} onClick={() => setPt(p)} />)}
              </div>
              <Card T={T} style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 11, color: T.textSub, fontWeight: 600, letterSpacing: ".5px", textTransform: "uppercase" }}>Live ECG</div>
                  <div style={{ fontFamily: mono, fontSize: 22, fontWeight: 800, color: T.green }}>{pt.hr} <span style={{ fontSize: 12, color: T.textSub }}>bpm</span></div>
                </div>
                <ECGLine color={T.green} />
                <Badge color={pt.hr > 100 ? T.amber : T.green}>{pt.hr > 100 ? "Elevated" : "Normal"}</Badge>
              </Card>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 16 }}>
                <VitalTile T={T} icon="🩸" label="SpO₂"          value={pt.spo2} unit="%" spark={mkSp(pt.spo2,2)} color={T.cyan}  status={pt.spo2<95?"warn":"normal"} />
                <VitalTile T={T} icon="🌡️" label="Temperature"   value={pt.temp} unit="°C" spark={mkSp(pt.temp,.3)} color={T.amber} status={pt.temp>37.5?"warn":"normal"} />
                <VitalTile T={T} icon="💉" label="Blood Pressure" value={pt.bp}   unit="mmHg" spark={mkSp(130,12)} color={T.blue}  status={parseInt(pt.bp)>140?"warn":"normal"} />
                <VitalTile T={T} icon="🚶" label="Steps Today"   value="3,240" unit="steps" spark={mkSp(200,150)} color={T.green} status="normal" />
                <VitalTile T={T} icon="😴" label="Sleep Score"   value="72" unit="/100" spark={mkSp(72,10)} color={T.teal}  status="normal" />
                <VitalTile T={T} icon="⚡" label="HRV"           value="38" unit="ms" spark={mkSp(38,8)} color={T.cyan}  status="normal" />
              </div>
              <Card T={T}>
                <div style={{ fontWeight: 700, marginBottom: 12 }}>Integrated Sensor Readings</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { label: "Glucose (Smart Patch)", value: "108 mg/dL" },
                    { label: "Creatinine",            value: "62 µM" },
                    { label: "Cortisol",              value: "18 µg/dL" },
                    { label: "Electrolytes",          value: "Normal" },
                    { label: "Artificial Pancreas",   value: "Auto-dose active" },
                    { label: "Gait Speed",            value: "0.8 m/s" },
                  ].map(r => (
                    <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: T.glass, borderRadius: 8, border: `1px solid ${T.border}` }}>
                      <span style={{ fontSize: 12, color: T.textSub }}>{r.label}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: T.green }}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* ══ DEVICES ══ */}
          {page === "devices" && (
            <div>
              <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>Connected Devices</h1>
              <p style={{ color: T.textSub, marginBottom: 24, fontSize: 14 }}>{DEVS.filter(d=>d.status==="online").length} of {DEVS.length} online</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
                {DEVS.map((d, i) => {
                  const sc = d.status === "online" ? T.green : d.status === "warn" ? T.amber : T.red;
                  return (
                    <Card key={i} T={T}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <div style={{ fontSize: 28, marginBottom: 6 }}>{d.icon}</div>
                          <div style={{ fontWeight: 700 }}>{d.name}</div>
                          <div style={{ fontSize: 12, color: T.textSub }}>{d.patient}</div>
                        </div>
                        <Badge color={sc}>{d.status}</Badge>
                      </div>
                      {d.status !== "offline" && (
                        <div style={{ marginTop: 14 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <span style={{ fontSize: 11, color: T.textSub }}>Battery</span>
                            <span style={{ fontSize: 11, fontFamily: mono, color: d.battery < 30 ? T.amber : T.green }}>{d.battery}%</span>
                          </div>
                          <div style={{ height: 4, background: T.glass, borderRadius: 99, border: `1px solid ${T.border}` }}>
                            <div style={{ height: "100%", borderRadius: 99, width: `${d.battery}%`, background: d.battery < 30 ? T.amber : T.green }} />
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* ══ ALERTS ══ */}
          {page === "alerts" && (
            <div>
              <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>Alert Center</h1>
              <p style={{ color: T.textSub, marginBottom: 24, fontSize: 14 }}>{alerts.length} active alerts</p>
              {alerts.length === 0 ? (
                <Card T={T} style={{ textAlign: "center", padding: 48 }}>
                  <div style={{ fontSize: 44 }}>✅</div>
                  <div style={{ marginTop: 12, fontWeight: 700 }}>All Clear</div>
                  <div style={{ color: T.textSub, fontSize: 13 }}>No active alerts at this time</div>
                </Card>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {alerts.map(a => <AlertRow key={a.id} {...a} T={T} onDismiss={() => dismiss(a.id)} />)}
                </div>
              )}
              <div style={{ marginTop: 28 }}>
                <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Alert History (Last 24h)</h2>
                {[
                  { type: "critical", msg: "James O'Brien — Fall detected (false alarm confirmed)", time: "3 hr ago" },
                  { type: "info",     msg: "System — ML model retrained with new data",             time: "5 hr ago" },
                  { type: "warn",     msg: "Eleanor Simmons — Missed morning medication",           time: "8 hr ago" },
                ].map((a, i) => <AlertRow key={i} {...a} T={T} onDismiss={null} />)}
              </div>
            </div>
          )}

          {/* ══ BUSINESS PLAN ══ */}
          {page === "plan" && (
            <div>
              <Badge color={T.cyan}>Product Strategy</Badge>
              <h1 style={{ fontSize: 28, fontWeight: 900, margin: "10px 0 4px", letterSpacing: "-.5px" }}>CareGrid Business Plan</h1>
              <p style={{ color: T.textSub, fontSize: 14, marginBottom: 28 }}>AI-Powered Remote Patient Monitoring Platform · MVP to Scale</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 22 }}>
                <Card T={T}><Badge color={T.red}>Problem</Badge><p style={{ marginTop: 12, fontSize: 14, color: T.textMuted, lineHeight: 1.65 }}>{BP.problem}</p></Card>
                <Card T={T}><Badge color={T.green}>Solution</Badge><p style={{ marginTop: 12, fontSize: 14, color: T.textMuted, lineHeight: 1.65 }}>{BP.solution}</p></Card>
              </div>
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Market Opportunity</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 22 }}>
                {BP.market.map(m => (
                  <Card key={m.label} T={T} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 11, color: T.textSub, fontWeight: 600, letterSpacing: ".5px", textTransform: "uppercase" }}>{m.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: T.cyan, marginTop: 8, fontFamily: mono }}>{m.value}</div>
                  </Card>
                ))}
              </div>
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>MVP Feature Scope</h2>
              <Card T={T} style={{ marginBottom: 22 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {BP.mvpScope.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13 }}>
                      <span style={{ color: T.green, marginTop: 1 }}>✓</span>
                      <span style={{ color: T.textMuted }}>{f}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Go-to-Market Roadmap</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 22 }}>
                {BP.phases.map((p, i) => (
                  <Card key={i} T={T} style={{ borderTop: `3px solid ${[T.blue,T.cyan,T.teal][i]}` }}>
                    <Badge color={[T.blue,T.cyan,T.teal][i]}>{p.phase}</Badge>
                    <div style={{ marginTop: 10, fontWeight: 700, fontFamily: mono }}>{p.time}</div>
                    <div style={{ fontSize: 13, color: T.textMuted, marginTop: 6 }}>{p.goal}</div>
                    <div style={{ marginTop: 10, color: T.cyan, fontWeight: 800, fontFamily: mono }}>{p.cost}</div>
                    <div style={{ fontSize: 11, color: T.textSub }}>Funding needed</div>
                  </Card>
                ))}
              </div>
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Revenue Streams</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, marginBottom: 22 }}>
                {BP.revenue.map(r => (
                  <Card key={r.stream} T={T} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: T.cyan, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{r.stream}</div>
                      <div style={{ fontSize: 12, color: T.cyan, fontFamily: mono }}>{r.model}</div>
                    </div>
                  </Card>
                ))}
              </div>
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Risk Register</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {BP.risks.map(r => (
                  <Card key={r.risk} T={T} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <Badge color={T.amber}>Risk</Badge>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{r.risk}</div>
                      <div style={{ fontSize: 12, color: T.textSub, marginTop: 2 }}>Mitigation: {r.mit}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ══ SETTINGS ══ */}
          {page === "settings" && (
            <div>
              <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>Settings</h1>
              <p style={{ color: T.textSub, marginBottom: 24, fontSize: 14 }}>Platform preferences & configuration</p>
              <Card T={T} style={{ marginBottom: 14 }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Appearance</div>
                <div style={{ fontSize: 12, color: T.textSub, marginBottom: 16 }}>Choose your preferred display theme</div>
                <div style={{ display: "flex", gap: 12 }}>
                  {[{ label: "🌙  Dark Mode", val: true }, { label: "☀️  Light Mode", val: false }].map(opt => (
                    <button key={String(opt.val)} onClick={() => setDark(opt.val)} style={{
                      flex: 1, padding: "13px 0", borderRadius: 10,
                      background: dark === opt.val ? T.blue : T.glass,
                      border: `2px solid ${dark === opt.val ? T.blue : T.border}`,
                      color: dark === opt.val ? "#fff" : T.textSub,
                      fontWeight: 700, fontSize: 14, cursor: "pointer", transition: "all .2s", fontFamily: font,
                    }}>{opt.label}</button>
                  ))}
                </div>
              </Card>
              {[
                { label: "Alert Thresholds",     desc: "Configure vital sign limits" },
                { label: "Notification Channels",desc: "SMS, Email, Push, Voice" },
                { label: "Device Management",    desc: "Add, remove, or reconfigure sensors" },
                { label: "Caregiver Access",     desc: "Manage remote caregiver permissions" },
                { label: "HIPAA Audit Log",      desc: "View data access history" },
                { label: "ML Model Settings",    desc: "Adjust sensitivity & false alarm rate" },
              ].map(s => (
                <Card key={s.label} T={T} onClick={() => {}} style={{ marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{s.label}</div>
                    <div style={{ fontSize: 12, color: T.textSub }}>{s.desc}</div>
                  </div>
                  <span style={{ color: T.textSub, fontSize: 18 }}>›</span>
                </Card>
              ))}
              <Card T={T} style={{ marginTop: 24, borderColor: T.red + "55" }}>
                <div style={{ fontWeight: 700, color: T.red, marginBottom: 4 }}>Emergency SOS</div>
                <div style={{ fontSize: 12, color: T.textSub, marginBottom: 14 }}>One-tap 911 + caregiver alert</div>
                <button style={{ background: T.red, color: "#fff", border: "none", borderRadius: 10, padding: "12px 32px", fontWeight: 800, fontSize: 16, cursor: "pointer", letterSpacing: ".5px", fontFamily: font }}>🚨 SOS</button>
              </Card>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

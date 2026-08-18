"use client";

import { useState } from "react";

const INK = "#0B1217";
const TEAL = "#2DD4BF";
const CREAM = "#F7F4EC";

const PROJECT_TYPES = [
  { id: "website", label: "Website / Marketing Site", base: [1500, 4000] },
  { id: "webapp", label: "Web App / SaaS Platform", base: [7500, 22500] },
  { id: "mobile", label: "Mobile App", base: [7500, 20000] },
  { id: "automation", label: "AI Automation", base: [2500, 12500] },
];

const COMPLEXITY = [
  {
    id: "simple",
    label: "Simple",
    desc: "A few core screens, minimal logic",
    mult: 1,
  },
  {
    id: "moderate",
    label: "Moderate",
    desc: "Multiple user roles, some integrations",
    mult: 1.6,
  },
  {
    id: "complex",
    label: "Complex",
    desc: "Custom logic, several integrations, real scale",
    mult: 2.4,
  },
];

const FEATURES = [
  { id: "auth", label: "User accounts & login", add: 0.15 },
  { id: "payments", label: "Payments / subscriptions", add: 0.2 },
  { id: "integrations", label: "Third-party integrations", add: 0.2 },
  { id: "admin", label: "Admin dashboard", add: 0.15 },
  { id: "offline", label: "Offline support", add: 0.25 },
];

function formatGBP(n) {
  const rounded = Math.round(n / 500) * 500;
  return rounded > 0 ? "£" + rounded.toLocaleString("en-GB") : "£0";
}

export default function CostEstimator() {
  const [projectType, setProjectType] = useState(null);
  const [complexity, setComplexity] = useState(null);
  const [features, setFeatures] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", details: "" });

  const toggleFeature = (id) => {
    setFeatures((f) =>
      f.includes(id) ? f.filter((x) => x !== id) : [...f, id],
    );
  };

  const calculate = () => {
    if (!projectType || !complexity) return null;
    const type = PROJECT_TYPES.find((p) => p.id === projectType);
    const comp = COMPLEXITY.find((c) => c.id === complexity);
    const featureAdd = features.reduce((sum, id) => {
      const f = FEATURES.find((x) => x.id === id);
      return sum + (f ? f.add : 0);
    }, 0);
    const multiplier = comp.mult + featureAdd;
    const low = type.base[0] * multiplier;
    const high = type.base[1] * multiplier;
    return { low, high };
  };

  const result = showResult ? calculate() : null;
  const canCalculate = projectType && complexity;

  return (
    <div
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        background: CREAM,
        color: INK,
        borderRadius: 24,
        padding: "40px 32px",
        maxWidth: 720,
        margin: "0 auto",
        border: `2px solid ${INK}`,
      }}
    >
      {!showResult ? (
        <>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 6px" }}>
            What are you building?
          </h2>
          <p style={{ fontSize: 14, opacity: 0.6, margin: "0 0 24px" }}>
            A few quick questions, then a real cost range, not a guess.
          </p>

          <div style={{ marginBottom: 28 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                opacity: 0.6,
                marginBottom: 10,
              }}
            >
              PROJECT TYPE
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              {PROJECT_TYPES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setProjectType(p.id)}
                  style={{
                    textAlign: "left",
                    padding: "14px 16px",
                    borderRadius: 12,
                    border: `2px solid ${INK}`,
                    background: projectType === p.id ? INK : CREAM,
                    color: projectType === p.id ? CREAM : INK,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 14,
                    fontWeight: 600,
                    transition: "all 0.15s ease",
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                opacity: 0.6,
                marginBottom: 10,
              }}
            >
              COMPLEXITY
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {COMPLEXITY.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setComplexity(c.id)}
                  style={{
                    textAlign: "left",
                    padding: "14px 16px",
                    borderRadius: 12,
                    border: `2px solid ${INK}`,
                    background: complexity === c.id ? INK : CREAM,
                    color: complexity === c.id ? CREAM : INK,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{c.label}</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{c.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 32 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                opacity: 0.6,
                marginBottom: 10,
              }}
            >
              LIKELY FEATURES (OPTIONAL)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {FEATURES.map((f) => (
                <label
                  key={f.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    cursor: "pointer",
                    padding: "8px 4px",
                  }}
                >
                  <span
                    onClick={() => toggleFeature(f.id)}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 6,
                      border: `2px solid ${INK}`,
                      background: features.includes(f.id)
                        ? TEAL
                        : "transparent",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {features.includes(f.id) && (
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <path
                          d="M1 6 L4.5 9.5 L11 2"
                          stroke={INK}
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span onClick={() => toggleFeature(f.id)}>{f.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowResult(true)}
            disabled={!canCalculate}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: 14,
              border: "none",
              background: canCalculate ? TEAL : "#d8d4c8",
              color: INK,
              fontFamily: "inherit",
              fontSize: 16,
              fontWeight: 700,
              cursor: canCalculate ? "pointer" : "not-allowed",
            }}
          >
            See my estimate
          </button>
        </>
      ) : (
        <>
          <div
            style={{
              background: INK,
              borderRadius: 18,
              padding: "32px 28px",
              marginBottom: 24,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                color: TEAL,
                marginBottom: 10,
              }}
            >
              ESTIMATED RANGE
            </div>
            <div style={{ fontSize: 34, fontWeight: 800, color: CREAM }}>
              {result
                ? `${formatGBP(result.low)} – ${formatGBP(result.high)}`
                : "£0 – £0"}
            </div>
            <div
              style={{ fontSize: 13, color: CREAM, opacity: 0.6, marginTop: 8 }}
            >
              Based on projects of similar scope. A discovery phase gives you a
              firm number.
            </div>
          </div>

          {!leadCaptured ? (
            <>
              <p style={{ fontSize: 14, opacity: 0.7, marginBottom: 16 }}>
                Want a detailed, written quote for your specific project? Leave
                your details and we'll follow up directly.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <input
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 10,
                    border: `2px solid ${INK}`,
                    fontFamily: "inherit",
                    fontSize: 14,
                    background: CREAM,
                  }}
                />
                <input
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 10,
                    border: `2px solid ${INK}`,
                    fontFamily: "inherit",
                    fontSize: 14,
                    background: CREAM,
                  }}
                />
                <textarea
                  placeholder="A sentence or two about your project (optional)"
                  value={form.details}
                  onChange={(e) =>
                    setForm({ ...form, details: e.target.value })
                  }
                  rows={3}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 10,
                    border: `2px solid ${INK}`,
                    fontFamily: "inherit",
                    fontSize: 14,
                    background: CREAM,
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                onClick={() => form.name && form.email && setLeadCaptured(true)}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: 14,
                  border: "none",
                  background: TEAL,
                  color: INK,
                  fontFamily: "inherit",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  marginBottom: 10,
                }}
              >
                Get a Detailed Quote
              </button>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
                Thanks, {form.name.split(" ")[0]}.
              </div>
              <div style={{ fontSize: 14, opacity: 0.7 }}>
                We'll follow up at {form.email} with a detailed quote shortly.
              </div>
            </div>
          )}

          <button
            onClick={() => {
              setShowResult(false);
              setLeadCaptured(false);
              setProjectType(null);
              setComplexity(null);
              setFeatures([]);
            }}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: 12,
              border: `2px solid ${INK}`,
              background: "transparent",
              color: INK,
              fontFamily: "inherit",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              marginTop: 10,
            }}
          >
            Start over
          </button>
        </>
      )}
    </div>
  );
}

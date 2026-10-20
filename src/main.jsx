import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./components/Dashboard";
import Plan from "./components/Plan";
import Progress from "./components/Progress";
import Profile from "./components/Profile";
import SettingsPage from "./components/SettingsPage";
import Topics from "./components/Topics";
import Auth from "./components/Auth";
import {
  LayoutDashboard,
  Brain,
  CalendarDays,
  Sparkles,
  BarChart3,
  Settings,
  Flame,
  LogOut,
  ArrowRight,
} from "lucide-react";
import "./styles.css";

const topics = [
  {
    name: "SQL",
    score: 85,
    color: "good",
    detail: "Strong fundamentals. Keep warm with spaced review.",
  },
  {
    name: "Normalization",
    score: 42,
    color: "warn",
    detail: "Needs more practice with functional dependencies and 3NF.",
  },
  {
    name: "Transactions",
    score: 71,
    color: "mid",
    detail: "Good understanding. Practice scenario-based questions.",
  },
  {
    name: "Indexing",
    score: 28,
    color: "bad",
    detail: "Priority topic: B+ trees and clustered vs non-clustered indexes.",
  },
];
const questions = [
  {
    topic: "Indexing",
    q: "Which data structure is commonly used to implement database indexes?",
    a: ["Stack", "B+ Tree", "Queue", "Linked List"],
    correct: 1,
  },
  {
    topic: "Indexing",
    q: "A clustered index primarily determines:",
    a: [
      "The physical order of table data",
      "The SQL syntax",
      "The number of users",
      "The transaction isolation level",
    ],
    correct: 0,
  },
  {
    topic: "Normalization",
    q: "A relation is in 3NF when it is in 2NF and has no:",
    a: ["Primary key", "Foreign key", "Transitive dependency", "Candidate key"],
    correct: 2,
  },
];
function App() {
  const [page, setPage] = useState("dashboard");
  const [setup, setSetup] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [improved, setImproved] = useState(false);
  const [authenticated, setAuthenticated] = useState(
  !!localStorage.getItem("studyos_user")
);
  const nav = [
    ["dashboard", "Dashboard", LayoutDashboard],
    ["topics", "Weakness Map", Brain],
    ["plan", "Study Plan", CalendarDays],
    ["progress", "Progress", BarChart3],
  ];
  const scoreTopics = improved
    ? topics.map((t) =>
        t.name === "Indexing" ? { ...t, score: 63, color: "mid" } : t,
      )
    : topics;
  const selectAnswer = (i) => {
    const a = [...answers];
    a[qIndex] = i;
    setAnswers(a);
  };
  const nextQ = () => {
    if (qIndex < questions.length - 1) setQIndex(qIndex + 1);
    else {
      setImproved(true);
      setQuiz(false);
      setPage("dashboard");
    }
  };
  if (!authenticated) {
  return (
    <Auth
      onLogin={() => setAuthenticated(true)}
    />
  );
}
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">S</div>
          <div>
            <b>StudyOS</b>
            <span>Adaptive learning</span>
          </div>
        </div>
        <div className="nav">
          {nav.map(([id, label, Icon]) => (
            <button
              className={page === id ? "active" : ""}
              onClick={() => setPage(id)}
              key={id}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
        <div className="sideBottom">
          <button onClick={() => setPage("settings")}>
            <Settings size={18} />
            Settings
          </button>

          <button className="profile" onClick={() => setPage("profile")}>
            <div className="avatar">SG</div>

            <div>
              <b>Sarthak</b>
              <span>Computer Science</span>
            </div>
          </button>
          <button
  className="logout-btn"
  onClick={() => {
    localStorage.removeItem("studyos_user");
    setAuthenticated(false);
  }}
>
  <LogOut size={18} />
  <span>Logout</span>
</button>
        </div>
      </aside>
      <main className="main">
        {!["profile", "settings"].includes(page) && (
          <header>
            <div>
              <div className="eyebrow">MONDAY · OCTOBER 19</div>

              <h1>
                {page === "dashboard"
                  ? "Good evening, Sarthak"
                  : page === "topics"
                    ? "Your weakness map"
                    : page === "plan"
                      ? "Your adaptive study plan"
                      : "Your progress"}
              </h1>
            </div>

            <div className="headerRight">
              <div className="streak">
                <Flame size={16} />7 day streak
              </div>
            </div>
          </header>
        )}
        {page === "dashboard" && (
          <Dashboard
            topics={scoreTopics}
            improved={improved}
            onQuiz={() => {
              setQuiz(true);
              setQIndex(0);
              setAnswers([]);
            }}
            onPage={setPage}
          />
        )}
        {page === "topics" && <Topics topics={scoreTopics} />}
        {page === "plan" && (
          <Plan
            improved={improved}
            onQuiz={() => {
              setQuiz(true);
              setQIndex(0);
              setAnswers([]);
            }}
          />
        )}
        {page === "progress" && <Progress topics={scoreTopics} />}
        {page === "profile" && <Profile />}
        {page === "settings" && <SettingsPage />}

        {page === "settings" && <Settings />}
      </main>
      {quiz && (
        <div className="overlay">
          <div className="quizModal">
            <div className="quizTop">
              <div>
                <span className="pill">DIAGNOSTIC PRACTICE</span>
                <h2>{questions[qIndex].topic}</h2>
              </div>
              <button className="iconBtn" onClick={() => setQuiz(false)}>
                ×
              </button>
            </div>
            <div className="qmeta">
              <span>
                Question {qIndex + 1} of {questions.length}
              </span>
              <span>
                {Math.round((qIndex / questions.length) * 100)}% complete
              </span>
            </div>
            <div className="progress">
              <i style={{ width: `${(qIndex / questions.length) * 100}%` }} />
            </div>
            <h3>{questions[qIndex].q}</h3>
            <div className="answers">
              {questions[qIndex].a.map((x, i) => (
                <button
                  className={answers[qIndex] === i ? "selected" : ""}
                  onClick={() => selectAnswer(i)}
                  key={x}
                >
                  <span>{String.fromCharCode(65 + i)}</span>
                  {x}
                </button>
              ))}
            </div>
            <div className="quizFooter">
              <button className="ghost" onClick={() => setQuiz(false)}>
                Cancel
              </button>
              <button
                className="primary"
                disabled={answers[qIndex] === undefined}
                onClick={nextQ}
              >
                {qIndex === questions.length - 1 ? "Finish quiz" : "Next"}{" "}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
      {improved && (
        <div className="toast">
          <div className="toastIcon">
            <Sparkles size={18} />
          </div>
          <div>
            <b>Plan automatically updated</b>
            <span>
              Indexing improved to 63%, so tomorrow's plan now prioritizes
              Normalization.
            </span>
          </div>
          <button onClick={() => setImproved(false)}>×</button>
        </div>
      )}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);

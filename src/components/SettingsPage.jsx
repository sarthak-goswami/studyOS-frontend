import React, { useState } from "react";
import {
  User,
  Bell,
  Brain,
  Clock3,
  CalendarDays,
  Save,
} from "lucide-react";
import "../stylesheets/SettingsPage.css";
function SettingsPage() {

  const [dailyGoal, setDailyGoal] = useState("2 hours");
  const [difficulty, setDifficulty] = useState("Adaptive");

  const [reminders, setReminders] = useState(true);
  const [adaptivePlan, setAdaptivePlan] = useState(true);

  const [saved, setSaved] = useState(false);

  const saveSettings = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };
  return (
    <div className="settings-page">
      <div className="settings-header">
        <span className="settings-eyebrow">
          PREFERENCES
        </span>
        <h1>Settings</h1>
        <p>
          Customize how StudyOS plans and adapts your study sessions.
        </p>
      </div>
      <section className="settings-section">
        <div className="settings-section-header">
          <h2>Account</h2>
          <p>
            Your basic profile information
          </p>
        </div>
        <div className="settings-card">
          <div className="settings-row">
            <div className="settings-icon">
              <User size={18} />
            </div>
            <div className="settings-info">
              <strong>Name</strong>
              <span>
                Your display name
              </span>
            </div>
            <input
              className="settings-input"
              value="Sarthak"
              readOnly
            />
          </div>
          <div className="settings-row">
            <div className="settings-icon">
              <User size={18} />
            </div>
            <div className="settings-info">
              <strong>Course</strong>
              <span>
                Your current academic program
              </span>
            </div>
            <input
              className="settings-input"
              value="Computer Science"
              readOnly
            />
          </div>
        </div>
      </section>
      <section className="settings-section">
        <div className="settings-section-header">
          <h2>Study preferences</h2>
          <p>
            Control how your daily plan is generated
          </p>
        </div>
        <div className="settings-card">
          <div className="settings-row">
            <div className="settings-icon">
              <Clock3 size={18} />
            </div>
            <div className="settings-info">
              <strong>Daily study goal</strong>
              <span>
                How much time you want to study each day
              </span>
            </div>
            <select
              className="settings-input"
              value={dailyGoal}
              onChange={(e) =>
                setDailyGoal(e.target.value)
              }
            >
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
              <option>4 hours</option>
              <option>5+ hours</option>
            </select>
          </div>
          <div className="settings-row">
            <div className="settings-icon">
              <Brain size={18} />
            </div>
            <div className="settings-info">
              <strong>Difficulty</strong>
              <span>
                Controls adaptive quiz difficulty
              </span>
            </div>
            <select
              className="settings-input"
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value)
              }
            >
              <option>Adaptive</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="settings-row">
            <div className="settings-icon">
              <Bell size={18} />
            </div>
            <div className="settings-info">
              <strong>Study reminders</strong>
              <span>
                Receive reminders for planned sessions
              </span>
            </div>
            <button
              className={`settings-toggle ${
                reminders ? "active" : ""
              }`}
              onClick={() =>
                setReminders(!reminders)
              }
            >
              <span />
            </button>
          </div>
          <div className="settings-row">
            <div className="settings-icon">
              <Brain size={18} />
            </div>
            <div className="settings-info">
              <strong>Adaptive planning</strong>
              <span>
                Automatically change your plan based on quiz performance
              </span>
            </div>
            <button
              className={`settings-toggle ${
                adaptivePlan ? "active" : ""
              }`}
              onClick={() =>
                setAdaptivePlan(!adaptivePlan)
              }
            >
              <span />
            </button>
          </div>
        </div>
      </section>
      <section className="settings-section">
        <div className="settings-section-header">
          <h2>Exam</h2>
          <p>
            Used by StudyOS to calculate urgency
          </p>
        </div>
        <div className="settings-card">
          <div className="settings-row">
            <div className="settings-icon">
              <CalendarDays size={18} />
            </div>
            <div className="settings-info">
              <strong>Exam date</strong>
              <span>
                Your upcoming examination
              </span>
            </div>
            <input
              className="settings-input"
              type="date"
              defaultValue="2026-11-01"
            />
          </div>
        </div>
      </section>
      <div className="settings-actions">
        <button
          className="settings-save"
          onClick={saveSettings}
        >
          <Save size={16} />
          {saved ? "Saved!" : "Save changes"}
        </button>
      </div>
    </div>
  );
}
export default SettingsPage;
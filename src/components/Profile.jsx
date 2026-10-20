import React from "react";
import {
  BookOpen,
  Clock3,
  Flame,
  Target,
  CheckCircle2,
} from "lucide-react";
import "../stylesheets/Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar-large">
          SG
        </div>
        <div>
          <span className="profile-eyebrow">
            STUDENT PROFILE
          </span>
          <h1>Sarthak</h1>
          <p>Computer Science · B.Tech CSE</p>
        </div>
      </div>
      <section className="profile-section">
        <div className="profile-section-header">
          <div>
            <h2>Study statistics</h2>
            <p>Your overall StudyOS activity</p>
          </div>
        </div>
        <div className="profile-stats">
          <div className="profile-stat">
            <div className="profile-stat-icon">
              <Flame size={18} />
            </div>
            <span>Current streak</span>
            <strong>7 days</strong>
            <small>Personal best</small>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-icon">
              <BookOpen size={18} />
            </div>
            <span>Sessions</span>
            <strong>42</strong>
            <small>Completed</small>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-icon">
              <Clock3 size={18} />
            </div>
            <span>Study time</span>
            <strong>18h 20m</strong>
            <small>This month</small>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-icon">
              <Target size={18} />
            </div>
            <span>Readiness</span>
            <strong>72%</strong>
            <small>↑ 8% this week</small>
          </div>
        </div>
      </section>
      <section className="profile-section">
        <div className="profile-section-header">
          <div>
            <h2>Recent activity</h2>
            <p>Your latest learning activity</p>
          </div>
        </div>
        <div className="profile-activity">
          <div className="profile-activity-item">
            <div className="profile-activity-icon">
              <CheckCircle2 size={18} />
            </div>
            <div className="profile-activity-content">
              <strong>Completed Indexing quiz</strong>
              <span>Improved from 28% → 63%</span>
            </div>
            <time>Today</time>
          </div>
          <div className="profile-activity-item">
            <div className="profile-activity-icon">
              <BookOpen size={18} />
            </div>
            <div className="profile-activity-content">
              <strong>Studied Normalization</strong>
              <span>35 minute study session</span>
            </div>
            <time>Yesterday</time>
          </div>
          <div className="profile-activity-item">
            <div className="profile-activity-icon">
              <CheckCircle2 size={18} />
            </div>
            <div className="profile-activity-content">
              <strong>Completed SQL revision</strong>
              <span>Spaced repetition session</span>
            </div>
            <time>Oct 18</time>
          </div>
        </div>
      </section>
      <section className="profile-section">
        <div className="profile-section-header">
          <div>
            <h2>Learning profile</h2>
            <p>How StudyOS currently sees your study pattern</p>
          </div>
        </div>
        <div className="profile-learning-grid">
          <div>
            <span>Strongest topic</span>
            <strong>SQL · 85%</strong>
          </div>
          <div>
            <span>Needs attention</span>
            <strong>Normalization · 42%</strong>
          </div>
          <div>
            <span>Priority topic</span>
            <strong>Indexing · 63%</strong>
          </div>
          <div>
            <span>Daily study goal</span>
            <strong>2 hours</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
import React from 'react'

function Progress({ topics }) {
  let overall = Math.round(
    topics.reduce((a, b) => a + b.score, 0) / topics.length,
  );
  return (
    <div className="content">
      <div className="progressHero">
        <div>
          <span className="muted">OVERALL MASTERY</span>
          <h2>{overall}%</h2>
          <p>You're building momentum. Keep the weakest topics in rotation.</p>
        </div>
        <div className="bigRing">
          <strong>72%</strong>
          <span>readiness</span>
        </div>
      </div>
      <div className="progressGrid">
        <div className="chart">
          <div className="sectionHead">
            <div>
              <h3>Mastery trend</h3>
              <span>Last 7 assessments</span>
            </div>
          </div>
          <div className="fakeChart">
            <div className="line l1" />
            <div className="line l2" />
            <div className="line l3" />
            <div className="point p1" />
            <div className="point p2" />
            <div className="point p3" />
            <div className="point p4" />
            <div className="point p5" />
          </div>
          <div className="chartLabels">
            <span>Oct 13</span>
            <span>Oct 15</span>
            <span>Oct 17</span>
            <span>Today</span>
          </div>
        </div>
        <div className="readiness">
          <h3>Readiness breakdown</h3>
          {topics.map((t) => (
            <div className="rrow" key={t.name}>
              <span>{t.name}</span>
              <div className="bar">
                <i className={t.color} style={{ width: `${t.score}%` }} />
              </div>
              <b>{t.score}%</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Progress

import React from 'react'
import { Brain } from 'lucide-react';
function Topics({ topics }) {
  return (
    <div className="content">
      <div className="callout">
        <Brain />
        <div>
          <b>Weakness map</b>
          <span>
            Mastery is estimated from accuracy, difficulty, recency and
            consistency.
          </span>
        </div>
      </div>
      <div className="topicGrid">
        {topics.map((t) => (
          <div className="bigTopic" key={t.name}>
            <div className="bigHead">
              <div>
                <span className="muted">DBMS</span>
                <h3>{t.name}</h3>
              </div>
              <div className={`score ${t.color}`}>{t.score}%</div>
            </div>
            <div className="bar large">
              <i className={t.color} style={{ width: `${t.score}%` }} />
            </div>
            <p>{t.detail}</p>
            <div className="mini">
              <span>
                Questions attempted <b>17</b>
              </span>
              <span>
                Avg. time <b>42s</b>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics

import React from 'react'
import Focus from './Focus';
import Stat from './Stat';
import { ChevronRight,
  ArrowRight,
  Play,
  Sparkles,
  Target,
  Clock3,
  Flame,} from 'lucide-react';

function Dashboard({ topics, improved, onQuiz, onPage }) {
  return (
    <div className="content">
      <div className="hero">
        <div>
          <span className="pill purple">AI STUDY COACH</span>
          <h2>Your plan adapts to you.</h2>
          <p>
            StudyOS analyzed your latest attempts and found <b>Indexing</b> and{" "}
            <b>Normalization</b> need the most attention.
          </p>
          <button className="primary" onClick={() => onPage("plan")}>
            View today's plan <ChevronRight size={16} />
          </button>
        </div>
        <div className="ring">
          <div>
            <strong>68%</strong>
            <span>mastery</span>
          </div>
        </div>
      </div>
      <div className="grid3">
        <Stat
          icon={Target}
          label="Exam readiness"
          value="72%"
          sub="↑ 8% this week"
        />
        <Stat
          icon={Clock3}
          label="Today's focus"
          value="1h 40m"
          sub="of 2h planned"
        />
        <Stat
          icon={Flame}
          label="Study streak"
          value="7 days"
          sub="Personal best"
        />
      </div>
      <section>
        <div className="sectionHead">
          <div>
            <h3>Subject mastery</h3>
            <span>Updated after your latest quiz</span>
          </div>
          <button className="textBtn" onClick={() => onPage("topics")}>
            View all <ArrowRight size={15} />
          </button>
        </div>
        <div className="cards">
          {topics.map((t) => (
            <div className="topicCard" key={t.name}>
              <div className="topicTop">
                <span>{t.name}</span>
                <b>{t.score}%</b>
              </div>
              <div className="bar">
                <i className={t.color} style={{ width: `${t.score}%` }} />
              </div>
              <small>{t.detail}</small>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="sectionHead">
          <div>
            <h3>Today's focus</h3>
            <span>Generated from your performance</span>
          </div>
        </div>
        <div className="focusList">
          <Focus
            color="red"
            title="Indexing practice"
            meta="45 min · Priority 1"
            done={improved}
          />
          <Focus
            color="orange"
            title="Normalization"
            meta="35 min · Priority 2"
          />
          <Focus
            color="blue"
            title="SQL spaced review"
            meta="20 min · Due today"
          />
        </div>
      </section>
      <div className="adaptive">
        <div className="adaptiveIcon">
          <Sparkles />
        </div>
        <div>
          <b>Adaptive insight</b>
          <p>
            {improved
              ? "You improved Indexing significantly. StudyOS shifted tomorrow’s time toward Normalization."
              : "Your last 10 questions show a pattern: conceptual questions are fine, but application questions in Indexing are costing you marks."}
          </p>
        </div>
        <button className="outline" onClick={onQuiz}>
          <Play size={15} /> Practice now
        </button>
      </div>
    </div>
  );
}

export default Dashboard

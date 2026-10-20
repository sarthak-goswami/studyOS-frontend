import React from "react";
import { CalendarDays, Play, Sparkles } from "lucide-react";
function Plan({ improved, onQuiz }) {
  return (
    <div className="content">
      <div className="planBanner">
        <div>
          <span className="pill purple">GENERATED JUST NOW</span>
          <h2>
            {improved
              ? "Tomorrow changed because you improved."
              : "A plan built around your weakest topics."}
          </h2>
          <p>2 hours available · Exam in 12 days</p>
        </div>
        <div className="calendarBox">
          <CalendarDays />
          <b>Oct 20</b>
        </div>
      </div>
      <div className="timeline">
        {(improved
          ? [
              ["9:00", "Normalization", "45 min", "red"],
              ["9:45", "Indexing review", "25 min", "orange"],
              ["10:10", "Transactions practice", "25 min", "blue"],
              ["10:35", "SQL spaced review", "25 min", "purple"],
            ]
          : [
              ["9:00", "Indexing practice", "45 min", "red"],
              ["9:45", "Normalization", "35 min", "orange"],
              ["10:20", "SQL spaced review", "20 min", "purple"],
              ["10:40", "Transactions", "20 min", "blue"],
            ]
        ).map((x, i) => (
          <div className="timelineItem" key={x[1]}>
            <span className="time">{x[0]}</span>
            <div className={`timeDot ${x[3]}`} />
            <div className="task">
              <div>
                <b>{x[1]}</b>
                <span>
                  {x[2]} · {i === 0 ? "High priority" : "Recommended"}
                </span>
              </div>
              <button onClick={i === 0 ? onQuiz : undefined}>
                <Play size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="why">
        <Sparkles />
        <div>
          <b>Why this plan?</b>
          <p>
            {improved
              ? "Normalization became your highest-impact weakness after the latest assessment, so StudyOS reallocated 20 minutes from Indexing."
              : "Indexing has the lowest mastery and is high-impact for your exam. StudyOS therefore allocates the largest block to it."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Plan;

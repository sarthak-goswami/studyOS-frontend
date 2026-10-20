import React from 'react'
import { CheckCircle2, Play } from 'lucide-react';
function Focus({ color, title, meta, done }) {
  return (
    <div className="focus">
      <div className={`dot ${color}`} />
      <div className="focusText">
        <b>{title}</b>
        <span>{meta}</span>
      </div>
      <button className={done ? "done" : ""}>
        {done ? <CheckCircle2 size={18} /> : <Play size={16} />}
      </button>
    </div>
  );
}

export default Focus

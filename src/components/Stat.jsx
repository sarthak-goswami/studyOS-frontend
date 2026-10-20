import React from 'react'
import { Icon } from 'lucide-react';
function Stat({ icon: Icon, label, value, sub }) {
  return (
    <div className="stat">
      <div className="statIcon">
        <Icon size={18} />
      </div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{sub}</small>
    </div>
  );
}

export default Stat

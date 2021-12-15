import React from 'react';
import './Card.scss';
export function Card({title, children}) {
    return <div className="card">
        {title}
        <div className="card-content">{children}</div>
    </div>
}

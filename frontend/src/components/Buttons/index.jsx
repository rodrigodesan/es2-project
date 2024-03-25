import React from 'react';

function Button({
  title, icon, action, color, onClick, className, isDisabled,
}) {
  const buttonClass = `btn ${color} rounded-5 mt-3 me-3 p-2 `;
  return (
    <button type="button" className={className || buttonClass} onClick={onClick} disabled={isDisabled} style={{ cursor: isDisabled && 'not-allowed', pointerEvents: 'auto' }}>
      <a className="text-decoration-none text-reset" href={action}>
        {title}
        {' '}
        <img src={icon} alt="" />
      </a>
    </button>
  );
}

export default Button;

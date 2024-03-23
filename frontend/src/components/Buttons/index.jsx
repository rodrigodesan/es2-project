import React from 'react';

function Button({
  title, icon, action, color, onClick, className,
}) {
  const buttonClass = `btn ${color} rounded-5 mt-3 px-4 ms-4 `;
  return (
    <button type="button" className={className || buttonClass} onClick={onClick}>
      <a className="text-decoration-none text-reset" href={action}>
        {title}
        {' '}
        <img src={icon} alt="" />
      </a>
    </button>
  );
}

export default Button;

import React from 'react';

function Button({
  title, icon, action, color, onClick,
}) {
  const buttonClass = `btn ${color} rounded-5 mt-3 px-4 ms-4 `;
  return (
    <div>
      <button type="button" className={buttonClass} onClick={onClick}>
        <a className="text-decoration-none text-reset" href={action}>
          {title}
          {' '}
          <img src={icon} alt="" />
        </a>
      </button>
    </div>
  );
}

export default Button;

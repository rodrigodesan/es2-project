import React from 'react';

function Button({
  title, icon, action, color, // eslint-disable-line react/prop-types
}) {
  const buttonClass = `btn ${color} rounded-5 mt-3 px-4 ms-4 `;
  return (
    <div>
      <button type="submit" className={buttonClass}>
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

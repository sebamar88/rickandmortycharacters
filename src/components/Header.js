import React from 'react';

const Header = ({title, desc}) => {
  return ( 
    <header>
      <div className="container">
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="text">{desc}</p>
        </div>
      </div>
    </header>
  );
}
 
export default Header;
import React from 'react'

const MyButton = ({ mycolor, onClick }) => {
    // Destructure props for easier access
  
    return (
      <button
        onClick={onClick}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: mycolor }}
      >
        {mycolor}
      </button>
    );
  };
  
  export default MyButton;

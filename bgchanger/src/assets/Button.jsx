import React from 'react';

// Define a mapping of colors allowed in Tailwind
const colorMap = {
red: "text-red-500",
green: "text-green-800",
blue: "text-blue-500",
purple: "text-purple-500",
black: "text-black",
};

function Button({ color, wow = "black" }) {
return (
    <div className={`cursor-pointer ${colorMap[wow] || "text-gray-500"} bg-white p-2 rounded`}>
    {color}
    </div>
);
}

export default Button;
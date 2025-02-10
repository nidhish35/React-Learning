import React from 'react'

function Card({username="Random Person", bio="No bio provided"}) {   // Default props and props assinginment
return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden text-center mb-5">
    <img src="https://plus.unsplash.com/premium_photo-1682023586579-e38ca10343e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="Profile Image" className="w-full h-48 object-cover"/>
    <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{username}</h2> // Props usage
        <p className="text-gray-600 mt-2">{bio}</p>    // Props usage
    </div>
</div>
)
}

export default Card
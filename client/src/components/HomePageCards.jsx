import React from 'react';
import Card from './Card';

const HomePageCards = () => {
    const HomeCards = [
        { image: "HomeCard1", text: "BedSheets" },
        { image: "HomeCard2", text: "Towels" },
        { image: "HomeCard3", text: "Kitchen Napkins" }
    ];

    return (
        <div className="flex gap-4 justify-center items-center mt-16 p-10 rounded-lg bg-[linear-gradient(180deg,_rgba(102,102,102,0)_12.67%,_rgba(102,102,102,0.6)_31.67%,_rgba(0,0,0,0.5)_56.17%,_rgba(0,0,0,0)_96.31%)]
"
//             style={{
//                 background:
//                     "linear-gradient(180deg, rgba(75, 56, 123, 0) 0%, rgba(75, 56, 123, 0.576) 40.3%, rgba(75, 56, 123, 0.504) 74.33%, rgba(255, 255, 255, 0.576) 98.83%, rgba(255, 255, 255, 0.576) 118.9%)",
//             }}
        >
            {HomeCards.map((item, index) => (
                <div key={index}>
                    <Card image={item.image} text={item.text} />
                </div>
            ))}
        </div>
    );
};

export default HomePageCards;

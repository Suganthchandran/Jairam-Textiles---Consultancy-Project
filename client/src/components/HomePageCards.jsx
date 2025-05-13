import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const HomePageCards = () => {
    const navigate = useNavigate();

    const HomeCards = [
        { image: "HomeCard1", text: "BedSheet", value: "BedSheet" },
        { image: "HomeCard2", text: "Towel", value: "Towel" },
        { image: "HomeCard3", text: "Kitchen Napkin", value: "KitchenNapkin" }
    ];

    const handleClick = (categoryValue) => {
        navigate('/collection', { state: { category: [categoryValue] } });
    };

    return (
        <div className="flex gap-4 justify-center items-center mt-16 p-10 rounded-lg">
            {HomeCards.map((item, index) => (
                <div key={index} onClick={() => handleClick(item.value)}>
                    <Card image={item.image} text={item.text} />
                </div>
            ))}
        </div>
    );
};

export default HomePageCards;

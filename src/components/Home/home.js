import MainPart from "./MainPart/main_part";
import PhotosPart from "./PhotosPart/photos_part";
import Bottom from "./Bottom/bottom";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import React from "react";
import Trolleybuses_item from "./TrolleybusItem/trolleybus_item";

function Home() {
        const trolleybusesItemList = [
                {
                    id: 1,
                    title: 'Ordinary trolleybuses',
                    description:'Conventional trolleybuses are often used in less developed cities.\n' +
                        '                            Despite this, they serve as a good means of transportation and have\n' +
                        '                            no difficulty in transporting large luggage or excessive numbers of people.\n' +
                        '                            It is also available in Ukraine. Not very expensive, but still worth being\n' +
                        '                            one of the best trolleybuses. The most common color is yellow. Mostly\n' +
                        '                            used daily because of its cost.', src: "/icons/ordinary_trolleybus.png"
                },
                {
                    id: 2, title: 'Big trolleybuses',
                    description:'Large trolleybuses are used in the jungle and in\n' +
                        '                            very developed cities. These trolleybuses have\n' +
                        '                            protection in the event of an accident. They are\n' +
                        '                            very convenient for long journeys. They have air\n' +
                        '                            conditioners and many other things for convenience.\n' +
                        '                            They also have a lot of space for luggage.\n' +
                        '                            Large trolleybuses are the best solution for cities\n' +
                        '                            with an extremely large population.',
                    src: "/icons/big_trolleybus.png"
                },
                {
                    id: 3,
                    title: 'New trolleybuses',
                    description:' New trolleybuses are not so often used, but they\n' +
                        '                            are the ideal of the word trolleybus. They are extremely\n' +
                        '                            comfortable. They are used for long trips. They have an\n' +
                        '                            extremely nice salon. They also have impact protection.\n' +
                        '                            Each passenger has a seat belt, chargers and much more for\n' +
                        '                            a comfortable ride. It really is the best choice.\n' +
                        '                            Widespread only in developed countries, because the price\n' +
                        '                            is quite high.',
                    src: "/icons/new_trolleybus.png"},
        ];
        return (
            <div>
                <Header/>
                <MainPart/>
                <div className="product-list">
                    {trolleybusesItemList.map((trolleybuses) => (
                        <Trolleybuses_item key={trolleybuses.id} product={trolleybuses} />
                    ))}
                </div>
                <PhotosPart/>
                <Bottom/>
                <Footer/>
            </div>
        )
}

export default Home;

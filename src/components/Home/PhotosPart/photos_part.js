function PhotosPart() {
    return (
        <div className="photos_part">
            <nav className="photos_part__nav">
                <div className="photos_part__nav_i_h_p1">
                    <img src="/icons/big_trolleybus.png" alt="photo1" width="370" height="220" />
                    <div className="photos_part_h_p1">
                        <h1 className="photos_part_header1">
                            Big trolleybuses
                        </h1>
                        <p className="photos_part_paragraph_1">
                            Large trolleybuses are used in the jungle and in
                            very developed cities. These trolleybuses have
                            protection in the event of an accident. They are
                            very convenient for long journeys. They have air
                            conditioners and many other things for convenience.
                            They also have a lot of space for luggage.
                            Large trolleybuses are the best solution for cities
                            with an extremely large population.
                        </p>
                    </div>
                </div>
                <div className="photos_part__nav_i_h_p2">
                    <img src="/icons/ordinary_trolleybus.png" alt="photo2" width="370" height="220" />
                    <div className="photos_part_h_p2">
                        <h1 className="photos_part_header2">
                            Ordinary trolleybuses
                        </h1>
                        <p className="photos_part_paragraph_2">
                            Conventional trolleybuses are often used in less developed cities.
                            Despite this, they serve as a good means of transportation and have
                            no difficulty in transporting large luggage or excessive numbers of people.
                            It is also available in Ukraine. Not very expensive, but still worth being
                            one of the best trolleybuses. The most common color is yellow. Mostly
                            used daily because of its cost.
                        </p>
                    </div>
                </div>
                <div className="photos_part__nav_i_h_p3">
                    <img src="/icons/new_trolleybus.png" alt="photo3" width="370" height="220" />
                    <div className="photos_part_h_p3">
                        <h1 className="photos_part_header3">
                            New trolleybuses
                        </h1>
                        <p className="photos_part_paragraph_3">
                            New trolleybuses are not so often used, but they
                            are the ideal of the word trolleybus. They are extremely
                            comfortable. They are used for long trips. They have an
                            extremely nice salon. They also have impact protection.
                            Each passenger has a seat belt, chargers and much more for
                            a comfortable ride. It really is the best choice.
                            Widespread only in developed countries, because the price
                            is quite high.
                        </p>
                    </div>
                </div>
            </nav>
            <button className="view_more_button"><a href="#View more">View more</a></button>
        </div>
    );
}

export default PhotosPart;

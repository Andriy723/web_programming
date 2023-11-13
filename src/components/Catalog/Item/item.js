import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderCatalog from "../HeaderCatalog/header_catalog";
import Bottom from "../../Home/Bottom/bottom";
import Footer from "../../Home/Footer/footer";
import axios from "axios";

function ItemPage({ trolleybusesItemList }) {
    const { id } = useParams();
    const itemId = parseInt(id);
    const [selectedTrolleybus, setSelectedTrolleybus] = useState(null);

    useEffect(() => {
        const fetchTrolleybusById = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/trolleybuses/${itemId}`);
                setSelectedTrolleybus(response.data);
            } catch (error) {
                console.error('Error fetching trolleybus data:', error);
            }
        };

        fetchTrolleybusById();
    }, [itemId]);

    if (!selectedTrolleybus) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <HeaderCatalog />
            <div className="img_desc_title">
                <img src="/icons/trolleybus_photo.png" alt="Trolleybus" width="370" height="220" />
                <div className="buttons_title_desc">
                    <div className="buttons_charac_1_2">
                        <a href=""><button type="button" className="charact_button1">1 characteristic</button></a>
                        <a href=""><button type="button" className="charact_button2">2 characteristic</button></a>
                    </div>
                    <div className="title_desc">
                        <h2>{selectedTrolleybus.title}</h2>
                        <p>Description: {selectedTrolleybus.description}</p>
                    </div>
                    <div className="output_select">
                        <div className="output_sold">
                            <h3>Trolleybuses was sold:</h3>
                            <output className="output_num_sold_trolleybuses">2343</output>
                        </div>
                        <div className="colour_select">
                            <h3>Colour:</h3>
                            <select className="select_colour">
                                <option value="colour_black" style={{ backgroundColor: 'black', color: 'white'}}>Black</option>
                                <option value="colour_red" style={{ backgroundColor: 'red', color: 'white' }}>Red</option>
                                <option value="colour_green" style={{ backgroundColor: 'green', color: 'white' }}>Green</option>
                                <option value="colour_blue" style={{ backgroundColor: 'blue', color: 'white' }}>Blue</option>
                                <option value="colour_white" style={{ backgroundColor: 'white', color: 'black' }}>White</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="price_type_back_cart">
                <div className="price_type">
                    <h2>Price: ${selectedTrolleybus.price}</h2>
                    <h2>Type: {selectedTrolleybus.type}</h2>
                </div>
                <div className="back_and_cart">
                    <Link to="/Catalog"><button className="back_catalog_button">Back to Catalog</button></Link>
                    <a href=""><button className="to_cart_button">Add to cart</button></a>
                </div>
            </div>
            <Bottom/>
            <Footer/>
        </div>
    );
}

export default ItemPage;

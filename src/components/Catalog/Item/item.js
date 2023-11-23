import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderCatalog from "../HeaderCatalog/header_catalog";
import Bottom from "../../Home/Bottom/bottom";
import Footer from "../../Home/Footer/footer";
import { fetchTrolleybusByIdApi } from "../api";
import {useDispatch} from "react-redux";
import {addToCart} from "../../Cart/Redux/actions";

function ItemPage() {
    const dispatch = useDispatch();

    const { id } = useParams();
    const itemId = parseInt(id);
    const [selectedTrolleybus, setSelectedTrolleybus] = useState(null);

    useEffect(() => {
        const fetchTrolleybusById = async () => {
            const data = await fetchTrolleybusByIdApi(itemId);
            setSelectedTrolleybus(data);
        };

        fetchTrolleybusById();
    }, [itemId]);

    if (!selectedTrolleybus) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart(selectedTrolleybus));
    };

    return (
        <div>
            <HeaderCatalog />
            <div className="img_desc_title">
                <img src="/icons/trolleybus_photo.png" alt="Trolleybus" width="370" height="220" />
                <div className="buttons_title_desc">
                    <div className="buttons_charac_1_2">
                        <Link to=""><button type="button" className="charact_button1">1 characteristic</button></Link>
                        <Link to=""><button type="button" className="charact_button2">2 characteristic</button></Link>
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
                                <option value="colour_black">Black</option>
                                <option value="colour_red">Red</option>
                                <option value="colour_green">Green</option>
                                <option value="colour_blue">Blue</option>
                                <option value="colour_white">White</option>
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
                    <Link to="/Cart">
                        <button className="to_cart_button" onClick={handleAddToCart}>
                            Add to cart
                        </button>
                    </Link>
                </div>
            </div>
            <Bottom/>
            <Footer/>
        </div>
    );
}

export default ItemPage;

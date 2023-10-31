import HeaderCatalog from "./HeaderCatalog/header_catalog";
import FilterCatalog from "./FilterCatalog/filter_catalog";
import BottomCatalog from "./BottomCatalog/bottom_catalog";
import Footer from "../Home/Footer/footer";
import React from "react";
import Trolleybuses from "./Trolleybuses/trolleybuses";

function Catalog() {
    const trolleybusesItemList = [
        { id: 1, title: 'TRHD-533', description:'hrrehre', price: 10.00, type: 'for_50people' },
        { id: 2, title: 'GYUJNE-222', description:'hetfd', price: 8.00, type: 'for_70people' },
        { id: 3, title: '76DJHG', description:'kinjte', price: 2.00, type: 'for_30people' },
        { id: 4, title: 'GYEBGEY', description:'rfvghuytrdhjytfd', price: 45.00, type: 'for_70people' },
        { id: 5, title: 'GVWUU DHU', description:'kikuytffgytrfdfghytrfrdrgtr', price: 55.00, type: 'for_50people' },
        { id: 6, title: '20-HGFff', description:'arggr', price: 67.00, type: 'for_30people' },
    ];
    return (
        <div>
            <div>
                <HeaderCatalog/>
                <FilterCatalog/>
                <div className="product-list">
                    {trolleybusesItemList.map((trolleybuses) => (
                        <Trolleybuses key={trolleybuses.id} product={trolleybuses} />
                    ))}
                </div>
                <BottomCatalog/>
                <Footer/>
            </div>
        </div>
    );
}

export default Catalog;

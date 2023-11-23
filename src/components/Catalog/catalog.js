import React, {useEffect, useState} from "react";
import Trolleybuses from "./Trolleybuses/trolleybuses";
import HeaderCatalog from "./HeaderCatalog/header_catalog";
import FilterCatalog from "./FilterCatalog/filter_catalog";
import BottomCatalog from "./BottomCatalog/bottom_catalog";
import Footer from "../Home/Footer/footer";
import Loader from "../Loader/loader";
import {fetchTrolleybusesApi} from "./api";
import {eventWrapper} from "@testing-library/user-event/dist/utils";

function Catalog() {
    const [trolleybusesItemList, setTrolleybusesItemList] = useState([]);

    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        price: 'all',
        title: 'all',
        type: 'all',
    });

    const [appliedFilters, setAppliedFilters] = useState({
        price: 'all',
        title: 'all',
        type: 'all',
    });

    const handleCancelFilters = () => {
        setFilters({
            price: 'all',
            title: 'all',
            type: 'all',
        });
        setSearchText('');
        setAppliedFilters({
            price: 'all',
            title: 'all',
            type: 'all',
        });

        setPriceFilter('all');
        setTitleFilter('all');
        setTypeFilter('all');

        fetchTrolleybusesApi(appliedFilters);
    };

    const [priceFilter, setPriceFilter] = useState('all');
    const [titleFilter, setTitleFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');

    const handleOptionChange = (filterType, event) => {
        if (filterType === 'price') {
            setPriceFilter(event.target.value);
        } else if (filterType === 'title') {
            setTitleFilter(event.target.value);
        } else if (filterType === 'type') {
            setTypeFilter(event.target.value);
        }
    };

    const [searchText, setSearchText] = useState('');

    const handleFilterChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    const clearFilters = () => {
        setFilters({
            price: 'all',
            title: 'all',
            type: 'all',
        });
        setSearchText('');
    };

    const applyFilters = (searchText) => {
        return trolleybusesItemList.filter((trolleybus) => {
            const priceFilterCondition =
                appliedFilters.price === 'all' ||
                (appliedFilters.price === 'more_than_50' && trolleybus.price > 50) ||
                (appliedFilters.price === 'more_than_10' && trolleybus.price > 10) ||
                (appliedFilters.price === 'more_than_2' && trolleybus.price > 2);

            const titleFilterCondition =
                appliedFilters.title === 'all' ||
                (appliedFilters.title === 'with_number' && /\d/.test(trolleybus.title)) ||
                (appliedFilters.title === 'without_number' && !/\d/.test(trolleybus.title)) ||
                (appliedFilters.title === 'uppercase' && /^[^a-z]*$/.test(trolleybus.title));

            const typeFilterCondition =
                appliedFilters.type === 'all' ||
                (appliedFilters.type === 'for_70people' && trolleybus.type === 'for_70people') ||
                (appliedFilters.type === 'for_30people' && trolleybus.type === 'for_30people') ||
                (appliedFilters.type === 'for_50people' && trolleybus.type === 'for_50people');

            const searchFilterCondition =
                searchText === '' || trolleybus.title.toLowerCase().includes(searchText);

            // const searchFilterCondition = searchText.split('').every(letter =>
            //     trolleybus.title.toLowerCase().includes(letter)
            // );
            return priceFilterCondition && titleFilterCondition && typeFilterCondition && searchFilterCondition;
        });
    };

    const handleApplyFilters = () => {
        fetchTrolleybusesApi({
            price: priceFilter,
            title: titleFilter,
            type: typeFilter,
            searchText: searchText,
        }).then(data => setTrolleybusesItemList(data));
    };

    useEffect(() => {
        const fetchTrolleybuses = async () => {
            try {
                setLoading(true);
                const data = await fetchTrolleybusesApi({
                    price: filters.price,
                    title: filters.title,
                    type: filters.type,
                    searchText: searchText,
                });
                setTrolleybusesItemList(data);
            } finally {
                setLoading(false);
            }
        };

        fetchTrolleybuses();
    }, [filters, searchText]);


    const filteredTrolleybuses = applyFilters(searchText);

    return (
        <div>
            <HeaderCatalog
                onSearchChange={(value) => setSearchText(value)}
                onClearSearch={() => setSearchText('')}
            />
            <FilterCatalog
                onOptionChange={handleOptionChange}
                onFilterChange={handleFilterChange}
                onCancelFilters={handleCancelFilters}
                onClearFilters={clearFilters}
                onApplyFilters={handleApplyFilters}
                priceFilter={priceFilter}
                titleFilter={titleFilter}
                typeFilter={typeFilter}
            />
            {loading ? (
                <Loader />
            ) : (
                <div className="product-list">
                    {filteredTrolleybuses.map((trolleybus) => (
                        <div key={trolleybus.id}>
                            <Trolleybuses product={trolleybus} />
                        </div>
                    ))}
                </div>
            )}
            <BottomCatalog />
            <Footer />
        </div>
    );
}

export default Catalog;

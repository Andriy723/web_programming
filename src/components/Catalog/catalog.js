import React, {useEffect, useState} from "react";
import Trolleybuses from "./Trolleybuses/trolleybuses";
import HeaderCatalog from "./HeaderCatalog/header_catalog";
import FilterCatalog from "./FilterCatalog/filter_catalog";
import BottomCatalog from "./BottomCatalog/bottom_catalog";
import Footer from "../Home/Footer/footer";
import Loader from "../Loader/loader";
import axios from "axios";

function Catalog() {
    const [trolleybusesItemList, setTrolleybusesItemList] = useState([
        // { id: 1, img: <img src="/icons/big_trolleybus.png" alt="photo1" width="370" height="220" />, title: 'TRHD-533', description: 'hrrehre', price: 10.00, type: 'for_50people' },
        // { id: 2, title: 'GYUJNE-222', description: 'hetfd', price: 8, type: 'for_70people' },
        // { id: 3, title: '76DJHG', description: 'kinjte', price: 2, type: 'for_30people' },
        // { id: 4, title: 'GYEBGEY', description: 'rfvghuytrdhjytfd', price: 45, type: 'for_70people' },
        // { id: 5, title: 'GVWUU DHU', description: 'kikuytffgytrfdfghytrfrdrgtr', price: 55, type: 'for_50people' },
        // { id: 6, title: '20-HGFff', description: 'arggr', price: 67, type: 'for_30people' },
    ]);

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

    const handleApplyFilters = () => {
        setAppliedFilters({
            price: priceFilter,
            title: titleFilter,
            type: typeFilter,
        });
    };

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

        fetchTrolleybuses();
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

    useEffect(() => {
        const fetchTrolleybuses = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:8080/trolleybuses');
                setTrolleybusesItemList(response.data);
                saveToLocalStorage(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrolleybuses();
    }, [appliedFilters]);

    const saveToLocalStorage = (data) => {
        localStorage.setItem("trolleybusesData", JSON.stringify(data));
    };

    const fetchTrolleybuses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/trolleybuses', {
                params: {
                    price: appliedFilters.price,
                    title: appliedFilters.title,
                    type: appliedFilters.type,
                },
            });
            setTrolleybusesItemList(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

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
                        <Trolleybuses key={trolleybus.id} product={trolleybus} />
                    ))}
                </div>
            )}
            <BottomCatalog />
            <Footer />
        </div>
    );
}

export default Catalog;

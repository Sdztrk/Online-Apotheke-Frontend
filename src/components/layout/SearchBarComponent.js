import React, { useState,useEffect } from 'react';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts,getProductById } from "../../redux/productSlice";
import { Avatar } from '@mui/material';


const filterData = (query, data) => {
    if (!query) {
        return data;
    } else {
        return data?.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));
    }
};


const url = process.env.REACT_APP_API_BASEURL


const SearchBarComponent = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false); // State to manage whether to show search results
    const [hovered, setHovered] = useState(false); // State to manage hover state

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.data);
    const dataFiltered = filterData(searchQuery, products?.data);

    const handleDetailsClick = (id) => {
        dispatch(getProductById(id));
      };
      

    useEffect(() => {
        // Function to fetch products when the component mounts
        dispatch(getProducts());
      }, [dispatch]);

    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "100px",
                }}
                onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
                onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
            >
                <SearchBar setFocus={setShowResults} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                { (hovered || showResults)  && searchQuery &&
                    <Box
                    onMouseOver={() => setShowResults(true)}

                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "white",
                            width: { xs: "95%", sm: "95%", md: "60%", lg: "40%" },
                            height: { xs: "20%", sm: "15%", md: "30%", lg: "20%" },
                            display:{sx:"none", sm:"none",md:"flex"},
                            marginTop: "-200px",
                            flexDirection: "column",
                            borderRadius:"22px",
                            overflow:"auto",
                            zIndex:999
                        }}
                    >
                        {dataFiltered.map((product) => (
                            
                            <Link
                                style={{
                                    width: "100%",
                                    height: "45px",
                                    zIndex:1000,
                                    display:"flex",
                                    flexDirection:"row",
                                    justifyContent:"space-between",
                                    alignItems:"center",
                                    borderBottom: "1px solid black",
                                    textDecoration:"none",
                                   color:"black"
                                }}
                                key={product._id}
                                to={`/product/${product._id}`}
                                onClick={() => handleDetailsClick(product._id)}
                                onMouseOver={() => setShowResults(true)}
                            >
                                <span 
                                style={{
                                    paddingLeft:"15px",
                                    "&:hover": {
                                        backgroundColor: "red", 
                                    }
                            }}
                            >{product.name} - {product.packageSize} mg
                            </span>
                                {/* <image src={`${url}/${product.image}`} /> */}
                                <Avatar style={{paddingRight:"15px"}} alt="User Avatar" src={`${url}/${product.image}`} />
                            </Link>
                        ))}
                    </Box>}
            </Box>
        </div>
    );
}

export default SearchBarComponent;

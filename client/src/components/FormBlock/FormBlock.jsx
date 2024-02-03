import classes from "./FormBlock.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchWithType from "../SearchWithType/SearchWithType";
import {fetchWines} from "./../../store/winesSlice";

const FormBlock = () => {
    const [searchValue, setSearchValue] = useState("");
    const [selectedType, setSelectedType] = useState("");
    
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const fetchWineData = () => {
        dispatch(fetchWines({searchValue,selectedType}))
    };

    return (
        <div>
            <form action="" className={classes.form}>
                <div className={classes.input_block}>
                    <img
                        src="./img/img_project/search.svg"
                        className={classes.input_first_img}
                        alt=""
                    />
                    <input
                        type="text"
                        className={classes.input}
                        placeholder="Название вина, цвет, или страна производства"
                        value={searchValue}
                        onChange={handleInputChange}
                    />
                </div>
                <NavLink to="/wine-catalog" className={({ isActive }) => (isActive ? classes.navlink: '')}>
                    <button
                        className={classes.input_second_img}
                        onClick={fetchWineData}
                        
                    >
                        <img src="./img/img_project/arrow-right.svg" alt="" />
                    </button>
                </NavLink>
            </form>
            <SearchWithType onTypeSelect={setSelectedType} selectedType={selectedType} />
        </div>
    );
};

export default FormBlock;

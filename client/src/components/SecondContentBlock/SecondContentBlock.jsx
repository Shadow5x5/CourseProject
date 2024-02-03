import FormBlock from '../FormBlock/FormBlock';
import classes from './SecondContentBlock.module.css';
import CardMini from './../CardMini/CardMini';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const SecondContentBlock = () => {
    const wineData = useSelector((state) => state.wines.wines);
    useEffect(() => {
        document.body.style.backgroundColor = '#222222'; // Измените на нужный вам цвет
        return () => {
            document.body.style.backgroundColor = ''; // Восстановите оригинальный цвет при размонтировании компонента
        };
    }, []);
    console.log(wineData);
    return (
        <div className={classes.container}>
            <FormBlock />

            <div className={classes.block_cards}>
                {wineData.map((item) => {
                    return (
                        <NavLink
                            to={`/wine-details/${item.key}`}
                            className={classes.link}
                            key={item.key}
                        >
                            <CardMini wineData={item} key={item} />
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default SecondContentBlock;

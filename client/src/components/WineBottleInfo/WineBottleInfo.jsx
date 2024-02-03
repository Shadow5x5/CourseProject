import classes from './WineBottleInfo.module.css';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { animated, useSpring } from '@react-spring/web';
import { useSelector } from 'react-redux';

const WineBottleInfo = () => {
    const wineData = useSelector((state) => state.wines.wines);
    const styles = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    });
    useEffect(() => {
        document.body.style.backgroundColor = '#222222'; // Измените на нужный вам цвет
        return () => {
            document.body.style.backgroundColor = ''; // Восстановите оригинальный цвет при размонтировании компонента
        };
    }, []);
    const navigate = useNavigate();
    const { id } = useParams();
    const wine = wineData.find((wine) => wine.key === id);
    const goBack = () => navigate(-1);
    function Slice(text) {
        return text.substring(1);
    }
    function upperCase(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    console.log(wine);
    return (
        <animated.div style={styles} className={classes.container}>
            <span onClick={goBack} className={classes.link}>
                <img src='/img/img_project/chevron-left.svg' alt='' />
                Вернуться к поиску
            </span>
            <div className={classes.content_wrapper}>
                <div className={classes.image_container}>
                    <img src={Slice(wine.value.img_big_path)} alt='' />
                </div>
                <div className={classes.info_container}>
                    <div className={classes.rating_location_container}>
                        <div className={classes.rating}>
                            <img src='/img/img_project/star.svg' alt='' />
                            <span>{wine.value.rating * 5}</span>
                        </div>
                        <div className={classes.location}>
                            <img src='/img/img_project/map-pin.svg' alt='' />
                            <div className={classes.location_text}>
                                <span>{wine.value.country}</span>
                                <span>, </span>
                                <span>{wine.value.city}</span>
                            </div>
                        </div>
                    </div>
                    <h2 className={classes.wine_title}>{wine.value.name}</h2>
                    <div className={classes.tags}>
                        <span>{wine.value.wine_producer}</span>
                        <img src='/img/img_project/ellipse.svg' alt='' />
                        <span>{wine.value.grape_variety}</span>
                        <img src='/img/img_project/ellipse.svg' alt='' />
                        <span>{upperCase(wine.value.type)}</span>
                    </div>
                    <h5 className={classes.description_title}>Описание</h5>
                    <p className={classes.description_text}>
                        {wine.value.description}
                    </p>
                </div>
            </div>
        </animated.div>
    );
};

export default WineBottleInfo;

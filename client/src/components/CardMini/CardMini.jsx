import classes from "./CardMini.module.css";

import { animated, useSpring } from "@react-spring/web";

const CardMini = ({ wineData }) => {
    const styles = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    });
    function upperCase(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return (
        <animated.div style={styles} className={classes.container}>
            <div className={classes.block_img}>
                <img src={wineData.value.img_path} alt="" />
            </div>
            <div className={classes.block_text}>
                <h4 className={classes.heading}>{wineData.value.name}</h4>
                <div className={classes.block_rating_location}>
                    <div className={classes.rating}>
                        <img src="./img/img_project/star.svg" alt="" />
                        <span className={classes.ratingValue}>
                            {wineData.value.rating * 5}
                        </span>
                    </div>
                    <div className={classes.location}>
                        <span>{wineData.value.country}</span>
                        <img src="./img/img_project/ellipse.svg" alt="" />
                        <span className={classes.wineType}>
                            {upperCase(wineData.value.type)}
                        </span>
                    </div>
                </div>
                <p className={classes.description}>
                    {wineData.value.description}
                </p>
            </div>
        </animated.div>
    );
};

export default CardMini;

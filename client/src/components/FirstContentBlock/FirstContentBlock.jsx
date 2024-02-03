import classes from "./FirstContentBlock.module.css";
import FormBlock from "./../FormBlock/FormBlock";
import { animated, useSpring } from "@react-spring/web";

const FirstContentBlock = ({ setWineData }) => {
    const styles = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    });
    return (
        <animated.div style={styles} className={classes.container}>
            <h1 className={classes.big_text}>
                Открой для себя мир виноделия
                {/* <img
                    src="./img/img_project/grape.png"
                    className={classes.img + " " + classes.first_img}
                    alt=""
                />
                <img
                    src="./img/img_project/stars.png"
                    className={classes.img}
                    alt=""
                /> */}
            </h1>
            <h4 className={classes.small_text}>
                Найдем информацию о любом вине
            </h4>
            <FormBlock setWineData={setWineData} />
            <div className={classes.often_searched_block}>
                <h4>Часто ищут:</h4>
                <ul>
                    <li>Альбицция,</li>
                    <li>Антаньо,</li>
                    <li>Аламос Мерло</li>
                </ul>
            </div>
        </animated.div>
    );
};

export default FirstContentBlock;

import classes from "./SearchWithType.module.css";
import Button from "../Button/Button";

const SearchWithType = ({ onTypeSelect, selectedType }) => {
    const typeArray = [
        "Имя",
        "Страна",
        "Город",
        "Производитель",
        "Тип",
        "Сорт винограда",
    ];
    const typeArray2 = [
        "name",
        "country",
        "city",
        "wine_producer",
        "type",
        "grape_variety",
    ];
    return (
        <div className={classes.container}>
            {typeArray.map((item, index) => {
                const item2 = typeArray2[index];
                return (
                    <Button
                        value={item}
                        value2={item2}
                        key={index}
                        onTypeSelect={onTypeSelect}
                        selectedType={selectedType}
                    />
                );
            })}
        </div>
    );
};
export default SearchWithType;

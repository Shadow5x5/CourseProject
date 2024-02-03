import "./reset.css";
import "./fonts.css";
import classes from "./App.module.css";
import FirstContentBlock from "./components/FirstContentBlock/FirstContentBlock";
import LogoText from "./components/LogoText/LogoText";
import WineBottleInfo from "./components/WineBottleInfo/WineBottleInfo";
import SecondContentBlock from "./components/SecondContentBlock/SecondContentBlock";
import { Routes, Route } from "react-router-dom";
import { useState} from "react";

function App() {
    const [wineData, setWineData] = useState([]);
    console.log(wineData);
    return (
        <div className={classes.container}>
            <LogoText />
            <Routes>
                <Route
                    path="/"
                    element={<FirstContentBlock setWineData={setWineData} />}
                />
                <Route
                    path="/wine-catalog"
                    element={
                        <SecondContentBlock
                            setWineData={setWineData}
                            wineData={wineData}
                        />
                    }
                />
                <Route
                    path="/wine-details/:id"
                    element={<WineBottleInfo wineData={wineData} />}
                />
            </Routes>
        </div>
    );
}

export default App;

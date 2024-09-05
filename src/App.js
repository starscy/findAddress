import AddressInput from "./components/AddressInput";
import Typography from "@mui/material/Typography";

function App() {
    return (
        <div className="App">
            <Typography variant="h3">Поиск адреса с подсказками</Typography>
            <AddressInput/>
        </div>
    );
}

export default App;

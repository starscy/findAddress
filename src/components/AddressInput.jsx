import React, {useState} from 'react';
import axios from 'axios';
import Information from "./Information";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

/**
 * Компонент поиск адреса с подсказками
 *
 * @return {JSX.Element}
 * @constructor
 */
const AddressInput = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [address, setAddress] = useState([]);

    const token = '295393491c543aa9cf33bfe07a0537da13d92b37';
    const url = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';

    const fetchSuggestions = async (input) => {
        if (input.length < 3) {
            setSuggestions([]);
            return;
        }

        try {
            const response = await axios.post(url,
                {query: input},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                        'Authorization': 'Token ' + token,
                    }
                }
            );
            setSuggestions(response.data.suggestions);
        } catch (error) {
            console.error('Ошибка при получении подсказок:', error);
        }
    };

    const handleChange = (event) => {
        const input = event.target.value;
        setQuery(input);
        fetchSuggestions(input);
    };

    const handleSuggestionClick = (suggestion) => {
        setAddress(suggestion);
        setQuery(suggestion.value);
        setSuggestions([]);
    };

    return (
        <Box>
            <Stack sx={{position: 'relative'}}>
                <TextField
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Введите адрес"
                    slotProps={{
                        input: {
                            sx: {
                                height: "60px",
                                width: "460px",
                            },
                        }
                    }}
                    sx={{
                        margin: "0 auto"
                    }}
                />
                {suggestions.length > 0 && (
                    <MenuList sx={{
                        border: '1px solid #ccc',
                        maxHeight: '150px',
                        overflowY: 'auto',
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'white',
                        zIndex: 1000
                    }}>
                        {suggestions.map((suggestion, key) => (
                            <MenuItem
                                key={key}
                                onClick={() => handleSuggestionClick(suggestion)}
                                // sx={{padding: '10px', cursor: 'pointer'}}
                            >
                                {suggestion.value}
                            </MenuItem>
                        ))}
                    </MenuList>
                )}
            </Stack>
            <Information suggestion={address}/>
        </Box>
    );
};

export default AddressInput;
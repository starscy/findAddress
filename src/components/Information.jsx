import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * Компонент описания адреса
 *
 * @param suggestion
 * @return {JSX.Element}
 * @constructor
 */
const Information = ({suggestion}) => {

    return (
        <Box sx={{textAlign: "center",  paddingTop: '3%'}}>
            <Typography>Код ФИАС (ГАР) - {suggestion?.data?.fias_id}</Typography>
            <Typography>Страна - {suggestion?.data?.country} </Typography>
            <Typography>Индекс - {suggestion?.data?.postal_code}</Typography>
            <Typography>Фед. округ - {suggestion?.data?.federal_district}</Typography>
            <Typography>Регион - {suggestion?.data?.region}</Typography>
            <Typography>Район - {suggestion?.data?.area}</Typography>
            <Typography>Город / н.п. - {suggestion?.data?.city}</Typography>
            <Typography>Улица - {suggestion?.data?.street}</Typography>
            <Typography>Дом - {suggestion?.data?.house}</Typography>
            <Typography>Квартира - {suggestion?.data?.flat}</Typography>
        </Box>
    );
};

export default Information;
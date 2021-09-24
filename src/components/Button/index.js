import * as React from 'react';
import Button from '@mui/material/Button';
import './css/style.css'

export default function BasicButtons({ title, onClick }) {
    return (
        <Button className="mybtn" onClick={onClick} fullWidth={true} variant="contained">{title}</Button>
    );
}
import { useState } from 'react';
import dayjs from 'dayjs';

const MyNumber = () => {
    const [number, setNumber] = useState(3_325_897_863);
    const [payDate, setPayDate] = useState(new Date());

    return (
        <div>
            <h1>Number: {number.toLocaleString('th-TH')}</h1>
            <h1>Pay Date: {dayjs(payDate).format('DD/MM/YYYY HH:mm:ss')}</h1>
            <h1>Total Days in Month: {dayjs(payDate).daysInMonth()}</h1>
        </div>
    );
}

export default MyNumber;


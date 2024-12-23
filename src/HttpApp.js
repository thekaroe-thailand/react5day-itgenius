import axios from 'axios';
import { config } from './config';
import Swal from 'sweetalert2';

export default function HttpApp() {
    const payload = {
        title: 'foo',
        body: 'bar',
        userId: 1
    }
    const sendGet = async () => {
        try {
            await axios.get(`${config.API_URL}/post`);
        } catch (err) {
            Swal.fire({
                title: 'Error',
                text: err.message,
                icon: 'error'
            });
        }
    }
    const sendPost = async () => {
        await axios.post(`${config.API_URL}/posts`, payload)
        Swal.fire({
            title: 'Success',
            text: 'Post created successfully',
            icon: 'success',
            timer: 2000 // 2 seconds
        });
    }
    const sendPut = async () => {
        await axios.put(`${config.API_URL}/posts/1`, payload)
    }
    const sendDelete = async () => {
        const button = await Swal.fire({
            title: config.CONFIRM_MESSAGE,
            text: 'คุณต้องการลบข้อมูลหรือไม่?',
            icon: 'question',
            showCancelButton: true,
            showConfirmButton: true,
        });

        if (button.isConfirmed) {
            await axios.delete(`${config.API_URL}/posts/1`)
            Swal.fire({
                title: 'Success',
                text: 'Deleted successfully',
                icon: 'success',
                timer: 2000 // 2 seconds
            });
        }
    }
    return (
        <div>
            <h1>HttpApp</h1>
            <button onClick={sendGet}>Send GET</button>
            <button onClick={sendPost}>Send POST</button>
            <button onClick={sendPut}>Send PUT</button>
            <button onClick={sendDelete}>Send DELETE</button>
        </div>
    );
}
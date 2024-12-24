import { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";

export const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (!file) {
            Swal.fire({
                title: 'Error',
                text: 'Please select a file to upload',
                icon: 'error',
            });
            return;
        }

        const myFile = new FormData(); // create a form data object
        myFile.append('myFile', file); // append the file to the form data object
        await axios.post('http://localhost:3000/upload', myFile); // send the form data object to the server
        // support POST, PUT Method
    }

    return (
        <>
            <div>Choose a file to upload</div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </>
    )
}


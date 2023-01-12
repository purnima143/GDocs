import React, { useState, useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid'

function Home() {

    let navigate = useNavigate();
    const routeChange = () => {
        console.log(uuid())
        let path = `/docs/${fileName}/${uuid()}`;
        navigate(path);
    }
    const [fileName, setFileName] = useState("my document")
    return (
        <div>Home
            <input type="text" placeholder='enter filename' onChange={(e) => setFileName(e.target.value)}></input>
            <Button color="primary" className="px-4"
                onClick={routeChange}>Create</Button>
        </div>
    )
}

export default Home
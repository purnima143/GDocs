import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from "axios";
import Form from "react-bootstrap/Form";
import Logo from "../assets/gdocsLogo.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";

const baseURL = "http://localhost:9000";

function Home({ logOutbutton, profile, authenticated }) {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState("")
    const [fileData, setFileData] = useState([]);
    const [fileName, setFileName] = useState("my document");
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log("user", user?.email)
    const useremail = user?.email
    const getMydata = async () => {
        let mydata = await axios.get(baseURL, { params: { user: useremail } });
        setFileData(mydata.data.data);
    };

    const handleClick = (filename, id) => {
        let path = `/docs/${filename}/${id}`;
        navigate(path);
    };

    const routeChange = () => {
        // console.log(uuid());
        let path = `/docs/${fileName}/${uuid()}`;
        navigate(path);
    };

    useEffect(() => {
        const myemail = user?.email;
        const myname = user?.name;
        const pic = user?.picture;
        console.log(myemail + "byyy" + myname);
        setEmail(myemail);
        setName(myname);
        setPic(pic);

    }, [user]);

    useEffect(() => {
        getMydata();
    }, [user]);

    useEffect(() => {
        if (localStorage.getItem('redirect_uri') !== window.location.origin)
            window.open(localStorage.getItem('redirect_uri'), "_self")
    }, [])

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (

        <div className="home">
            <div className="header" >
                <Container className="form-container p-0">
                    <div className="logo-header">
                        <img src={Logo} alt="GDocs" />
                        <h2>GDocs</h2>
                    </div>
                    <div className="header-right">

                        {logOutbutton}
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Hi, {name}
                                </Tooltip>
                            }
                        >
                            <img src={pic} alt="" className="profilepic" />
                        </OverlayTrigger>
                    </div>

                </Container>
            </div>
            <Form.Group className="form-box container mt-4">

                <Form.Control
                    type="email"
                    placeholder="+ Enter filename"
                    onChange={(e) => setFileName(e.target.value)}
                    className="inputarea"
                />

                <Button color="primary" className="px-4" onClick={routeChange}>
                    Create Document
                </Button>

            </Form.Group>
            <Container className="mt-4 table" >

                <Row className="document-row top-row m-2 bold">
                    <Col>My Documents</Col>
                    <Col lg="3">Created at</Col>
                </Row>
                {fileData.map((item) => {
                    const { _id, fileName, createdAt } = item;

                    return (
                        <React.Fragment key={_id}>
                            <Row
                                onClick={() => handleClick(fileName, _id)}
                                className="document-row"
                                style={{ fontSize: "14px" }}
                                key={_id}
                            >
                                <Col>
                                    <img src={Logo} alt="GDocs" style={{ width: "32px" }} />
                                    {fileName}
                                </Col>
                                <Col lg="3">{moment(createdAt).calendar()}</Col>
                            </Row>
                        </React.Fragment>
                    );
                })}
            </Container>
            <Footer />
        </div>)

}

export default Home;

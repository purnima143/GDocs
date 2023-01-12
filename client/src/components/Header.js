import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactToPrint from 'react-to-print';

function Header({ componentRef, handleCopyClick, isCopied, fileName }) {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="">{fileName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <ReactToPrint
                            trigger={() => <div className='btn btn-primary m-1'>Dowload</div>
                            }
                            content={() => componentRef.current}
                        />
                        <div className='btn btn-success m-1' onClick={handleCopyClick}>{isCopied ? 'Copied!' : 'Copy'}</div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
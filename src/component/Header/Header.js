import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">HUST management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Trang chu</Link>
                        <Link to="/users" className='nav-link'>User</Link>
                        <Link to="/admins" className='nav-link'>Admin</Link>
                        {/* <Nav.Link href="/">Trang chủ</Nav.Link>
                        <Nav.Link href="/users">User</Nav.Link>
                        <Nav.Link href="/admins">Admin</Nav.Link> */}

                    </Nav>
                    <Nav>
                        <NavDropdown title="Thêm" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Đăng nhập</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Đăng ký</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Thông tin</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
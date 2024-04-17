import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import logo from "../../assets/images/logo.gif";

import "../Services/styles.css";

function Services() {
    return (
        <section id="services-page">
            <h1>Services</h1>
            <p>text about the different types of services</p>
            <div className="table-container"> 
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>XXX</td>
                            <td>$$$</td>
                        </tr>
                        <tr>
                            <td>XXX</td>  
                            <td>$$$</td> 
                        </tr>
                        <tr>
                            <td>XXX</td>
                            <td>$$$</td>
                        </tr>
                        <tr>
                            <td>XXX</td>
                            <td>$$$</td>
                        </tr>
                        <tr>
                            <td>XXX</td>
                            <td>$$$</td>
                        </tr>
                        <tr>
                            <td>XXX</td>
                            <td>$$$</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Button variant="primary">Book an appointment</Button>
        </section>
    );
};

export default Services;


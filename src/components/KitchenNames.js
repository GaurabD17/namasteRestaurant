import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default function KitchenNames() {
    return (
        <Container className='text-left text-dark text-uppercase'>
            <Row className='mt-3 h-auto'>
                <Col>
                    <h2>Gaurab Dhakal</h2>
                    <h5 className='text-secondary'>EXECUTIVE CHEF</h5>
                    <p className='text-lowercase'>He’s risen up the ranks to become executive chef at award-winning hotel, The LaLiT London, and has set his sights on becoming Nepal’s first Michelin-starred chef.
                    </p>
                </Col>

                <Col>
                    <h2>MATTEO CAPON
                    </h2>
                    <h5 className='text-secondary'>CHEF DE CUISINE </h5>
                    <p className='text-lowercase'>Prepare and cook various Nepali traditional sauces and foods including meat, poultry, eggs, dairy, fish, vegetables, nuts in accordance with Nepali traditional style with excellent cooking ability;
Plan menus, determine size of food portions, estimate food requirements and cost, and monitor and order supplies,
                    </p>
                </Col>

                <Col>
                    <h2>ANGIE WALSH </h2>
                    <h5 className='text-secondary'>PASTRY CHEF </h5>
                    <p className='text-lowercase'>Train staff in preparation, cooking and handling of food;
Maintain inventory and records of food, supplies and equipment;
Clean kitchen and work area;
Manage kitchen operations.</p>
                </Col>
            </Row>
        </Container>
    );
}
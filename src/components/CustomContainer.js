import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default function CustomContainer() {
    return (
        <Container className='h-auto my-4 pt-3'>
            <Row className='h-100'>
                <Col className="text-center m-auto">
                    <h2 className='text-uppercase'>a destination</h2>
                    <p className='m-auto w-75 pb-lg-5'>A Perfect Place for you
                    Nepal’s capital city Kathmandu brings you the best vibrant restaurant scene with extensively offering the vast choices of the dining options. Of course, you could get the number of dining options that include the traditional Nepali restaurants, best of European fine dining and more to the amazing manner. Below are the lists of must-try Best restaurants in Nepal that you could enjoy the best class dining option to the Nepal is considered as one of the most beautiful places to visit in the world. With more number of natural scenery to enjoy in Nepal, many people tend to come here on several occasions. Apart from these natural beauties, Nepal is also famous for traditional foods with several dining options.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
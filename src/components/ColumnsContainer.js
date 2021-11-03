import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default function ColumnsContainer() {
    return (
        <Container className='mt-4'>
            <Row className='text-center'>
                <Col>
                    <h2>A DESTINATION</h2>
                </Col>
            </Row>
            <Row className='mt-3 text-left h-auto mb-4'>
                <Col className='mx-auto' md={5}>
                    <p>Nepal’s capital city Kathmandu brings you the best vibrant restaurant scene with extensively offering the vast choices of the dining options. Of course, you could get the number of dining options that include the traditional Nepali restaurants, best of European fine dining and more to the amazing manner. Below are the lists of must-try Best restaurants in Nepal that you could enjoy the best class dining option to the Nepal is considered as one of the most beautiful places to visit in the world. With more number of natural scenery to enjoy in Nepal, many people tend to come here on several occasions. Apart from these natural beauties, Nepal is also famous for traditional foods with several dining options.</p>
                    
                </Col>

                <Col className='mx-auto' md={5}>
                    <p>Much of the cuisine is variations on Asian themes. Momo is a Nepalese style dumpling filled with minced meat in a flour dough, given different shapes and then cooked by steaming. It is one of the most popular foods in Nepal and the regions of Sikkim, Darjeeling and Kalimpong in India where ethnic Nepalese have a presence. Momo were originally filled with buffalo meat but are now commonly filled with goat or chicken, as well as vegetarian preparations. Special foods such as sel roti, finni roti and patre are eaten during festivals such as Tihar. Sel roti is a traditional Nepali homemade ring-shaped rice bread which is sweet to taste. Other foods have hybrid Tibetan and Indian influence.Chow mein is a Nepali favorite in modern times based on Chinese-style stir fried noodles. It is one of the most beloved everyday staple lunches in Nepali/Nepalese households.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
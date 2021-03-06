import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import WelcomeImage from '../assets/images/welcome-image.webp';

const Welcome: React.FC = () => {
  return (
      <Row className='welcome-section'>
        <Col xs={12} className='text-center py-2'>
          <h1>My Library</h1>
        </Col>
        <Col xs={12} className='welcome-image px-0'>
          <Image src={WelcomeImage}/>
        </Col>
        <Col xs={12} className='img-credit'>
          Photo by <a
            href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            rel="noreferrer" target="_blank">
          Anna Hunko</a> on <a
            href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            rel="noreferrer" target="_blank">
          Unsplash</a>
        </Col>
      </Row>
  )
};

export default Welcome;
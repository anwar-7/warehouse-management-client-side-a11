import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Info.css';

const Info = () => {
  return (
    <div className="mb-5">
      <CardGroup>
        <Card>
          <Card.Body>
            <h2 className=" text-success fw-bold">1 Billion+</h2>
            <p className=" text-secondary">Items tracked daily</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h2 className=" text-success fw-bold">2 Million+</h2>
            <p className=" text-secondary">Order daily placed</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h2 className=" text-success fw-bold">24 Hour</h2>
            <p className=" text-secondary">We provide service </p>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Info;

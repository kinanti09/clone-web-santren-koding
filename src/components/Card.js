import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <Card style={{width: 300}}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Nama :{props.nama}</CardTitle>
          <CardSubtitle>Tanggal Lahir:{props.tanggal}</CardSubtitle>
          <CardText>Alamat :{props.alamat}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
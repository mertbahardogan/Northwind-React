import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  //useParams: route'da bulunan arametreleri bize Obje olarak verir
  let { name } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductName(name)
      .then((result) => setProduct(result.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //name

  //[ ] state değiştiğinde sayfayı yenile anlamında

  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Card.Header>{product.productName}</Card.Header>
          <Card.Meta>{product.category?.categoryName}</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

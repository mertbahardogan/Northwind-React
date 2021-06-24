import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Message } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import ProductService from "../services/productService";

export default function ProductAdd() {
  let productService = new ProductService();

  const [postState, setPostState] = useState(false);

  const initialValues = {
    productName: "",
    unitPrice: "10",
  };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunludur."),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur."),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          productService
            .addProduct(values)
            .then((result) => setPostState(result.data.success));
        }}
      >
        <Form className="ui form">
          {postState === true ? (
            <Message
              success
              header="Ekleme işlemini başarıyla gerçekleştirdin."
              content="Ürünün listelenecek."
            />
          ) : null}
          <KodlamaIoTextInput
            name="productName"
            placeholder="Product Name"
          ></KodlamaIoTextInput>
          <KodlamaIoTextInput
            name="unitPrice"
            placeholder="Unit Price"
          ></KodlamaIoTextInput>
          <Button color="green" type="submit">
            Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

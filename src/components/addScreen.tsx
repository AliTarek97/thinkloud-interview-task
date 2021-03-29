import React from "react";
import { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import localforage from "localforage";
import { mobile } from "./mainScreen";

export interface addScreenProps {
  history:any
}

export interface addScreenState {
  model: string;
  year: string;
  brand: string;
  Memory: number;
}

class addScreen extends Component<addScreenProps, addScreenState> {
  state = {
    model: "",
    year: "",
    brand: "",
    Memory: 0,
  };

  handleSaving = async () => {
    const {brand, model, year} = this.state;
    const mobiles = await localforage.getItem<mobile[]>('mobiles') || [];
    mobiles?.push({brand, model, year})
    await localforage.setItem('mobiles', mobiles);
    this.props.history.push("/");
  };

  handleModelChange = (e: any) => {
    this.setState({ model: e.target.value });
  };

  handleManufactureYearChange = (e: any) => {
    this.setState({ year: e.target.value });
  };

  handleBrandChange = (e: any) => {
    this.setState({ brand: e.target.value });
  };

  handleMemoryChange = (e: any) => {
    this.setState({ Memory: parseInt(e.target.value) });
  };

  render() {
    return (
      <Form>
          <FormGroup row>
            <Label for="modelLabel" sm={2}>
              model
            </Label>
            <Col>
              <Input
                type="text"
                name="modelInput"
                id="model"
                placeholder="model"
                required
                onChange={this.handleModelChange}
              />
            </Col>
          </FormGroup>

        <FormGroup row>
          <Label for="manufactureYear" sm={2}>manufacture year</Label>
          <Col>
            <Input
              type="number"
              name="manufacture year"
              id="manufactureYear"
              placeholder="manufacture year"
              required
              onChange={this.handleManufactureYearChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="selectBrand" sm={2}>brand</Label>
          <Col>
            <Input
              type="select"
              name="brand"
              id="selectedBrand"
              onChange={this.handleBrandChange}
              value={this.state.brand}
            >
              {["Sony", "Samsung", "Apple", "Nokia", "LG"].map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="selectMemory" sm={2}>Memory</Label>
          <Col>
            <Input
              type="select"
              name="memory"
              id="selectedMemory"
              onChange={this.handleMemoryChange}
              value={this.state.Memory}
            >
              {[16, 32, 64, 128].map((memory) => (
                <option key={memory}>{memory}</option>
              ))}
            </Input>
          </Col>
        </FormGroup>

        <Button color="secondary" onClick={() => this.props.history.push("/")}>Back</Button>
        <Button color="success" onClick={this.handleSaving}>Save</Button>
      </Form>
    );
  }
}

export default addScreen;

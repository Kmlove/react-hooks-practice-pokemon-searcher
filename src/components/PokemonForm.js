import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({url, onNewPokemonAdd}) {
  const initialValue = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }
  const [formData, setFormData] = useState(initialValue)

  function handleChange(e){
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleOnFormSubmit(e){
    e.preventDefault()

    const newPoke = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    
    fetch(url, {
      method: "POST",
      headers: {
        "content-type" : "application/json",
        "accept" : "application/json"
      },
      body: JSON.stringify(newPoke)
    })
    .then(res => res.json())
    .then(data => {
      onNewPokemonAdd(data)
      setFormData(initialValue)
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleOnFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

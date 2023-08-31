import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {hp, name, sprites} = pokemon
  const [showBack, setShowBack] = useState(false)

  function handleClick(){
    setShowBack(!showBack)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={showBack? sprites.back : sprites.front} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

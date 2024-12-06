// src/App.jsx
import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [strength, setStrength] = useState(0);
  const [agility, setAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (newFighter) => {
    if (!team.includes(newFighter)) {
      setTeam([...team, newFighter]);
      setStrength(strength + newFighter.strength);
      setAgility(agility + newFighter.agility);
      setMoney(money - newFighter.price);
    }
  };

  const handleRemoveFighter = (removedFighterIndex) => {
    const newArray = team.filter(
      (fighter) => team.indexOf(fighter) !== removedFighterIndex
    );
    setTeam(newArray);
    const removedFighter = team[removedFighterIndex];
    setMoney(money + removedFighter.price);
    setAgility(agility - removedFighter.agility);
    setStrength(strength - removedFighter.strength);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>
      <h2>Team: </h2>
      <h4>Total Strength: {strength}</h4>
      <h4>Total Agility: {agility}</h4>
      <div className="newFighters">
        {team.length === 0
          ? "Pick some team members!"
          : team.map((newFighter, removedFighterIndex) => (
              <ul key={newFighter.name}>
                <li>
                  <img src={newFighter.img}></img>
                </li>
                <li>Name: {newFighter.name}</li>
                <li>Price: ${newFighter.price}</li>
                <li>Strength: {newFighter.strength}</li>
                <li>Agility: {newFighter.agility}</li>
                <li>
                  <button
                    onClick={() => handleRemoveFighter(removedFighterIndex)}
                  >
                    Remove Fighter
                  </button>
                </li>
              </ul>
            ))}
      </div>
      <h2>Fighters</h2>
      <div className="fighters">
        {zombieFighters.map((fighter) => (
          <ul key={fighter.name}>
            <li>
              <img src={fighter.img}></img>
            </li>
            <li>Name: {fighter.name}</li>
            <li>Price: ${fighter.price}</li>
            <li>Strength: {fighter.strength}</li>
            <li>Agility: {fighter.agility}</li>
            <li>
              {!team.includes(fighter) ? (
                fighter.price > money ? (
                  <button disabled>No Enough Money</button>
                ) : (
                  <button onClick={() => handleAddFighter(fighter)}>
                    Add Fighter
                  </button>
                )
              ) : (
                <button disabled>Already in team</button>
              )}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default App;

import { useEffect, useState } from "react";
import { bowler } from "./types/bowler";
import "./App.css"

function BowlerList() {
  const [bowlers, setBowler] = useState<bowler[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch("http://localhost:5286/BowlingLeague");
      const data = await response.json();
      setBowler(data);
    };
    fetchFood();
  }, []);

  return (
    <>
      <h3>Bowlers</h3>
      <table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName},{" "}
                {b.bowlerMidName ? b.bowlerMidName + ". " : ""}
                {b.bowlerLastName}
              </td>
              <td>{b.teamName}</td>
              <td>{b.address}</td>
              <td>{b.city}</td>
              <td>{b.state}</td>
              <td>{b.zip}</td>
              <td>{b.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;

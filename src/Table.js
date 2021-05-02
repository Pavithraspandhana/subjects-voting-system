import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function Table() {
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);
  const [likes3, setLikes3] = useState(0);

  return (
    <div offset-4>
      <table
        className="table  table-bordered "
        style={{
          marginTop: 30,
          marginLeft: 24,
          marginRight: 30,
          width: 500,
          textAlign: "center",
        }}
      >
        <div className="table-primary">
          <tr>
            <th>Like</th>
            <th>Technologies</th>
            <th>Edit</th>
          </tr>

          <tr>
            <td>
              <h2>
                <FontAwesomeIcon icon={faThumbsUp} />
                {likes1}
              </h2>
            </td>
            <td>React js</td>
            <td>
              <button onClick={() => setLikes1(likes1 + 1)}>likes</button>
              <button onClick={() => setLikes1(0)}>Reset</button>
            </td>
          </tr>
          <tr>
            <td>
              <h2>
                <FontAwesomeIcon icon={faThumbsUp} />
                {likes2}
              </h2>
            </td>
            <td>angular js</td>
            <td>
              <button onClick={() => setLikes2(likes2 + 1)}>likes</button>
              <button onClick={() => setLikes2(0)}>Reset</button>
            </td>
          </tr>
          <tr>
            <td>
              <h2>
                <FontAwesomeIcon icon={faThumbsUp} />
                {likes3}
              </h2>
            </td>
            <td>javascript</td>
            <td>
              <button onClick={() => setLikes3(likes3 + 1)}>likes</button>
              <button onClick={() => setLikes3(0)}>Reset</button>
            </td>
          </tr>
        </div>
      </table>
      <h2>
        <i class="fa fa-thumbs-up"></i>{" "}
      </h2>
    </div>
  );
}

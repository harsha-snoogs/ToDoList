import React from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
function ListItem(props) {
  let item = props.item;
  console.log(item);
  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {item.map((it) => {
          return (
            <div key={it.key} className="list">
              <p>
                <input
                  className="entry"
                  value={it.text}
                  onChange={(e) => {
                    props.updateItem(e.target.value, it.key);
                  }}
                />{" "}
                <span>
                  <FontAwesomeIcon
                    className="faicon"
                    icon="trash"
                    onClick={() => {
                      props.delete1(it.key);
                    }}
                  />
                </span>{" "}
              </p>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}
export default ListItem;

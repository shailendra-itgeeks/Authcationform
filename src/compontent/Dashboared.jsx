import React, { useEffect, useRef, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../compontent/Dashboared.css";
export const Dashboared = () => {
  const ref = useRef();
  const [product, setProduct] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const handledate = async () => {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const data = await res.json();
    setProduct(data.results);
    console.log(data);
  };
  useEffect(() => {
    handledate();
  }, []);

  const handledrag = (results) => {
    const items = Array.from(product);
    console.log(items, "j");
    const [reoderItem] = items.splice(results?.source?.index, 1);
    console.log(reoderItem);
    items.splice(results?.destination?.index, 0, reoderItem);
    setProduct(items);
    console.log(results);
  };

  const handlelogout = () => {
    const data = sessionStorage.clear("token");
    console.log(data);
    navigate("/");
  };
  const handleLogout = () => {
    handlelogout();
    setShowPopup(false);
  };

  const open = () => {
    setShowPopup(true);
  };

  return (
    <div>
      {showPopup && (
        <>
          <div className="popup">
            <div className="popup-content">
              <p>Are you sure you want to logout?</p>
              <button className="logout" onClick={handleLogout}>Logout</button>
              <button className="logout" onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </>
      )}
      <>
        <div className=" p-[30px]">
          <button
            style={{
              height: "50px",
              width: "100px",
              backgroundColor: "red",
              color: "white",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
            onClick={() => open()}
          >
            log out
          </button>
        </div>
      </>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <DragDropContext onDragEnd={handledrag}>
          <Droppable droppableId="droppable-1">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className="droppable-1"
                {...provided.droppableProps}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {product?.map((data, index) => (
                  <Draggable draggableId={`${index}draggable-1`} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div>
                          {" "}
                          <img
                            src={data.picture.large}
                            alt=""
                            style={{ height: "200px", width: "200px" }}
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                ;{provided.placeholder}
              </div>
            )}
          </Droppable>
          ;
        </DragDropContext>
      </div>
    </div>
  );
};

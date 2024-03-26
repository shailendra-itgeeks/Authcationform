import React, { useState } from "react";
import "../compontent/Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodos, updatetodos } from "../Redux/Todoslice";
import { MdDelete } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
 import { RxCross1 } from "react-icons/rx";

export const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
 
  const [data, setdata] = useState({
    name: "",
  });
  const [alert ,setAlert]=useState(false)
   const handlechange = (e) => {
    const {name,value}=e.target
    setdata({ ...data, [name]: value });
  };
  const handlesubmit = () => {
    if ( data.name.trim().length === 0) {
       window.confirm('You need to enter a task');
      
    }
    
    dispatch(addtodo(data));
     
  };
  const handleundo=(to)=>{
    dispatch(removetodos(to))
 
  }
  const update=(tt)=>{
    dispatch(updatetodos(tt))
    setAlert(!alert)
    console.log(tt)
  }
  const wromg=()=>{
    setAlert(false)
  }
  return (
    <>
    {
      alert && <div style={{   
      display:"flex",
      justifyContent:"flex-end",
      alignItems:"flex-start",
      width:"440px",
      borderRadius:"20px",
      padding:"10px",
      backgroundColor:"white"}}>
       <div style={{}}>
       <input
            type="text"
            style={{ height: "50px", width: "400px",padding:"10px" }}
           
            name="name"
            id=""
       
            placeholder="Enter your name"
          />
          <button
            className="button-28"
            role="button"
           >
             update
          </button>
       </div>
        <span style={{padding:"3px",cursor:"pointer"}}onClick={()=>wromg()} ><RxCross1 /></span>
        


        </div>
    }
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          gap: "23px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
          <input
            type="text"
            style={{ height: "50px", width: "500px",padding:"10px" }}
            value={data.name}
            name="name"
            id=""
            onChange={handlechange}
            placeholder="Enter your name"
          />
          <button
            className="button-28"
            role="button"
            onClick={() => handlesubmit()}
          >
            ADD
          </button>
        </div>
        <div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {todos.map((todo) => (
              <>
                <div style={{ width: "100%" }}>
                  <li>
                    {todo?.text.name}
                    
                   <span style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                      {" "}
                      <MdDelete
                      onClick={()=>handleundo(todo.id)}

                        style={{
                          backgroundColor: "red",
                          color: "white",
                          height: "30px",
                          width:"30px",
                          borderRadius:"20px",
                          padding:"5px",
                          cursor:"pointer"
                          
                          
                        }}
                      />
                       <span><IoMdCreate
                       onClick={()=>update(todo)}
                       style={{
                        backgroundColor: "grey",
                        color: "white",
                        height: "30px",
                        width:"30px",
                        borderRadius:"20px",
                        padding:"5px",
                        cursor:"pointer"
                       }} />
</span>
                    </span>
                
                    
                  </li>
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

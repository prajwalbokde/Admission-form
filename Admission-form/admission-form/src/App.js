import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };
  

  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "40px", padding: "40px", minHeight: "100vh", backgroundColor: "#445D48", fontFamily: "sans-serif"}}>
      <div style={{backgroundColor:"rgb(35, 49, 90)",padding:"50px",border:"4px solid white",borderRadius: "60px 20px 60px 20px",boxShadow:"0px 4px 30px rgba(0,0,0,0.3)" }}>
      <h1 style={{backgroundColor:"orange",textAlign:"center",fontFamily:"emoji",fontStyle:"revert-layer"}}>Admission Form</h1>

      <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
        <div style={{textAlign:"center", borderTopStyle:"groove",backgroundColor:"#347"}}><br/>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: "10px", width: "250px", borderRadius: "8px" }}
          />
        </div><br/>
        

        <div style={{textAlign:"center", borderTopStyle:"groove",backgroundColor:"#347"}}><br/>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: "10px", width: "250px", borderRadius: "8px" }}
          />
        </div><br/>

        <div style={{textAlign:"center", borderTopStyle:"groove",backgroundColor:"#347"}}><br/>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            style={{ padding: "10px", width: "250px", borderRadius: "8px" }}
          />
        </div><br/>

        <button type="submit"  style={{backgroundColor: "orange",color: "white",padding: "10px 20px",border: "none",borderRadius: "8px",cursor: "pointer"}}>submit</button>
      </form>
      </div>

      
  <div style={{backgroundColor:"rgb(123, 86, 27)",padding:"50px",border:"4px solid white",borderRadius: "60px 20px 60px 20px",boxShadow:"0px 4px 30px rgba(0,0,0,0.3)"}}>
      <h3 style={{ margin: "0 0 15px 0",backgroundColor:"gold", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "10px", alignItems:"center", textAlign:"center" }}>Live Preview</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
    </div>

  </div>
  );
}

export default App;
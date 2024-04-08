import React from "react";
import { Button } from "../../components/ui/button";

function SignError({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            width: "400px",
            height: "200px",
            transform: "translate(-50%, -50%)",
            backgroundColor: "black",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            zIndex: 9999, // Ensure it's above other elements
          }}
        >
          {/* <p>All fields must be filled</p> */}
          <div style={{ marginBottom: "10px", color: "#fff" }}>
            All fields must be filled
          </div>
          <Button
            onClick={onClose}
            style={{
              background: "none",
              color: "white",
              border: "none",
              cursor: "pointer",
              position: "absolute",
              top: "5px",
              right: "5px",
              fontSize: "20px",
            }}
          >
            x
          </Button>
        </div>
      )}
    </>
  );
}

export default SignError;

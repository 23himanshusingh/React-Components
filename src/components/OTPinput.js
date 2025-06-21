import React, { useEffect, useRef, useState } from "react";
import "../styles.css";

function OTPInput({ onChangeOTP }) {
  const length = 4; // Total number of OTP input boxes
  const [otp, setOTP] = useState(Array(length).fill("")); // State to store each digit
  const inputsRef = useRef([]); // Array of input refs to control focus

  const focusInput = (index) => {
    // TODO: Focus the input element at the specified index
    inputsRef.current[index]?.focus();
  };

  const handleChange = (e, index) => {
    // TODO: Implement value validation, state update, auto-focus, and OTP completion check
    let val = e.target.value;
    val = val.trim();
    if (isNaN(val)) return;
    val = val.slice(-1);
    const newArr = [...otp];
    newArr[index] = val;
    setOTP(newArr);
    if (val) focusInput(index + 1);
    //if completed all digits, we'll send joined otp to console for logging

    if (newArr.every((d) => d !== "")) {
      onChangeOTP(newArr.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    // TODO: Handle backspace behavior for navigation
    // if (otp[index] === "" && e.key === "Backspace") {
    //   focusInput(index - 1);
    // }
    // else
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        focusInput(index - 1);
      }
    }
  };

  const handlePaste = (e) => {
    // TODO: Extract numeric values from pasted string and update inputs accordingly
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const numbers = pastedText.replace(/\D/g, "");
    const newArr = [...otp];
    let index = Math.min(length, numbers.length);
    for (let i = 0; i < index; i++) {
      newArr[i] = numbers[i];
      inputsRef.current[i].value = numbers[i];
    }
    setOTP(newArr);
    if (newArr.every((d) => d !== "") && newArr.length === length) {
      onChangeOTP(newArr.join(""));
    }
    let focusIndex = Math.min(index, length - 1);
    focusInput(focusIndex);
  };

  // Render the OTP input fields
  return (
    <div onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)} // Save input ref for focus management
          type="text" // Use text input for better control over formatting
          inputMode="numeric" // Show numeric keyboard on mobile devices
          value={digit} // Controlled input tied to state
          onChange={(e) => handleChange(e, index)} // Handle typing
          onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            "text-align": "center",
            marginRight: "10px",
          }}
        />
      ))}
    </div>
  );
}

export default OTPInput;

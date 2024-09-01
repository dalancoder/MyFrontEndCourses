import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneForm = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  return (
    <div>
      <h3>Enter your phone number</h3>
      <PhoneInput
        country={'tr'}  
        value={phone}
        onChange={handlePhoneChange}
      />
      <p>Your phone number: {phone}</p>
    </div>
  );
};

export default PhoneForm;
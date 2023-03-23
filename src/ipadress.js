import React, { useState } from "react";

function AddressGenerator() {
  const [address, setAddress] = useState("");

  const generateIpv6Address = () => {
    let ipv6Address = "";
    let zeroSegments = 0;
    for (let i = 0; i < 8; i++) {
      // If there are any zero segments remaining, insert a zero segment and skip to the next segment.
      if (zeroSegments > 0) {
        ipv6Address += "0000";
        zeroSegments--;
      } else {
        let segment = "";
        for (let j = 0; j < 4; j++) {
          segment += Math.floor(Math.random() * 16).toString(16);
        }
        ipv6Address += segment;
      }
      if (i !== 7) {
        ipv6Address += ":";
      }
    }
    // Replace consecutive blocks of zeroes with the "::" shorthand notation.
    ipv6Address = ipv6Address.replace(/(0000:){2,}/, "::");
    setAddress(ipv6Address);
  };

  const generateIpv4Address = () => {
    let ipv4Address = "";
    for (let i = 0; i < 4; i++) {
      ipv4Address += Math.floor(Math.random() * 256);
      if (i !== 3) {
        ipv4Address += ".";
      }
    }
    setAddress(ipv4Address);
  };

  const handleIPv4ButtonClick = () => {
    generateIpv4Address();
  };
  const handleIPv6ButtonClick = () => {
    generateIpv6Address();
  };

  return (
    <div>
      <button onClick={handleIPv4ButtonClick}>Generate IPv4 Address</button>
      <button onClick={handleIPv6ButtonClick}>Generate IPv6 Address</button>
      <br />
      <br />
      <span>{address}</span>
    </div>
  );
}

export default AddressGenerator;

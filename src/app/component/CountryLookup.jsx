"use client";
import React, { useEffect, useState } from "react";

const CounteyLookup = () => {
  const [ip, setIp] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    fetchIP();
  }, []);
  const fetchIP = async () => {
    const res = await fetch("https://api.ipify.org/?format=json");
    const data = await res.json();
    setIp(data.ip);
    console.log(data.ip);
    if (data.ip) {
      const Cres = await fetch(`https://ipinfo.io/${ip}?token=1137d578138474`);
      const Cdata = await Cres.json();
      console.log(Cdata);
      setCountry(Cdata.region);
    }
  };
  return <div className="border-b px-8 py-3">{country}</div>;
};

export default CounteyLookup;

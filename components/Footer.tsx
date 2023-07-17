import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [blocks, setBlocks] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    const url = 'https://api.blue0x.com/nxt?=%2Fnxt&requestType=getState';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setBlocks(json.numberOfBlocks);
        setResponse(json.requestProcessingTime);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="w-full p-4 dark:bg-black md:flex md:items-center md:justify-between md:p-6">
      <span className="flex content-center items-center text-sm font-medium text-green-500">
        <span className="mr-2 flex h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"></span>
        Up
        <span className="mr-2 flex h-2.5 w-2.5 shrink-0"></span>
        Blocks : {blocks}
        <span className="mr-2 flex h-2.5 w-2.5 shrink-0"></span>
        Response : {response} ms
      </span>
    </footer>
  );
};

export default Footer;

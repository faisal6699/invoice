import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { FaDownload } from "react-icons/fa";
import Product from "./Components/Product";

const App = () => {
  const componentRef = useRef();

  const handleClick = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Product ref={componentRef} />

      <div
        onClick={handleClick}
        style={{
          cursor: "pointer",
          textAlign: "center",
          color: "white",
          background: "blue",
          margin: 'auto',
          width: '20%',
          padding: '10px',
          fontWeight: '800'

        }}
      >
        <FaDownload /> Print this out!
      </div>
    </div>
  );
};

export default App;

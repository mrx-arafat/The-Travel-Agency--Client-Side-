import React from "react";

import notfound from "../../img/not-found.png";

const NotFound = () => {
  return (
    <div>
      <div>
        <h1 className="pt-5 text-danger">Sorry!! Page Not Found</h1>
        <img className="w-50" src={notfound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;

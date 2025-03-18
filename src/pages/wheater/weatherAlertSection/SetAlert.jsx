import React from "react";
import AlertRegistration from "./AlertRegistration";
import SafetyInstraction from "./SafetyInstraction";

const SetAlert = () => {
  return (
    <div className="h-full w-full overflow-y-scroll flex gap-10 p-6">
      <AlertRegistration/>
      <SafetyInstraction/>
    </div>
  );
};

export default SetAlert;

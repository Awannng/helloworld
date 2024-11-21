import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimeLine from "../components/TimeLine"

const TimeLinePage = () => {
    return (
        <div className="flex justify-center absolute bottom-1.5 -left-6 z-30 w-full">
            <TimeLine />
        </div>
    );
};

export default TimeLinePage;

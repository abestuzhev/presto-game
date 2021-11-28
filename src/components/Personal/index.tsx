import React, {FC} from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";

const Personal: FC = () => {
    return (
        <div className="personal">
            <Sidebar/>
            <Content/>
        </div>
    );
};

export default Personal;
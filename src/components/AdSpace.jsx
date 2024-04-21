import React from "react";
import { Box, Heading } from "@primer/react";


const AdSpace = () => {
    return (
        <Box sx={{width:['0vw','0vw', '20vw'], backgroundColor: 'canvas.default', height:'100vh'}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col" style={{marginTop: '67px'}}>
                        <div style={{width:['200px'], height:'500px', backgroundColor:'red'}}></div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default AdSpace
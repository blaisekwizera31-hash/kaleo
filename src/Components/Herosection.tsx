import Navbar from "./Navbar"
import Belownav from "./kaleomain"
import "./Herosection.css"
import { Box } from "@chakra-ui/react"
const Herosection =() =>{
    return(
        <Box>
            <Navbar></Navbar>
            <Belownav></Belownav>
        </Box>
    )
}

export default Herosection;
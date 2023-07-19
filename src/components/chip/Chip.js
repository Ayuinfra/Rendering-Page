import {Chip } from '@mui/material';
import { getFactorial } from '../cube/Cube';


const CustomChip = (props)=>{

    return(
        <Chip 
            label={`${props.label}: ${getFactorial(props.count)}`} 
            color={props.color} 
            style={{ margin: '0.5rem' }} 
        />
    )
}
export default CustomChip;
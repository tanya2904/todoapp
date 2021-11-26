import { Typography , Paper, Button} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react'

export const SingleTask = ({v,i,doneHandler,delHandler}) => {
    return (
        <div>
           <Paper 
           elevation={4}
           style={{
               display:"flex" ,
                marginTop:"1.5%" ,
                 marginBottom:"1.5%",
                 justifyContent:"space-evenly",
                 alignItems:"center"}}>

            <Typography variant="caption">{i+1} </Typography>
           <Typography variant="h4" style={{textDecoration: v.done && "line-through" , color:v.done && "#bfafae"}}>{v.title} </Typography>  {" "}
      <div>
      <Button 
        onClick={() => doneHandler(v.id)}
        variant="outlined" 
        startIcon={v.done ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/>}>
        {" "}{v.done ? "Undone" : "Done"}{" "}  
    </Button>

      <Button 
      onClick = {() => delHandler(v.id)}
       variant="outlined"
        startIcon={<DeleteIcon />}
        style={{marginLeft:"5px"}}>
        Delete
    </Button>
      </div>
      </Paper> 
        </div>
    )
}

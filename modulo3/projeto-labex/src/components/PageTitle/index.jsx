import { Typography } from '@mui/material'
import React from 'react'

function PageTitle(props) {
	return (
		<div>
			 <Typography
            variant="h1"
            style={{ display: "flex", justifyContent: "center" }}
          >
           {props.title}
          </Typography>
		</div>
	)
}

export default PageTitle
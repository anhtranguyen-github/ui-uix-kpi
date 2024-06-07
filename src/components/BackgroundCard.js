import { Box } from '@mui/material'
import React from 'react'

export default function BackgroundCard() {
  return (
    <Box
              component="img",
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
  )
}

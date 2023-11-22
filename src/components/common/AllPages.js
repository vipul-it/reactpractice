import React from 'react'
import { themeColor } from './../../theme/index';

const AllPages = ({name}) => {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: themeColor.Gray,
      height: "100vh",
      fontSize: "20px",
      fontWeight: "500",
    }}
  >
  {name}
  </div>
  )
}

export default AllPages
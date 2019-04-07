import React from "react";
import { AppBar, Toolbar, Typography } from "material-ui";

export default props => (
  <AppBar position="static">
    <Toolbar>
      {/* typograpy is text and variant changes the size */}
      {/* gutterbutton if removed the text will be more centered */}
      {/* color inherit the color form the root or parent component */}
      <Typography component="h2" variant="headline" color="inherit">
        Exercise Database
      </Typography>
    </Toolbar>
  </AppBar>
);

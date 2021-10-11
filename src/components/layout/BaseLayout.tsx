import React, { ReactNode } from "react";
import { Grid, SystemStyleObject, GridItem } from "@chakra-ui/react";

const grid: SystemStyleObject = {
  gridTemplateColumns: "10rem repeat(3,1fr)",
  gridTemplateRows: "100px  repeat(3,1fr)",
  height: "100vh",
  gridTemplateAreas: `
     "sidebar nav nav nav"
     "sidebar content content content"
     "sidebar content content content"
     "sidebar content content content"
  `,
};

export interface BaseLayoutProps {
  nav?: ReactNode;
  children?: ReactNode;
  sidebar?: ReactNode;
}

function BaseLayout({ nav, children, sidebar }: BaseLayoutProps) {
  return (
    <Grid sx={grid} background="white">
      <GridItem gridArea="nav">{nav}</GridItem>
      <GridItem overflowY="scroll" gridArea="content" marginTop="35px">
        {children}
      </GridItem>
      <GridItem gridArea="sidebar">{sidebar}</GridItem>
    </Grid>
  );
}

export default BaseLayout;

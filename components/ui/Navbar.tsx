import NextLink from "next/link";

import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>

        <NextLink href="/" passHref legacyBehavior>
          <Link underline="none">
            <Typography variant="h6" color="white">
              CookieMaster
            </Typography>
          </Link>
        </NextLink>

        <div style={{ flex: 1 }} />

        <NextLink href="/theme-changer" passHref legacyBehavior>
          <Link underline="none">
            <Typography variant="h6" color="white">
              Change Theme
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

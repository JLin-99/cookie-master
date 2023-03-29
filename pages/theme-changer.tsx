import { useState, ChangeEvent } from "react";

import { Layout } from "@/components/layouts";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function ThemeChangerPage() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(e.target.value);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>Theme</FormControl>
          <RadioGroup value={currentTheme} onChange={onThemeChange}>
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            <FormControlLabel
              value="custom"
              control={<Radio />}
              label="Custom"
            />
          </RadioGroup>
        </CardContent>
      </Card>
    </Layout>
  );
}
export default ThemeChangerPage;

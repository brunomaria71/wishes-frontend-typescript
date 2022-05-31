import { FC, useEffect, useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  ListItem,
  List,
} from "@mui/material";
import { getWishes, Wish } from "./services/wishes";

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: "dark",
    background: {
      default: "black",
    },
    primary: {
      main: "silver",
    },
    secondary: {
      main: "gold",
    },
  },
});

export const App: FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    getWishes().then(setWishes);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <List>
        {wishes.map((wish) => {
          return <ListItem key={wish.name}>{wish.name}</ListItem>;
        })}
      </List>
    </ThemeProvider>
  );
};

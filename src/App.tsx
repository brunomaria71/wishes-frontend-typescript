import { FC, useEffect, useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  ListItem,
  List,
} from "@mui/material";
import { getWishes, Wish } from "./services/wishes";
import { WishForm } from "./components/WishForm";
import "./scss/app.scss";

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: "light",
    background: {
      default: "pink",
    },
    primary: {
      main: "#4d88ff",
    },
    secondary: {
      main: "#a9a9a9",
    },
  },
});

export const App: FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    getWishes().then(setWishes);
  }, []);

  console.log(wishes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>A Wish Is A Dream Your Heart Makes</h1>
      <WishForm />
      <List id="list">
        {wishes.map((wish) => {
          return <ListItem key={wish.name}>{wish.name}</ListItem>;
        })}
      </List>
    </ThemeProvider>
  );
};

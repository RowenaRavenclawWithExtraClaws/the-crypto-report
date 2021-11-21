import { Card, CardContent, Typography, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlocksPagination from "./components/blocksPagination";
import BlocksTable from "./components/blocksTable";
import FetchIndicator from "./components/fetchIndicator";
import Title from "./components/title";
import {
  selectBlocks,
  selectPageCount,
  setBlocks,
  setPageCount,
} from "./redux/blockSlice";
import { darkTheme, queryStrings } from "./utility/constants";
import { getBlocks } from "./utility/utility";

const App = () => {
  const blocks = useSelector(selectBlocks);
  const pageCount = useSelector(selectPageCount);
  const [fetching, setFetching] = useState(true);

  const dispatch = useDispatch();

  const getAndSetBlocks = async () => {
    const result = await getBlocks(queryStrings.blocks(1));

    dispatch(setBlocks(result.data.blocks));
    dispatch(setPageCount(result.data.pageCount));

    setFetching(false);
  };

  useEffect(() => {
    getAndSetBlocks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (fetching) return <FetchIndicator />;

  return (
    <ThemeProvider theme={darkTheme}>
      <Title />
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Latest blocks
          </Typography>
          <BlocksTable blocks={blocks} />
          <BlocksPagination pageCount={pageCount} />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default App;

import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { setBlocks } from "../redux/blockSlice";
import { queryStrings } from "../utility/constants";
import { getBlocks } from "../utility/utility";

const BlocksPagination = (props: { pageCount: number }) => {
  const dispatch = useDispatch();

  const getAndSetBlocks = async (page: number) => {
    const resutlt = await getBlocks(queryStrings.blocks(page));

    dispatch(setBlocks(resutlt.data.blocks));
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) =>
    getAndSetBlocks(value);

  return (
    <Pagination
      count={props.pageCount}
      variant="outlined"
      shape="rounded"
      onChange={handlePageChange}
    />
  );
};

export default BlocksPagination;

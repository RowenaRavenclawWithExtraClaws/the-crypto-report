import { useEffect, useState } from "react";
import { getBlocks, unslugify } from "../utility/utility";
import { queryStrings } from "../utility/constants";
import FetchIndicator from "./fetchIndicator";
import { Table, Modal, TableRow, TableCell } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BlockModal = (props: {
  open: boolean;
  handleClose: () => void;
  blockHash: string;
}) => {
  const [block, setBlock] = useState({} as any);
  const [fetching, setFetching] = useState(true);

  const getAndSetBlocks = async () => {
    setFetching(true);

    const result = await getBlocks(queryStrings.block(props.blockHash));

    setBlock(result.data.block);
    setFetching(false);
  };

  useEffect(() => {
    if (props.open) getAndSetBlocks();
  }, [props.open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {fetching ? (
        <FetchIndicator />
      ) : (
        <Table sx={style}>
          {Object.keys(block).map((key, indx) => (
            <TableRow key={indx}>
              <TableCell>{unslugify(key)}</TableCell>
              <TableCell>{block[key]}</TableCell>
            </TableRow>
          ))}
        </Table>
      )}
    </Modal>
  );
};

export default BlockModal;

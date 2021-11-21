import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Button,
  Chip,
} from "@mui/material";
import { useState } from "react";
import BlockModal from "./blockModal";

const BlocksTable = (props: { blocks: Array<any> }) => {
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const [blockHash, setBlockHash] = useState("");

  const handleBlockModalClose = () => setBlockModalOpen(false);

  const handleShowDetails = (hash: string) => {
    setBlockHash(hash);
    setBlockModalOpen(true);
  };

  const tableTitles = ["Hash", "Height", "Time", ""];

  return (
    <Table className="blocks-table" size="small">
      <TableHead>
        <TableRow>
          {tableTitles.map((title, indx) => (
            <TableCell key={indx}>{title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.blocks.map((block, indx) => (
          <TableRow key={indx}>
            {Object.values(block).map((blockProperty, indx1) => (
              <TableCell key={indx1}>
                {typeof blockProperty === "number" ? (
                  <Chip label={blockProperty} />
                ) : (
                  (blockProperty as string)
                )}
              </TableCell>
            ))}
            <TableCell>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleShowDetails(block.hash)}
              >
                Show details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <BlockModal
        open={blockModalOpen}
        handleClose={handleBlockModalClose}
        blockHash={blockHash}
      />
    </Table>
  );
};

export default BlocksTable;

import { Container } from "@mui/material";
import AppBar from "~/components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";

function DetailBoard() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
}

export default DetailBoard;

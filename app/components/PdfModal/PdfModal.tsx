import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", md: "50%" },
  height: { xs: "100%", md: "70%" },
  bgcolor: "background.paper",
  borderRadius: { xs: 0, md: 4 },
  boxShadow: 24,
  p: { xs: 4, md: 4 },
};

const PdfModal = ({ open, handleClose, fileUrl }: any) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ "& .MuiBackdrop-root": { backgroundColor: "transparent" } }}
    >
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 20,
            top: 8,
            color: "common.black",
            height: 40,
          }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ mt: 2, width: "100%", height: "90%", overflow: "hidden" }}>
          <iframe
            src={fileUrl}
            title="PDF preview"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>
        </Box>
      </Box>
    </Modal>
  );
};

export default PdfModal;

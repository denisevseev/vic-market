import "../../trade-fair/[id]/trade-fair.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

interface TradeFairsProps {
  data: any[];
  title?: string | null;
  backAction?: boolean | null;
}

const TradeFairsGridItems: React.FC<TradeFairsProps> = ({
  data,
  title,
  backAction,
}) => {
  const router = useRouter();

  return (
    <div>
      {backAction && (
        <Box style={{ color: "#000", textDecoration: "none" }}>
          <IconButton aria-label="go back" onClick={() => router.back()}>
            <ArrowBackIcon />
          </IconButton>
          Back
        </Box>
      )}

      <h2>{title ?? "Trade Fairs"}</h2>
      <Grid container spacing={3}>
        {data?.map((tradeFair, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2.4}
            className="itemGrid"
          >
            <Box className="tradeFairCard">
              {tradeFair &&
              tradeFair.image &&
              /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(tradeFair.image) ? (
                <Image
                  src={tradeFair.image}
                  alt={tradeFair.event_name}
                  width={100}
                  height={110}
                  onClick={() => router.push(`/trade-fair/${tradeFair.id}`)}
                  style={{
                    cursor: "pointer",
                    margin: "auto",
                    maxHeight: "110px",
                    maxWidth: "100px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              ) : (
                <Image
                  src={"/get-distributers.svg"}
                  alt={tradeFair.event_name}
                  width={100}
                  height={110}
                  onClick={() => router.push(`/trade-fair/${tradeFair.id}`)}
                  style={{
                    cursor: "pointer",
                    margin: "auto",
                    minHeight: "110px",
                    minWidth: "100px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              )}
              <Link
                className="upcomingElipsisTFItem"
                href={`/trade-fair/${tradeFair.id}`}
              >
                <Typography className="upcomingElipsisTFItem">
                  {tradeFair.event_name}
                </Typography>
              </Link>

              <Typography className="upcomingDateTFItem">
                <DateRangeOutlinedIcon
                  style={{
                    color: "#404D57",
                    width: "16px",
                    height: "13px",
                  }}
                />{" "}
                {tradeFair.date}
              </Typography>
              <Typography className="upcomingElipsisLocTFItem">
                {" "}
                <FmdGoodOutlinedIcon
                  style={{ color: "#404D57", width: "16px", height: "13px" }}
                />{" "}
                {`${tradeFair?.event_name}, ${tradeFair?.city}, ${tradeFair?.country}`}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TradeFairsGridItems;

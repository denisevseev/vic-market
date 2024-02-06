import { Navigation } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
// import SimpleSlider from "./components/shared/scrollable-tabs/scrollable-tabs";
import VariableWidth from "./components/shared/scrollable-tabs/scrollable-tabs";

export default function Home() {

  const slidesData = [
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
    { title: "Common", imgSrc: "/get-distributers.svg" },
    { title: "Medical", imgSrc: "/agriculture.svg" },
    { title: "Personal", imgSrc: "/chemicals.svg" },
    { title: "Solar Panels", imgSrc: "/get-distributers.svg" },
  ];

  return (
    <main style={{ textAlign: "center" }}>
      {/* <h1>Home page</h1> */}
      {/* <Link href="/privacy-policy">
        <Button variant="contained">Privacy policy</Button>
      </Link> */}
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "4rem",
        }}
      >
        <div style={{marginBottom: '2rem'}}>
        <VariableWidth data={slidesData} title='Trending Categories'/>
        </div>
        <div>
        <VariableWidth data={slidesData} title='Recent Blogs' />
        </div>
      </div>
    </main>
  );
}

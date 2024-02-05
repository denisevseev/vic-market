import { Navigation } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{}}>
      <h1>Home page</h1>
      <Link href="/privacy-policy">
        <Button variant="contained">Privacy policy</Button>
      </Link>
    </main>
  );
}

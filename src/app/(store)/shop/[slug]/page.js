// app/shop/[slug]/page.jsx

import Shop from "./Shop";
import axios from "axios";
import * as cheerio from "cheerio";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = axios.get(
    `https://livingshapes.in/collections/${slug}`
  );

  const $ = cheerio.load(data);

  return {
    title: $("title").text(),
    description:
      $('meta[name="description"]').attr("content") || "",
  };
}

export default function Page() {
  return <Shop />;
}
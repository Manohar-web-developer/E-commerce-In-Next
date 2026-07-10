

import DetailPage from './DetailPage'
import axios from "axios";
import * as cheerio from "cheerio";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data } = await axios.get(
    `https://livingshapes.in/products/${slug}`
  );

  const $ = cheerio.load(data);

  return {
    title: $("title").text(),
    description:
      $('meta[name="description"]').attr("content") || "",
  };
}

function page() {
  
  return (
    <div><DetailPage/></div>
  )
}

export default page
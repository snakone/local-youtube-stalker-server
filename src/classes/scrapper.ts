import axios from "axios";
import * as cheerio from "cheerio";

export async function getPageText(url: string): Promise<string> {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const text = $("body").text();
    return text.replace(/\s+/g, " ").trim();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

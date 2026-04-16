import { readFile } from "fs/promises";
import path from "path";

export async function readMarkdownFile(filename: string): Promise<string> {
  const filePath = path.join(process.cwd(), "content", filename);
  return readFile(filePath, "utf-8");
}

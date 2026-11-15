import "server-only"
import {promises as fs} from "fs"
import path from "path"
import { AboutMetadata } from "@/types/aboutMetadata"

// Function to read in and parse the data
export async function getAllAboutMetadata(): Promise<AboutMetadata[]> {
    // Stores the content directory
    const contentPath: string = path.join(process.cwd(), "data/about-metadata.json")

    // Opens and reads the file into the program
    const file = await fs.readFile(contentPath, "utf-8")

    // Parses the data from the file
    const data = JSON.parse(file)

    const list = Array.isArray(data) ? data : Object.values(data)
    return list as AboutMetadata[]
}
import "server-only"
import {promises as fs} from "fs"
import path from "path"
import {Experience} from "@/types/experience"

// Function to read in and parse the data
export async function getAllExperience(): Promise<Experience[]> {
    // Stores the content directory
    const contentPath: string = path.join(process.cwd(), "data/experience.json")

    // Opens and reads the file into the program
    const file = await fs.readFile(contentPath, "utf-8")

    // Parses the data from the file
    const data = JSON.parse(file)

    const list = Array.isArray(data) ? data : Object.values(data)
    return list as Experience[]
}
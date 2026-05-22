import "server-only"
import { promises as fs } from "fs"
import path from "path"

// Function to read in and parse the data
export async function getAllCerts(){
    // Stores the content directory
    const contentPath:string = path.join(process.cwd(), "content/main/certs.json")

    // Opens and reads the file into the program
    const file:any = await fs.readFile(contentPath, "utf-8")

    // Parses the data from the file
    const data = JSON.parse(file)

    return Array.isArray(data) ? data : Object.values(data)
}
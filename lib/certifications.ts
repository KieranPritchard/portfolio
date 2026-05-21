import "server-only"
import { promises as fs } from "fs"
import path from "path"

// Function to read in and parse the data
async function parseAndReadFile(){
    // Stores the content directory
    const contentPath:string = path.join(process.cwd(), "content/main/certs.json")

    // Opens and reads the file into the program
    const file:any = await fs.readFile(contentPath, "utf-8")

    // Parses the data from the file
    const data:JSON = JSON.parse(file)

    return data
}
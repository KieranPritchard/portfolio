import "server-only"
import { promises as fs } from "fs"
import path from "path"
import { Certification } from "@/types/certification"

// Function to read in and parse the data
export async function getAllCerts(): Promise<Certification[]> {
    // Stores the content directory
    const contentPath: string = path.join(process.cwd(), "public/main/certs.json")

    // Opens and reads the file into the program
    const file: any = await fs.readFile(contentPath, "utf-8")

    // Parses the data from the file
    const data = JSON.parse(file)

    const list = Array.isArray(data) ? data : Object.values(data)
    return list as Certification[]
}
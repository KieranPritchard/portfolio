import { getAllCerts } from "@/lib/certifications"
import CertificationsClient from "./CertificationsClient"
import { Certification } from "../../../types/certification"

/**
 * Certifications Component (Server Component)
 * 
 * Fetches certifications data on the server side and forwards it to the 
 * CertificationsClient component for animated client-side rendering.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default async function Certifications({ className }: Readonly<{ className?: string }>) {
    /**
     * Data set for earned certifications fetched server-side from JSON file.
     */
    const certs:Certification[] = await getAllCerts()

    return <CertificationsClient certs={certs} className={className} />
}
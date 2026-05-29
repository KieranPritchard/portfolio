/**
 * Represents an earned credential or certification.
 */
export type Certification = {
  /** The title of the certification. */
  title: string
  /** The organization that issued the certification. */
  issuer: string
  /** The year the certification was earned. */
  date: string
  /** URL to verify the credential. */
  link: string
}

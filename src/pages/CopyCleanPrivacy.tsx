import React from "react"

export function CopyCleanPrivacy() {
  return (
    <div className="container mx-auto px-6 max-w-3xl py-32 pt-40">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy for Copy Clean</h1>
      <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
        <p><strong>Last updated: July 5, 2026</strong></p>
        
        <p>Copy Clean is a Chrome extension designed to transform user-selected webpage content into clean clipboard formats.</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Handling</h2>
        <p>Copy Clean accesses only the webpage content that a user explicitly selects and chooses to process using a Copy Clean action.</p>
        <p>Selected content may include text, links, or table content.</p>
        <p>All processing is performed locally within the user's browser.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Collection</h2>
        <p>Copy Clean does not collect or store user data on external servers.</p>
        <p>Copy Clean does not collect personally identifiable information, browsing history, authentication information, financial information, health information, location data, or personal communications.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Transmission</h2>
        <p>Copy Clean does not transmit selected webpage content to the developer or to any external server.</p>
        <p>No external APIs are used to process selected content.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Sharing</h2>
        <p>Copy Clean does not sell, transfer, or share user data with third parties.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Analytics and Advertising</h2>
        <p>Copy Clean does not use analytics, tracking technologies, or advertising services.</p>
        <p>User data is not used for personalized advertising, creditworthiness, or lending purposes.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Retention</h2>
        <p>Copy Clean does not retain selected webpage content after the requested copy transformation is completed.</p>
        <p>The transformed content is copied to the user's local clipboard.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Limited Use</h2>
        <p>Copy Clean's use of information is limited solely to providing its user-facing clipboard transformation features.</p>
        <p>The use of information received through Chrome APIs adheres to the Chrome Web Store User Data Policy, including the Limited Use requirements.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p>This Privacy Policy may be updated if Copy Clean's features or data-handling practices change.</p>
        <p>Any updated policy will be published on this page.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact</h2>
        <p>For questions about this Privacy Policy or Copy Clean, contact:</p>
        <p><strong>Yogesh Parihar</strong></p>
        <p>Email: <strong><a href="mailto:yogeshparihar2105@gmail.com" className="text-primary hover:underline">yogeshparihar2105@gmail.com</a></strong></p> 
      </div>
    </div>
  )
}

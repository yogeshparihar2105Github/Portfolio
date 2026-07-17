import React from "react"

export function ReadingProgressPrivacy() {
  return (
    <div className="container mx-auto px-6 max-w-3xl py-32 pt-40">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy for Reading Progress</h1>
      <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
        <p><strong>Last updated: July 17, 2026</strong></p>
        
        <p>Reading Progress (&quot;the Extension&quot;) is committed to protecting your privacy.</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
        <p>Reading Progress does not collect, store, transmit, or sell any personal information.</p>
        <p>The extension does not collect:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal information</li>
          <li>Email addresses</li>
          <li>Names</li>
          <li>Passwords</li>
          <li>Payment information</li>
          <li>Browsing history</li>
          <li>Location data</li>
          <li>Website content</li>
          <li>User activity</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Local Storage</h2>
        <p>The extension stores user preferences locally on your device using Chrome's <code>chrome.storage.local</code> API.</p>
        <p>This may include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reading speed preference</li>
          <li>Progress bar color</li>
          <li>Theme selection</li>
          <li>Widget position</li>
          <li>Widget visibility</li>
          <li>Progress bar thickness</li>
        </ul>
        <p>These settings never leave your computer.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Website Access</h2>
        <p>The extension runs on webpages in order to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Calculate reading progress</li>
          <li>Estimate reading time</li>
          <li>Display the reading progress bar</li>
          <li>Display the floating reading widget</li>
        </ul>
        <p>All processing happens locally inside your browser.</p>
        <p>No webpage content is transmitted to any server.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Sharing</h2>
        <p>Reading Progress does not:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Sell user data</li>
          <li>Share user data</li>
          <li>Transfer user data to third parties</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Analytics</h2>
        <p>Reading Progress does not use:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google Analytics</li>
          <li>Tracking pixels</li>
          <li>Cookies</li>
          <li>Advertising services</li>
          <li>Telemetry</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Remote Code</h2>
        <p>The extension does not load or execute remote code. All code is packaged within the extension submitted to the Chrome Web Store.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Children's Privacy</h2>
        <p>Reading Progress does not knowingly collect any information from children.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p>If this Privacy Policy changes, the updated version will be published at this page.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact</h2>
        <p>If you have any questions regarding this Privacy Policy, please contact:</p>
        <p><strong>Yogesh Parihar</strong></p>
        <p>Email: <strong><a href="mailto:yogeshparihar2105@gmail.com" className="text-primary hover:underline">yogeshparihar2105@gmail.com</a></strong></p> 
      </div>
    </div>
  )
}

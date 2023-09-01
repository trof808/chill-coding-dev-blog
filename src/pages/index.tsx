import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
    return <main className="h-screen flex items-center justify-center">
        <Link to="/krd-beer-conf" className="underline text-[#395B64] font-bold">KRD.DEV Beer Meetup #1</Link>
    </main>
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

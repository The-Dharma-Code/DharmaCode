import Link from "next/link"
import { Film } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Film className="h-6 w-6" />
            <span className="font-bold">FilmFund</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            The creative fundraising platform for independent filmmakers.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6">
          <nav className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
              Projects
            </Link>
            <Link href="/for-filmmakers" className="text-sm text-muted-foreground hover:underline">
              For Filmmakers
            </Link>
            <Link href="/for-investors" className="text-sm text-muted-foreground hover:underline">
              For Investors
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:underline">
              About
            </Link>
          </nav>
          <nav className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="container mt-6 flex justify-center md:justify-end">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} FilmFund. All rights reserved.</p>
      </div>
    </footer>
  )
}


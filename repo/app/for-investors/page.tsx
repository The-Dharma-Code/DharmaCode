import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart3, DollarSign, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ForInvestorsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">For Investors</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Discover promising film projects and invest in the next generation of filmmakers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold">Why Invest in Film?</h2>
            <p className="mt-4 text-muted-foreground">
              Film investment offers a unique opportunity to diversify your portfolio while supporting creative projects
              with cultural impact. Independent films can provide both financial returns and the satisfaction of helping
              bring important stories to life.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our platform connects you directly with filmmakers, providing transparency and detailed information to
              help you make informed investment decisions.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?text=Investors+reviewing+film+project+materials"
              alt="Film investment"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Investment Options</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Equity Investment</h3>
                  <p className="text-muted-foreground">
                    Invest in film projects in exchange for a share of the profits and potential returns from
                    distribution and sales.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Revenue Sharing</h3>
                  <p className="text-muted-foreground">
                    Participate in revenue-sharing agreements that provide returns based on the film's performance
                    across various distribution channels.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Portfolio Approach</h3>
                  <p className="text-muted-foreground">
                    Spread your investment across multiple film projects to balance risk and increase potential for
                    returns.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg md:order-last">
            <Image
              src="/placeholder.svg?text=Investor+dashboard+with+film+project+analytics"
              alt="Investment dashboard"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">How It Works</h2>
            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Browse Projects</h3>
                  <p className="text-muted-foreground">
                    Explore our curated selection of film projects seeking investment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Due Diligence</h3>
                  <p className="text-muted-foreground">
                    Review detailed project information, team credentials, budget breakdowns, and market analysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Invest</h3>
                  <p className="text-muted-foreground">
                    Choose your investment amount and complete the secure transaction process.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Track & Receive Returns</h3>
                  <p className="text-muted-foreground">
                    Monitor project progress and receive returns based on your investment agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-8 text-center">
          <h2 className="text-2xl font-bold">Ready to Invest in Film?</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Join our community of film investors and discover promising projects from talented filmmakers.
          </p>
          <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
            <Link href="/projects">
              <Button size="lg">
                Browse Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" size="lg">
                Create Investor Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


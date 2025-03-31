import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Film, Lightbulb, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ForFilmmakersPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">For Filmmakers</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Fund your film project and connect with a community of supporters and investors.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold">Why Choose FilmFund?</h2>
            <p className="mt-4 text-muted-foreground">
              FilmFund is designed specifically for filmmakers, offering multiple funding options tailored to the unique
              needs of film production. Our platform helps you showcase your creative vision and connect with the right
              backers.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you're making a short film, documentary, or feature, we provide the tools and resources to help
              you bring your project to life.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?text=Director+and+crew+filming+on+location"
              alt="Filmmakers on set"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Funding Options</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Crowdfunding</h3>
                  <p className="text-muted-foreground">
                    Raise funds from a large number of supporters with tiered rewards and perks for different
                    contribution levels.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Film className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Equity Investment</h3>
                  <p className="text-muted-foreground">
                    Connect with film investors looking to back promising projects in exchange for a share of the
                    profits.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Hybrid Funding</h3>
                  <p className="text-muted-foreground">
                    Combine different funding models to maximize your project's financial support and audience
                    engagement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg md:order-last">
            <Image
              src="/placeholder.svg?text=Filmmaker+reviewing+project+dashboard"
              alt="Filmmaker dashboard"
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
                  <h3 className="font-semibold">Create Your Project</h3>
                  <p className="text-muted-foreground">
                    Build a compelling project page with videos, images, and details about your film vision.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Choose Your Funding Model</h3>
                  <p className="text-muted-foreground">
                    Select the funding approach that best suits your project's needs and goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Launch Your Campaign</h3>
                  <p className="text-muted-foreground">
                    Publish your project and use our tools to promote it to potential backers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Fund Your Film</h3>
                  <p className="text-muted-foreground">
                    Receive funds, keep backers updated, and bring your creative vision to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-8 text-center">
          <h2 className="text-2xl font-bold">Ready to Fund Your Film?</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Join our community of filmmakers and connect with the funding you need to tell your story.
          </p>
          <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
            <Link href="/create-project">
              <Button size="lg">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Film, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Fund Your Film Vision
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Connect with investors, donors, and supporters to bring your film projects to life through our
                  dedicated fundraising platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button className="bg-primary hover:bg-primary/90">
                    Discover Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/create-project">
                  <Button
                    variant="outline"
                    className="bg-black text-white border-black hover:bg-black/90 hover:text-white"
                  >
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <Image
                src="/placeholder.svg?text=Film+crew+on+set+with+camera+equipment"
                alt="Filmmakers on set"
                width={500}
                height={500}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover innovative film projects seeking funding from creators around the world.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="group">
                <div className="overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent/50">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover transition-transform group-hover:scale-105"
                      fill
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-white">{project.category}</span>
                        <span className="rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          {Math.round((project.funded / project.goal) * 100)}% Funded
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold tracking-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{project.description}</p>
                    <div className="mt-4">
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${Math.min(100, Math.round((project.funded / project.goal) * 100))}%` }}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="font-medium">${project.funded.toLocaleString()}</span>
                        <span className="text-muted-foreground">Goal: ${project.goal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="outline" className="mt-4">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform connects filmmakers with the funding they need through multiple channels.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Film className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Create Your Project</h3>
              <p className="text-center text-muted-foreground">
                Build a compelling project page with videos, images, and details about your film vision.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Connect with Backers</h3>
              <p className="text-center text-muted-foreground">
                Reach investors, donors, and sponsors interested in supporting independent film.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fund Your Film</h3>
              <p className="text-center text-muted-foreground">
                Choose from multiple funding models including crowdfunding, equity investment, and sponsorships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Films that went from concept to screen with our platform.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <div className="rounded-lg border bg-background p-6">
              <div className="flex items-start space-x-4">
                <Image
                  src="/placeholder.svg?text=Female+film+director+portrait"
                  alt="Director portrait"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">The Last Light</h3>
                  <p className="text-sm text-muted-foreground">Directed by Sarah Chen</p>
                  <p className="mt-2">
                    "We raised $120,000 through a combination of crowdfunding and equity investment. Our film went on to
                    win at three film festivals."
                  </p>
                  <div className="mt-4 flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Raised 120% of goal</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <div className="flex items-start space-x-4">
                <Image
                  src="/placeholder.svg?text=Male+film+director+portrait"
                  alt="Director portrait"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">Echoes of Tomorrow</h3>
                  <p className="text-sm text-muted-foreground">Directed by Marcus Johnson</p>
                  <p className="mt-2">
                    "Our sci-fi short film secured sponsorship from tech companies and individual backers, totaling
                    $85,000 in just 30 days."
                  </p>
                  <div className="mt-4 flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Completed in 30 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Fund Your Film?</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community of filmmakers and backers to bring creative visions to life.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/create-project">
                <Button className="bg-primary hover:bg-primary/90">Start Your Project</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data for featured projects
const featuredProjects = [
  {
    id: "1",
    title: "The Silent Echo",
    description:
      "A psychological thriller exploring the boundaries between reality and perception through the story of a sound designer who begins hearing mysterious echoes.",
    image: "/placeholder.svg?text=Sound+designer+with+headphones+in+dark+studio",
    category: "Thriller",
    funded: 85000,
    goal: 100000,
  },
  {
    id: "2",
    title: "Bloom: A Nature Documentary",
    description:
      "An immersive documentary capturing the rarely-seen blooming cycles of endangered plant species across five continents.",
    image: "/placeholder.svg?text=Timelapse+of+exotic+flower+blooming",
    category: "Documentary",
    funded: 32000,
    goal: 50000,
  },
  {
    id: "3",
    title: "The Last Lighthouse",
    description:
      "A coming-of-age drama set in a coastal town where the last manually operated lighthouse becomes the backdrop for an unlikely friendship.",
    image: "/placeholder.svg?text=Coastal+lighthouse+at+sunset",
    category: "Drama",
    funded: 120000,
    goal: 90000,
  },
]


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Film, Heart, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About FilmFund</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Connecting filmmakers with the resources they need to bring their creative visions to life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              FilmFund was created with a simple mission: to democratize film financing and make it possible for
              talented filmmakers to find the resources they need to tell their stories.
            </p>
            <p className="mt-4 text-muted-foreground">
              We believe that great stories deserve to be told, regardless of a filmmaker's access to traditional
              funding sources. By connecting creators directly with audiences and investors who believe in their vision,
              we're building a more diverse and vibrant film ecosystem.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?text=Diverse+group+of+filmmakers+collaborating"
              alt="Filmmakers on set"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg md:order-last">
            <Image
              src="/placeholder.svg?text=Film+screening+with+audience"
              alt="Film screening"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2023 by a team of filmmakers and tech entrepreneurs, FilmFund was born out of frustration with
              the traditional film financing model. After struggling to secure funding for their own projects, our
              founders recognized the need for a platform that could connect passionate creators with equally passionate
              supporters.
            </p>
            <p className="mt-4 text-muted-foreground"></p>
          </div>
        </div>

        <div className="py-12">
          <h2 className="text-2xl font-bold text-center mb-8">What Makes Us Different</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Film className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Film-Specific Platform</h3>
                  <p className="text-muted-foreground">
                    Unlike general crowdfunding platforms, we're built specifically for film projects, with features
                    tailored to the unique needs of filmmakers.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Multiple Funding Models</h3>
                  <p className="text-muted-foreground">
                    We offer various funding options including traditional crowdfunding, equity investment, and
                    sponsorship opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Community Support</h3>
                  <p className="text-muted-foreground">
                    Beyond funding, we provide resources, mentorship, and a supportive community to help filmmakers
                    succeed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground mb-8">
            We're a diverse team of filmmakers, technologists, and industry professionals passionate about independent
            film.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  <Image src={member.avatar || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-muted p-8 text-center">
          <h2 className="text-2xl font-bold">Join Our Community</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Whether you're a filmmaker looking to fund your next project or a film enthusiast wanting to support
            independent cinema, there's a place for you in our community.
          </p>
          <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
            <Link href="/signup">
              <Button size="lg">
                <Zap className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const teamMembers = [
  {
    name: "Max Song",
    role: "Technology & Cofounder",
    avatar: "/placeholder.svg?text=Max+Song+headshot",
  },
  {
    name: "Christina Song",
    role: "Strategy and Partnerships",
    avatar: "/placeholder.svg?text=Christina+Song+headshot",
  },
  {
    name: "Tandin Sonam",
    role: "Director & Cofounder",
    avatar: "/placeholder.svg?text=Tandin+Sonam+headshot",
  },
]


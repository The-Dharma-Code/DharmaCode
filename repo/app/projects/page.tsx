import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Film, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Discover Projects</h1>
            <p className="text-muted-foreground">Find and support film projects that inspire you.</p>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/create-project">
              <Button>
                <Film className="mr-2 h-4 w-4" />
                Start a Project
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col space-y-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search projects..." className="w-full pl-8" />
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="narrative">Narrative</SelectItem>
                  <SelectItem value="documentary">Documentary</SelectItem>
                  <SelectItem value="animation">Animation</SelectItem>
                  <SelectItem value="experimental">Experimental</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="trending">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="ending-soon">Ending Soon</SelectItem>
                  <SelectItem value="most-funded">Most Funded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="ending">Ending Soon</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="trending" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.trending)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="new" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.isNew)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="ending" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.endingSoon)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  funded: number
  goal: number
  daysLeft: number
  trending?: boolean
  isNew?: boolean
  endingSoon?: boolean
}

function ProjectCard({ project }: { project: Project }) {
  const percentFunded = Math.round((project.funded / project.goal) * 100)

  return (
    <Link href={`/projects/${project.id}`} className="group">
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
                {percentFunded}% Funded
              </span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold tracking-tight">{project.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{project.description}</p>
          <div className="mt-4">
            <div className="h-2 w-full rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(100, percentFunded)}%` }} />
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="font-medium">${project.funded.toLocaleString()}</span>
              <span className="text-muted-foreground">Goal: ${project.goal.toLocaleString()}</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{project.daysLeft} days left</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

// Sample data for projects
const projects: Project[] = [
  {
    id: "1",
    title: "The Silent Echo",
    description:
      "A psychological thriller exploring the boundaries between reality and perception through the story of a sound designer who begins hearing mysterious echoes.",
    image: "/placeholder.svg?text=Sound+designer+with+headphones+in+dark+studio",
    category: "Thriller",
    funded: 85000,
    goal: 100000,
    daysLeft: 15,
    trending: true,
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
    daysLeft: 22,
    isNew: true,
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
    daysLeft: 5,
    endingSoon: true,
    trending: true,
  },
  {
    id: "4",
    title: "Whispers in the Code",
    description:
      "A tech-noir thriller about a programmer who discovers a hidden message in the code of a popular app that leads to a global conspiracy.",
    image: "/placeholder.svg?text=Programmer+in+dark+room+with+code+on+screens",
    category: "Sci-Fi",
    funded: 65000,
    goal: 80000,
    daysLeft: 18,
    trending: true,
  },
  {
    id: "5",
    title: "Dance of the Forgotten",
    description:
      "A documentary following elderly dancers who reunite for one final performance to celebrate their cultural heritage.",
    image: "/placeholder.svg?text=Elderly+dancers+in+rehearsal+studio",
    category: "Documentary",
    funded: 28000,
    goal: 40000,
    daysLeft: 12,
    isNew: true,
  },
  {
    id: "6",
    title: "Neon Dreams",
    description:
      "An animated feature set in a futuristic city where dreams are broadcast as neon light shows, and one dreamer discovers they can manipulate reality.",
    image: "/placeholder.svg?text=Futuristic+neon+city+skyline+at+night",
    category: "Animation",
    funded: 110000,
    goal: 150000,
    daysLeft: 30,
    isNew: true,
  },
  {
    id: "7",
    title: "The Botanist's Journey",
    description:
      "A historical drama about a 19th century female botanist who disguises herself as a man to join a prestigious expedition.",
    image: "/placeholder.svg?text=19th+century+botanist+examining+plants+in+forest",
    category: "Historical",
    funded: 95000,
    goal: 120000,
    daysLeft: 8,
    endingSoon: true,
  },
  {
    id: "8",
    title: "Soundscapes",
    description:
      "An experimental film exploring how sound shapes our perception of environments, featuring immersive audio design.",
    image: "/placeholder.svg?text=Sound+waves+visualized+in+colorful+patterns",
    category: "Experimental",
    funded: 15000,
    goal: 25000,
    daysLeft: 25,
    isNew: true,
  },
  {
    id: "9",
    title: "The Last Frame",
    description:
      "A mystery set in the world of analog photography where the final photograph from a renowned photographer holds the key to their disappearance.",
    image: "/placeholder.svg?text=Vintage+camera+and+film+negatives+on+dark+table",
    category: "Mystery",
    funded: 42000,
    goal: 60000,
    daysLeft: 3,
    endingSoon: true,
  },
]


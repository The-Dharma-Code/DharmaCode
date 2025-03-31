import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, Film, Heart, Share2, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the project data based on the ID
  const project = projects.find((p) => p.id === params.id) || projects[0]
  const percentFunded = Math.round((project.funded / project.goal) * 100)

  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="object-cover"
              fill
              priority
            />
          </div>

          <div className="mt-8">
            <Tabs defaultValue="story">
              <TabsList className="mb-4">
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="backers">Backers</TabsTrigger>
              </TabsList>
              <TabsContent value="story" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">About This Project</h2>
                  <div className="mt-4 space-y-4">
                    <p>{project.fullDescription}</p>
                    <h3 className="text-xl font-semibold">The Vision</h3>
                    <p>{project.vision}</p>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?text=Behind+the+scenes+of+film+production"
                        alt="Project concept art"
                        className="object-cover"
                        fill
                      />
                    </div>
                    <h3 className="text-xl font-semibold">The Plan</h3>
                    <p>{project.plan}</p>
                    <h3 className="text-xl font-semibold">Budget Breakdown</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.budget.map((item, index) => (
                        <li key={index}>
                          <span className="font-medium">{item.category}:</span> ${item.amount.toLocaleString()} -{" "}
                          {item.description}
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-semibold">Timeline</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.timeline.map((item, index) => (
                        <li key={index}>
                          <span className="font-medium">{item.phase}:</span> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="updates" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Project Updates</h2>
                  <div className="mt-4 space-y-8">
                    {project.updates.map((update, index) => (
                      <div key={index} className="border-b pb-6 last:border-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{update.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{update.title}</h3>
                        <p className="mt-2">{update.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="team" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Meet the Team</h2>
                  <div className="mt-4 grid gap-6 sm:grid-cols-2">
                    {project.team.map((member, index) => (
                      <div key={index} className="flex items-start space-x-4 rounded-lg border p-4">
                        <Image
                          src={member.avatar || "/placeholder.svg?text=Film+crew+member+headshot"}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                          <p className="mt-2 text-sm">{member.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="backers" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Project Backers</h2>
                  <div className="mt-4 space-y-4">
                    <p>Join these {project.backerCount} backers in supporting this project!</p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {project.topBackers.map((backer, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={backer.avatar || "/placeholder.svg?text=Backer+profile+photo"}
                              alt={backer.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div>
                              <p className="font-medium">{backer.name}</p>
                              <p className="text-xs text-muted-foreground">
                                Backed {backer.projectsSupported} projects
                              </p>
                            </div>
                          </div>
                          {backer.comment && <p className="mt-2 text-sm italic">"{backer.comment}"</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <p className="mt-2 text-muted-foreground">{project.description}</p>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${project.funded.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground">of ${project.goal.toLocaleString()} goal</span>
                </div>
                <Progress value={percentFunded} className="mt-2 h-2" />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{project.backerCount}</p>
                    <p className="text-xs text-muted-foreground">Backers</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{project.daysLeft}</p>
                    <p className="text-xs text-muted-foreground">Days left</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Film className="h-4 w-4" />
                <span>{project.category}</span>
              </div>

              <div className="pt-4">
                <Button className="w-full">Back this project</Button>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="icon" className="flex-1">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                  <Button variant="outline" size="icon" className="flex-1">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">Funding Options</h3>
            <div className="mt-4 space-y-4">
              {project.rewards.map((reward, index) => (
                <div key={index} className="rounded-lg border p-4 transition-colors hover:bg-accent/50">
                  <div className="flex justify-between">
                    <h4 className="font-medium">{reward.title}</h4>
                    <span className="font-bold">${reward.amount}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{reward.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="h-3 w-3" />
                    <span>{reward.backers} backers</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">Project Creator</h3>
            <div className="mt-4 flex items-center space-x-4">
              <Image
                src={project.creator.avatar || "/placeholder.svg?text=Film+director+headshot"}
                alt={project.creator.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{project.creator.name}</p>
                <p className="text-sm text-muted-foreground">{project.creator.projectsCreated} projects created</p>
                <Link href={`/profile/${project.creator.id}`} className="mt-2 text-sm text-primary hover:underline">
                  View profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample detailed project data
const projects = [
  {
    id: "1",
    title: "The Silent Echo",
    description:
      "A psychological thriller exploring the boundaries between reality and perception through the story of a sound designer who begins hearing mysterious echoes.",
    fullDescription:
      "The Silent Echo is a feature-length psychological thriller that follows Maya, a talented sound designer who begins to hear mysterious echoes while working on her latest film project. As the echoes become more frequent and disturbing, Maya struggles to determine whether they're real or manifestations of her deteriorating mental state. Set against the backdrop of an isolated post-production studio, the film explores themes of artistic obsession, perception versus reality, and the psychological toll of creative work.",
    vision:
      "Our vision is to create a tense, immersive thriller that uses sound design not just as a technical element but as a narrative device. The film will blur the lines between what the audience hears and what the protagonist experiences, creating a unique sensory experience that puts viewers directly into Maya's increasingly unstable mindset.",
    plan: "We plan to shoot The Silent Echo over 25 days in and around an actual sound studio, with additional location shooting in urban and natural environments to capture the contrast between Maya's professional and personal worlds. Post-production will be extensive, with particular attention to the sound design that is central to the story.",
    image: "/placeholder.svg?text=Sound+designer+with+headphones+in+dark+studio",
    category: "Thriller",
    funded: 85000,
    goal: 100000,
    daysLeft: 15,
    backerCount: 342,
    trending: true,
    budget: [
      {
        category: "Production",
        amount: 45000,
        description: "Crew, equipment rental, location fees, and production design",
      },
      { category: "Cast", amount: 25000, description: "Principal actors and supporting cast" },
      {
        category: "Post-Production",
        amount: 20000,
        description: "Editing, sound design, color grading, and visual effects",
      },
      {
        category: "Marketing",
        amount: 10000,
        description: "Festival submissions, promotional materials, and premiere events",
      },
    ],
    timeline: [
      {
        phase: "Pre-production",
        description: "3 months - Script finalization, casting, location scouting, and crew assembly",
      },
      { phase: "Production", description: "1 month - Principal photography" },
      { phase: "Post-production", description: "4 months - Editing, sound design, visual effects, and color grading" },
      { phase: "Distribution", description: "6 months - Festival circuit, seeking distribution, and release" },
    ],
    updates: [
      {
        date: "June 15, 2023",
        title: "Script Finalized and Location Scouting Begins",
        content:
          "We're excited to announce that the final draft of the script is complete! After six months of development and feedback from our script consultants, we've crafted a story that we believe will keep audiences on the edge of their seats. Our location scout has begun searching for the perfect sound studio to serve as our main setting.",
      },
      {
        date: "July 28, 2023",
        title: "Casting News and Production Schedule",
        content:
          "We're thrilled to share that award-winning actress Eliza Chen has signed on to play our protagonist, Maya! Eliza's incredible range and intensity make her perfect for this challenging role. We've also finalized our production schedule, with filming set to begin in October.",
      },
    ],
    team: [
      {
        name: "Alex Rivera",
        role: "Director/Writer",
        bio: "Alex is an award-winning filmmaker whose short films have screened at Sundance and SXSW. The Silent Echo is his feature directorial debut.",
        avatar: "/placeholder.svg?text=Male+director+with+camera",
      },
      {
        name: "Samantha Wu",
        role: "Producer",
        bio: "Samantha has produced three independent features, including the critically acclaimed 'Midnight Whispers' which was acquired by A24.",
        avatar: "/placeholder.svg?text=Female+film+producer+portrait",
      },
      {
        name: "Marcus Johnson",
        role: "Cinematographer",
        bio: "Marcus is known for his atmospheric visual style and has shot music videos for major artists as well as commercials for leading brands.",
        avatar: "/placeholder.svg?text=Cinematographer+with+camera+equipment",
      },
      {
        name: "Leila Patel",
        role: "Sound Designer",
        bio: "Leila has worked on over 20 feature films and specializes in creating immersive sonic landscapes that enhance storytelling.",
        avatar: "/placeholder.svg?text=Sound+designer+at+mixing+console",
      },
    ],
    topBackers: [
      {
        name: "Thomas Wright",
        avatar: "/placeholder.svg?text=Male+backer+portrait",
        projectsSupported: 17,
        comment: "The concept sounds fascinating. Can't wait to see how the sound design enhances the storytelling.",
      },
      {
        name: "Elena Diaz",
        avatar: "/placeholder.svg?text=Female+backer+portrait",
        projectsSupported: 8,
        comment: "I've followed Alex's short films for years. So excited for this feature!",
      },
      {
        name: "James Kim",
        avatar: "/placeholder.svg?text=Male+backer+portrait+2",
        projectsSupported: 23,
      },
    ],
    rewards: [
      {
        title: "Early Digital Access",
        amount: 25,
        description: "Digital download of the film before public release, plus exclusive behind-the-scenes content.",
        backers: 156,
      },
      {
        title: "Soundtrack Package",
        amount: 50,
        description:
          "Everything in the previous tier plus the digital soundtrack and a virtual Q&A with the sound design team.",
        backers: 89,
      },
      {
        title: "Producer Credit",
        amount: 250,
        description:
          "Special thanks credit in the film, plus all previous rewards and an invitation to the virtual premiere.",
        backers: 42,
      },
      {
        title: "Executive Producer Package",
        amount: 1000,
        description:
          "Executive Producer credit, signed poster, physical copy of the soundtrack, and all previous rewards.",
        backers: 12,
      },
    ],
    creator: {
      id: "creator1",
      name: "Alex Rivera",
      avatar: "/placeholder.svg?text=Male+director+with+camera",
      projectsCreated: 3,
    },
  },
]


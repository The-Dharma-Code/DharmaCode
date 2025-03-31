"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Film, Upload } from "lucide-react"
import { useState } from "react"

export default function CreateProjectPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Your Film Project</h1>
          <p className="text-muted-foreground">Share your vision and connect with potential backers.</p>
        </div>

        <div className="flex items-center justify-between py-4">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                  currentStep > index + 1
                    ? "bg-primary text-primary-foreground"
                    : currentStep === index + 1
                      ? "border-2 border-primary bg-background text-foreground"
                      : "border bg-muted text-muted-foreground"
                }`}
              >
                {index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`h-1 w-12 sm:w-24 md:w-32 lg:w-40 ${currentStep > index + 1 ? "bg-primary" : "bg-muted"}`}
                />
              )}
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Project Basics"}
              {currentStep === 2 && "Project Details"}
              {currentStep === 3 && "Funding Goals"}
              {currentStep === 4 && "Review & Submit"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Tell us about your film project."}
              {currentStep === 2 && "Add more details about your project vision and plan."}
              {currentStep === 3 && "Set your funding goals and rewards."}
              {currentStep === 4 && "Review your project before submitting."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Project Title</Label>
                  <Input id="title" placeholder="Enter your project title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="narrative">Narrative Film</SelectItem>
                      <SelectItem value="documentary">Documentary</SelectItem>
                      <SelectItem value="animation">Animation</SelectItem>
                      <SelectItem value="experimental">Experimental</SelectItem>
                      <SelectItem value="music-video">Music Video</SelectItem>
                      <SelectItem value="web-series">Web Series</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="short-description">Short Description</Label>
                  <Textarea
                    id="short-description"
                    placeholder="Provide a brief description of your project (100-150 words)"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Project Thumbnail</Label>
                  <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-12">
                    <div className="flex flex-col items-center space-y-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Drag and drop or click to upload</p>
                      <p className="text-xs text-muted-foreground">Recommended size: 1280x720px</p>
                      <Button variant="outline" size="sm">
                        Select File
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="full-description">Full Description</Label>
                  <Textarea
                    id="full-description"
                    placeholder="Provide a detailed description of your project"
                    rows={6}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vision">Project Vision</Label>
                  <Textarea id="vision" placeholder="What is your creative vision for this film?" rows={4} />
                </div>
                <div className="space-y-2">
                  <Label>Project Media</Label>
                  <Tabs defaultValue="video">
                    <TabsList className="mb-4">
                      <TabsTrigger value="video">Video</TabsTrigger>
                      <TabsTrigger value="images">Images</TabsTrigger>
                    </TabsList>
                    <TabsContent value="video">
                      <div className="space-y-2">
                        <Label htmlFor="video-url">Video URL (YouTube or Vimeo)</Label>
                        <Input id="video-url" placeholder="https://" />
                        <p className="text-xs text-muted-foreground">
                          Add a pitch video or trailer to showcase your project
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="images">
                      <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-12">
                        <div className="flex flex-col items-center space-y-2">
                          <Upload className="h-8 w-8 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Upload project images (up to 5)</p>
                          <Button variant="outline" size="sm">
                            Select Files
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="team">Team Members</Label>
                  <Textarea id="team" placeholder="List your key team members and their roles" rows={4} />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="funding-goal">Funding Goal ($)</Label>
                  <Input id="funding-goal" type="number" placeholder="Enter your funding goal" />
                  <p className="text-xs text-muted-foreground">Set a realistic goal based on your project budget</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="funding-duration">Campaign Duration</Label>
                  <Select>
                    <SelectTrigger id="funding-duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="45">45 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget-breakdown">Budget Breakdown</Label>
                  <Textarea
                    id="budget-breakdown"
                    placeholder="Provide a breakdown of how the funds will be used"
                    rows={4}
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Reward Tiers</Label>
                    <Button variant="outline" size="sm">
                      Add Tier
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="reward-title-1">Reward Title</Label>
                          <Input id="reward-amount-1" type="number" placeholder="Amount" className="w-24" />
                        </div>
                        <Input id="reward-title-1" placeholder="e.g., Early Digital Access" />
                        <Textarea id="reward-description-1" placeholder="Describe what backers will receive" rows={2} />
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="reward-title-2">Reward Title</Label>
                          <Input id="reward-amount-2" type="number" placeholder="Amount" className="w-24" />
                        </div>
                        <Input id="reward-title-2" placeholder="e.g., Producer Credit" />
                        <Textarea id="reward-description-2" placeholder="Describe what backers will receive" rows={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Project Summary</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Title:</span>
                      <span>The Silent Echo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span>Thriller</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Funding Goal:</span>
                      <span>$100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>30 days</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Project Description</h3>
                  <p className="mt-2 text-sm">
                    A psychological thriller exploring the boundaries between reality and perception through the story
                    of a sound designer who begins hearing mysterious echoes.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Reward Tiers</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Early Digital Access</span>
                      <span>$25</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Producer Credit</span>
                      <span>$250</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="terms">Terms and Conditions</Label>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the terms and conditions and confirm that I have the rights to all content submitted.
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {currentStep > 1 ? (
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              {currentStep < totalSteps ? (
                <Button onClick={nextStep}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button>
                  <Film className="mr-2 h-4 w-4" />
                  Submit Project
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


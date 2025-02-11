import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { features, testimonials } from '@/lib/data/landing'
import { Check, ChevronRight, Quote, Rocket, TestTube2, Zap } from 'lucide-react'
import { ModeToggle } from './components/mode-toggle'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DesignForge</span>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="ghost">Login</Button>
            <Button className="hidden md:flex">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Create Stunning Websites
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}Without Code
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            Transform your ideas into professional web experiences using AI-powered design tools.
            Perfect for marketers, entrepreneurs, and creative teams.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">Start Building Free</Button>
            <Button variant="outline" size="lg" className="gap-2">
              See Demo <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <h2 className="mb-16 text-center text-4xl font-bold">Why Choose DesignForge?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="p-8 transition-all hover:shadow-lg">
                <feature.icon className="mb-6 h-12 w-12 text-purple-600" />
                <h3 className="mb-4 text-2xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="mt-6 flex items-center gap-2 text-purple-600">
                  <Check className="h-5 w-5" />
                  <span>Learn More</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-16 text-center text-4xl font-bold">What Our Users Say</h2>
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-8">
                    <Quote className="mb-4 h-8 w-8 text-muted-foreground" />
                    <p className="mb-6 text-lg italic text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-purple-600/10 to-pink-600/10 py-20">
        <div className="container text-center">
          <Card className="mx-auto max-w-2xl p-8">
            <h2 className="mb-6 text-4xl font-bold">Ready to Create Magic?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join thousands of creators already building amazing websites
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:justify-center">
              <Button size="lg" className="w-full md:w-auto">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="w-full md:w-auto">
                Schedule Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default App
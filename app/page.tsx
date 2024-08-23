import { Button } from "@/components/ui/button"

function Homepage() {
  return (
    <div>
      <h1 className="text-3xl text-muted-foreground">HomePage</h1>
      <Button variant='outline' size='lg' className="capitalize m-9">
        click me
      </Button>
    </div>
  )
}

export default Homepage

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

const Logincard = () => {
  return (
    <div>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Please login using account detail bellow.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Name of your project" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Name of your project" />
            </div>

            <p>Forgot your password?</p>

            <Button>Sign In</Button>

            <p>Don’t have an Account? <span>Create account</span></p>
            

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
 
    </div>
  )
}

export default Logincard
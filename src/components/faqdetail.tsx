import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Faqdetail = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <h1>Generel Information</h1>
                </div>
                <div>
                    <h1>Eu dictumst cum at sed euismood condimentum?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br/>
                        tristique mollis vitae, consequat gravida sagittis.</p>
                </div>
                <div>
                <h1>Magna bibendum est fermentum eros.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br/>
                        tristique mollis vitae, consequat gravida sagittis.</p>
                </div>
                <div>
                <h1>Odio muskana hak eris conseekin sceleton?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br/>
                        tristique mollis vitae, consequat gravida sagittis.</p>
                </div>
                <div>
                <h1>Elit id blandit sabara boi velit gua mara?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br/>
                        tristique mollis vitae, consequat gravida sagittis.</p>
                </div>
            </div>

            <div>
            <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Ask a Question</CardTitle>
      </CardHeader>
      <CardContent>
        <form>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Your Name" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Subject" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Type Your Message" />
            </div>


            <Button>SSend Mail</Button>
            

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
            </div>
        </div>
    </div>
  )
}

export default Faqdetail
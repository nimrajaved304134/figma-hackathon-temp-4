import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { MdWindow } from "react-icons/md";
  import { FaList } from "react-icons/fa";

const Sortby = () => {
  return (
    <div>
        <div>

            <div>
                <h1>Ecommerce Acceories & Fashion item </h1>
                <p>About 9,620 results (0.62 seconds)</p>
            </div>

            <div>
            <Label>Per Page:</Label>
            <Input placeholder='' id='number'/>
            </div>

            <div>
            <Label>SortBy:</Label>
            <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="BestMatch" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">BestMatch</SelectItem>
    <SelectItem value="dark">DiscountedPrice</SelectItem>
    <SelectItem value="system">SaleItems</SelectItem>
  </SelectContent>
</Select>
            </div>

            <div>
            <Label>view:</Label>
            <MdWindow />
            <FaList />
            <Input placeholder='' id='text'/>
            </div>
        </div>
    </div>
  )
}

export default Sortby
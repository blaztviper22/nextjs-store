'use client';
import { Checkbox } from "../ui/checkbox";

 

type CheckBoxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
}

export default function CheckBoxInput({ name, label, defaultChecked = false }: CheckBoxInputProps) {
  return (
    <div className="flex items-end space-x-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label 
        htmlFor={name} 
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
        </label>
    </div>
  )
}

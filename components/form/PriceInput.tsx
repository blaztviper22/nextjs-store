import { Input } from "../ui/input";
import { Label } from "../ui/label";

const name = 'price';
type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div className="mb-2">
      <Label htmlFor="price" className="capitalize">
        price ($)
      </Label>
      <Input 
        id={name} 
        type="number" 
        min={0} 
        name={name} 
        defaultValue={defaultValue || 0} 
        required 
      />
    </div>
  )
}

export default PriceInput

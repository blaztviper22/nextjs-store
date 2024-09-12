import SubmitButton from "@/components/form/Buttons";
import CheckBoxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createProductAction } from "@/utils/actions";
import {faker} from "@faker-js/faker";

// const createProductAction = async(formData: FormData) => {
//   'use server';
//   const name = formData.get('name') as string;
//   console.log(name);
// }

function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section className="text-2xl font-semibold mb-8 capitalize">
      <h1 className="border p-8 rounded">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-3 md:grid-cols-2 my-4">
            <FormInput 
              type="text" 
              name="name" 
              label="product name" 
              defaultValue={name} 
            />
            <FormInput 
              type="text" 
              name="company" 
              label="company" 
              defaultValue={company} 
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput 
            name="description" 
            labelText="product description" 
            defaultValue={description} 
          />
          <div className="mt-6">
            <CheckBoxInput name="featured" label="featured" />
          </div>
          <SubmitButton text="create product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  )
}

export default CreateProductPage

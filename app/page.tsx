import { Input } from "@/components/layouts/Input"

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-black grid w-full gap-6 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl m-2.5">
        <Input />
      </div>
    </div>
  )
}

export default page
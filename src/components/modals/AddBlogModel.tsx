import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";
import { useCreatenewsletterMutation } from "@/src/redux/features/blog/blogApi";
const AddBlogModal = () => {
  const [createBlog] = useCreatenewsletterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await createBlog(data).unwrap();
    if (res?.data) {
      toast.success(`${res?.message}`);
    }
  };

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <FXModal
        title="Add Newsletter"
        buttonText="Add Newsletter"
        buttonClassName="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <FXForm onSubmit={onSubmit}>
          <div className="py-1">
            <FXInput label="Name" name="name" required></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Title" name="title"></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Description" name="description" required></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Image" name="image" required></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Reading Time"
              name="readingTime"
              type="number"
              required
            ></FXInput>
          </div>
          <div className="flex justify-center pt-2 w-full pb-2">
            <Button className="w-full" type="submit">
              Update Newsletter
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default AddBlogModal;

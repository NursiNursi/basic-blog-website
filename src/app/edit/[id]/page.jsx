import UpdateForm from "@/components/UpdateForm";

const UpdateContact = ({ params }) => {
  const id = params.id;

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Post</h1>
      <UpdateForm id={id} />
    </div>
  );
};

export default UpdateContact;

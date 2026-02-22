import AddNewProject from "@/app/(dashboard)/_components/AddNewProject/AddNewProject";
import TableProject from "@/app/(dashboard)/_components/TableProject/TableProject";

const page = () => {
  return (
    <div className="p-8">
      <AddNewProject />

      <TableProject />
    </div>
  );
};

export default page;

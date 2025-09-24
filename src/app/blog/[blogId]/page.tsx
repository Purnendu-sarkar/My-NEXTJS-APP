const DynamicBlogPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  return (
    <div>
      <h1 className="text-5xl">Dynamic Blog Page blogId : {blogId}</h1>
    </div>
  );
};

export default DynamicBlogPage;

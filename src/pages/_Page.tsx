import { Helmet } from "react-helmet-async";

const Page = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default Page;

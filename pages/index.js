import HOME from "../components/home";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Peter Hanssens`]}
        title="Peter Hanssens!"
        description="Thoughts from a Sydney based Cloud Architect and Data Engineer by profession and a proud husband and father."
      />
      <section>
        <HOME />
      </section>
      </Layout>
  );
}

export default IndexPage;


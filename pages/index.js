import HOME from "../components/home";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Peter Hanssens`]}
        title="Peter Hanssens!"
      />
      <section>
        <HOME />
      </section>
      </Layout>
  );
}

export default IndexPage;


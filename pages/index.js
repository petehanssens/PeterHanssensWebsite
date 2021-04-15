import "tailwindcss/tailwind.css"
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HOME from "../components/home";
import CARDS from "../components/cards";

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


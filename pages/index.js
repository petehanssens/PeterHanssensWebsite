import "tailwindcss/tailwind.css"
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CARDS from "../components/cards";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Peter Hanssens`]}
        title="Peter Hanssens!"
      />

      <section className="text-center">

        <h2 className="inline-block p-3 mb-4 text-xl ">
          Welcome to my website
        </h2>
      </section>
    </Layout>
  );
}

export default IndexPage;


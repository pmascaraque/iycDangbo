import React from "react";
import Layout from "/components/layout/Layout";
import Hero from "/components/index/Hero";
import { client } from "/config/prismic-configuration";
import Prismic from "prismic-javascript";
import Story from "/components/index/Story";
import News from "/components/index/News";

function Index({ lastPosts }) {
  return (
    <Layout>
      <Hero />
      <Story />
      <News lastPosts={lastPosts} />
    </Layout>
  );
}

export default Index;

export const getStaticProps = async (props) => {
  let lang = "";
  if (props.locale == "es") lang = "es-es";
  else lang = "en-us";

  const lastPosts = await client.query(Prismic.Predicates.at("document.type", "entrada"), {
    lang: `${lang}`,
    pageSize: 3
  });

  return {
    props: {
      lastPosts
    }
  };
};

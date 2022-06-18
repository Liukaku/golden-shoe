import Head from "next/head";
import React from "react";
import DynamicComponent from "../components/dynamic-component";
import Storyblok, { useStoryblok } from "../lib/storyblok";

export const MensHome = ({ story, preview }: any) => {
  console.log(story);
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in preview mode
  story = useStoryblok(story, enableBridge);
  return (
    <div>
      <Head>
        <title>Mens Footwear</title>
        <meta name="description" content="The UKs favourite shoe retailer" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DynamicComponent blok={story.content} />
    </div>
  );
};

export async function getStaticProps({ params, preview = false }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft", // or "published"
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  let { data } = await Storyblok.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    if (slug === "home") splittedSlug = false;

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default MensHome;

import Head from "next/head";
import React from "react";
import DynamicComponent from "../../components/dynamic-component";
import Storyblok, { useStoryblok } from "../../lib/storyblok";

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

export async function getStaticPaths() {
  let sbParams = {
    version: "draft",
    starts_with: "category",
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
    language: "locale",
  };

  let { data } = await Storyblok.get(`cdn/links/`, sbParams);

  let paths: Array<any> = [];

  Object.keys(data.links).forEach((linkKey) => {
    const slug = data.links[linkKey].slug;

    let splittedSlug = slug.split("/");
    const spliced = splittedSlug.indexOf("category");
    if (spliced > -1) {
      splittedSlug.splice(spliced, 1);
    }
    if (splittedSlug.length > 0) {
      paths.push({ params: { slug: splittedSlug } });
    }
  });

  // paths: paths,
  // fallback: false,
  return {
    paths: paths,

    fallback: false,
  };
}

export async function getStaticProps({ preview = false, params }: any) {
  // home is the default slug for the homepage in Storyblok
  let slug = params.slug ? `category/${params.slug}` : "home";
  // load the published content outside of the preview mode
  let sbParams: any = {
    version: "draft", // or 'published'
  };

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default MensHome;

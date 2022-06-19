import Head from "next/head";
import React from "react";
import DynamicComponent from "../../components/dynamic-component";
import Storyblok, { useStoryblok } from "../../lib/storyblok";

export const AdminPage = ({ story, preview }: any) => {
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

export async function getStaticProps({ params, preview = false }: any) {
  let slug = params.slug ? params.slug.join("/") : "/";
  console.log(slug + "a");

  let sbParams: any = {
    version: "draft", // or "published"
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/admin/${slug}`, sbParams);
  console.log(data.story);

  return {
    props: {
      story: data.story ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  let { data } = await Storyblok.get("cdn/links/");

  let paths: Array<any> = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    console.log(splittedSlug);
    if (splittedSlug.includes("admin")) {
      splittedSlug.shift();
      paths.push({ params: { slug: splittedSlug } });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default AdminPage;

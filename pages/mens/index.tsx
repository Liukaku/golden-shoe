import Head from "next/head";
import React from "react";
import Storyblok, { useStoryblok } from "../../lib/storyblok";
import DynamicComponent from "../../components/dynamic-component";

export const MensHome = ({ story, preview }: any) => {
  console.log(story);
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in preview mode
  story = useStoryblok(story, enableBridge);
  const isInEditor =
    typeof window !== "undefined" && window.location !== window.parent.location;

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

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "mens";
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

import Head from "next/head";
import CTX from "../components/util/store";
import { useEffect, useState } from "react";
// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok";
import DynamicComponent from "../components/dynamic-component";
import { ContextState } from "../components/interfaces";

// eslint-disable-next-line no-unused-vars
export default function Home({ story, preview }: any) {
  const [menuContent, toggleMenu] = useState<ContextState>({
    display: false,
    option: "",
  });

  useEffect(() => {
    console.log(menuContent);

    return () => {};
  }, [menuContent]);

  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in preview mode
  story = useStoryblok(story, enableBridge);
  const isInEditor =
    typeof window !== "undefined" && window.location !== window.parent.location;

  return (
    <CTX.Provider value={[menuContent, toggleMenu]}>
      <div className="">
        <Head>
          <title>Golden Shoe</title>
          <meta name="description" content="The UKs favourite shoe retailer" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <DynamicComponent blok={story.content} />
      </div>
    </CTX.Provider>
  );
}

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
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

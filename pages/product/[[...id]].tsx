import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DynamicComponent from "../../components/dynamic-component";
import Storyblok, { useStoryblok } from "../../lib/storyblok";

const index = () => {
  const [story, updateStory] = useState<any>(null);
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    const getData = async () => {
      let preview = false;
      // home is the default slug for the homepage in Storyblok
      let slug = "product";
      // load the published content outside of the preview mode
      let sbParams: any = {
        version: "draft", // or 'published'
      };

      if (preview) {
        // load the draft version inside of the preview mode
        sbParams.version = "draft";
        sbParams.cv = Date.now();
      }

      let { data } = await Storyblok.get(`cdn/stories/product/`, sbParams);
      return data.story;
    };
    getData()
      .then((res) => {
        updateStory(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {}, [story]);
  return (
    <div>
      <Head>
        <title>Mens Footwear</title>
        <meta name="description" content="The UKs favourite shoe retailer" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {story ? <DynamicComponent blok={story.content} /> : ""}
    </div>
  );
};

export default index;

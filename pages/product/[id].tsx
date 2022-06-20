import React, { useEffect, useState } from "react";
import DynamicComponent from "../../components/dynamic-component";
import Storyblok, { useStoryblok } from "../../lib/storyblok";

const index = () => {
  console.log(Storyblok);
  const [story, updateStory] = useState<any>(null);
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
      console.log(data.story);
      return data.story;
    };
    getData().then((res) => {
      updateStory(res);
    });
  }, []);
  return <div>{story ? <DynamicComponent blok={story.content} /> : ""}</div>;
};

// export async function getStaticProps({ preview = false }) {
//   // home is the default slug for the homepage in Storyblok
//   let slug = "home";
//   // load the published content outside of the preview mode
//   let sbParams: any = {
//     version: "draft", // or 'published'
//   };

//   if (preview) {
//     // load the draft version inside of the preview mode
//     sbParams.version = "draft";
//     sbParams.cv = Date.now();
//   }

//   let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

//   return {
//     props: {
//       story: data ? data.story : null,
//       preview,
//     },
//     revalidate: 3600, // revalidate every hour
//   };
// }

export default index;

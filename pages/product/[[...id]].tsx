import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DynamicComponent from "../../components/dynamic-component";
import Storyblok, { useStoryblok } from "../../lib/storyblok";

const index = () => {
  console.log(Storyblok);
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
      console.log(data.story);
      return data.story;
    };
    getData().then((res) => {
      updateStory(res);
      const urlArr = document.URL.split("/");
      console.log(urlArr[urlArr.length - 1]);
      const productId = { productID: urlArr[urlArr.length - 1] };
      fetch(
        `http://localhost:5001/golden-shoe-aa08b/europe-west2/api/getProducts?id=${
          urlArr[urlArr.length - 1]
        }`,
        {
          method: "GET",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
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

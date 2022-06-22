import React from "react";
import Page from "./page";
import NavBar from "./navbar";
import Feature from "./feature";
import TripleFeature from "./tripleFeature";
import CallToAction from "./callToAction";
import Login from "./admin/login";
import ProductUpload from "./admin/productUpload";
import CategoryPage from "./CategoryPage";
import CustomerServices from "./CustomerServices";
import HelpBackground from "./HelpBackground";
import TextBox from "./TextBox";
import ProductDetails from "./ProductDetails";
import ShopBrands from "./ShopBrands";

// resolve Storyblok components to Next.js components
const Components = {
  page: Page,
  CallToAction: CallToAction,
  feature: Feature,
  NavBar: NavBar,
  TripleFeature: TripleFeature,
  Login: Login,
  ProductUpload: ProductUpload,
  CategoryPage: CategoryPage,
  CustomerServiceOptions: CustomerServices,
  HelpBackground: HelpBackground,
  TextBox: TextBox,
  ProductDetails: ProductDetails,
  ShopBrands: ShopBrands,
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;

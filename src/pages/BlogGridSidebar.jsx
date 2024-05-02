import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import BlogGridSidebarSection from "../components/BlogGridSidebarSection";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllBlogs,
  GetBlogsCategory,
  GetBlogsTags,
  GetRecentBlogs,
} from "../action/BlogAction";

const BlogGridSidebar = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.blogState);
  let [active, setActive] = useState(true);
  useEffect(() => {
    try {
      dispatch(GetRecentBlogs);
      dispatch(GetBlogsCategory);
      dispatch(GetBlogsTags);
      dispatch(GetAllBlogs);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "Home Page");
      setMetaData(data);
    }
  }, [allMetaData]);
  return (
    <Fragment>
      <Suspense>
        {/* Helmet */}
        {loading ? (
          <Preloader />
        ) : (
          <Suspense>
            <HelmetReact title={"Blogs"} />
            <HeaderTwo />
            <Breadcrumb data={"Blogs"} img={"url('/assets/img/bg-image/Frame 72.jpg')"} />
            <BlogGridSidebarSection />
            <NewsSectionOne />
            <FooterSectionOne />
          </Suspense>
        )}
      </Suspense>
    </Fragment>
  );
};

export default BlogGridSidebar;

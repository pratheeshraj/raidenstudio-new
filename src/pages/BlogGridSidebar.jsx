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
    dispatch(GetAllBlogs);
    dispatch(GetRecentBlogs);
    dispatch(GetBlogsCategory);
    dispatch(GetBlogsTags);
  }, []);

  return (
    <Fragment>
      <Suspense>
        {/* Helmet */}
        {loading ? (
          <Preloader />
        ) : (
          <Suspense>
            <HelmetReact title={"Blog Grid Sidebar"} />
            <HeaderTwo />
            <Breadcrumb data={"Blog Grid Sidebar"} />
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

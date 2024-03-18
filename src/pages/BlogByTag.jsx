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
  GetBlogByCategory,
  GetBlogByTag,
  GetBlogsCategory,
  GetBlogsTags,
  GetRecentBlogs,
} from "../action/BlogAction";
import BlogCategorySection from "../components/BlogCategorySection";
import { useParams } from "react-router-dom";
import BlogTagSection from "../components/BlogTagSection";

const BlogByTag = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.blogState);
  const { id } = useParams();
  let [active, setActive] = useState(true);
  useEffect(() => {
    dispatch(GetRecentBlogs);
    dispatch(GetBlogsCategory);
    dispatch(GetBlogsTags);
    dispatch(GetBlogByTag(id));
  }, [id]);
  return (
    <div>
      <Fragment>
        {loading ? (
          <Preloader />
        ) : (
          <Suspense>
            {/* Helmet */}
            <HelmetReact title={"Blog Details"} />
            {/* Header one */}
            <HeaderTwo />
            {/* Breadcrumb */}
            <Breadcrumb data={"Blog tag"} />
            {/* Blog Details */}
            <BlogTagSection />
            {/* News Section One */}
            <NewsSectionOne />
            {/* Footer Section */}
            <FooterSectionOne />
          </Suspense>
        )}
      </Fragment>
    </div>
  );
};

export default BlogByTag;

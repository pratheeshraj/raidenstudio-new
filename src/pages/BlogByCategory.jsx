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
  GetBlogsCategory,
  GetBlogsTags,
  GetRecentBlogs,
} from "../action/BlogAction";
import BlogCategorySection from "../components/BlogCategorySection";
import { useParams } from "react-router-dom";

const BlogByCategory = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading } = useSelector((state) => state.blogState);

  let [active, setActive] = useState(true);
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "Home Page");
      setMetaData(data);
    }
  }, [allMetaData]);
  useEffect(() => {
    dispatch(GetBlogByCategory(id));
  }, [id]);

  useEffect(() => {
    try {
      dispatch(GetRecentBlogs);
      dispatch(GetBlogsCategory);
      dispatch(GetBlogsTags);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Preloader />
      ) : (
        <Suspense>
          {/* Helmet */}
          <HelmetReact title={"Blog Grid Sidebar"} />
          {/* Header one */}
          <HeaderTwo />
          {/* Breadcrumb */}
          <Breadcrumb data={"Blog Grid Sidebar"} />
          {/* Blog Grid Sidebar*/}
          <BlogCategorySection />
          {/* News Section One */}
          <NewsSectionOne />
          {/* Footer Section */}
          <FooterSectionOne />
        </Suspense>
      )}
    </Fragment>
  );
};

export default BlogByCategory;

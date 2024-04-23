import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterSectionOne from "../components/FooterSectionOne";
import Breadcrumb from "../components/Breadcrumb";
import BlogDetailsSection from "../components/BlogDetailsSection";
import NewsSectionOne from "../components/NewsSectionOne";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import { GetBlogDetails, GetBlogsCategory, GetBlogsTags, GetRecentBlogs } from "../action/BlogAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  let [active, setActive] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading ,BlogDetails} = useSelector((state) => state.blogState);
  useEffect(() => {
    dispatch(GetRecentBlogs);
    dispatch(GetBlogsCategory);
    dispatch(GetBlogsTags);
    dispatch(GetBlogDetails(id));
  }, [id]);
  return (
    <Fragment>
      {loading ? (
        <Preloader />
      ) : (
        <Suspense>
          {/* Helmet */}
          <HelmetReact
          title={
            BlogDetails?.meta_title
          }
          description={
           BlogDetails?.meta_description
          }
          keywords={
            BlogDetails?.meta_keywords
          }
          ogimage={BlogDetails?.imageurl}
        />
          {/* Header one */}
          <HeaderTwo />
          {/* Breadcrumb */}
          <Breadcrumb data={"Blog Details"} />
          {/* Blog Details */}
          <BlogDetailsSection />
          {/* News Section One */}
          <NewsSectionOne />
          {/* Footer Section */}
          <FooterSectionOne />
        </Suspense>
      )}
    </Fragment>
  );
};

export default BlogDetails;

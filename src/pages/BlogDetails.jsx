import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterSectionOne from "../components/FooterSectionOne";
import Breadcrumb from "../components/Breadcrumb";
import BlogDetailsSection from "../components/BlogDetailsSection";
import NewsSectionOne from "../components/NewsSectionOne";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import { GetBlogDetails } from "../action/BlogAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  let [active, setActive] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.blogState);
  useEffect(() => {
    dispatch(GetBlogDetails(id));
  }, [id]);
  return (
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

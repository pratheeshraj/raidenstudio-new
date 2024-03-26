import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetAllJobs, GetSingleJobs } from "../action/JobActions";

const CareerJobSection = () => {

  const { allJobPost, loading } = useSelector((state) => state.jobState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetAllJobs);
  }, [])

  return (
    <section>
      <div className="container-fluid careersection">
        <h2>Current Openings</h2>
        <div className="container careersection_container">
          {/* <div className="careersection_card">
            <h6 className="left">Middle+ IT Copywriter</h6>
            <div className="right">
              <p> Sales & marketing</p>
              <button className="default-btn">Read More</button>
            </div>
          </div> */}
          {
            allJobPost?.map((data, index) => {
              return (
                <div className="careersection_card">
                  <h6 className="left">{data.category}</h6>
                  <p> Sales & marketing</p>
                  <div className="right">
                    <p> Sales & marketing</p>
                    <Link to={`/career-details/${data._id}`} className="default-btn">Read More</Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default CareerJobSection;

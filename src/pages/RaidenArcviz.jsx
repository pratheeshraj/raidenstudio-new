import React, { Fragment, Suspense } from 'react'
import HelmetReact from '../elements/HelmetReact'
import HeaderTwo from '../components/HeaderTwo'
import ProjectDetailsSection from '../components/ProjectDetailsSection'
import ProductDemokit from '../components/ProductDemokit'
import BlogSectionOne from '../components/BlogSectionOne'
import ProjectDetailUseCase from '../components/ProjectDetailUseCase'
import NewsSectionOne from '../components/NewsSectionOne'
import FooterSectionOne from '../components/FooterSectionOne'
import vidio from "../images/viedio.mp4"
import RaidenArcvizComponent from '../components/RaidenArcvizComponent'

const RaidenArcviz = () => {
    return (
        <Fragment>
            <Suspense>

                {/* Helmet */}
                <HelmetReact title={"Project Details"} />
                {/* Header one */}
                <HeaderTwo />
                <RaidenArcvizComponent vidio={vidio} />
                {/* <BlogSectionOne /> */}
                {/* News Section One */}
                <NewsSectionOne />
                {/* Footer Section */}
                <FooterSectionOne />
            </Suspense>
        </Fragment>
    )
}

export default RaidenArcviz

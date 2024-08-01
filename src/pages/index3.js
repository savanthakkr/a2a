import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Home3About from "../components/about/Home3About";
import Home3Article from "../components/article/Home3Article";
import Banner3 from "../components/banner/Banner3";
import Home3Category from "../components/category/Home3Category";
import Home3topCompany from "../components/company/Home3topCompany";
import Home3Feature from "../components/feature/Home3Feature";
import Home3Feedback from "../components/feedback/Home3Feedback";
import Footer from "../components/footer/Footer";
import Header3 from "../components/header/Header3";
import Home2TrustedCompany from "../components/trusted-company/Home2TrustedCompany";
import Home3WorkProcess from "../components/work-process/Home3WorkProcess";
import TrustedCompany1 from "../components/trusted-company/TrustedCompany1";
import Banner1 from "../components/banner/Banner1";
import Header1 from "../components/header/Header1";
import Category1 from "../components/category/Category1";
import Feature1 from "../components/feature/Feature1";
import WorkProcess1 from "../components/work-process/WorkProcess1";
import JobLocation1 from "../components/job-loaction/JobLocation1";
import Review1 from "../components/review/Review1";
import Article1 from "../components/article/Article1";


function Index3() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/" ? "bg-wight" : "";
  });
  return (
    <>
      <Header1 />
      <Banner1 />
      <Category1 />
      <Feature1 />
      <WorkProcess1 />
      <JobLocation1 />
      <Review1 />
      <TrustedCompany1/>
    {/*  <TopRecruiters1 />*/}
      <Article1 />
      <Footer />
    </>
  );
}

export default Index3;

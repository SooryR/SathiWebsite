import React from "react";
import "./Work.css";

function WorkPage() {
  return (
    <div className="work-page">
      <div className="work-container">
        <h2>Bonfire</h2>
        <p className="job-title">Software Development Engineer in Test (SDET)</p>
        <p className="location-date">Waterloo, ON | May 2021 - Present</p>
        <ul>
          <li>Organized QA plans and performed testing and automate multiple web application based on procurement</li>
          <li>Supervised a SDET team of 3+ co-op students across 3 teams to implement feature test cases and automation</li>
          <li>Automated regression test using cypress and cucumber with 90% coverage</li>
          <li>Made the regression test run on bitbucket pipeline nightly and produced report on the stability of the web applications</li>
          <li>Added automated accessibility testing using Cypress and AXE accessibility framework</li>
          <li>Implemented contract API test on the application using supertest, hapi lab and jest to automate 95% of the manual API test</li>
          <li>Made the contrat API test and integration test to run on bitbucket pipeline so for each push to master branch</li>
        </ul>
      </div>
      <div className="work-container">
        <h2>PetHealth</h2>
        <p className="job-title">QA Automation Analyst / Release Engineer</p>
        <p className="location-date">Oakville, ON | March 2020 - May 2021</p>
        <ul>
          <li>Worked on multiple web application that are related to pet insurance</li>
          <li>Implemented spec runner for specflow on the existing automation code to produce reports on the regressions status</li>
          <li>Made adjustments to the existing automation code to runner faster on azure vm</li>
          <li>Implemented load and capacity testing for a new project to see limits on what the server can handle</li>
          <li>Created a test plan that contains QA requirement and business requirement to separate the task between QA and UAT testers</li>
          <li>Created test plan and requirements for unit testing for internal tool</li>
          <li>Implemented the unit testing on C# for many critical class part of the DAX crm program</li>
          <li>Worked with developers to coordinate the release for each sprint using the azure pipeline and cloud service</li>
        </ul>
      </div>
      <div className="work-container">
        <h2>Entripy</h2>
        <p className="job-title">QA Engineer / Automation Developer</p>
        <p className="location-date">Toronto, ON | March 2018 - March 2020</p>
        <ul>
          <li>Worked with multiple web applications</li>
          <li>Created a regression package and sanity testing package for the web applications</li>
          <li>Automated the regression package and smoke test package with selenium, C# and specflow</li>
          <li>Find, reproduce, isolate, identify, report and tracked issues/bugs from developers and product managers</li>
          <li>Choose BDD as the method of testing to make sure that the behavior of the application is functioning well</li>
          <li>Wrote New test cases, and test plans for new features</li>
          <li>Worked with Azure to run automated test with deployment, updated stories and features per sprint and pushed finished features to production on all five web applications</li>
          <li>Used POSTman to run test with WebAPI</li>
        </ul>
      </div>
    </div>
  );
}

export {WorkPage};

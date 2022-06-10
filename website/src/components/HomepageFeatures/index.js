import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Consuming the API",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    link: "/docs/consuming-api",
    description: (
      <>
        As a developer that would like to use the Open Meal API to fetch data or
        to build an application on top of it, have a look here!
      </>
    ),
  },
  {
    title: "Making your data available",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    link: "/docs/make-your-data-available",
    description: (
      <>
        As an organisation with meal data that you would like to share through
        this API, have a look here!
      </>
    ),
  },
  {
    title: "Implementing the API",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    link: "/docs/how-to-implement",
    description: (
      <>
        As a software vendor that would like to provide an implementation of the
        API for others to use, have a look here!
      </>
    ),
  },
];

function Feature({ Svg, link, title, description }) {
  return (
    <a href={link} className={clsx("col col--4", styles.link)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

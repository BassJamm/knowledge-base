import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Documentation",
    Svg: require("@site/static/img/HomePage/books-education-knowledge-svgrepo-com.svg").default,
    description: (
      <>
        Where I brain dump everything I possibly can "generally" speaking, I
        omit any sensitive information that would compromise my day job.
      </>
    ),
  },
  {
    title: "GitHub",
    Svg: require("@site/static/img/HomePage/github-142-svgrepo-com.svg").default,
    description: (
      <>
        I do love me some scripting with PowerShell. I stick it all here since I
        break stuff constantly, source control was my only option.
      </>
    ),
  },
  {
    title: "Tutorials and Blogs",
    Svg: require("@site/static/img/HomePage/blog-svgrepo-com.svg").default,
    description: (
      <>
        Here are longer Articles that don't really have a place in the docs.
        Plus some rants on topics.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
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

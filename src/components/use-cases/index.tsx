import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

const useCases = [
  {
    title: "Twitter",
    uses: [
    ],
    cta: {
      label: "See Benchmarks",
      url: "/blog/tags/benchmark/",
    },
  },
  {
    title: "WeChat",
    uses: [
    ],
    cta: {
      label: "Welcome to subscribe to the AREX WeChat Official Account! The account ID is AREX Test.",
      url: "https://demo.questdb.io",
    },
  },
  {
    title: "Community Groups",
    uses: [
    ],

    cta: {
      label: "Our Community Groupsare great for quick questions or discussions on specialized topics. Official QQ group ID is :656108079",
      url: "/cloud/",
    },
  },
]

export const UseCases = () => (
  <div className={styles.root}>
    {useCases.map(({ title, uses, cta }, index) => (
      <div className={styles.card} key={index}>
        <h2>{title}</h2>

        <ul className={styles.list}>
          {uses.map((use, index) => (
            <li key={index} className={styles.listItem}>
              {use}
            </li>
          ))}
        </ul>

        <Link className={styles.link} href={cta.url}>
          {cta.label}
        </Link>
      </div>
    ))}
  </div>
)

import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '可视化应用设计',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        通过在页面简单的拖拉拽即可完成页面设计、流程编排、数据模型设计和权限模版定义等操作，支持对复杂软件应用的可视化构建。
      </>
    ),
  },
  {
    title: '自定义代码拓展',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        支持少量代码、脚本灵活自定义扩展，如流程处理逻辑、UI 样式（CSS)、页面动作、自定义代码页面（JS）等，以及与外部系统集成连通。
      </>
    ),
  },
  {
    title: '全流程管理',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        一站式应用开发、管理平台，包含设计、测试、发布、运维监控等。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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

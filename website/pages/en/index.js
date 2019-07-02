/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/docusaurus.svg`} /> */}
        <div className="inner">
          <img src="img/osr-icon-2019.png"></img>
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('oslc-home')}>OSLC Handbook</Button>
            <Button href="https://github.com/finos-osr">GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const TryOut = () => (
 
        <div 
        className="featureShowcaseSection paddingTop paddingBottom"
        style={{textAlign: 'center'}}>
          <h2>About OSR</h2>
        <MarkdownBlock>Welcome to the FINOS Open Source Readiness Program. We understand that financial services firms face unique obstacles on their road to open source collaboration, including legal & regulatory concerns, internal policies, cultural friction, and heavily restricted technology environments. FINOS supports our members every step of the way through our Open Source Readiness Program, which provides guidance and tools for new open source participants in financial technology.</MarkdownBlock>
      </div>
 
    );

    const FeatureCallout = props => (
      <div
        className="productShowcaseSection paddingTop lightBackground paddingBottom"
        style={{textAlign: 'center'}}>
        <div class="wrapper">
            <div class="gridBlock"
            style={{textAlign: 'center'}}>
              <div class="blockElement twoByGridBlock">
    
            <h2>Features</h2>
            <MarkdownBlock background="dark">
            ### Knowledge-sharing
            </MarkdownBlock>
            <MarkdownBlock>
            Our Open Source Readiness Working Group meets bi-weekly for guest presentations, knowledge-sharing between financial industry firms solving similar issues on their road to open source readiness, and discussion of open source strategy. Take a look at upcoming meeting agendas and join us!
            </MarkdownBlock>

            <MarkdownBlock>
            ### Policy & process guidance
            </MarkdownBlock>
            <MarkdownBlock>
            We produce legal and procedural frameworks to support compliant open source participation by financial services firms. The Reference FOSS Policy for Financial Services Firms is a template from which to build a comprehensive FOSS compliance program.
            In early 2019, we'll publish the first version of a License Compliance Handbook with practical compliance information about the most common FOSS licenses. We'll also solicit participation in our Open Source Readiness Assessment and give participants a scorecard and roadmap to guide progress by.
            </MarkdownBlock>
            
        
              </div>
              <div class="blockElement imageAlineSide imageAlineRight twoByGridBlock">
                  <div class="blockElement">
                    <div></div>
                  </div>
                  <div class="blockImage">
                    <img src="img/osr-icon-color.png"></img>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );

  

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              "Welcome to the collaboration space for the Decentralized Ecosystem Growth Program!  This Program was formed to aggregate, develop, and integrate tools that facilitate coordination of decentralized applications across financial firms and existing ecosystems. Best practices and promising architectures may be proposed and circulated, but the goal is not to create top-down standards documents. Instead, we will work together to ensure there is concrete code, open-sourced both within FINOS and across various member and non-member firms' repositories, which work together to reduce time-to-market for decentralized financial applications.",
            image: `${baseUrl}img/osr-logo-white.png`,
            imageAlign: 'right',
            title: 'this one',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: "our mission",
            image: `${baseUrl}img/osr-logo-white.png`,
            imageAlign: 'right',
            title: 'Mission',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block background="light" layout="fourColumn">
        {[
          {
            content: "",
            image: `${baseUrl}img/check-box.svg`,
            imageAlign: 'top',
            title: 'Knowledge Sharing',
          },
          {
            content: "",
            image: `${baseUrl}img/check-box.svg`,
            imageAlign: 'top',
            title: 'Policy & Process Guidance',
          },
          {
            content: "",
            image: `${baseUrl}img/check-box.svg`,
            imageAlign: 'top',
            title: 'Governance',
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is participating to Decentralized Ecosystem Growth?</h2>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <TryOut />
          <FeatureCallout />
         
          
          {/* <LearnHow />*/}
          {/*<Description />*/}
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;

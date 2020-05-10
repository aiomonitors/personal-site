import React, {Component} from 'react';
import {NavBar, NavComponent, ContactButton} from './Navbar';
import {mainAreaStyles} from '../styles/NavStyle';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {'display' : 'none', width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    toggleSwitch() {
        this.setState({display: this.state.display == 'none' ? 'block' : 'none'});
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <div className="main">
                <header>
                    <NavBar logo="🧬">
                        <NavComponent link="#projects">Projects</NavComponent>
                        <NavComponent link="./static/resume.pdf" target="_blank">Resume</NavComponent>
                        <NavComponent link="https://github.com/aiomonitors" target="_blank">Github</NavComponent>
                        <ContactButton link="mailto:navr@discoders.us" />
                    </NavBar>
                </header>
                <main style={mainAreaStyles.mainStyle}>
                    <div style={mainAreaStyles.mainHeader} className="animated fadeIn fast">Shihab Chowdhury</div>
                    <div style={mainAreaStyles.languages}>Python, Node, TypeScript, GoLang</div>
                    <div style={mainAreaStyles.aboutMe}>I'm a 17 year old programmer living in Queens, New York City. I also enjoy playing <PurpleLink fontSize={mainAreaStyles.aboutMe.fontSize}>lacrosse</PurpleLink>, <PurpleLink fontSize={mainAreaStyles.aboutMe.fontSize}>video games</PurpleLink>, <PurpleLink fontSize={mainAreaStyles.aboutMe.fontSize}>reading</PurpleLink>, and <PurpleLink fontSize={mainAreaStyles.aboutMe.fontSize}>reselling</PurpleLink> sneakers.</div>
                    <Projects moreClick={this.toggleSwitch.bind(this)} state={this.state} id="projects">
                        <Card 
                            src="https://hackernoon.com/drafts/y54f33rq.png"
                            title="supcomgo"
                            href="https://github.com/aiomonitors/supcomgo">
                            A package for GoLang to scrape droplists from <a href="https://supremecommunity.com" style={{color: '#BB8FCE', textDecoration: 'none'}}>Supreme Community</a> and send it to Discord,
                            save as JSON or CSV.
                        </Card>
                        <Card 
                            title="Spotify Binary Playlists"
                            src="https://hackernoon.com/drafts/y54f33rq.png"
                            href="https://github.com/aiomonitors/spotify-binary-go">
                           An application in GoLang utilizing the <PurpleLink href="https://github.com/zmb3/spotify">Go Spotify Wrapper</PurpleLink>. This application
                           asks you to login to your spotify account, and then prompts you for a word. It then converts the word to binary, and then 
                           represents the binary as a Spotify playlist, using tracks named "Zero", "One", or "Space" to display the binary.
                        </Card>
                        <Card
                            src="https://cdn.discordapp.com/attachments/498986135830134794/570651365836193827/PP.jpg"
                            title="Discoders"
                            date="2019 - Present">
                            A company with the goal of creating monitoring solutions and automation technology to make reselling sneakers & clothing easier. 
                        </Card>
                        <Card 
                            style={{display: this.state.display, textDecoration: 'none'}}
                            src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png"
                            href="https://www.npmjs.com/package/simple-proxy-scraper"
                            title="ProxyScrape">
                            A Node.js module to scrape proxies from the internet
                        </Card>
                        <Card 
                            style={{display: this.state.display, textDecoration: 'none'}}
                            title="godiscord"
                            src="https://hackernoon.com/drafts/y54f33rq.png"
                            href="https://github.com/aiomonitors/godiscord">
                            A package for GoLang to create and deliver Discord webhooks easily.
                        </Card>
                        <Card 
                            style={{display: this.state.display, textDecoration: 'none'}}
                            src="./static/ww2proj.png"
                            href="http://ww2proj.shihab.xyz"
                            title="Atomic Fission in WW2 Website">
                            A website I created for my 11th grade history class about Atomic Fission during WWII. Uses <PurpleLink>Bootstrap</PurpleLink>
                        </Card>
                        <Card
                            style={{display: this.state.display, textDecoration: 'none'}}
                            src="https://cdn.shopify.com/s/files/1/0138/0410/9924/files/logo_600x.jpg?v=1584131921"
                            href="https://chonghing.com"
                            title="Chong Hing Jewelers"
                            date="2019-2020">
                            At Chong Hing Jewelers, I used Python3.6 and the <PurpleLink>Shopify API</PurpleLink> to create backend applications applications for their website.
                        </Card>
                    </Projects>
                </main>
                <footer>
                    <Footer state={this.state}/>
                </footer>
            </div>
        )
    }
}

class PurpleLink extends Component {
    constructor(props) {
        super(props);
        this.style = {
            fontSize: this.props.fontSize,
            color: '#BB8FCE'
        }
    }

    render() {
        return(
            <a href={this.props.href} className={this.props.className} onClick={this.props.onClick} style={this.style}>{this.props.children}</a>
        )
    }
}

class Projects extends Component {
    constructor(props) {
        super(props);
        this.divStyle = {
            marginTop: '150px',
            marginBottom: '150px',
        }
        this.cardHolderStyle = {
            marginTop: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gridAutoRows: 'auto',
            gridGap: '20px',
            marginBottom: '20px',
        }
    }
    render() {
        let text = this.props.state.display == 'block' ? 'Less' : 'More'
        return(
            <div style={this.divStyle}>
                <div style={{fontSize: 'calc(15px + 2.5vw)'}}>Projects</div>
                <div style={this.cardHolderStyle}>
                    {this.props.children}
                </div>
                <div onClick={this.props.moreClick} style={{width : '50px', textAlign: 'center', padding: '10px 20px', border: '1px solid grey', borderRadius: '8px', margin: 'auto'}}>{text}</div>
            </div>
        )
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.style = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContentt: 'space-between',
            height: '400px',
            textDecoration: 'none'
        }
        this.imageContainer = {
            height: '185px',
            
        }
        this.imageStyle = {
            borderRadius: '11px',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            transform: 'scale(1)'
        }

        this.cardBody = {
            marginTop: '10px',
            width: '100%',
            textAlign: 'left'
        }

        this.cardHeader = {
            fontSize: '25px',
            color: 'grey',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between' //test
        }

        this.cardText = {
            marginTop: '5px',
            color: 'grey'
        }
    }

    render() {
        var linkIcon = this.props.href ? <i class="fas fa-external-link-alt" style={{color: '#CCD1D1', marginLeft: '10px', fontSize: '13px'}}></i> : null
        return (
            <a style={this.props.style || this.style} href={this.props.href} target="_blank">
                <div style={this.imageContainer}>
                    <img src={this.props.src} style={this.imageStyle}/>
                </div>
                <div style={this.cardBody}>
                    <div style={this.cardHeader}>
                        <div>
                            {this.props.title} 
                            <div style={{fontSize:'15px'}}>
                                {this.props.date}
                            </div>
                        </div>
                        {linkIcon}
                    </div>
                    <div style={this.cardText}>{this.props.children}</div>
                </div>
            </a>
        )
    }
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.defaultStyle = {
            display: 'flex',
            flexDirection : 'row',
            listStyleType: 'none',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
        }
        this.responsive = {
            display: 'flex',
            flexDirection: 'column',
            listStyleType: 'none',
            textAlign: 'left',
            width: '100%',
            marginBottom: '50px',
            borderTop: '1px solid rgba(128,128,128, 0.5)',
            padding: '10px'
        } 

        this.linkStyle = {
            display: 'flex',
            flexDirection: 'row'
        }

        this.linkStyleResponse = {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '20px',
        }
    }

    render() {
        let style = this.props.state.width > 768 ? this.defaultStyle : this.responsive
        let linkStyle = this.props.state.width > 768 ? this.linkStyle : this.linkStyleResponse
        return(
            <div style={style}>
                <div style={{display: 'inline-block', fontSize: '12px', marginLeft: '20px'}}>Shihab Chowdhury</div>
                <div style={linkStyle}>
                    <FooterComponent state={this.props.state} link="#projects">Projects</FooterComponent>
                    <FooterComponent state={this.props.state} link="./static/resume.pdf" target="_blank">Resume</FooterComponent>
                    <FooterComponent state={this.props.state} link="https://github.com/aiomonitors"target="_blank">Github</FooterComponent>
                    <Socials state={this.props.state}/>
                    <FooterComponent state={this.props.state}>Built with <PurpleLink>React</PurpleLink></FooterComponent>
                </div>
            </div>
        )
    }
}


class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.liStyleDefault = {
            textDecoration: 'none',
            color: 'grey',
            fontSize: '12px',
            margin: '20px'
        }
        this.liStyleResponsive = {
            textDecoration: 'none',
            color: 'grey',
            fontSize: '12px',
            textAlign: 'left',
            display: 'flex',
            marginTop: '20px'
        }
    } 
    render() {
        let liStyle = this.props.state.width > 768 ? this.liStyleDefault : this.liStyleResponsive
        let linkStyle = {
            textDecoration: 'none',
            color: 'grey'
        }
        return (
            <li style={liStyle}>
                <a href={this.props.link} className={this.props.className} onClick={this.props.onClick} style={linkStyle} target={this.props.target}>{this.props.children}</a>
            </li>
        )
    }
}

class Socials extends Component {
    constructor(props) {
        super(props);
        this.style = {
            fontSize: '12px',
            color: 'grey',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'row'
        }
    }
    render() {
        return(
            <div style={this.style}>
                <SocialsComponent link="mailto:navr@discoders.us" state={this.props.state}><i class="fas fa-envelope" style={{textDecoration: 'none', color: 'grey'}}></i></SocialsComponent>
                <SocialsComponent link="https://twitter.com/aiomonitors" state={this.props.state}><i class="fab fa-twitter" style={{textDecoration: 'none', color: 'grey'}}></i></SocialsComponent>
                <SocialsComponent link="https://instagram.com/monitorthat" state={this.props.state}><i class="fab fa-instagram" style={{textDecoration: 'none', color: 'grey'}}></i></SocialsComponent>
                <SocialsComponent link="https://github.com/aiomonitors" state={this.props.state}><i class="fab fa-github" style={{textDecoration: 'none', color: 'grey'}}></i></SocialsComponent>
            </div>
        )
    }

}

class SocialsComponent extends Component {
    constructor(props) {
        super(props);
        this.liStyleDefault = {
            textDecoration: 'none',
            color: 'grey',
            fontSize: '12px',
            marginLeft: '10px',
            marginTop: '20px'
        }
        this.liStyleResponsive = {
            textDecoration: 'none',
            color: 'grey',
            fontSize: '12px',
            marginTop: '20px',
        }

        this.linkStyleResponsive = {
            marginRight: '20px'
        }
    } 
    render() {
        let liStyle = this.props.state.width > 768 ? this.liStyleDefault : this.liStyleResponsive
        let linkStyle = this.props.state.width > 768 ? {} : this.linkStyleResponsive
        return (
            <li style={liStyle}>
                <a href={this.props.link} className={this.props.className} onClick={this.props.onClick} style={linkStyle} target="_blank">{this.props.children}</a>
            </li>
        )
    }
}

export default App;
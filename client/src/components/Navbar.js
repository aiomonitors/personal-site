import React, {Component} from 'react';
import {NavBarStyle, NavBarDefaultStyle, NavAreaStyle, linkStyleDefault, linkStyle, liStyleDefault, ContactStyle, ContactStyleDefault} from '../style/NavStyle';

export class NavBar extends Component {
    constructor(props) {
        super(props);//s
        this.state = {'display' : 'none', width: 0, height: 0, theposition: 0};
        this.defaultStyle = {
            listStyleType: 'none',
            marginBottom: '10px'
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.listenToScroll)
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.listenToScroll)
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    toggleSwitch = () => {
        let newVal = this.state.display == 'block' ? 'none' : 'block';
        this.setState({'display' : newVal});
    }

    listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        this.setState({
          theposition: scrolled,
        });
    }

    render() {
        var style;
        var linksStyle;
        linksStyle = false;
        if ( this.state.width > 768 ) {
            style = NavBarStyle;
            linksStyle = NavAreaStyle;
        } else {
            style = NavBarDefaultStyle;
            linksStyle = {
                display: this.state.display,
                textAlign: 'center',
                marginBottom: '15px',
                textDecoration: 'none'
            }
        }
        
        if (this.state.theposition > 0.1 && this.state.width > 768) {
            style = {...NavBarStyle, borderBottom: '1px solid rgba(128, 128, 128, 0.5'}
        } else if (this.state.theposition < 0.1 && this.state.width > 768 ) { style = {...NavBarStyle, borderBottom: 'none'} }

        return(
            <div style={style} className={this.props.className}>
                <NavToggle onClick={this.toggleSwitch.bind(this)} />
                <NavLogo>{this.props.logo}</NavLogo>
                <div id="links-area" style={linksStyle}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export class NavComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {'display' : 'none', width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        var style;
        if ( this.state.width > 768 ) {
           this.linkStyle = linkStyle;
           this.liStyle = null;
        } else {
            this.liStyle = liStyleDefault;
            this.linkStyle = linkStyleDefault;
        }

        return (
            <li style={this.liStyle}>
                <a href={this.props.link} className={this.props.className} onClick={this.props.onClick} style={this.linkStyle} target={this.props.target}>{this.props.children}</a>
            </li>
        )
    }
}

export class NavLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {'display' : 'none', width: 0, height: 0};
        this.defaultStyle = {
            display: 'inline-block',
            fontSize: '35px',
            fontWeight: '400',
            marginTop: '10px',
            color: '#BB8FCE'
        }
        this.style = {
            display: 'inline-block',
            fontSize: '22px',
            marginTop: '10px',
            marginLeft: '20px',
            color: '#BB8FCE'
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        var style;
        if ( this.state.width > 768 ) {style = this.defaultStyle}
        else {style = this.style}
        return(
            <a href={this.props.link} className={this.props.className} style={this.defaultStyle} onClick={this.props.onClick}>{this.props.children}</a>
        )
    }
}


class NavToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {'display' : 'none', width: 0, height: 0}
        this.defaultStyle = {
            position: 'absolute',
            top: '10px',
            right: '20px',
            cursor: 'pointer',
            color: 'color: rgba(255,255,255,0.8);',
            fontSize: '24px',
            marginTop: '10px'
        }
        this.style = {
            display: 'none'
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    
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
        var style;
        if (this.state.width > 768 ) {
            style = this.style
        } else {
            style = this.defaultStyle
        }
        return(
            <i className="fas fa-bars" onClick={this.props.onClick} style={style}></i>
        )
    }
}

export class ContactButton extends Component {
    constructor(props) {
        super(props);
        this.state = {'display' : 'none', width: 0, height: 0}
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        let style = this.state.width > 768 ? ContactStyle : ContactStyleDefault
        return(
            <a href={this.props.link} className={this.props.className} onClick={this.props.onClick} style={style}>Contact Me</a>
        )
    }
}
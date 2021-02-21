import React from 'react';

import {Navbar, Button, StyledLink} from './styles';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';

class LeftNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beforeItem: '',
      transitionItem: '',
      currentItem: '',
      isFirstLoad: true,
    };
    this.references = Array(3).fill(0).map(() => React.createRef());
  }  

  componentDidMount() {
    if ( this.state.currentItem !== this.state.TransitionItem ) {
      // has changes
      this.setState({beforeItem: this.state.TransitionItem});
      this.setState({TransitionItem: this.state.currentItem});
    }

    this.references.forEach((e, index)=> {
      if(e.current.classList.contains('active')) {
        this.setState({currentItem: `${index + 1}`})
      }
    })
  }

  componentDidUpdate() {

    if ( this.state.currentItem !== this.state.TransitionItem ) {
      // has changes
      this.setState({beforeItem: this.state.TransitionItem});
      this.setState({TransitionItem: this.state.currentItem});
    }
  }

  render() {
    return (
      
      <Navbar beforeItem={this.state.isFirstLoad ? '' : this.state.beforeItem} currentItem={this.state.isFirstLoad ? '' : this.state.currentItem}>

        <StyledLink 
          id="a1" 
          to="/" 
          ref={this.references[0]} 
          activeClassName="active"  
          onClick={()=>this.setState({currentItem: '1', isFirstLoad: false})}  
          exact={true}
        >
          <Button>
            <HomeIcon />
          </Button>
        </StyledLink>

        <StyledLink 
          id="a2" 
          to="/techs" 
          ref={this.references[1]} 
          activeClassName="active" 
          onClick={()=>this.setState({currentItem: '2', isFirstLoad: false})} 
        >
          <Button>
            <CodeIcon />
          </Button>
        </StyledLink>

        <StyledLink 
          id="a3" 
          to="/projects" 
          ref={this.references[2]}
          activeClassName="active" 
          onClick={()=>this.setState({currentItem: '3', isFirstLoad: false})}
        >
          <Button>
            <WebIcon />
          </Button>
        </StyledLink>

      </Navbar>
    );
  }
}

export default LeftNavbar;
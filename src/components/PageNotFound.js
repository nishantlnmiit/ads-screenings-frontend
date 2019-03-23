/**
 **  All the imports are here.
 **/
import React, {
  Component
} from 'react';

/**
 **  clas definition for PageNotFound component
 **/
class PageNotFound extends Component {
  /**
   **  Constructor calling on page load.
   **/
  constructor(props) {
    super(props);
    /**
     **  State definition.
     **/
    this.state = {};

  }

  /**
   **  Html is written inside render method.
   **/
  render() {
    return ( <
      div >
      Page Not Found <
      /div>
    )
  }


}

export default PageNotFound;
import React from 'react';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 30px 0;
  /**
   * Overwrite the contentInner padding + border
   * to ensure zero height.
   */
  .Collapsible__contentOuter {
    color:blue;
    border-color:black;
    }
`;


const Contact = () => {
    return (
        <Wrap>
            <Collapsible trigger="Start here">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
        </Wrap>
      );
  };
  
  export default Contact;
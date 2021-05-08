import React from "react";
import Welcome from '../components/Welcome';
import LibraryContent from "../components/LibraryContent";
import {Container} from "react-bootstrap";

const Library: React.FC = () => {
    return(
       <Container fluid={true}>
           <Welcome />
           <LibraryContent />
       </Container>
          )
};

export default Library;
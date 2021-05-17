import React from "react";
import Welcome from '../components/Welcome';
import LibraryContent from "../components/LibraryContent";
import {Container} from "react-bootstrap";
import {ToastProvider} from "react-toast-notifications";

const Library: React.FC = () => {
    return(
       <Container fluid={true}>
           <Welcome />
           <ToastProvider>
           <LibraryContent />
           </ToastProvider>
       </Container>
          )
};

export default Library;
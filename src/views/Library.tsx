import React from "react";
import Welcome from '../components/Welcome';
import LibraryContent from "../components/LibraryContent";
import {Container} from "react-bootstrap";
import {ToastProvider} from "react-toast-notifications";
import Footer from '../components/Footer';

const Library: React.FC = () => {
    return(
        <React.Fragment>
       <Container fluid={true}>
           <Welcome />
           <ToastProvider>
           <LibraryContent />
           </ToastProvider>
       </Container>
            <Footer/>
        </React.Fragment>
          )
};

export default Library;
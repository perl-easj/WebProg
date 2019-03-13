// Import React libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import components from the application itself.
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Implementation of the top-level App function, which will
// be used as a parameter to ReactDOM.render (see below)
const App = function() {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Info</h4>
                    An example of using ApprovalCard without CommentDetail.
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Per A" 
                    imgSrc="PERL_40.jpg" 
                    when="Monday at 18.30" 
                    bodyText="Test #1"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Per B" 
                    imgSrc="PERL_44.jpg" 
                    when="Tuesday at 11.45" 
                    bodyText="Test #2"
                    />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Per C" 
                    imgSrc="PERL_50.jpg" 
                    when="Friday at 06.10" 
                    bodyText="Test #3"/>
            </ApprovalCard>          
        </div>
    );
}

// Render the App component in the browser
ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);



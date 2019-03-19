import React from "react";
import { connect } from "react-redux";

import { codeClick } from "../../actions";
import { producerButtonState } from "../logic/ButtonState";

const ProducerPres = props => {
    return (
        <div>
            <button
                className={producerButtonState()}
                onClick={() => props.codeClick()}>
                CODE!<br/>{"x"}{props.producers.clickProducer.locsPerActivation()}
          </button>
        </div>
    );
};


const mapStateToProps = state => {
    return { producers: state.producers };
};

export default connect(mapStateToProps, { codeClick })(ProducerPres);
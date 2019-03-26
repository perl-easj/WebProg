import React from "react";
import { connect } from "react-redux";

import { codeClick } from "../../actions";
import { producerButtonState } from "../logic/ButtonState";
import { toTextNoDec } from "../logic/NumbersToText";

const ProducerPres = props => {
    return (
        <div>
            <button
                className={producerButtonState()}
                onClick={() => props.codeClick()}>
                CODE!<br/>{"x"}{toTextNoDec(props.producers.clickProducer.locsPerActivation())}
          </button>
        </div>
    );
};


const mapStateToProps = state => {
    return { producers: state.producers };
};

export default connect(mapStateToProps, { codeClick })(ProducerPres);